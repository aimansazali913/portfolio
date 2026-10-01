import React, { useState } from 'react';
import { 
  personalInfo, 
  skills, 
  projects, 
  education, 
  achievements, 
  certifications, 
  experience,
  teamCollaborations,
  engineeringValues,
  humanBento
} from './data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Phone, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Calendar,
  X, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Cpu, 
  Droplets, 
  FileText, 
  Users, 
  Users2, 
  ShieldCheck, 
  Wrench, 
  Maximize2, 
  HeartHandshake, 
  Layers, 
  Target, 
  DollarSign, 
  Coffee, 
  Car, 
  Train, 
  Activity, 
  Terminal, 
  Lightbulb, 
  ExternalLink, 
  Download, 
  ArrowRight, 
  Sliders, 
  Compass, 
  Zap, 
  Repeat,
  Briefcase,
  Clock
} from 'lucide-react';

function Linkedin({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 0 0-1.62 1.62c0 .89.73 1.62 1.62 1.62.9 0 1.62-.73 1.62-1.62 0-.9-.72-1.62-1.62-1.62Z" />
    </svg>
  );
}

function Github({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const asset = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${clean}`;
};

export default function App() {
  // Modals state
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // Mobile nav toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper for opening project overview modal
  const openProjectOverview = (project) => {
    setActiveProjectModal(project);
    setSlideIndex(0);
  };

  const nextSlide = () => {
    if (!activeProjectModal) return;
    setSlideIndex((prev) => (prev + 1) % activeProjectModal.storySteps.length);
  };

  const prevSlide = () => {
    if (!activeProjectModal) return;
    setSlideIndex((prev) => (prev - 1 + activeProjectModal.storySteps.length) % activeProjectModal.storySteps.length);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ========================================================
          1. NAVBAR (Architectural Glass Navy Block)
         ======================================================== */}
      <nav className="fixed top-0 w-full z-50 bg-navy-950/90 backdrop-blur-md border-b border-navy-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-heading font-black text-base shadow-sm group-hover:bg-blue-500 transition">
              A
            </div>
            <div>
              <span className="text-white font-bold tracking-tight text-sm sm:text-base block leading-none">
                {personalInfo.name}
              </span>
              <span className="text-sky-300 font-mono text-[10px] tracking-wider uppercase block mt-0.5">
                B.Eng (Hons) · Graduate Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <a href="#about" className="hover:text-sky-400 transition">About</a>
            <a href="#values" className="hover:text-sky-400 transition">Values</a>
            <a href="#skills" className="hover:text-sky-400 transition">Skills</a>
            <a href="#education" className="hover:text-sky-400 transition">Education</a>
            <a href="#experience" className="hover:text-sky-400 transition">Experience</a>
            <a href="#projects" className="hover:text-sky-400 transition text-sky-400 font-bold">Projects</a>
            <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            {/* Actively Seeking Job Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open to Work</span>
            </div>

            <a 
              href="#contact"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition shadow-sm flex items-center gap-1.5"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>

            {/* Mobile menu hamburger */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-navy-900 border border-navy-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              <span className="block w-5 h-0.5 bg-slate-300 mb-1"></span>
              <span className="block w-5 h-0.5 bg-slate-300 mb-1"></span>
              <span className="block w-5 h-0.5 bg-slate-300"></span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-b border-navy-800 px-6 py-4 space-y-3 text-sm text-slate-200">
            <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">About Me</a>
            <a href="#values" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Philosophy &amp; Values</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Technical Skills</a>
            <a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Education &amp; Degrees</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Work Experience</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400 font-bold text-sky-400">Engineering Projects</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Contact / Hire Me</a>
          </div>
        )}
      </nav>

      {/* ========================================================
          2. HERO SECTION: Executive Engineering Dashboard Console
         ======================================================== */}
      <section id="hero" className="pt-32 sm:pt-40 lg:pt-44 pb-20 px-4 sm:px-6 bg-gradient-to-br from-navy-950 via-[#0a1526] to-navy-900 text-white relative overflow-hidden border-b border-navy-800 scroll-mt-24">
        {/* Subtle Architectural Grid Lines & Ambient Technical Light */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Executive Engineering Command Console Card */}
          <div className="w-full bg-navy-900/90 border border-slate-700/60 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden text-center transition-all duration-300">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500"></div>

            {/* Top Telemetry & Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-navy-800/80 text-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ACTIVELY SEEKING GRADUATE ROLES · IMMEDIATE START</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-navy-800 border border-navy-700 text-slate-300">
                  Selangor / KL, Malaysia (Open to Relocation)
                </span>
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-md bg-navy-800 border border-navy-700 text-sky-300">
                  Notice: 0 Days
                </span>
              </div>
            </div>

            {/* Candidate Identity & Executive Summary */}
            <div className="pt-8 pb-6 space-y-4">
              <span className="text-xs sm:text-sm uppercase font-mono tracking-widest text-sky-400 font-bold block">
                Industrial Mechatronics &amp; Mechanical Systems Engineer
              </span>
              
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.fullName}
              </h1>
              
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-lg bg-sky-500/10 border border-sky-400/20 text-sky-200 font-medium text-sm sm:text-base">
                <span>Graduated Mechanical Engineer</span>
                <span className="text-sky-400">•</span>
                <span className="font-mono text-xs sm:text-sm font-semibold">B.Eng (Hons) · CGPA 3.42</span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed pt-2">
                Honours graduate combining physical CAD/CAE modeling, embedded IoT firmware, automation control, and systematic TRIZ innovation to engineer production-ready hardware solutions.
              </p>
            </div>

            {/* Target Engineering Roles Strip */}
            <div className="pt-5 border-t border-navy-800/80">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                  Target Roles:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {personalInfo.targetRoles.map((role) => (
                    <span 
                      key={role} 
                      className="px-3 py-1 rounded-lg bg-navy-850 border border-slate-700/70 text-slate-200 font-medium text-xs hover:border-sky-400/60 hover:text-white transition"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Verified Academic & Technical Credential Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              <span className="px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-mono border border-white/10">
                UniKL MFI · B.Eng Hons (2023–2026)
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-mono border border-white/10">
                Politeknik Port Dickson · Dip (2019–2022)
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-mono border border-white/10">
                SolidWorks CAD &amp; FEA
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-mono border border-white/10">
                C++ / ESP32 Firmware
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-mono border border-white/10">
                TRIZ Level 1
              </span>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-8">
              <a 
                href="#contact" 
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>Contact / Hire Me</span>
              </a>
              <a 
                href="#projects" 
                className="px-7 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-750 text-white font-semibold text-sm border border-slate-700 hover:border-sky-400/50 transition flex items-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4 text-sky-400" />
                <span>Explore 5 Projects &amp; 85 Slides</span>
              </a>
              <a 
                href="#about" 
                className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm border border-white/10 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Profile</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Precision Engineering Telemetry & Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-6">
            <div className="bg-navy-900/80 border border-slate-800 hover:border-sky-500/40 rounded-2xl p-5 text-center shadow-lg transition group">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-sky-400 block mb-1 tracking-tight group-hover:scale-105 transition-transform duration-300">05</span>
              <span className="text-xs text-slate-200 font-bold block uppercase tracking-wider font-heading">Engineering Systems</span>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">Full Design-to-Build</span>
            </div>

            <div className="bg-navy-900/80 border border-slate-800 hover:border-sky-500/40 rounded-2xl p-5 text-center shadow-lg transition group">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-sky-400 block mb-1 tracking-tight group-hover:scale-105 transition-transform duration-300">85+</span>
              <span className="text-xs text-slate-200 font-bold block uppercase tracking-wider font-heading">Technical Slides</span>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">Full Presentation Decks</span>
            </div>

            <div className="bg-navy-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-5 text-center shadow-lg transition group">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-emerald-400 block mb-1 tracking-tight group-hover:scale-105 transition-transform duration-300">0 Days</span>
              <span className="text-xs text-slate-200 font-bold block uppercase tracking-wider font-heading">Notice Period</span>
              <span className="text-[11px] text-emerald-300/80 font-mono mt-0.5 block">Immediate Availability</span>
            </div>

            <div className="bg-navy-900/80 border border-slate-800 hover:border-sky-500/40 rounded-2xl p-5 text-center shadow-lg transition group">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-sky-400 block mb-1 tracking-tight group-hover:scale-105 transition-transform duration-300">63%</span>
              <span className="text-xs text-slate-200 font-bold block uppercase tracking-wider font-heading">Cost Reduction</span>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">BOM Optimization Lead</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          3. ABOUT ME: Interactive Section with Portrait Photo (Crisp Pure White Color Block)
         ======================================================== */}
      <section id="about" className="py-20 sm:py-24 px-6 max-w-6xl mx-auto bg-white scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
            01 / Professional Profile &amp; Job Seeker Overview
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            About Muhammad Aiman
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Fresh graduate engineer bridging physical mechanical design, embedded control firmware, and modern full-stack systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Architectural Photo Frame (Compact) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative">
              {/* Outer Navy Architectural Shadow Frame */}
              <div className="absolute -inset-2.5 rounded-2xl bg-ice-200 border border-blue-200/80 -rotate-1"></div>
              
              <div className="relative w-44 sm:w-52 aspect-[4/5] rounded-xl overflow-hidden border-[3px] border-navy-900 bg-slate-100 shadow-lg">
                <img 
                  src={asset('/profile.jpg')} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = asset('/photo.png');
                  }}
                />
              </div>

              {/* Verified Engineer Seal */}
              <div className="absolute -bottom-3 -right-3 bg-navy-900 text-white px-2.5 py-1.5 rounded-lg border-2 border-white shadow-md flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[9px] text-sky-300 font-mono block leading-none">GRADUATE</span>
                  <span className="text-[11px] font-bold block leading-tight">B.Eng (Hons)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center space-y-1">
              <span className="text-sm font-bold text-navy-900 block">
                {personalInfo.fullName}
              </span>
              <span className="text-xs text-slate-500 font-mono flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" /> {personalInfo.location}
              </span>
              <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                Available Immediately
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & "Why Hire Me?" Pillars */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-navy-900 text-base">
                {personalInfo.storyIntro}
              </p>
              <p>
                {personalInfo.aboutBio[0]}
              </p>
              <p>
                {personalInfo.aboutBio[1]}
              </p>
              <p>
                {personalInfo.aboutBio[3]}
              </p>
            </div>

            {/* Why Hire Me 4 Value Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-ice-50 border border-ice-200 space-y-1">
                <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase font-mono">
                  <Zap className="w-3.5 h-3.5" /> Immediate Availability
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Zero notice period. Available to onboard and contribute from Day 1 with high motivation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-ice-50 border border-ice-200 space-y-1">
                <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase font-mono">
                  <Cpu className="w-3.5 h-3.5" /> Full Hardware + Software
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  SolidWorks 3D CAD/FEA, embedded C++/ESP32, and modern full-stack web platforms.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-ice-50 border border-ice-200 space-y-1">
                <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase font-mono">
                  <Lightbulb className="w-3.5 h-3.5" /> TRIZ Systematic Rigor
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Trained to decompose complex functional contradictions rather than patching symptoms.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-ice-50 border border-ice-200 space-y-1">
                <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase font-mono">
                  <Users className="w-3.5 h-3.5" /> Proven Team Delivery
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Led 6-engineer capstone team, cut fabrication costs by 63%, and published research.
                </p>
              </div>
            </div>

            {/* Interest Badges */}
            <div className="pt-2">
              <span className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-2.5 font-mono">
                Core Domains of Focus:
              </span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interestTags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-md bg-ice-150 text-navy-900 font-semibold border border-blue-200/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action to View Expanded Biography */}
            <div className="pt-4 flex flex-wrap gap-3">
              <button 
                onClick={() => setIsAboutOpen(true)}
                className="px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs sm:text-sm transition shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Biography &amp; Story</span>
                <Maximize2 className="w-4 h-4 text-sky-400" />
              </button>
              
              <a 
                href="#contact"
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition shadow-sm flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Discuss Full-Time Role</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3.1 ENGINEERING PHILOSOPHY & WORK VALUES (Soft Ice-Blue Color Block)
         ======================================================== */}
      <section id="values" className="py-20 px-6 bg-ice-100 border-y border-slate-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              01.1 / Core Work Ethics
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
              Engineering Philosophy &amp; Work Values
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Guiding principles derived from workshop floor fabrication, simulation physics, and agile software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringValues.map((val) => (
              <div key={val.id} className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy-950">{val.title}</h4>
                    <span className="text-xs text-blue-600 font-mono font-medium block">{val.subtitle}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3.2 COLLABORATORS & CAPSTONE TEAMS (Crisp Pure White Color Block)
         ======================================================== */}
      <section id="teams" className="py-24 px-6 max-w-6xl mx-auto bg-white scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
            01.2 / Collaborative Leadership
          </span>
          <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Engineering Teams &amp; Squads
          </h3>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Collaborating in multidisciplinary teams across mechanical CAD, electronics, software sprints, and systematic product innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamCollaborations.map((team) => (
            <div key={team.id} className="p-7 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-wider block">
                    {team.context} · {team.period}
                  </span>
                  <h4 className="text-xl font-bold text-navy-950 mt-1 font-heading">
                    {team.teamName}
                  </h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                  {team.membersCount} Members
                </span>
              </div>

              <div className="text-xs font-bold text-sky-800 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100">
                Role: {team.role}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {team.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-navy-900 uppercase tracking-wider block font-mono">Key Highlights:</span>
                {team.keyHighlights.map((h, i) => (
                  <p key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{h}</span>
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {team.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[11px] rounded bg-ice-100 text-slate-700 font-mono border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          3.3 BEYOND ENGINEERING / THE HUMAN BENTO (Soft Ice-Blue Color Block)
         ======================================================== */}
      <section id="beyond" className="py-24 px-6 bg-ice-100 border-y border-slate-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              01.3 / Beyond Engineering
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Workplace, Tools &amp; Balance
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Balancing rigorous technical analysis with hands-on maker experiments, trail endurance, and active curiosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Active Workbench */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-navy-950">{humanBento.workshop.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {humanBento.workshop.description}
              </p>
              <div className="pt-2 text-xs font-mono text-blue-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Active Maker Setup
              </div>
            </div>

            {/* Card 2: Passions */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-navy-950">Trail &amp; Recharge</h4>
              <div className="space-y-2 pt-1">
                {humanBento.hobbies.map((h, i) => (
                  <div key={i} className="text-xs text-slate-600">
                    <strong className="text-navy-900">{h.name}: </strong>
                    <span>{h.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Everyday Toolkit */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-navy-950">{humanBento.setup.title}</h4>
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                {humanBento.setup.tools.map((t, i) => (
                  <div key={i} className="p-2 rounded-lg bg-ice-50 border border-slate-200 text-[11px]">
                    <span className="font-bold text-navy-950 block truncate">{t.name}</span>
                    <span className="text-[10px] text-slate-500 block truncate">{t.category}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          4. SKILLS SECTION (Soft Sky-Blue Color Block: #E8F1F9)
         ======================================================== */}
      <section id="skills" className="py-24 px-6 bg-ice-150 border-b border-slate-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              02 / Technical Competencies
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Skills &amp; Engineering Capabilities
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Curated tools, frameworks, and domain standards applied across physical hardware and software production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Category 1: Mechanical & Simulation */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-700">
                <Wrench className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-navy-950 font-mono">
                  Mechanical &amp; Simulation
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["SolidWorks 3D CAD", "AutoCAD", "FEA Structural Simulation", "CFD Flow Simulation", "FMEA & FoS", "AISC 360 Standards"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded bg-ice-100 text-navy-900 font-medium border border-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2: Full-Stack & Cloud */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-700">
                <Terminal className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-navy-950 font-mono">
                  Full-Stack Software
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["React 19", "TypeScript", "Tailwind CSS v4", "NestJS", "Fastify", "PostgreSQL", "Supabase RLS", "Zod Validation", "Docker"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded bg-ice-100 text-navy-900 font-medium border border-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3: Embedded & IoT */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-700">
                <Cpu className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-navy-950 font-mono">
                  Embedded &amp; IoT
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["ESP32 & Arduino", "C/C++", "DCC++ Protocol", "JMRI Software", "Blynk IoT Platform", "Ultrasonic & TDS Sensors", "TCP/IP Sockets"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded bg-ice-100 text-navy-900 font-medium border border-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 4: TRIZ & Systematic Innovation */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-700">
                <Lightbulb className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-navy-950 font-mono">
                  TRIZ &amp; Product Design
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["TRIZ Methodology", "Function & Component Analysis", "40 Inventive Principles", "Contradiction Resolution", "Super-System Modeling", "New Product Development"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded bg-blue-50 text-blue-900 font-semibold border border-blue-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 5: Python & Scientific Computing */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-700">
                <Activity className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-navy-950 font-mono">
                  Python &amp; Simulation
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Python 3.10+", "NumPy & SciPy", "Matplotlib & Pandas", "Discrete-Event Simulation", "Statistical Repeatability (ICC)"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded bg-ice-100 text-navy-900 font-medium border border-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 6: Standards & Industry Safety */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-blue-700">
                <ShieldCheck className="w-4 h-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-navy-950 font-mono">
                  Standards &amp; Operations
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["NIOSH OGSP", "CIDB Green Card", "DOSH & OSHA Standards", "Equipment Maintenance", "Workshop Fabrication SOP"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded bg-ice-100 text-navy-900 font-medium border border-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          5. EDUCATION SECTION (Crisp Pure White Color Block)
         ======================================================== */}
      <section id="education" className="py-24 px-6 max-w-6xl mx-auto bg-white scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
            03 / Academic Degrees
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Academic Background
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Rigorous university honours education combined with technical diploma hands-on workshop training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, idx) => (
            <div key={idx} className="p-7 rounded-2xl bg-ice-50 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded bg-navy-900 text-white font-mono text-xs font-bold">
                  {item.period}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-bold font-mono">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy-900 leading-snug font-heading">
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold text-blue-700 mt-1">
                  {item.institution}
                </p>
              </div>
              
              <p className="text-xs text-slate-500 italic">
                {item.subtitle}
              </p>

              <p className="text-xs text-slate-600 border-t border-slate-200/80 pt-3 leading-relaxed">
                <strong className="text-navy-900 font-semibold">Key Highlights: </strong>
                {item.highlights}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          6. ACHIEVEMENTS SECTION (Soft Ice-Blue Color Block)
         ======================================================== */}
      <section id="achievements" className="py-20 px-6 bg-ice-100 border-y border-slate-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              04 / Key Recognitions
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
              Engineering Achievements &amp; Milestones
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-navy-950 font-heading">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. LICENSES & CERTIFICATIONS SECTION (Crisp Pure White Color Block)
         ======================================================== */}
      <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto bg-white scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
            05 / Professional Credentials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Licenses &amp; Certifications
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Recognized national industry safety passports and technical software engineering accreditations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="p-6 rounded-2xl bg-ice-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition cursor-pointer space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-800 font-mono text-[11px] font-bold">
                  {cert.date}
                </span>
                <span className="text-xs text-blue-600 font-semibold group-hover:translate-x-0.5 transition flex items-center gap-1">
                  <span>View</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>

              <h4 className="text-base font-bold text-navy-950 font-heading leading-snug group-hover:text-blue-700 transition">
                {cert.title}
              </h4>
              <p className="text-xs font-medium text-slate-500">
                {cert.issuer}
              </p>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          8. WORK EXPERIENCE (Soft Ice-Blue Color Block)
         ======================================================== */}
      <section id="experience" className="py-24 px-6 bg-ice-100 border-y border-slate-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              06 / Practical Industry Roles
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Work Experience &amp; Internships
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Real factory floor maintenance, preventive equipment servicing, and infrastructure installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experience.map((item, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded bg-blue-100 text-blue-800 font-mono text-xs font-bold">
                    {item.period}
                  </span>
                  <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-blue-600" />
                    {item.location}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-navy-900 leading-snug font-heading">
                    {item.role}
                  </h3>
                  <p className="text-xs font-bold text-blue-700 mt-1 uppercase tracking-wider font-mono">
                    {item.company}
                  </p>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          9. PROJECTS SECTION: 3D Flip Grid with Slide Deck Viewer (Soft Ice-Blue Color Block)
         ======================================================== */}
      <section id="projects" className="py-24 px-6 bg-ice-50 border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              07 / Verified Engineering Case Studies
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Engineering Projects &amp; Slide Decks
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Hover cards to flip for technical specifications, or open the Slide Flow viewer to inspect all 85+ presentation slides directly.
            </p>
          </div>

          {/* Project Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="flip-card-container h-[470px] rounded-2xl cursor-pointer group"
              >
                <div className="flip-card-inner">
                  
                  {/* FLIP FRONT (White Color Block Card) */}
                  <div className="flip-card-front bg-white border border-slate-200 shadow-md flex flex-col justify-between p-6 rounded-2xl group-hover:shadow-xl transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 truncate max-w-[200px]">
                          {project.category}
                        </span>
                        <span className="text-xs text-slate-500 font-mono flex items-center gap-1 shrink-0">
                          <span>Hover to flip</span>
                          <Repeat className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div className="relative h-44 w-full rounded-xl overflow-hidden border border-slate-200 mb-4 bg-slate-100">
                        <img 
                          src={asset(project.heroImage)} 
                          alt={project.frontTitle} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"></div>
                      </div>

                      <h3 className="text-lg font-bold text-navy-950 mb-1 leading-snug font-heading">
                        {project.frontTitle}
                      </h3>
                      <p className="text-xs text-blue-600 font-mono font-medium line-clamp-2">
                        {project.frontSub}
                      </p>
                    </div>

                    <div className="text-xs text-slate-500 border-t border-slate-200 pt-3 flex items-center justify-between">
                      <span className="font-semibold text-slate-700">
                        {project.storySteps.length} Presentation Slides
                      </span>
                      <span className="text-blue-600 font-bold group-hover:translate-x-1 transition">
                        View Spec →
                      </span>
                    </div>
                  </div>

                  {/* FLIP BACK (Navy Blue Color Block Card) */}
                  <div className="flip-card-back bg-navy-900 border border-blue-600/50 text-white flex flex-col justify-between p-6 rounded-2xl shadow-2xl">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block mb-1 font-mono">
                        {project.category}
                      </span>
                      <h3 className="text-base font-bold text-white mb-2 leading-tight font-heading">
                        {project.backTitle}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-4">
                        {project.backDesc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.toolTags.map((tool) => (
                          <span key={tool} className="px-2 py-0.5 text-[10px] rounded bg-navy-800 text-sky-300 border border-navy-700 font-mono">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => openProjectOverview(project)}
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-lg cursor-pointer"
                    >
                      <Search className="w-3.5 h-3.5" />
                      <span>Open {project.storySteps.length}-Slide Presentation Deck</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DEDICATED TRIZ SYSTEMATIC INNOVATION SPOTLIGHT BLOCK */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white border border-navy-800 shadow-2xl">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-800 pb-5">
                <div>
                  <span className="text-sky-400 font-mono text-xs font-bold uppercase tracking-widest block">
                    Systematic Product Innovation Spotlight
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                    Heart-Rate-Zone Trail Training: TRIZ Innovation
                  </h3>
                </div>
                <button 
                  onClick={() => {
                    const trizProj = projects.find(p => p.id === 'triz');
                    if (trizProj) openProjectOverview(trizProj);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-navy-950 font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <Search className="w-4 h-4" />
                  <span>Inspect 11 TRIZ Slides</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Supervised by Assoc. Prof. Dr. Ir. Zainal Fitri Bin Zainal Abidin (UniKL · MARA). Applied classical TRIZ (Theory of Inventive Problem Solving) Function and Component Analysis to resolve the contradiction between increasing weekly endurance training volume and joint degradation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-navy-850 border border-navy-700/80 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-sky-400">Principle #1: Segmentation</span>
                  <h4 className="text-sm font-bold text-white">Terrain Modality Decoupling</h4>
                  <p className="text-xs text-slate-300">
                    Divides training into uphill power, downhill eccentric loading, and flat turnover to isolate biological adaptations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-850 border border-navy-700/80 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-sky-400">Principle #16: Partial / Excessive</span>
                  <h4 className="text-sm font-bold text-white">Eccentric Micro-Dosing</h4>
                  <p className="text-xs text-slate-300">
                    Concentrated eccentric knee shock conditioning applied before long runs to build tendon durability.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-850 border border-navy-700/80 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-sky-400">Principle #23: Feedback</span>
                  <h4 className="text-sm font-bold text-white">Closed-Loop Cardiac Loop</h4>
                  <p className="text-xs text-slate-300">
                    Calculates Max HR and provides real-time 13 min/km pacer telemetry to eliminate overtraining drift.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          10. CONTACT SECTION (Midnight Navy Color Block: #030816)
         ======================================================== */}
      <section id="contact" className="py-24 px-6 bg-navy-950 text-white border-t border-navy-800 relative scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>AVAILABLE FOR IMMEDIATE FULL-TIME HIRE</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Looking to Hire a Graduate Engineer?
            </h2>
            <div className="w-16 h-1 bg-sky-400 mx-auto rounded-full"></div>
            
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed pt-2">
              I am actively interviewing and available for immediate start in Mechatronics, Embedded IoT, Automation &amp; Robotics, and Mechanical Design roles across Malaysia and internationally.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="p-5 rounded-2xl bg-navy-900 border border-navy-800 hover:border-sky-400 transition space-y-1 block shadow-md group"
            >
              <Mail className="w-5 h-5 text-sky-400 mb-2 group-hover:scale-110 transition" />
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Direct Email</span>
              <span className="text-xs font-bold text-white block truncate">{personalInfo.email}</span>
            </a>

            <a 
              href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} 
              className="p-5 rounded-2xl bg-navy-900 border border-navy-800 hover:border-sky-400 transition space-y-1 block shadow-md group"
            >
              <Phone className="w-5 h-5 text-sky-400 mb-2 group-hover:scale-110 transition" />
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Call / WhatsApp</span>
              <span className="text-xs font-bold text-white block">{personalInfo.phone}</span>
            </a>

            <div className="p-5 rounded-2xl bg-navy-900 border border-navy-800 space-y-1 block shadow-md">
              <MapPin className="w-5 h-5 text-sky-400 mb-2" />
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Base &amp; Mobility</span>
              <span className="text-xs font-bold text-white block">Klang, Selangor · Willing to Relocate</span>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send An Email</span>
            </a>
            
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>Connect on LinkedIn</span>
            </a>

            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition flex items-center gap-2"
            >
              <Github className="w-4 h-4 text-sky-400" />
              <span>View GitHub</span>
            </a>
          </div>

          {/* Hiring Invariants Banner */}
          <div className="p-4 rounded-xl bg-navy-900/60 border border-navy-800 text-xs text-slate-300 flex flex-wrap justify-around gap-3 font-mono">
            <span>✓ Notice Period: 0 Days (Immediate)</span>
            <span>✓ Degree: B.Eng (Hons) Accredited</span>
            <span>✓ Own Transport: Yes (Class D)</span>
            <span>✓ Relocation: Open (Nationwide / SG)</span>
          </div>

          <div className="pt-16 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <span>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</span>
            <span className="font-mono">Graduated Mechanical &amp; Systems Engineer</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. INTERACTIVE MODAL: PROJECT SLIDE FLOW VIEWER
         ======================================================== */}
      {activeProjectModal && (
        <div 
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActiveProjectModal(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-navy-900 border border-navy-700 rounded-3xl overflow-hidden shadow-2xl my-8 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-5 sm:p-6 border-b border-navy-800 bg-navy-950 shrink-0">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1 font-mono">
                  {activeProjectModal.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {activeProjectModal.backTitle}
                </h3>
              </div>
              <button 
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-400 hover:text-white transition cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-grow bg-navy-900 text-slate-200">
              {/* Bullets */}
              <ul className="space-y-2 border-l-2 border-sky-400 pl-4 text-xs sm:text-sm text-slate-300">
                {activeProjectModal.overviewList.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">• {item}</li>
                ))}
              </ul>

              {/* Tool Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeProjectModal.toolTags.map((tool) => (
                  <span key={tool} className="px-2.5 py-1 text-xs rounded bg-navy-800 text-sky-300 font-mono border border-navy-700">
                    {tool}
                  </span>
                ))}
              </div>

              {/* Slide Viewer Section */}
              <div className="bg-navy-950 p-4 sm:p-5 rounded-2xl border border-navy-800 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2 font-mono">
                    <FileText className="w-4 h-4" /> Official Project Presentation &amp; Operational Flow
                  </p>
                  <p className="text-xs font-mono text-slate-400">
                    Slide {slideIndex + 1} / {activeProjectModal.storySteps.length}
                  </p>
                </div>

                {/* Slide Frame with Controls */}
                <div className="relative flex items-center justify-center bg-black/60 rounded-xl overflow-hidden border border-navy-800 min-h-[300px] max-h-[46vh]">
                  <button 
                    onClick={prevSlide}
                    className="absolute left-2 z-10 p-2 rounded-full bg-navy-900/80 hover:bg-navy-800 text-white border border-navy-700 transition cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <img 
                    src={asset(activeProjectModal.storySteps[slideIndex].image)} 
                    alt={activeProjectModal.storySteps[slideIndex].title} 
                    className="w-auto h-auto max-h-[44vh] object-contain p-2"
                  />

                  <button 
                    onClick={nextSlide}
                    className="absolute right-2 z-10 p-2 rounded-full bg-navy-900/80 hover:bg-navy-800 text-white border border-navy-700 transition cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Quick Slide Navigation Pill Bar */}
                <div className="flex items-center justify-center gap-1 overflow-x-auto py-1.5 px-2 max-w-full scrollbar-none">
                  {activeProjectModal.storySteps.map((st, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSlideIndex(idx)}
                      title={`Slide ${idx + 1}: ${st.title}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer shrink-0 ${
                        slideIndex === idx 
                          ? 'w-5 bg-sky-400 shadow-sm shadow-sky-400/50' 
                          : 'w-1.5 bg-navy-700 hover:bg-navy-600'
                      }`}
                      aria-label={`Jump to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Narrative */}
                <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 font-mono">
                      Stage {activeProjectModal.storySteps[slideIndex].step}: {activeProjectModal.storySteps[slideIndex].phase}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {activeProjectModal.storySteps[slideIndex].caption}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {activeProjectModal.storySteps[slideIndex].title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeProjectModal.storySteps[slideIndex].detail}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-navy-950 border-t border-navy-800 flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-400 font-mono">
                Verified Technical Engineering Case Study
              </span>
              <button 
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-white text-xs font-semibold transition cursor-pointer"
              >
                Close Overview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          12. INTERACTIVE MODAL: EXPANDED ABOUT ME
         ======================================================== */}
      {isAboutOpen && (
        <div 
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsAboutOpen(false)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 space-y-4 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                  Biography &amp; Engineering Philosophy
                </span>
                <h3 className="font-heading text-2xl font-bold text-navy-950 mt-1">
                  {personalInfo.fullName}
                </h3>
              </div>
              <button 
                onClick={() => setIsAboutOpen(false)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-700">
              {personalInfo.aboutBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button 
                onClick={() => setIsAboutOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs transition"
              >
                Close Biography
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          13. INTERACTIVE MODAL: CERTIFICATE DETAILS
         ======================================================== */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-md w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 space-y-4 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-mono font-bold text-blue-700 uppercase">Verified License</span>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-bold text-navy-950 leading-snug">{selectedCert.title}</h4>
              <p className="text-xs font-semibold text-blue-700">{selectedCert.issuer}</p>
              <span className="inline-block px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono text-xs">
                Accredited: {selectedCert.date}
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                {selectedCert.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button 
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs transition"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
