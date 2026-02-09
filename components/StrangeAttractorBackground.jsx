import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

export default function StrangeAttractorBackground() {
	const mountRef = useRef(null);

	useEffect(() => {
		let frameId;

		const scene = new THREE.Scene();
		scene.background = new THREE.Color("#11111b"); // near-black background

		/* ---------------- Camera ---------------- */

		const camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.set(0, 15, 60);

		/* ---------------- Renderer ---------------- */

		const renderer = new THREE.WebGLRenderer({
			alpha: false,
			antialias: false,
			powerPreference: "high-performance",
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
		mountRef.current.appendChild(renderer.domElement);

		/* ---------------- Post Processing ---------------- */

		const composer = new EffectComposer(renderer);
		composer.addPass(new RenderPass(scene, camera));

		const bloomPass = new UnrealBloomPass(
			new THREE.Vector2(window.innerWidth, window.innerHeight),
			1.2,
			0.25,
			0.15
		);
		composer.addPass(bloomPass);

		/* ---------------- Catppuccin Palette ---------------- */

		const catppuccinColors = [
			new THREE.Color("#f5e0dc"),
			new THREE.Color("#f2cdcd"),
			new THREE.Color("#f5c2e7"),
			new THREE.Color("#cba6f7"),
			new THREE.Color("#f38ba8"),
			new THREE.Color("#eba0ac"),
			new THREE.Color("#fab387"),
			new THREE.Color("#f9e2af"),
			new THREE.Color("#a6e3a1"),
			new THREE.Color("#94e2d5"),
			new THREE.Color("#89dceb"),
			new THREE.Color("#74c7ec"),
			new THREE.Color("#89b4fa"),
			new THREE.Color("#b4befe"),
		];

		/* ---------------- Lorenz Attractor ---------------- */

		const sigma = 10;
		const rho = 28;
		const beta = 8 / 3;

		let x = 0.1;
		let y = 0;
		let z = 0;

		const positions = [];
		const colors = [];
		const pointCount = 9000;
		const tempColor = new THREE.Color();

		for (let i = 0; i < pointCount; i++) {
			const dx = sigma * (y - x) * 0.005;
			const dy = (x * (rho - z) - y) * 0.005;
			const dz = (x * y - beta * z) * 0.005;

			x += dx;
			y += dy;
			z += dz;

			positions.push(x, z, y);

			const t = i / pointCount;
			const scaled = t * (catppuccinColors.length - 1);
			const idx = Math.floor(scaled);
			const lerpT = scaled - idx;

			tempColor
				.copy(catppuccinColors[idx])
				.lerp(
					catppuccinColors[
						Math.min(idx + 1, catppuccinColors.length - 1)
					],
					lerpT
				)
				.multiplyScalar(0.85);

			colors.push(tempColor.r, tempColor.g, tempColor.b);
		}

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute(
			"position",
			new THREE.Float32BufferAttribute(positions, 3)
		);
		geometry.setAttribute(
			"color",
			new THREE.Float32BufferAttribute(colors, 3)
		);

		const material = new THREE.PointsMaterial({
			vertexColors: true,
			transparent: true,
			opacity: 0.99,
			size: 0.9,
			sizeAttenuation: false,
			blending: THREE.AdditiveBlending,
			depthWrite: false,
			depthTest: false,
		});

		const attractor = new THREE.Points(geometry, material);
		scene.add(attractor);

		/* ---------------- Animation Loop ---------------- */

		const animate = () => {
			attractor.rotation.y += 0.0005;
			attractor.rotation.x += 0.0003;

			composer.render();
			frameId = requestAnimationFrame(animate);
		};

		animate();

		/* ---------------- Resize Handling ---------------- */

		const handleResize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;

			camera.aspect = width / height;
			camera.updateProjectionMatrix();

			renderer.setSize(width, height);
			composer.setSize(width, height);
			bloomPass.setSize(width * 0.5, height * 0.5);
		};

		window.addEventListener("resize", handleResize);

		/* ---------------- Cleanup ---------------- */

		return () => {
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(frameId);

			scene.remove(attractor);

			geometry.dispose();
			material.dispose();
			composer.dispose();
			renderer.dispose();

			if (mountRef.current && renderer.domElement) {
				mountRef.current.removeChild(renderer.domElement);
			}
		};
	}, []);

	return (
		<div
			ref={mountRef}
			className="fixed inset-0 -z-10 pointer-events-none"
		/>
	);
}
