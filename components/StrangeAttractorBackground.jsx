import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

export default function StrangeAttractorBackground() {
	const mountRef = useRef(null);

	useEffect(() => {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 60;
		camera.position.y = 15;

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: false,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		mountRef.current.appendChild(renderer.domElement);

		/* ---------------- Post Processing ---------------- */

		const composer = new EffectComposer(renderer);
		composer.addPass(new RenderPass(scene, camera));

		const bloomPass = new UnrealBloomPass(
			new THREE.Vector2(window.innerWidth, window.innerHeight),
			0.8, // strength
			0.4, // radius
			0.2  // threshold
		);
		composer.addPass(bloomPass);

		/* ---------------- Lorenz Attractor ---------------- */

		const sigma = 10;
		const rho = 28;
		const beta = 8 / 3;

		let x = 0.1;
		let y = 0;
		let z = 0;

		const points = [];
		for (let i = 0; i < 9000; i++) {
			const dx = sigma * (y - x) * 0.005;
			const dy = (x * (rho - z) - y) * 0.005;
			const dz = (x * y - beta * z) * 0.005;

			x += dx;
			y += dy;
			z += dz;

			points.push(new THREE.Vector3(x, z, y));
		}

		const geometry = new THREE.BufferGeometry().setFromPoints(points);

		const material = new THREE.PointsMaterial({
			color: 0xf12f26,
			transparent: true,
			opacity: 0.8,
			size: 0.3,
		});

		const attractor = new THREE.Points(geometry, material);
		scene.add(attractor);

		/* ---------------- Animation Loop ---------------- */

		const animate = () => {
			attractor.rotation.y += 0.0005;
			attractor.rotation.x += 0.0003;

			composer.render();
			requestAnimationFrame(animate);
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
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);

			if (mountRef.current && renderer.domElement) {
				mountRef.current.removeChild(renderer.domElement);
			}

			renderer.dispose();
    };
	}, []);

	return (
		<div
			ref={mountRef}
			className="fixed inset-0 -z-10 pointer-events-none"
		/>
	);
}
