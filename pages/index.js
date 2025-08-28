import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, FileText, ArrowRight, ExternalLink, Phone, Sun, Moon } from "lucide-react";

// =============================
// Shubham — PM Portfolio (Full Manish-style Build)
// =============================

// === HOW TO USE ===
// 1. Create a new Next.js project: npx create-next-app my-portfolio
// 2. Install Tailwind: https://tailwindcss.com/docs/guides/nextjs
// 3. Place your photo (IMG_20240717_013225.jpg) in /public folder
// 4. Save this code as pages/index.js
// 5. Run with: npm run dev

const PROJECTS = [
  {
    title: "Groww Next",
    role: "Product Case Study / PRD",
    blurb: "Reducing entry barriers for first-time tech-savvy investors with guided onboarding, goals and risk-fit nudges.",
    tags: ["Fintech", "Onboarding", "Activation"],
    link: "https://docs.google.com/document/d/14MHnylLSa97Jr2AGq1qAp1F0r9rbsxYhyLqp9Y6Y2kE/edit?usp=sharing",
    accent: "indigo",
  },
  {
    title: "Salesken AI — Conversation Intelligence",
    role: "Product Requirement Document",
    blurb: "Personas from real reviews, problem discovery and feature spec to improve call coaching and revenue outcomes.",
    tags: ["SaaS", "B2B", "Voice AI"],
    link: "https://docs.google.com/document/d/1Z8XjH30Rdb1-INGsJqMCydDgULyHTTx6n5eH0qDGe3Y/edit?usp=sharing",
    accent: "emerald",
  },
  {
    title: "Loop AI — Delivery Intelligence",
    role: "Case Study / System Thinking",
    blurb: "Improving ETA reliability with feedback loops, SLA-based prioritization and ops dashboards.",
    tags: ["Logistics", "Ops", "Analytics"],
    link: "#",
    accent: "violet",
  },
];

const CONTACTS = {
  email: "shubhambhatia900@gmail.com",
  phone: "+91 9008290669",
  linkedin: "https://www.linkedin.com/in/shubhambhatia900",
  resume: "/Shubham_Bhatia_PM_updated19.docx",
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-6xl mx-auto px-5 sm:px-8 ${className}`}>{children}</section>
);

const LogoMark = () => (
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded-full grid place-items-center font-semibold text-white shadow-sm bg-gradient-to-br from-indigo-600 to-purple-600">
      SB
    </div>
    <span className="font-semibold tracking-tight hidden sm:inline">Shubham Bhatia</span>
  </div>
);

const Nav = ({ dark, toggleDark }) => (
  <div className="sticky top-0 z-50 border-b bg-white/70 dark:bg-black/50 backdrop-blur">
    <nav className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between">
      <a href="#home" className="hover:opacity-90"><LogoMark /></a>
      <div className="hidden sm:flex items-center gap-6 text-sm">
        <a href="#about" className="hover:opacity-80">About</a>
        <a href="#work" className="hover:opacity-80">Work</a>
        <a href="#contact" className="hover:opacity-80">Contact</a>
        <a href={CONTACTS.resume} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
          <FileText className="h-4 w-4" /> Resume
        </a>
        <button
          onClick={toggleDark}
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          <span className="hidden md:inline">{dark ? "Light" : "Dark"}</span>
        </button>
      </div>
    </nav>
  </div>
);

const Hero = () => (
  <Section id="home" className="pt-20 pb-12 text-center">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <img src="/IMG_20240717_013225.jpg" alt="Shubham Bhatia" className="mx-auto h-40 w-40 rounded-full border-4 border-indigo-500 shadow-lg object-cover object-top" />
      <h1 className="mt-6 text-4xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
        Product Manager blending 8+ years of retail leadership with product thinking
      </h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
        I pair retail leadership insights with structured product frameworks — PRDs, discovery, and metrics — to deliver user‑centric, data‑driven solutions.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="#work" className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700">View Work</a>
        <a href={CONTACTS.resume} className="px-6 py-3 rounded-full border hover:bg-black hover:text-white">Download Resume</a>
      </div>
    </motion.div>
  </Section>
);

const About = () => (
  <Section id="about" className="py-16">
    <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
    <div className="grid sm:grid-cols-2 gap-8 items-center">
      <img src="/IMG_20240717_013225.jpg" alt="Shubham Bhatia" className="rounded-2xl shadow-xl border-4 border-purple-400 object-cover object-top h-72 w-full sm:w-80 mx-auto" />
      <div>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
          I spent 8+ years leading retail operations at Shoppers Stop, solving problems in merchandising, inventory optimization, and store experience. Without realizing it, I was acting like a PM—defining problems, running experiments, tracking success metrics. Today, I apply the same rigor to SaaS/AI products like Groww, Salesken AI, and Loop AI.
        </p>
        <ul className="grid gap-2 text-neutral-700 dark:text-neutral-300">
          <li><strong>Experience:</strong> 8+ Years</li>
          <li><strong>Specialty:</strong> Product Management</li>
          <li><strong>Education:</strong> Upraised PM Certification</li>
          <li><strong>Location:</strong> Bengaluru, India</li>
          <li><strong>Availability:</strong> Open to PM roles</li>
        </ul>
      </div>
    </div>
  </Section>
);

const TiltCard = ({ title, color, items, tilt }) => (
  <div className={`origin-bottom ${tilt}`}>
    <div className="rounded-3xl overflow-hidden shadow-lg">
      <div className={`px-5 py-3 text-white text-sm font-semibold bg-${color}-500`}>{title}</div>
      <div className="bg-white dark:bg-black">
        {items.map((it) => (
          <div key={it} className="px-5 py-3 border-b last:border-0 dark:border-neutral-700">{it}</div>
        ))}
      </div>
    </div>
  </div>
);

const Capabilities = () => (
  <Section className="py-16">
    <h2 className="text-3xl font-bold text-center mb-8">What I Bring</h2>
    <div className="grid sm:grid-cols-3 gap-6">
      <TiltCard title="Roles" color="orange" tilt="-rotate-2" items={["Product Discovery","User Research","Roadmapping","Stakeholder mgmt"]} />
      <TiltCard title="Process" color="blue" tilt="rotate-1" items={["Problem definition","Hypotheses","Prioritization","MVP & Experiments","Iterate"]} />
      <TiltCard title="Tools" color="green" tilt="-rotate-1" items={["GA4, Power BI, SQL","Advanced Excel","Jira/Confluence","Notion, FigJam/Miro"]} />
    </div>
  </Section>
);

const Work = () => (
  <Section id="work" className="py-16">
    <h2 className="text-3xl font-bold text-center mb-10">Selected Projects</h2>
    <div className="grid sm:grid-cols-2 gap-8">
      {PROJECTS.map((p) => (
        <motion.a href={p.link} key={p.title} target="_blank" rel="noreferrer" whileHover={{ scale: 1.02 }}>
          <div className={`rounded-2xl p-6 shadow-lg bg-gradient-to-br from-${p.accent}-100 to-${p.accent}-50 border-l-8 border-${p.accent}-500`}>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">{p.blurb}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className={`px-3 py-1 text-xs rounded-full bg-${p.accent}-200 text-${p.accent}-900 dark:bg-${p.accent}-800 dark:text-${p.accent}-100`}>{t}</span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </Section>
);

const CTA = () => (
  <Section className="py-16">
    <div className="rounded-3xl p-10 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Have an idea? Let’s bring it to life</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href={CONTACTS.resume} className="px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200"><FileText className="h-4 w-4" /> Download Resume</a>
        <a href={`mailto:${CONTACTS.email}`} className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black">Book a Call</a>
      </div>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" className="py-16 text-center">
    <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
    <p className="text-neutral-600 dark:text-neutral-300 mb-6">I’m open to PM roles across SaaS/AI, fintech, and ops-heavy domains.</p>
    <div className="flex justify-center gap-4 flex-wrap">
      <a href={`mailto:${CONTACTS.email}`} className="px-6 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600"><Mail className="h-4 w-4" /> {CONTACTS.email}</a>
      <a href={CONTACTS.linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700"><Linkedin className="h-4 w-4" /> LinkedIn</a>
      <div className="px-6 py-3 rounded-full border flex items-center gap-2"><Phone className="h-4 w-4" /> {CONTACTS.phone}</div>
    </div>
  </Section>
);

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setDark(saved === 'dark');
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 dark:from-black dark:to-neutral-900 text-black dark:text-white">
      <Nav dark={dark} toggleDark={() => setDark((d) => !d)} />
      <Hero />
      <About />
      <Capabilities />
      <CTA />
      <Work />
      <Contact />
      <footer className="py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Shubham Bhatia</footer>
    </div>
  );
}
