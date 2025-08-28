import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, FileText, Phone, Sun, Moon } from "lucide-react";

const PROJECTS = [
  {
    title: "Groww Next",
    blurb:
      "Reducing entry barriers for first-time tech-savvy investors with guided onboarding, goals and risk-fit nudges.",
    tags: ["Fintech", "Onboarding", "Activation"],
    link: "https://docs.google.com/document/d/1Z8XjH30Rdb1-INGsJqMCydDgULyHTTx6n5eH0qDGe3Y/edit?usp=sharing",
    accent: "indigo",
  },
  {
    title: "Salesken AI — Conversation Intelligence",
    blurb:
      "Personas from real reviews, problem discovery and feature spec to improve call coaching and revenue outcomes.",
    tags: ["SaaS", "B2B", "Voice AI"],
    link: "https://docs.google.com/document/d/14MHnylLSa97Jr2AGq1qAp1F0r9rbsxYhyLqp9Y6Y2kE/edit?usp=sharing",
    accent: "emerald",
  },
  {
    title: "Loop AI — Delivery Intelligence",
    blurb:
      "Improving ETA reliability with feedback loops, SLA-based prioritization and ops dashboards.",
    tags: ["Logistics", "Ops", "Analytics"],
    link: "#",
    accent: "violet",
  },
  {
    title: "Competitive Research Assignment – Groww",
    blurb: "Deep competitive study to identify gaps & opportunities for Groww.",
    tags: ["Fintech", "Research"],
    link: "https://docs.google.com/document/d/18OcDJGWiMVjHWlerL2Ag7jHT9-FTNvs7uMPfhSRQafA/edit?usp=sharing",
    accent: "rose",
  },
  {
    title: "Groww Opportunity Status, User Journey & Stakeholders",
    blurb:
      "Mapped user journey and stakeholder roles to uncover key opportunity areas.",
    tags: ["User Journey", "Stakeholders"],
    link: "https://docs.google.com/document/d/1t8rBHVNc_7roji6uk7AxvwBVyyPbsKoCmJZohVHu0Jk/edit?usp=sharing",
    accent: "cyan",
  },
  {
    title: "Using User Research to Identify Impactful Problems",
    blurb:
      "Applied structured research to uncover high-impact product problems worth solving.",
    tags: ["Research", "Problem Discovery"],
    link: "https://docs.google.com/document/d/1Gn6bwPuxrioqihMm9tq0ruQ5uy4XUQ9rlFRTsdu0Vxg/edit?usp=sharing",
    accent: "amber",
  },
];

const CONTACTS = {
  email: "shubhambhatia900@gmail.com",
  phone: "+91 9008290669",
  linkedin: "https://www.linkedin.com/in/shubhambhatia900",
  resume: "/Shubham_Bhatia_PM.pdf",
};

const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`max-w-6xl mx-auto px-5 sm:px-8 ${className}`}
  >
    {children}
  </section>
);

const LogoMark = () => (
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded-full grid place-items-center font-semibold text-white shadow-sm bg-gradient-to-br from-indigo-600 to-purple-600">
      SB
    </div>
    <span className="font-semibold tracking-tight hidden sm:inline">
      Shubham Bhatia
    </span>
  </div>
);

const Nav = ({ dark, toggleDark }) => (
  <div className="sticky top-0 z-50 border-b bg-white/70 dark:bg-black/50 backdrop-blur">
    <nav className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between">
      <a href="#home" className="hover:opacity-90">
        <LogoMark />
      </a>
      <div className="hidden sm:flex items-center gap-6 text-sm">
        <a href="#about" className="hover:opacity-80">
          About
        </a>
        <a href="#work" className="hover:opacity-80">
          Work
        </a>
        <a href="#contact" className="hover:opacity-80">
          Contact
        </a>
        <a
          href={CONTACTS.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center gap-2 shadow-md hover:shadow-xl transition"
        >
          <FileText className="h-4 w-4" /> Resume
        </a>
        <button
          onClick={toggleDark}
          className="px-3 py-2 rounded-full border flex items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          <span className="hidden md:inline">{dark ? "Light" : "Dark"}</span>
        </button>
      </div>
    </nav>
  </div>
);

const Hero = () => (
  <Section id="home" className="pt-20 pb-12 text-center bg-neutral-50">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <img
        src="/headshot-hero.jpg"
        alt="Shubham Bhatia"
        className="mx-auto h-40 w-40 rounded-full border-4 border-indigo-500 shadow-xl ring-4 ring-purple-400 ring-offset-2"
      />
      <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
        Product Manager driving data-driven growth and user-centric solutions
      </h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
        Blending 8+ years of retail leadership with pragmatic product thinking —
        delivering discovery, PRDs, and measurable outcomes.
      </p>
    </motion.div>
  </Section>
);

const About = () => (
  <Section id="about" className="py-16 bg-white dark:bg-neutral-900 rounded-xl">
    <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
    <div className="grid sm:grid-cols-2 gap-8 items-center">
      <img
        src="/headshot-about.jpg"
        alt="Shubham Bhatia"
        className="rounded-2xl shadow-xl border-4 border-purple-400 object-cover object-top h-72 w-full sm:w-80 mx-auto"
      />
      <div>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
  Across 8+ years of experience, I’ve led initiatives in retail operations, customer experience, and product case studies — consistently applying product thinking long before stepping into a formal PM role. From optimizing inventory flows and building efficient processes to writing detailed PRDs and conducting user research, my focus has always been on solving high-impact problems.
  <br /><br />
  Today, as a Product Manager, I bring this blend of operational depth and structured product craft to SaaS/AI products in fintech and B2B, ensuring outcomes that are both user-centric and data-driven.
</p>

        <ul className="grid gap-2 text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>Experience:</strong> 8+ Years
          </li>
          <li>
            <strong>Specialty:</strong> Product Management
          </li>
          <li>
            <strong>Education:</strong> Upraised PM Certification
          </li>
          <li>
            <strong>Location:</strong> Bengaluru, India
          </li>
          <li>
            <strong>Availability:</strong> Open to PM roles
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

const TiltCard = ({ title, color, items, tilt }) => (
  <div className={`origin-bottom ${tilt}`}>
    <div className="rounded-3xl overflow-hidden shadow-lg">
      <div className={`px-5 py-3 text-white font-semibold bg-${color}-500`}>
        {title}
      </div>
      <div className="bg-white dark:bg-black">
        {items.map((it) => (
          <div
            key={it}
            className="px-5 py-3 border-b last:border-0 dark:border-neutral-700"
          >
            {it}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Capabilities = () => (
  <Section className="py-16">
    <h2 className="text-3xl font-bold text-center mb-8">What I Bring</h2>
    <div className="grid sm:grid-cols-3 gap-6">
      <TiltCard
        title="Roles"
        color="orange"
        tilt="-rotate-2"
        items={["Product Discovery", "User Research", "Roadmapping", "Stakeholder mgmt"]}
      />
      <TiltCard
        title="Process"
        color="blue"
        tilt="rotate-1"
        items={[
          "Problem definition",
          "Hypotheses",
          "Prioritization",
          "MVP & Experiments",
          "Iterate",
        ]}
      />
      <TiltCard
        title="Tools"
        color="green"
        tilt="-rotate-1"
        items={[
          "GA4, Power BI, SQL",
          "Advanced Excel",
          "Jira/Confluence",
          "Notion, FigJam/Miro",
        ]}
      />
    </div>
  </Section>
);

const LogosRow = () => (
  <Section className="py-12">
    <div className="rounded-3xl border dark:border-neutral-800 bg-white/70 dark:bg-white/5 backdrop-blur p-6 sm:p-8">
      <p className="text-xs sm:text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400 text-center mb-6">
        Trusted by / Highlights
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 justify-items-center items-center">
        {["Tata", "Cargill", "Reliance", "Flipkart", "Swiggy"].map((name) => (
          <div
            key={name}
            className="h-12 w-28 sm:h-12 sm:w-32 grid place-items-center rounded-xl border dark:border-neutral-800 bg-white/60 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 font-semibold tracking-wide uppercase text-xs sm:text-sm grayscale hover:grayscale-0 transition"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Work = () => (
  <Section id="work" className="py-16">
    <h2 className="text-3xl font-bold text-center mb-10">Selected Projects</h2>
    <div className="grid sm:grid-cols-2 gap-8">
      {PROJECTS.map((p) => (
        <motion.a
          href={p.link}
          key={p.title}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.02 }}
        >
          <div
            className={`rounded-2xl p-6 shadow-lg bg-gradient-to-br from-${p.accent}-100 to-${p.accent}-50 border-l-8 border-${p.accent}-500`}
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
              {p.blurb}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className={`px-3 py-1 text-xs rounded-full bg-${p.accent}-200 text-${p.accent}-900 dark:bg-${p.accent}-800 dark:text-${p.accent}-100`}
                >
                  {t}
                </span>
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
      <h2 className="text-3xl font-bold mb-4">
        Have an idea? Let’s bring it to life
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href={CONTACTS.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 flex items-center gap-2 shadow-md hover:shadow-xl transition"
        >
          <FileText className="h-4 w-4" /> Download Resume
        </a>
        <a
          href={`mailto:${CONTACTS.email}`}
          className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black flex items-center gap-2 shadow-md hover:shadow-xl transition"
        >
          <Phone className="h-4 w-4" /> Book a Call
        </a>
      </div>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" className="py-16 text-center">
    <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
    <p className="text-neutral-600 dark:text-neutral-300 mb-6">
      I’m open to PM roles across SaaS/AI, fintech, and ops-heavy domains.
    </p>
    <div className="flex justify-center gap-4 flex-wrap">
      <a
        href={`mailto:${CONTACTS.email}`}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-xl flex items-center gap-2 transition"
      >
        <Mail className="h-4 w-4" /> {CONTACTS.email}
      </a>
      <a
        href={CONTACTS.linkedin}
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl flex items-center gap-2 transition"
      >
        <Linkedin className="h-4 w-4" /> LinkedIn
      </a>
      <div className="px-6 py-3 rounded-full border flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
        <Phone className="h-4 w-4" /> {CONTACTS.phone}
      </div>
    </div>
  </Section>
);

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 dark:from-black dark:to-neutral-900 text-black dark:text-white">
      <Nav dark={dark} toggleDark={() => setDark((d) => !d)} />
      <Hero />
      <About />
      <Capabilities />
      <LogosRow />
      <CTA />
      <Work />
      <Contact />
      <footer className="py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} Shubham Bhatia
      </footer>
    </div>
  );
}
