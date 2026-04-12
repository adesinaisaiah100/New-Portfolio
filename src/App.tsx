import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'motion/react';
import { Github, ExternalLink, ArrowDown, Terminal, Layers, Cpu, Code2, Play, Mail } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const PROJECTS = [
  {
    id: '01',
    title: 'CoreCV',
    tagline: 'AI-powered Resume/CV generator built with Next.js and Gemini.',
    problem: 'Crafting professional resumes is a tedious, manual process. Users struggle to optimize their content for ATS systems, and extracting data from existing PDFs to reformat them is notoriously difficult and error-prone.',
    solution: 'Architected a Next.js (App Router) application leveraging the Vercel AI SDK and Google Gemini models to automate resume generation and parsing. Integrated Supabase for secure authentication and data storage, and utilized Zustand for global state management.',
    impact: 'Empowers users to seamlessly generate, optimize, and expand resume content. The smart PDF parsing engine effortlessly extracts data from existing CVs, allowing users to export polished, final resumes in PDF format from a fully authenticated dashboard.',
    tech: ['Next.js', 'Supabase', 'Gemini AI', 'Tailwind CSS', 'Zustand'],
    icon: <Layers className="w-6 h-6" />,
    githubUrl: 'https://github.com/adesinaisaiah100/corecv',
    liveUrl: 'https://corecv.vercel.app',
    demo: {
      title: 'CoreCV Live Application',
      url: 'https://corecv.vercel.app'
    }
  },
  {
    id: '02',
    title: 'Study Buddy Web',
    tagline: 'Intelligent educational assistant for orchestrating study resources.',
    problem: 'Students often struggle with fragmented information across the web. Finding, synthesizing, and organizing reliable study materials is a time-consuming and overwhelming process.',
    solution: 'Developed an AI-powered resource orchestrator using Next.js App Router and Google Gemini (gemini-2.5-pro) for advanced contextual web search, implementing smart fallbacks to Tavily and Wikipedia to guarantee high availability.',
    impact: 'Delivers a sleek, fast-loading user experience that reliably synthesizes complex study topics, ensuring users always get the answers they need even if primary AI limits are reached.',
    tech: ['Next.js', 'TypeScript', 'Gemini AI', 'Tavily API', 'React'],
    icon: <Terminal className="w-6 h-6" />,
    githubUrl: 'https://github.com/adesinaisaiah100/studybuddyweb',
    liveUrl: 'https://studybuddyweb.vercel.app/',
    demo: {
      title: 'Study Buddy Live Application',
      url: 'https://studybuddyweb.vercel.app/'
    }
  },
  {
    id: '03',
    title: 'Forge',
    tagline: 'Structured idea-to-MVP decision engine for founders.',
    problem: 'Most startup ideas fail because they are never clarified. Early-stage founders waste time building the wrong things because they lack a structured path from vague concept to validated plan.',
    solution: 'Built a comprehensive platform that guides founders through a ruthless logic check, competitor analysis, and MVP scoping. It uses AI to generate pitch decks and provides a structured "War Room" for execution tracking.',
    impact: 'Transforms messy brainstorming into actionable decisions. Users leave with a focused MVP plan, a clear problem statement, and a structured pitch deck ready for investors or technical co-founders.',
    tech: ['React', 'Next.js', 'Appwrite', 'Gemini AI', 'Zustand'],
    icon: <Code2 className="w-6 h-6" />,
    githubUrl: 'https://github.com/adesinaisaiah100/forge',
    liveUrl: 'https://forge-pink-pi.vercel.app/',
    demo: {
      title: 'Forge Live Application',
      url: 'https://forge-pink-pi.vercel.app/'
    }
  },
  {
    id: '04',
    title: 'AutoMind',
    tagline: 'AI-powered diagnostic assistant for car owners.',
    problem: 'Car owners face a lack of understanding, information asymmetry, and low trust when dealing with car issues, often leading to feeling overcharged or misled by mechanics.',
    solution: 'Built a conversational AI interface that translates vague symptoms into structured, human-readable diagnoses. It uses a Retrieval-Augmented Knowledge Layer to map symptoms to causes and provides actionable next steps.',
    impact: 'Turns confusing car issues into clear explanations in under 60 seconds, reducing uncertainty and empowering users to make informed decisions before visiting a mechanic.',
    tech: ['React Native', 'Expo', 'OpenAI API', 'RAG'],
    icon: <Cpu className="w-6 h-6" />,
    githubUrl: 'https://github.com/adesinaisaiah100/automindmobile',
    liveUrl: 'https://automind--px1vri5kw3.expo.app',
    isMobile: true,
    demo: {
      title: 'AutoMind Live Application',
      url: 'https://automind--px1vri5kw3.expo.app'
    }
  }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.85]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen text-white selection:bg-white/20">
      <CustomCursor />
      
      {/* HERO SECTION */}
      <div className="h-[100svh] relative z-0">
        <motion.section 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="sticky top-0 h-[100svh] flex flex-col justify-center px-8 md:px-24 max-w-7xl mx-auto overflow-hidden"
        >
          <AsciiBackground />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl relative z-10 pointer-events-none pb-20 md:pb-0"
          >
            <p className="font-mono text-sm text-neutral-400 mb-6 tracking-widest uppercase">
              Adesina Oluwatimileyin Isaiah <span className="mx-2 opacity-50">|</span> Full-Stack Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
              I don't just write <TypewriterWord word="code." /><br />
              <span className="text-neutral-500">I engineer solutions to complex problems.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl font-light">
              Welcome to my deep-dive portfolio. Instead of showing you a dozen generic websites, 
              I'm breaking down the architecture, challenges, and impact of my four most significant engineering feats.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-8 md:bottom-12 md:left-24 flex items-center gap-4 font-mono text-xs text-neutral-500 uppercase tracking-widest z-10"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </motion.section>
      </div>

      <div className="relative z-10 bg-[#050505] shadow-[0_-20px_50px_rgba(5,5,5,0.8)]">
        {/* ABOUT ME SECTION */}
      <SectionWrapper className="py-32 px-8 md:px-24 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-medium tracking-tight mb-6 md:sticky md:top-32"
            >
              The Architect <br/>Behind the Code.
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 space-y-8 text-lg text-neutral-400 font-light leading-relaxed"
          >
            <p>
              Hi, I'm Adesina Oluwatimileyin Isaiah. I’m a software developer who approaches problems as systems, not isolated tasks.
            </p>
            <p>
              When I encounter a problem, I don’t rush to build immediately. I start by understanding the landscape — identifying patterns, edge cases, and the different types of users or situations that exist within it. I naturally break problems into categories, because most real-world challenges are not uniform, and a single solution rarely fits all.
            </p>
            
            <div className="pt-12 border-t border-white/10">
              <h3 className="font-mono text-xs text-white uppercase tracking-widest mb-8">Core Philosophy</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 shrink-0"></div>
                  <p><strong className="text-white font-medium">Structure before solution.</strong> I focus on understanding the shape of a problem before attempting to solve it. This often involves building mental models, classifications, or frameworks that define how the problem behaves.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 shrink-0"></div>
                  <p><strong className="text-white font-medium">Design for real-world complexity.</strong> I build with the assumption that users, data, and environments are imperfect. Instead of ideal scenarios, I design for messy, incomplete, and evolving conditions.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 shrink-0"></div>
                  <p><strong className="text-white font-medium">Systems over one-off solutions.</strong> I prefer creating reusable and scalable systems rather than solving a single instance. My goal is to build solutions that can adapt across variations of the same problem.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5 shrink-0"></div>
                  <p><strong className="text-white font-medium">Flow over features.</strong> I think in terms of end-to-end experiences. Every solution I build considers the full journey: input, processing, decision-making, and output.</p>
                </li>
              </ul>
            </div>

            <div className="pt-12 border-t border-white/10">
              <p className="mb-6">
                This way of thinking allows me to move beyond just building interfaces. I focus on creating products that are structured, adaptable, and grounded in real-world use.
              </p>
              <p>
                Ultimately, I’m interested in solving problems that matter — and building systems that continue to work as those problems evolve.
              </p>
            </div>

            <div className="pt-12 border-t border-white/10">
              <h3 className="font-mono text-xs text-white uppercase tracking-widest mb-6">Core Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Python', 'C++', 'JavaScript', 'PostgreSQL', 'Node.js', 'Docker', 'HTML', 'CSS', 'Tailwind CSS'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-xs text-neutral-300 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* PROJECTS SECTION HEADER */}
      <SectionWrapper className="py-32 px-8 md:px-24 max-w-7xl mx-auto border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">Selected Works</h2>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight">Engineering Case Studies.</h3>
        </motion.div>
      </SectionWrapper>

      {/* PROJECTS SECTION */}
      <section className="relative">
        {PROJECTS.map((project, index) => (
          <ProjectView key={project.id} project={project} index={index} />
        ))}
      </section>

      {/* FOOTER */}
      <SectionWrapper className="py-32 px-8 md:px-24 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col items-center text-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">What's Next?</h2>
            <h3 className="text-6xl md:text-8xl font-medium tracking-tight mb-8 hover:text-neutral-300 transition-colors cursor-pointer">
              Let's Connect.
            </h3>
            <p className="text-xl text-neutral-400 font-light max-w-xl mx-auto">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8 font-mono text-sm mt-8">
            <a href="#" className="flex items-center gap-2 hover:text-white text-neutral-400 transition-colors group">
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white text-neutral-400 transition-colors group">
              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white text-neutral-400 transition-colors group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" /> Email
            </a>
          </div>
        </div>
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} Full-Stack Developer. All rights reserved.</p>
          <p>Designed with precision.</p>
        </div>
      </SectionWrapper>
      </div>
    </div>
  );
}

function ProjectView({ project, index }: { project: typeof PROJECTS[0], index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const isIframeInView = useInView(iframeContainerRef, { once: true, margin: "200px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const sectionScale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.8, 1, 1, 0.8]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <div ref={containerRef} className={`min-h-screen flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} border-t border-white/10 origin-center`}>
      {/* STICKY PANE: Title & Tech Stack */}
      <div className={`md:w-1/2 p-8 md:p-24 md:sticky md:top-0 md:h-screen flex flex-col justify-center border-b md:border-b-0 ${isEven ? 'md:border-r' : 'md:border-l'} border-white/10`}>
        <motion.div style={{ scale: sectionScale, opacity: sectionOpacity }} className="max-w-md origin-left">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-6xl font-bold text-white/5">{project.id}</span>
            <div className="p-3 bg-white/5 rounded-xl text-neutral-300">
              {project.icon}
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 leading-tight">
            {project.title}
          </h2>
          <p className="text-xl text-neutral-400 font-light mb-12">
            {project.tagline}
          </p>

          <div className="space-y-4">
            <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-mono text-xs text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 flex gap-6">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm hover:text-neutral-300 transition-colors">
                <Github className="w-4 h-4" /> View Source
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm hover:text-neutral-300 transition-colors">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* SCROLLING PANE: Content & Demo */}
      <div className="md:w-1/2 p-8 md:p-24 flex flex-col justify-center bg-white/[0.02]">
        <motion.div style={{ scale: sectionScale, opacity: sectionOpacity, y }} className="max-w-lg space-y-16 py-24 md:py-0 origin-right">
          
          {/* Problem */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-red-500/50"></div>
              <h3 className="font-mono text-xs text-red-400 uppercase tracking-widest">The Problem</h3>
            </div>
            <p className="text-lg text-neutral-300 leading-relaxed font-light">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-emerald-500/50"></div>
              <h3 className="font-mono text-xs text-emerald-400 uppercase tracking-widest">The Architecture</h3>
            </div>
            <p className="text-lg text-neutral-300 leading-relaxed font-light">
              {project.solution}
            </p>
          </div>

          {/* Impact */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-blue-500/50"></div>
              <h3 className="font-mono text-xs text-blue-400 uppercase tracking-widest">The Impact</h3>
            </div>
            <p className="text-lg text-neutral-300 leading-relaxed font-light">
              {project.impact}
            </p>
          </div>

          {/* Interactive Demo Embed */}
          <div className="space-y-4 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-purple-500/50"></div>
              <h3 className="font-mono text-xs text-purple-400 uppercase tracking-widest flex items-center gap-2">
                <Play className="w-3 h-3" /> Interactive Demo
              </h3>
            </div>
            {/* Added pointer-events-auto so the iframe can be interacted with despite global cursor: none */}
            
            {project.isMobile ? (
              <div className="flex flex-col items-center gap-6 pt-4">
                {/* Mobile Device Frame */}
                <div ref={iframeContainerRef} className="relative w-[300px] h-[600px] sm:w-[320px] sm:h-[650px] bg-black rounded-[2.5rem] border-[10px] border-neutral-900 overflow-hidden shadow-2xl pointer-events-auto flex items-center justify-center shrink-0">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl z-20"></div>
                  
                  {!isIframeInView ? (
                    <div className="text-neutral-500 font-mono text-sm flex flex-col items-center gap-4">
                      <div className="w-6 h-6 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                      Loading App...
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-transparent z-10 group-hover:pointer-events-none transition-all"></div>
                      <iframe 
                        src={project.demo.url}
                        className="w-full h-full border-0 absolute inset-0 pt-6 bg-black"
                        title={`${project.title} Demo`}
                        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                      ></iframe>
                    </>
                  )}
                </div>
                
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 max-w-[320px] text-center">
                  <p className="text-xs text-amber-500/90 font-mono leading-relaxed">
                    ⚠️ <strong>Mobile Optimized</strong><br/>
                    This application is built specifically for mobile screens. For the best experience, please open the live demo link directly on your mobile device.
                  </p>
                </div>
              </div>
            ) : (
              <div ref={iframeContainerRef} className="w-full h-[400px] rounded-xl overflow-hidden border border-white/10 bg-black/50 relative group pointer-events-auto flex items-center justify-center">
                {!isIframeInView ? (
                  <div className="text-neutral-500 font-mono text-sm flex flex-col items-center gap-4">
                    <div className="w-6 h-6 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                    Loading Sandbox...
                  </div>
                ) : (
                  <>
                    {/* Overlay to prevent accidental scrolling inside iframe while scrolling the page */}
                    <div className="absolute inset-0 bg-transparent z-10 group-hover:pointer-events-none transition-all"></div>
                    <iframe 
                      src={project.demo.url}
                      className="w-full h-full border-0 absolute inset-0"
                      title={`${project.title} Demo`}
                      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>
                  </>
                )}
              </div>
            )}

            {!project.isMobile && (
              <p className="text-sm text-neutral-500 font-mono">
                {project.demo.title} — Feel free to interact with the code above.
              </p>
            )}
          </div>

        </motion.div>
      </div>
    </div>
  );
}

function SectionWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={`origin-center ${className}`}>
      {children}
    </motion.div>
  );
}

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on devices with a fine pointer (mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)"
        }}
      />
    </>
  );
}

function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const chars = ['0', '1', '{', '}', '<', '>', '/', '*', ';', '+', '-', '~'];
    const fontSize = 16;
    let grid: {char: string, x: number, y: number, baseAlpha: number}[] = [];

    const initGrid = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.floor(canvas.width / fontSize) + 1;
      const rows = Math.floor(canvas.height / fontSize) + 1;
      
      grid = [];
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          grid.push({
            char: chars[Math.floor(Math.random() * chars.length)],
            x: i * fontSize,
            y: j * fontSize,
            baseAlpha: Math.random() * 0.15 + 0.05
          });
        }
      }
    };

    initGrid();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', initGrid);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      grid.forEach(cell => {
        const dx = mouseX - cell.x;
        const dy = mouseY - cell.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let alpha = cell.baseAlpha;
        let char = cell.char;

        if (distance < 200) {
          alpha = 0.8 - (distance / 200) * 0.5;
          // Glitch effect near cursor
          if (distance < 50 && Math.random() > 0.8) {
            char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillStyle = `rgba(255, 255, 255, 1)`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          }
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        }

        ctx.fillText(char, cell.x, cell.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', initGrid);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
    </div>
  );
}

function TypewriterWord({ word }: { word: string }) {
  const [text, setText] = useState('');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => {
        setText('');
        setIsPaused(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    if (text.length < word.length) {
      const timeout = setTimeout(() => {
        setText(word.slice(0, text.length + 1));
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setIsPaused(true);
    }
  }, [text, isPaused, word]);

  return (
    <span className="inline-flex items-center justify-start font-mono text-neutral-300" style={{ width: `${word.length + 1}ch` }}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-[0.4em] h-[0.8em] bg-white ml-1 shrink-0"
      />
    </span>
  );
}
