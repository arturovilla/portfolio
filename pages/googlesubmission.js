import React, { useState, useRef, useEffect, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  useScroll,
  useTransform,
} from "framer-motion";

/* ─── Variants ─── */

const heroTextVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const heroChildVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 18 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 16 },
  },
};

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const galleryContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const galleryItemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const linkContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const linkItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 16 },
  },
};

/* ─── Components ─── */

function SectionTitle({ id, children }) {
  return (
    <div id={id} className="scroll-mt-28 overflow-hidden">
      <motion.h2
        variants={titleVariants}
        className="font-gp-square text-gruvtan tracking-wide text-sm md:text-base"
      >
        {children}
      </motion.h2>
      <motion.div
        variants={underlineVariants}
        className="h-px bg-gruvpink/40 mt-2 origin-left"
      />
    </div>
  );
}

function Card({ children }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="border border-gruvpink/70 rounded-l bg-[#000000]/30 backdrop-blur px-4 py-1 md:px-6 md:py-6"
    >
      {children}
    </motion.div>
  );
}

function GalleryItem({ src, title, copy, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      variants={galleryItemVariants}
      whileHover={{ y: -6, boxShadow: "0 8px 30px rgba(233, 85, 132, 0.2)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative block rounded overflow-hidden border border-gruvpink/30 aspect-square cursor-pointer"
    >
      <video
        src={`https://pub-f9f1a0f4e3da4489b5f731278c99d3cc.r2.dev/${src}`}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-[#000000]/80 flex flex-col justify-end p-4"
          >
            <motion.h3
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ delay: 0.04, type: "spring", stiffness: 120, damping: 14 }}
              className="font-gp-square text-gruvpink text-sm tracking-wide mb-1"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 120, damping: 14 }}
              className="text-gruvtan/90 text-xs leading-relaxed"
            >
              {copy}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

function ThreeDItem({ href, title, copy, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      variants={galleryItemVariants}
      whileHover={{ y: -6, boxShadow: "0 8px 30px rgba(233, 85, 132, 0.2)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative block rounded overflow-hidden border border-gruvpink/30 cursor-pointer"
    >
      {children}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-[#000000]/80 flex flex-col justify-end p-4"
          >
            <motion.h3
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ delay: 0.04, type: "spring", stiffness: 120, damping: 14 }}
              className="font-gp-square text-gruvpink text-sm tracking-wide mb-1"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 120, damping: 14 }}
              className="text-gruvtan/90 text-xs leading-relaxed"
            >
              {copy}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

const lotaSpring = { type: "spring", stiffness: 120, damping: 20 };

function LotaShowcase() {
  const [showDesktop, setShowDesktop] = useState(false);
  const phoneRef = useRef(null);
  const desktopRef = useRef(null);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);
  const isVisibleRef = useRef(false);

  const startCycle = useCallback(() => {
    setShowDesktop(false);

    if (phoneRef.current) {
      phoneRef.current.currentTime = 0;
      phoneRef.current.play();
    }
    if (desktopRef.current) {
      desktopRef.current.pause();
      desktopRef.current.currentTime = 0;
    }

    timerRef.current = setTimeout(() => {
      setShowDesktop(true);
    }, 10500);
  }, []);

  useEffect(() => {
    if (!showDesktop) return;

    if (desktopRef.current) {
      desktopRef.current.currentTime = 0;
      desktopRef.current.play();
    }

    const desktop = desktopRef.current;
    if (!desktop) return;

    const onEnded = () => {
      if (isVisibleRef.current) startCycle();
    };
    desktop.addEventListener("ended", onEnded);
    return () => desktop.removeEventListener("ended", onEnded);
  }, [showDesktop, startCycle]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          startCycle();
        } else {
          if (timerRef.current) clearTimeout(timerRef.current);
          phoneRef.current?.pause();
          desktopRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [startCycle]);

  return (
    <div ref={sectionRef} className="mt-4">
      <a
        href="https://lidarota.app"
        target="_blank"
        rel="noreferrer"
        className="inline-block"
      >
        <motion.span
          className="font-gp-square text-gruvpink text-sm tracking-wide hover:text-gruvpink/80 transition-colors"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          LOTA — LiDAR Over The Air &#8599;
        </motion.span>
      </a>
      <p className="text-sm md:text-base text-gruvtan/85 leading-relaxed mt-2 mb-6">
        An iOS application that turns consumer iPhones into professional-grade
        spatial capture devices, streaming real-time RGB, depth, and point cloud
        data over NDI, TCP/UDP, OSC, and PLY pipelines.
      </p>

      <LayoutGroup>
        <div className="flex items-center justify-center gap-4">
          <motion.div layout transition={lotaSpring} className="shrink-0">
            <video
              ref={phoneRef}
              muted
              playsInline
              className="rounded-lg h-[400px] md:h-[500px] w-auto"
            >
              <source src={`${R2}/phone.MP4`} type="video/mp4" />
            </video>
          </motion.div>

          <AnimatePresence>
            {showDesktop && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: 40 }}
                transition={lotaSpring}
                className="flex-1 min-w-0"
              >
                <video
                  ref={desktopRef}
                  muted
                  playsInline
                  className="w-full rounded-lg border border-gruvpink/30"
                >
                  <source src={`${R2}/desktop.mp4`} type="video/mp4" />
                </video>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </div>
  );
}

/* ─── Gallery data ─── */

const R2 = "https://pub-f9f1a0f4e3da4489b5f731278c99d3cc.r2.dev";

const galleryItems = [
  { src: "attractors.mp4", title: "Attractors", copy: "Particle systems driven by chaos theory attractors, each visualization shaped by a unique set of differential equations.", href: "https://drive.google.com/drive/folders/1MK9OT1wyJ4gcwrkarfaZIZ6hLXRt2Mda?usp=share_link" },
  { src: "Color%20of%20Space.mp4", title: "Color of Space", copy: "Realistic planetary simulation built with real satellite textures, accurate rotation speeds, and orbital moons.", href: "https://drive.google.com/drive/folders/1MK9OT1wyJ4gcwrkarfaZIZ6hLXRt2Mda?usp=share_link" },
  { src: "Cube.mp4", title: "Cube", copy: "Edge-aware ASCII shader using GLSL convolutions to render contour lines for realistic subject representation.", href: "https://drive.google.com/drive/folders/1MK9OT1wyJ4gcwrkarfaZIZ6hLXRt2Mda?usp=share_link" },
  { src: "DancingLines.mp4", title: "Dancing Lines", copy: "Exploration of TouchDesigner\u2019s 2025 POPs operator family, part of a live show visual ensemble.", href: "https://drive.google.com/drive/folders/1MK9OT1wyJ4gcwrkarfaZIZ6hLXRt2Mda?usp=share_link" },
  { src: "DancingSkulls.mp4", title: "Dancing Skulls", copy: "3D object manipulation and PBR material creation in TouchDesigner, built for live performances.", href: "https://drive.google.com/drive/folders/1MK9OT1wyJ4gcwrkarfaZIZ6hLXRt2Mda?usp=share_link" },
  { src: "Horse.mp4", title: "Horse", copy: "Edge-aware ASCII shader rendering contour-based character mapping through GLSL convolutions.", href: "https://drive.google.com/drive/folders/1MK9OT1wyJ4gcwrkarfaZIZ6hLXRt2Mda?usp=share_link" },
  { src: "Cities.mp4", title: "Cities", copy: "High-fidelity data visualization in TouchDesigner, exploring alternatives to traditional Python and Power BI graphing tools.", href: "https://drive.google.com/drive/folders/1MK9OT1wyJ4gcwrkarfaZIZ6hLXRt2Mda?usp=share_link" },
  { src: "heart.mp4", title: "Heart", copy: "An exploration of the human body as interpreted by a computer — fascination with how organic anatomy translates into digital form.", href: "https://drive.google.com/drive/folders/1MK9OT1wyJ4gcwrkarfaZIZ6hLXRt2Mda?usp=share_link" },
  { src: "Aquarium.mp4", title: "Aquarium", copy: "Recreating AI-generated imagery using 3D meshes to produce an aquarium-like terrarium with an ethereal, otherworldly atmosphere.", href: "https://drive.google.com/drive/folders/1MK9OT1wyJ4gcwrkarfaZIZ6hLXRt2Mda?usp=share_link" },
];

const linkItems = [
  { href: "https://www.instagram.com/hyprtexture/", label: "Instagram \u2014 @hyprtexture", desc: "Visual work and creative experiments", external: true },
  { href: "https://www.reddit.com/user/lpyonderboy/", label: "Reddit \u2014 u/lpyonderboy", desc: "Posts and discussions on creative coding and TouchDesigner", external: true },
  { href: "https://lidarota.app", label: "LOTA \u2014 LiDAR Over The Air", desc: "iOS spatial capture application", external: true },
  { href: "https://www.linkedin.com/in/rtvro/", label: "LinkedIn", desc: "Professional profile and connections", external: true },
  { href: "https://github.com/arturovilla", label: "GitHub", desc: "Open source projects and code", external: true },
  { href: "https://drive.google.com/drive/folders/1-iqdl7zXHckH6ZT4v12H76oguqEowY58?usp=sharing", label: "Google Creative Fellowship Drive Folder", desc: "Full collection of submission materials and media", external: true },
];

/* ─── Page ─── */

const PAGE_BG = "#000000";
const DEFAULT_BG = "#0c0d1c";

function Googlesubmission() {
  const { scrollY, scrollYProgress } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const gradientOpacity = useTransform(scrollY, [0, 400], [0.6, 1]);

  useEffect(() => {
    document.body.style.backgroundColor = PAGE_BG;
    return () => { document.body.style.backgroundColor = DEFAULT_BG; };
  }, []);

  return (
    <>
      <Head>
        <title>Google Creative Fellowship | Arturo Villalobos</title>
        <meta
          name="description"
          content="Arturo Villalobos — Google Creative Fellowship Submission"
        />
      </Head>

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gruvpink z-[70]"
      />

      {/* Hero backdrop */}
      <div
        id="top"
        className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden scroll-mt-28"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-[-10%]"
        >
          <Image
            src={`${R2}/googleFellowshipHero.jpg`}
            alt="Google Creative Fellowship hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          style={{ opacity: gradientOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-[#0C0D1C] via-[#0C0D1C]/60 to-transparent"
        />

        <motion.div
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-0 left-0 right-0 px-4 md:px-6 pb-10 md:pb-14 max-w-6xl mx-auto"
        >
          <motion.h1
            variants={heroChildVariants}
            className="font-gp-line text-3xl md:text-5xl text-[#E4DFDB] drop-shadow-lg"
          >
            Google Creative Fellowship
          </motion.h1>
          <motion.p
            variants={heroChildVariants}
            className="text-base md:text-lg text-gruvtan/90 mt-3 drop-shadow"
          >
            Submission by Arturo Villalobos
          </motion.p>
          <motion.p
            variants={heroChildVariants}
            className="text-xs md:text-sm text-gruvtan/70 mt-1 drop-shadow"
          >
            Software engineer, shader artist, and creative developer based in Houston, TX.
          </motion.p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="text-[#E4DFDB]">
        <div className="font-gp-line mx-auto max-w-6xl px-4 md:px-6 pt-6 pb-24">
          <main className="space-y-6">
            {/* Bio */}
            <Card>
              <SectionTitle id="bio">ABOUT</SectionTitle>

              <div className="mt-4 space-y-4 text-sm md:text-base text-gruvtan/85 leading-relaxed">
                <p>
                  I&apos;m a software engineer and creative developer based in
                  Houston, TX. I studied Computer Science and Statistics at Texas
                  A&amp;M, and I&apos;ve had the great fortune of finding and
                  cultivating an artistic community passionate about the same
                  things I am. This has allowed me to pursue both software
                  engineering and becoming a creative technologist, building
                  visuals, tools, and products for this industry.
                </p>

                <p>
                  My creative path started when I read The Book of Shaders by
                  Patricio Gonzalez Vivo and began applying my love of math and
                  programming to real-time graphics. What began as fragment
                  shader experiments has since grown into a practice spanning
                  audio-reactive installations, application development with{" "}
                  <a
                    href="https://lidarota.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gruvpink hover:text-gruvpink/80 transition-colors"
                  >
                    LOTA
                  </a>
                  , an iOS spatial capture tool, and 3D modeling and sculpture in
                  Blender. I deploy art the same way I deploy software, with
                  systems thinking, reliability, and an audience in mind.
                </p>
              </div>
            </Card>

            {/* Visual / TouchDesigner & Installation */}
            <Card>
              <SectionTitle id="visual">
                VISUAL / TOUCHDESIGNER &amp; INSTALLATION
              </SectionTitle>

              <motion.div
                variants={galleryContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {galleryItems.map((item) => (
                  <GalleryItem key={item.src} {...item} />
                ))}
              </motion.div>

              {/* In Action */}
              <div className="mt-8 pt-6 border-t border-gruvpink/20">
                <motion.h3
                  variants={titleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-gp-square text-gruvtan tracking-wide text-sm md:text-base mb-4"
                >
                  IN ACTION
                </motion.h3>

                <motion.div
                  variants={galleryContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="grid grid-cols-3 gap-4"
                >
                  <GalleryItem
                    src="linesInUse.mp4"
                    title="Lines in Use"
                    copy="Dancing Lines visual running in a live installation setting."
                    href="https://drive.google.com/drive/folders/1MK9OT1wyJ4gcwrkarfaZIZ6hLXRt2Mda?usp=share_link"
                  />
                  <GalleryItem
                    src="LiveShow.mp4"
                    title="Live Show"
                    copy="Working the controls for a live show alongside Taylor Knapps, creative director."
                    href="https://drive.google.com/drive/folders/1MK9OT1wyJ4gcwrkarfaZIZ6hLXRt2Mda?usp=share_link"
                  />
                  <GalleryItem
                    src="skullsInMotion.mp4"
                    title="Skulls in Motion"
                    copy="The Dancing Skulls visual deployed in a live installation setting."
                    href="https://drive.google.com/drive/folders/1MK9OT1wyJ4gcwrkarfaZIZ6hLXRt2Mda?usp=share_link"
                  />
                </motion.div>
              </div>
            </Card>

            {/* Engineering */}
            <Card>
              <SectionTitle id="engineering">ENGINEERING</SectionTitle>

              <LotaShowcase />

              <div className="mt-8 pt-6 border-t border-gruvpink/20">
                <a
                  href="https://github.com/arturovilla/macfrag"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  <motion.span
                    className="font-gp-square text-gruvpink text-sm tracking-wide hover:text-gruvpink/80 transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Macfrag &#8599;
                  </motion.span>
                </a>
                <p className="text-sm md:text-base text-gruvtan/85 leading-relaxed mt-2 mb-6">
                  A Metal Shading Language editor with a live preview and
                  debugger for rapid shader development on macOS.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 80, damping: 18 }}
                  className="rounded-lg overflow-hidden border border-gruvpink/30"
                >
                  <video
                    src={`${R2}/macfrag.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </Card>

            {/* Motivation */}
            <Card>
              <SectionTitle id="motivation">MOTIVATION</SectionTitle>

              <div className="mt-4 space-y-4 text-sm md:text-base text-gruvtan/85 leading-relaxed">
                <p>
                  I built LOTA because the tool I needed didn&apos;t exist. As a
                  creative developer working in TouchDesigner, I wanted to
                  harness the sensors already built into modern iPhones, LiDAR,
                  depth cameras, motion data, and use them as inputs for
                  real-time visual workflows. Everything on the market had
                  clunky UI, was prohibitively expensive, or wasn&apos;t designed
                  for creative technologists. None of them fit my use case.
                </p>
                <p>
                  What&apos;s funny is that in my day job as a software engineer,
                  I&apos;ve always loved building internal tools for other
                  developers. LOTA is the natural extension of that instinct,
                  except this time the developer I was building for was myself.
                  It started as a personal frustration and became a full spatial
                  capture platform that bridges mobile hardware with creative
                  software like TouchDesigner, Blender, and OBS.
                </p>
              </div>
            </Card>

            {/* 3D Work */}
            <Card>
              <SectionTitle id="3d">3D WORK</SectionTitle>

              <motion.div
                variants={galleryContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="mt-4 space-y-4"
              >
                {/* Square images — front & back (single piece) */}
                <ThreeDItem
                  href="https://drive.google.com/drive/folders/1kV5G0Z932LfQ32IOGD0w89NJpg_N2Gox?usp=share_link"
                  title="Impossible Material"
                  copy="Blender composition exploring functional everyday objects rendered in physically impossible materials."
                >
                  <div className="grid grid-cols-2">
                    <img src={`${R2}/front.PNG`} alt="Front" className="w-full h-auto" loading="lazy" />
                    <img src={`${R2}/back.jpeg`} alt="Back" className="w-full h-auto" loading="lazy" />
                  </div>
                </ThreeDItem>

                {/* Portrait images */}
                <div className="grid grid-cols-3 gap-4">
                  <ThreeDItem
                    href="https://drive.google.com/drive/folders/1kV5G0Z932LfQ32IOGD0w89NJpg_N2Gox?usp=share_link"
                    title="Glass Helm"
                    copy="Digital persona exploration — a translucent self-portrait studying identity through glass-like material simulation."
                  >
                    <img src={`${R2}/GlassHelm.PNG`} alt="Glass Helm" className="w-full h-auto" loading="lazy" />
                  </ThreeDItem>

                  <ThreeDItem
                    href="https://drive.google.com/drive/folders/1kV5G0Z932LfQ32IOGD0w89NJpg_N2Gox?usp=share_link"
                    title="Embalmed Lizard"
                    copy="Diaphonization study recreating the transparent specimen preservation technique entirely in 3D."
                  >
                    <img src={`${R2}/embalmedLizard.PNG`} alt="Embalmed Lizard" className="w-full h-auto" loading="lazy" />
                  </ThreeDItem>

                  <ThreeDItem
                    href="https://drive.google.com/drive/folders/1kV5G0Z932LfQ32IOGD0w89NJpg_N2Gox?usp=share_link"
                    title="Characters"
                    copy="Typographic sculpture experiment turning letterforms into volumetric 3D characters with physical weight and depth."
                  >
                    <img src={`${R2}/characters.jpeg`} alt="Characters" className="w-full h-auto" loading="lazy" />
                  </ThreeDItem>
                </div>
              </motion.div>
            </Card>

            {/* Google Flow Artifact */}
            <Card>
              <SectionTitle id="flow">GOOGLE FLOW ARTIFACT</SectionTitle>

              <motion.div
                variants={galleryContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="mt-4"
              >
                <ThreeDItem
                  href="https://drive.google.com/file/d/16gq4Qn3Hk_MzkmZ-5E-H3nxzsVcRGVBt/view?usp=share_link"
                  title="Google Flow Prompt"
                  copy="One Fremen man in flowing ochre and sandy robes, gold chain mesh adornments, veiled faces, wind dramatically billowing their garments, facing a long desk covered in MIDI controllers, vintage CRT monitors, oscilloscopes, and tangled cables. Austere alien architecture background. Cinematic wide shot, Dune 2024 color grading, golden hour backlighting, dust in the air, Kodachrome film, visible film grain."
                >
                  <img
                    src={`${R2}/GoogleFlowAIStudioArtifact.png`}
                    alt="Google Flow AI Studio Artifact"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </ThreeDItem>
              </motion.div>
            </Card>

            {/* Links */}
            <Card>
              <SectionTitle id="links">LINKS</SectionTitle>

              <motion.div
                variants={linkContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {linkItems.map(({ href, label, desc, external }) => {
                  const Wrapper = external ? motion.a : motion(Link);
                  const props = external
                    ? { href, target: "_blank", rel: "noreferrer" }
                    : { href };

                  return (
                    <Wrapper
                      key={href}
                      {...props}
                      variants={linkItemVariants}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex items-center gap-3 p-4 rounded border border-gruvgreen/60 bg-[#2F3B13]/40 hover:border-gruvpink/60 transition-colors group"
                    >
                      <motion.span
                        className="text-gruvpink text-xl"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        &#9654;
                      </motion.span>
                      <div>
                        <p className="text-gruvpink group-hover:text-gruvpink/80 font-medium text-sm">
                          {label}
                        </p>
                        <p className="text-gruvtan/60 text-xs">{desc}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </motion.div>
            </Card>
          </main>
        </div>
      </div>
    </>
  );
}

export default Googlesubmission;
