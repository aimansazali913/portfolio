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
  Repeat
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ========================================================
          1. NAVBAR (Architectural Glass Navy Block)
         ======================================================== */}
      <nav className="fixed top-0 w-full z-50 bg-navy-950/90 backdrop-blur-md border-b border-navy-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-serif font-black text-base shadow-sm group-hover:bg-blue-500 transition">
              A
            </div>
            <div>
              <span className="text-white font-bold tracking-tight text-sm sm:text-base block leading-none">
                {personalInfo.name}
              </span>
              <span className="text-sky-300 font-mono text-[10px] tracking-wider uppercase block mt-0.5">
                Systems &amp; Mechanical Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <a href="#hero" className="hover:text-sky-400 transition">Home</a>
            <a href="#about" className="hover:text-sky-400 transition">Profile</a>
            <a href="#projects" className="hover:text-sky-400 transition">Case Studies</a>
            <a href="#triz-section" className="hover:text-sky-400 transition">TRIZ</a>
            <a href="#experience" className="hover:text-sky-400 transition">Experience</a>
            <a href="#skills" className="hover:text-sky-400 transition">Skills</a>
            <a href="#teams" className="hover:text-sky-400 transition">Teams</a>
            <a href="#beyond" className="hover:text-sky-400 transition">Beyond Code</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition shadow-sm flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
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
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Profile</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Case Studies</a>
            <a href="#triz-section" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">TRIZ Innovation</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Experience &amp; Education</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Skills</a>
            <a href="#teams" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Team Collaborations</a>
            <a href="#beyond" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Beyond Code</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-sky-400">Contact</a>
          </div>
        )}
      </nav>

      {/* ========================================================
          2. HERO SECTION (Iconic Canva Architectural Blue Color Block)
         ======================================================== */}
      <section id="hero" className="pt-28 pb-20 px-6 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-850 text-white relative overflow-hidden border-b border-navy-800">
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
          
          {/* Section Kicker Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs font-mono font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            ENGINEER RESUME &amp; PORTFOLIO · 2026
          </div>

          {/* THE CANVA CENTERPIECE COLOR BLOCK: Sky-Blue Architectural Box */}
          <div className="w-full max-w-3xl bg-gradient-to-r from-blue-700 via-sky-600 to-blue-700 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-sky-400/30 mb-8 relative group hover:shadow-sky-500/20 transition-all duration-500">
            <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-[2px] pointer-events-none"></div>
            
            <div className="relative z-10 space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-sm">
                {personalInfo.name}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="text-xl sm:text-2xl font-bold text-sky-100 font-sans tracking-wide">
                  Mechanical &amp; Systems Engineer
                </span>
                <span className="text-sm sm:text-base text-sky-200/90 font-mono font-normal">
                  {personalInfo.pronouns || '(he/him)'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-sky-100/90 max-w-xl mx-auto font-sans leading-relaxed pt-2">
                Specialized in CAD/CAE physical modeling, IoT firmware, deterministic algorithms, and systematic TRIZ product innovation.
              </p>
            </div>
          </div>

          {/* Core Credentials & Tags Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mb-10">
            <span className="px-3.5 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold border border-white/15">
              UniKL MFI · B.Eng (Hons)
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold border border-white/15">
              Politeknik Port Dickson · Diploma
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold border border-white/15">
              KADA Cohort 2 Full-Stack Core
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold border border-white/15">
              TRIZ Systematic Innovation
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold border border-white/15">
              SolidWorks FEA &amp; CFD
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a 
              href="#projects" 
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore 5 Engineering Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#about" 
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition flex items-center gap-2 cursor-pointer"
            >
              <span>About My Background</span>
            </a>
          </div>

          {/* Quick Metrics Color-Block Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
            <div className="bg-navy-850/80 border border-navy-700/80 rounded-2xl p-4 sm:p-5 text-center shadow-lg">
              <span className="font-serif text-3xl sm:text-4xl font-black text-sky-400 block mb-1">5</span>
              <span className="text-xs text-slate-300 font-semibold block uppercase tracking-wider">Systems Engineered</span>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">Full Lifecycle</span>
            </div>

            <div className="bg-navy-850/80 border border-navy-700/80 rounded-2xl p-4 sm:p-5 text-center shadow-lg">
              <span className="font-serif text-3xl sm:text-4xl font-black text-sky-400 block mb-1">452</span>
              <span className="text-xs text-slate-300 font-semibold block uppercase tracking-wider">Automated Tests</span>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">100% CI Pass Gate</span>
            </div>

            <div className="bg-navy-850/80 border border-navy-700/80 rounded-2xl p-4 sm:p-5 text-center shadow-lg">
              <span className="font-serif text-3xl sm:text-4xl font-black text-sky-400 block mb-1">100%</span>
              <span className="text-xs text-slate-300 font-semibold block uppercase tracking-wider">NMRA Timing</span>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">Published Research</span>
            </div>

            <div className="bg-navy-850/80 border border-navy-700/80 rounded-2xl p-4 sm:p-5 text-center shadow-lg">
              <span className="font-serif text-3xl sm:text-4xl font-black text-sky-400 block mb-1">63%</span>
              <span className="text-xs text-slate-300 font-semibold block uppercase tracking-wider">Cost Reduction</span>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">BOM Optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ABOUT ME / PROFILE (Crisp Pure White Color Block)
         ======================================================== */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
            01 / Professional Profile
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            About Muhammad Aiman
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            From hands-on metal fabrication to finite element stress simulation, embedded firmware, and production cloud software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Architectural Photo Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative">
              {/* Outer Navy Architectural Shadow Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-ice-200 border border-blue-200/80 -rotate-1"></div>
              
              <div className="relative w-64 sm:w-72 aspect-[4/5] rounded-2xl overflow-hidden border-4 border-navy-900 bg-navy-950 shadow-xl">
                <img 
                  src={asset(personalInfo.avatarUrl)} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
              </div>

              {/* Verified Engineer Seal */}
              <div className="absolute -bottom-4 -right-4 bg-navy-900 text-white p-3 rounded-xl border-2 border-white shadow-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] text-sky-300 font-mono block leading-none">ACCREDITED</span>
                  <span className="text-xs font-bold block leading-tight">B.Eng (Hons)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center space-y-1">
              <span className="text-sm font-bold text-navy-900 block">{personalInfo.fullName}</span>
              <span className="text-xs text-slate-500 font-mono flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" /> {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Key Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-navy-900">
                {personalInfo.storyIntro}
              </p>
              <p>
                {personalInfo.aboutBio[1]}
              </p>
              <p>
                {personalInfo.aboutBio[2]}
              </p>
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
                href={`mailto:${personalInfo.email}`}
                className="px-5 py-2.5 rounded-lg bg-ice-100 hover:bg-ice-200 text-navy-900 font-semibold text-xs sm:text-sm border border-slate-300 transition flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. FEATURED PROJECTS (Ice-Blue Color Block: #F0F6FB)
         ======================================================== */}
      <section id="projects" className="py-24 px-6 bg-ice-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              02 / Verified Case Studies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Featured Projects &amp; Systems
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Hover cards to flip for technical specifications, or open the Slide Flow viewer to examine full presentation decks.
            </p>
          </div>

          {/* Project Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="flip-card-container h-[450px] rounded-2xl cursor-pointer group"
              >
                <div className="flip-card-inner">
                  
                  {/* FLIP FRONT (White Color Block Card) */}
                  <div className="flip-card-front bg-white border border-slate-200 shadow-md flex flex-col justify-between p-6 rounded-2xl group-hover:shadow-xl transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                          {project.category}
                        </span>
                        <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
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

                      <h3 className="text-xl font-bold text-navy-950 mb-1 leading-snug">
                        {project.frontTitle}
                      </h3>
                      <p className="text-xs text-blue-600 font-mono font-medium">
                        {project.frontSub}
                      </p>
                    </div>

                    <div className="text-xs text-slate-500 border-t border-slate-200 pt-3 flex items-center justify-between">
                      <span className="font-semibold text-slate-700">
                        {project.storySteps.length} Flow Slides Available
                      </span>
                      <span className="text-blue-600 font-bold group-hover:translate-x-1 transition">
                        View Spec →
                      </span>
                    </div>
                  </div>

                  {/* FLIP BACK (Navy Blue Color Block Card) */}
                  <div className="flip-card-back bg-navy-900 border border-blue-600/50 text-white flex flex-col justify-between p-6 rounded-2xl shadow-2xl">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                        {project.backTitle}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {project.backDesc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.toolTags.map((tool) => (
                          <span key={tool} className="px-2 py-0.5 text-[11px] rounded bg-navy-800 text-sky-300 border border-navy-700 font-mono">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => openProjectOverview(project)}
                      className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg cursor-pointer"
                    >
                      <Search className="w-4 h-4" />
                      <span>Open {project.storySteps.length}-Slide Presentation Deck</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. TRIZ & SYSTEMATIC INNOVATION (Deep Navy / Cobalt Color Block)
         ======================================================== */}
      <section id="triz-section" className="py-24 px-6 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white border-b border-navy-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sky-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              03 / Systematic Inventive Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Engineering with Classical TRIZ
            </h2>
            <div className="w-16 h-1 bg-sky-400 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Applying the Theory of Inventive Problem Solving to resolve fundamental engineering contradictions without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Principle 1 Card */}
            <div className="p-7 rounded-2xl bg-navy-850 border border-navy-700/80 space-y-4 hover:border-sky-400/60 transition shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-sky-400 flex items-center justify-center font-mono font-bold text-lg">
                #1
              </div>
              <h3 className="text-lg font-bold text-white">Segmentation Principle</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Divided continuous athletic training into isolated terrain modalities (Uphill, Downhill, Road, Trail, Strength). Decouples conflicting training demands so each physical variable adapts in isolation.
              </p>
              <div className="pt-2 text-[11px] font-mono text-sky-300">
                Resolution: Modality &amp; HR Zone Isolation
              </div>
            </div>

            {/* Principle 16 Card */}
            <div className="p-7 rounded-2xl bg-navy-850 border border-navy-700/80 space-y-4 hover:border-sky-400/60 transition shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-sky-400 flex items-center justify-center font-mono font-bold text-lg">
                #16
              </div>
              <h3 className="text-lg font-bold text-white">Partial or Excessive Action</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Targeted uphill and downhill micro-doses deliberately applied in concentrated sets. Conditions eccentric quadriceps decelerators to build tendon resilience before ultra-distance exposure.
              </p>
              <div className="pt-2 text-[11px] font-mono text-sky-300">
                Resolution: Eccentric Knee Conditioning
              </div>
            </div>

            {/* Principle 23 Card */}
            <div className="p-7 rounded-2xl bg-navy-850 border border-navy-700/80 space-y-4 hover:border-sky-400/60 transition shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-sky-400 flex items-center justify-center font-mono font-bold text-lg">
                #23
              </div>
              <h3 className="text-lg font-bold text-white">Closed-Loop Feedback</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Replaces static calendars with real-time biometric telemetry: 13 min/km pacer benchmark paired with continuous cardiac monitoring to prevent dangerous cardiovascular drift and overtraining.
              </p>
              <div className="pt-2 text-[11px] font-mono text-sky-300">
                Resolution: Telemetric Pacing Control
              </div>
            </div>
          </div>

          {/* Quick Launch Banner for TRIZ Project Deck */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/60 to-sky-950/60 border border-sky-400/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-mono uppercase text-sky-400 font-bold tracking-wider">
                Case Study Highlight
              </span>
              <h4 className="text-xl font-bold text-white">
                Heart-Rate-Zone Trail Training: Complete 11-Slide Defense Deck
              </h4>
              <p className="text-xs text-slate-300">
                Supervised by Assoc. Prof. Dr. Ir. Zainal Fitri Bin Zainal Abidin (UniKL · MARA).
              </p>
            </div>
            
            <button 
              onClick={() => {
                const trizProj = projects.find(p => p.id === 'triz');
                if (trizProj) openProjectOverview(trizProj);
              }}
              className="px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-navy-950 font-bold text-xs sm:text-sm transition shadow-lg shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Inspect 11 TRIZ Slides</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. EXPERIENCE & EDUCATION (Crisp Pure White Color Block)
         ======================================================== */}
      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
            04 / Career &amp; Academia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Experience &amp; Education
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Work Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-slate-200 pb-3">
              <Wrench className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-navy-950 font-serif">
                Industrial Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-ice-100 border border-slate-200 shadow-sm space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-800 font-mono text-xs font-bold">
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{item.location}</span>
                  </div>
                  
                  <h4 className="text-base font-bold text-navy-900 leading-snug">
                    {item.role}
                  </h4>
                  <p className="text-xs font-semibold text-blue-700">
                    {item.company}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-slate-200 pb-3">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-navy-950 font-serif">
                Formal Academic Degrees
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-ice-100 border border-slate-200 shadow-sm space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded bg-navy-900 text-white font-mono text-xs font-bold">
                      {item.period}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 text-[11px] font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-navy-900 leading-snug">
                    {item.degree}
                  </h4>
                  <p className="text-xs font-semibold text-blue-700">
                    {item.institution}
                  </p>
                  
                  <p className="text-xs text-slate-500 italic">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 border-t border-slate-200/80 pt-2.5">
                    <strong className="text-navy-900 font-semibold">Key Highlights: </strong>
                    {item.highlights}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. TECHNICAL SKILLS (Soft Sky-Blue Color Block: #E8F1F9)
         ======================================================== */}
      <section id="skills" className="py-24 px-6 bg-ice-150 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              05 / Technical Toolkit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Skills &amp; Engineering Competencies
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
          8. TEAM COLLABORATIONS (Crisp Pure White Color Block)
         ======================================================== */}
      <section id="teams" className="py-24 px-6 max-w-6xl mx-auto bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
            06 / Collaborative Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Engineering Teams &amp; Squads
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Leading multidisciplinary squads across mechanical CAD, electronics, software sprints, and systematic product innovation.
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
                  <h3 className="text-xl font-bold text-navy-950 mt-1">
                    {team.teamName}
                  </h3>
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
          9. BEYOND CODE (Soft Ice-Blue Color Block)
         ======================================================== */}
      <section id="beyond" className="py-24 px-6 bg-ice-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              07 / Beyond Engineering
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
              Workplace, Tools &amp; Balance
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Balancing rigorous technical analysis with hands-on maker work and outdoor endurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Active Workbench */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-950">{humanBento.workshop.title}</h3>
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
              <h3 className="text-lg font-bold text-navy-950">Trail &amp; Recharge</h3>
              <div className="space-y-2 pt-1">
                {humanBento.hobbies.map((h, i) => (
                  <div key={i} className="text-xs text-slate-600">
                    <strong className="text-navy-900">{h.name}: </strong>
                    <span>{h.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Continuous Learning */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-950">{humanBento.currentlyExploring.title}</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {humanBento.currentlyExploring.topics.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-[11px] font-mono text-slate-500">
                Always iterating &amp; prototyping
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          10. CERTIFICATIONS & ACHIEVEMENTS (Crisp White Block)
         ======================================================== */}
      <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
            08 / Accreditations &amp; Recognition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight">
            Verified Credentials &amp; Milestones
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              onClick={() => setSelectedCert(cert)}
              className="p-6 rounded-2xl bg-ice-50 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition cursor-pointer space-y-3"
            >
              <div className="flex items-center justify-between">
                <Award className="w-6 h-6 text-blue-600" />
                <span className="text-xs font-mono font-bold text-slate-500">{cert.date}</span>
              </div>
              <h4 className="text-base font-bold text-navy-950 leading-snug">{cert.title}</h4>
              <p className="text-xs text-blue-700 font-medium">{cert.issuer}</p>
              <p className="text-xs text-slate-600 line-clamp-2">{cert.description}</p>
              <span className="text-xs text-blue-600 font-bold block pt-1">Click to view details →</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-navy-950 block">{ach.title}</span>
                <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">{ach.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          11. CONTACT & FOOTER (Deep Architectural Midnight Navy Block)
         ======================================================== */}
      <section id="contact" className="py-24 px-6 bg-navy-950 text-white border-t border-navy-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="text-sky-400 font-mono text-xs font-bold uppercase tracking-widest block">
              09 / Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Let's Build Something Engineered to Last
            </h2>
            <div className="w-16 h-1 bg-sky-400 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Open to technical engineering opportunities, mechanical systems design, embedded IoT projects, and full-stack software development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="p-5 rounded-2xl bg-navy-900 border border-navy-800 hover:border-sky-400 transition space-y-1 block shadow-md group"
            >
              <Mail className="w-5 h-5 text-sky-400 mb-2 group-hover:scale-110 transition" />
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Email Me</span>
              <span className="text-xs font-bold text-white block truncate">{personalInfo.email}</span>
            </a>

            <a 
              href={`tel:${personalInfo.phone}`} 
              className="p-5 rounded-2xl bg-navy-900 border border-navy-800 hover:border-sky-400 transition space-y-1 block shadow-md group"
            >
              <Phone className="w-5 h-5 text-sky-400 mb-2 group-hover:scale-110 transition" />
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Call / WhatsApp</span>
              <span className="text-xs font-bold text-white block">{personalInfo.phone}</span>
            </a>

            <div className="p-5 rounded-2xl bg-navy-900 border border-navy-800 space-y-1 block shadow-md">
              <MapPin className="w-5 h-5 text-sky-400 mb-2" />
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Base Location</span>
              <span className="text-xs font-bold text-white block">{personalInfo.location}</span>
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
          </div>

          <div className="pt-16 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <span>© 2026 {personalInfo.fullName}. All rights reserved.</span>
            <span className="font-mono">Engineered with React 19, Vite &amp; Tailwind CSS</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. INTERACTIVE MODAL: PROJECT SLIDE FLOW VIEWER
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
                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
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
                    <FileText className="w-4 h-4" /> Official Project Slide Presentation
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
          13. INTERACTIVE MODAL: EXPANDED ABOUT ME
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
                <h3 className="font-serif text-2xl font-bold text-navy-950 mt-1">
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
          14. INTERACTIVE MODAL: CERTIFICATE DETAILS
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
