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
  Lightbulb
} from 'lucide-react';

function Linkedin({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 0 0-1.62 1.62c0 .89.73 1.62 1.62 1.62.9 0 1.62-.73 1.62-1.62 0-.9-.72-1.62-1.62-1.62Z" />
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            {personalInfo.name}<span className="text-slate-500 font-mono text-sm ml-1">.Portfolio</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-5 text-xs lg:text-sm font-medium text-slate-300">
            <a href="#hero" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#values" className="hover:text-cyan-400 transition">Philosophy</a>
            <a href="#teams" className="hover:text-cyan-400 transition">Teams</a>
            <a href="#human-element" className="hover:text-cyan-400 transition">Beyond Code</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition">Education</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 text-xs sm:text-sm font-semibold transition"
            >
              Contact Me
            </a>
            {/* Mobile menu hamburger */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400"
              aria-label="Toggle Navigation"
            >
              <span className="block w-5 h-0.5 bg-slate-400 mb-1"></span>
              <span className="block w-5 h-0.5 bg-slate-400 mb-1"></span>
              <span className="block w-5 h-0.5 bg-slate-400"></span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 py-4 space-y-3 text-sm">
            <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">About</a>
            <a href="#values" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Philosophy</a>
            <a href="#teams" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Teams</a>
            <a href="#human-element" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Beyond Code</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Skills</a>
            <a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Education</a>
            <a href="#achievements" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Achievements</a>
            <a href="#licenses" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Licenses</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Experience</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Projects</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400">Contact</a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section id="hero" className="pt-36 pb-24 px-6 max-w-5xl mx-auto flex flex-col items-start justify-center min-h-[85vh]">
        <p className="text-cyan-400 font-mono text-sm tracking-wide mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> {personalInfo.heroGreeting}
        </p>
        
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none text-white mb-4">
          {personalInfo.fullName}
        </h1>
        
        <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent mb-6">
          {personalInfo.title}
        </p>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-cyan-500/25 flex items-center gap-2 cursor-pointer"
          >
            My Projects
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-sm transition flex items-center gap-2 cursor-pointer"
          >
            Contact me
          </a>
        </div>
      </section>

      {/* 3. ABOUT ME: Interactive Section with Portrait Photo */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">About Me</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Bridging mechanical engineering principles with IoT firmware, simulation, and modern web software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          {/* Profile Photo Card */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative group">
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative w-56 sm:w-64 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-950 shadow-2xl">
                <img 
                  src={asset(personalInfo.avatarUrl || '/profile.jpg')} 
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[11px] font-semibold tracking-wide">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Open to Engineering Roles
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact Micro-bar */}
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-cyan-400 font-mono">
                <MapPin className="w-3.5 h-3.5" /> Klang, Selangor
              </span>
              <span>•</span>
              <span className="text-slate-300">UniKL MFI (2026)</span>
            </div>
          </div>

          {/* Bio & Value Highlights */}
          <div className="md:col-span-7 space-y-5 text-left">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                Mechanical &amp; Systems Engineer
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                {personalInfo.fullName}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {personalInfo.storyIntro}
              </p>
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
                  <Wrench className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white mb-1">CAD &amp; Simulation</h4>
                <p className="text-[11px] text-slate-400 leading-snug">SolidWorks 3D, static FEA (3000N, FoS 2.45), and CFD flow analysis.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-2">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white mb-1">Embedded &amp; IoT</h4>
                <p className="text-[11px] text-slate-400 leading-snug">ESP32, Arduino, Blynk cloud telemetry, NMRA DCC++ protocol.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white mb-1">Full-Stack Web</h4>
                <p className="text-[11px] text-slate-400 leading-snug">React 19, TypeScript, NestJS, PostgreSQL, 452 automated test suite.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button 
                onClick={() => setIsAboutOpen(true)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" /> Read Full Engineering Story &amp; Philosophy
              </button>
              <a 
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Modal */}
      {isAboutOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setIsAboutOpen(false)}
        >
          <div 
            className="relative max-w-2xl w-full bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl my-8 text-left space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" /> Engineering Story & Background
              </h3>
              <button 
                onClick={() => setIsAboutOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Highlight Card with Photo */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
              <img 
                src={asset(personalInfo.avatarUrl || '/profile.jpg')} 
                alt={personalInfo.fullName} 
                className="w-16 h-16 rounded-xl object-cover object-top border border-cyan-500/50 shadow-md shadow-cyan-500/10 shrink-0" 
              />
              <div>
                <h4 className="text-base font-bold text-white">{personalInfo.fullName}</h4>
                <p className="text-xs text-cyan-400 font-mono flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {personalInfo.location}
                </p>
                <p className="text-xs text-slate-400">{personalInfo.title}</p>
              </div>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[35vh] overflow-y-auto pr-2">
              {personalInfo.aboutBio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Interest & Technical Tags */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Core Focus Areas</span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interestTags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-cyan-300 border border-slate-700 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-end">
              <button 
                onClick={() => setIsAboutOpen(false)}
                className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3.1 ENGINEERING PHILOSOPHY & WORK VALUES */}
      <section id="values" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-800/50 inline-block mb-3">
            How I Think &amp; Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Engineering Philosophy</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Technical execution is only half the battle. Here is how I approach cross-discipline collaboration, problem-solving, and team dynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringValues.map((val) => {
            const IconComponent = val.id === 'empathy' ? Layers :
                                  val.id === 'rigor' ? Target :
                                  val.id === 'pragmatic' ? DollarSign : HeartHandshake;
            return (
              <div 
                key={val.id}
                className="group p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mb-3">
                    {val.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3.2 COLLABORATORS & CAPSTONE TEAMS */}
      <section id="teams" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-800/50 inline-block mb-3">
            Team Leadership &amp; Joint Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Collaborators &amp; Teams</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Complex engineering requires trust, clear milestones, and mutual accountability. Highlights of the teams I’ve led and collaborated with.
          </p>
        </div>

        <div className="space-y-6">
          {teamCollaborations.map((team) => (
            <div 
              key={team.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition shadow-xl space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${team.avatarColor} flex items-center justify-center text-slate-950 font-black text-lg shadow-md shrink-0`}>
                    <Users2 className="w-6 h-6 text-slate-950" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {team.teamName}
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium">
                      {team.context}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                    <Users className="w-3.5 h-3.5 text-cyan-400" /> {team.membersCount} Members
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 text-xs font-mono font-bold">
                    {team.role}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-200 mb-1">
                  Project: <span className="text-white font-bold">{team.projectTitle}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {team.description}
                </p>

                <div className="bg-slate-950/70 rounded-2xl p-4 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Collaborative Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {team.keyHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-3">
                  {team.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[11px] rounded-lg bg-slate-800/80 text-cyan-300 font-mono border border-slate-700/60">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3.3 BEYOND ENGINEERING / THE HUMAN BENTO */}
      <section id="human-element" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-800/50 inline-block mb-3">
            Off The Clock &amp; In The Lab
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Beyond The Terminal</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            A glimpse into the daily habits, hardware tinkering, and personal interests that keep my engineering mind sharp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Hardware Tinkering */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{humanBento.workshop.title}</h3>
              <p className="text-xs font-mono text-cyan-400 mb-3">{humanBento.workshop.subtitle}</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {humanBento.workshop.description}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Active Workbench at Home
            </div>
          </div>

          {/* Card 2: Everyday Toolkit */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition shadow-xl md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{humanBento.setup.title}</h3>
                  <p className="text-xs text-slate-400">Hardware, software &amp; daily driver essentials</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {humanBento.setup.tools.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition">
                  <span className="text-xs font-bold text-white block truncate">{item.name}</span>
                  <span className="text-[10px] text-cyan-400 font-mono block">{item.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Hobbies & Passions */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition shadow-xl md:col-span-2">
            <h3 className="text-lg font-bold text-white mb-1">Passions &amp; Creative Outlets</h3>
            <p className="text-xs text-slate-400 mb-4">Balancing deep analytical focus with active recharge</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {humanBento.hobbies.map((hobby, i) => {
                const HobbyIcon = hobby.icon === 'Train' ? Train :
                                  hobby.icon === 'Activity' ? Activity :
                                  hobby.icon === 'Car' ? Car : Coffee;
                return (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <HobbyIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{hobby.name}</h4>
                      <p className="text-[11px] text-slate-400 leading-snug mt-0.5">{hobby.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 4: Currently Exploring */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{humanBento.currentlyExploring.title}</h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {humanBento.currentlyExploring.topics.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5"></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-cyan-400 font-mono">
              Always learning &amp; prototyping
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-extrabold text-white mb-2 text-center">Skills</h2>
        <p className="text-slate-400 text-sm text-center mb-10 max-w-md mx-auto">
          Comprehensive tools, frameworks, and engineering competencies in my active repertoire.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-xs sm:text-sm font-medium hover:border-cyan-500 hover:text-cyan-300 transition hover:scale-105 cursor-default shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 5. EDUCATION SECTION */}
      <section id="education" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-extrabold text-white mb-2 text-center">Education</h2>
        <p className="text-slate-400 text-sm text-center mb-12">Academic qualifications in mechanical, mechatronics, and full-stack engineering.</p>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-10">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform"></div>
              
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">{edu.period}</span>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-[11px] font-mono font-semibold">
                    {edu.badge}
                  </span>
                </div>
                <p className="text-sm text-slate-300 font-medium mb-3">{edu.institution}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{edu.highlights}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ACHIEVEMENTS SECTION */}
      <section id="achievements" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-extrabold text-white mb-2 text-center">Achievements</h2>
        <p className="text-slate-400 text-sm text-center mb-12">Recognized milestones in leadership, research publication, and engineering delivery.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">{ach.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{ach.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. LICENSES & CERTIFICATION SECTION */}
      <section id="licenses" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-extrabold text-white mb-2 text-center">Licenses &amp; Certification</h2>
        <p className="text-slate-400 text-sm text-center mb-12">Select View Details on any credential for a closer look.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800 text-sky-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{cert.title}</h3>
                <p className="text-xs text-slate-400 mb-2">{cert.issuer}</p>
                <span className="text-[11px] font-mono text-cyan-400 block mb-4">Issued: {cert.date}</span>
              </div>
              <button 
                onClick={() => setSelectedCert(cert)}
                className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" /> View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-md w-full bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl text-left space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold">Credential Verification</span>
              <button onClick={() => setSelectedCert(null)} className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-lg font-bold text-white">{selectedCert.title}</h3>
            <p className="text-xs text-cyan-300 font-semibold">{selectedCert.issuer} • {selectedCert.date}</p>
            <p className="text-xs text-slate-300 leading-relaxed">{selectedCert.description}</p>
            <div className="pt-2 flex justify-end">
              <button onClick={() => setSelectedCert(null)} className="px-4 py-1.5 rounded bg-slate-800 text-xs text-white cursor-pointer">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. WORK EXPERIENCE */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-extrabold text-white mb-2 text-center">Work Experience</h2>
        <p className="text-slate-400 text-sm text-center mb-12">Practical on-site facility engineering and machine maintenance history.</p>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-10">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform"></div>
              
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">{exp.period}</span>
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <p className="text-sm text-slate-300 font-medium mb-1">{exp.company} • {exp.location}</p>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. PROJECTS SECTION: 3D Flip Grid following reference flow */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-extrabold text-white mb-2 text-center">Projects</h2>
        <p className="text-slate-400 text-sm text-center mb-12 max-w-md mx-auto">
          Hover a card to flip it and see the tools &amp; story behind each one. Click Overview to explore the start-to-finish picture flow and operation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flip-card-container h-[420px] rounded-2xl cursor-pointer"
            >
              <div className="flip-card-inner">
                {/* FLIP FRONT */}
                <div className="flip-card-front bg-slate-900/80 border border-slate-800 flex flex-col justify-between p-6 shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/70 px-2.5 py-1 rounded border border-cyan-800/50">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">Hover to flip ↺</span>
                    </div>

                    <div className="relative h-44 w-full rounded-xl overflow-hidden border border-slate-800/80 mb-4 bg-slate-950">
                      <img 
                        src={asset(project.heroImage)} 
                        alt={project.frontTitle} 
                        className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{project.frontTitle}</h3>
                    <p className="text-xs text-cyan-300 font-mono">{project.frontSub}</p>
                  </div>

                  <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-3 flex items-center justify-between">
                    <span>{project.storySteps.length} Flow Slides Available</span>
                    <span className="text-cyan-400 font-semibold">Flip for Overview →</span>
                  </div>
                </div>

                {/* FLIP BACK */}
                <div className="flip-card-back bg-slate-900 border border-cyan-500/40 flex flex-col justify-between p-6 shadow-2xl">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{project.backTitle}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">{project.backDesc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.toolTags.map((tool) => (
                        <span key={tool} className="px-2 py-0.5 text-[11px] rounded bg-slate-800 text-cyan-300 border border-slate-700 font-mono">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => openProjectOverview(project)}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-cyan-500/20 cursor-pointer"
                  >
                    <Search className="w-4 h-4" /> Overview &amp; Slide Flow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. PROJECT OVERVIEW MODAL WITH SLIDE VIEWER (Picture Flow & Operation) */}
      {activeProjectModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActiveProjectModal(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl my-8 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-5 border-b border-slate-800 bg-slate-950 shrink-0">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-0.5">
                  {activeProjectModal.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {activeProjectModal.backTitle}
                </h3>
              </div>
              <button 
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-grow bg-slate-900">
              {/* Project Overview Bullets */}
              <ul className="space-y-2 border-l-2 border-cyan-400 pl-4 text-xs sm:text-sm text-slate-300">
                {activeProjectModal.overviewList.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">• {item}</li>
                ))}
              </ul>

              {/* Tool Tag Row */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeProjectModal.toolTags.map((tool) => (
                  <span key={tool} className="px-2.5 py-1 text-xs rounded bg-slate-800 text-cyan-300 font-mono border border-slate-700">
                    {tool}
                  </span>
                ))}
              </div>

              {/* SLIDE VIEWER SECTION */}
              <div className="bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Project Design &amp; Operational Flow Slides
                  </p>
                  <p className="text-xs font-mono text-slate-400">
                    Slide {slideIndex + 1} / {activeProjectModal.storySteps.length}
                  </p>
                </div>

                {/* Slide Viewer Frame with Prev/Next Controls */}
                <div className="relative flex items-center justify-center bg-black/60 rounded-xl overflow-hidden border border-slate-800 min-h-[300px] max-h-[46vh]">
                  <button 
                    onClick={prevSlide}
                    className="absolute left-2 z-10 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition cursor-pointer"
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
                    className="absolute right-2 z-10 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Active Slide Narrative & How It Operates */}
                <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
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
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-400">
                Verified Technical Engineering Case Study
              </span>
              <button 
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition cursor-pointer"
              >
                Close Overview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 11. CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-900 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Contact me</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-10 text-sm leading-relaxed">
          Whether you have an upcoming engineering project, a full-time role, or want to discuss technical systems — my inbox is open.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-cyan-500/20"
          >
            <Mail className="w-4 h-4" /> {personalInfo.email}
          </a>
          <a 
            href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} 
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-200 font-semibold text-sm transition"
          >
            <Phone className="w-4 h-4 text-cyan-400" /> {personalInfo.phone}
          </a>
          <a 
            href={personalInfo.linkedin} 
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-200 font-semibold text-sm transition"
          >
            <Linkedin className="w-4 h-4" /> Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="py-8 border-t border-slate-900 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {personalInfo.fullName}. Built with React 19, Vite &amp; Tailwind CSS.
      </footer>
    </div>
  );
}
