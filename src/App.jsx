import { useState } from "react";
import {
    ArrowRight,
    ArrowUpRight,
    Code2,
    Braces,
    Layers3,
    Monitor,
    Laptop,
    BookOpen,
    Clock3,
    MessageCircle,
    Menu,
    X,
    Check,
    ChevronDown,
    Globe,
    Terminal,
    GraduationCap,
    Lightbulb,
    LaptopMinimal,
    Database,
    Server,
    Workflow,
} from "lucide-react";

const PHONE = "2349060976683";

const message =
    "Hello Amariah Full-Stack Academy! I'm interested in joining your full-stack web development training. Please send me more information about the programme.";

const whatsapp = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

const curriculum = [
    {
        number: "01",
        name: "HTML",
        category: "FRONTEND",
        subtitle: "The structure of the web.",
        description:
            "Learn how to structure webpages and organise content. HTML is where every web developer begins.",
        icon: Code2,
        duration: "Weeks 1–2",
        topics: [
            "HTML document structure",
            "Headings and paragraphs",
            "Links and images",
            "Lists and tables",
            "Forms and input fields",
            "Semantic HTML",
        ],
    },
    {
        number: "02",
        name: "CSS",
        category: "FRONTEND",
        subtitle: "Give your ideas a visual identity.",
        description:
            "Transform simple webpages into attractive experiences with colours, typography, layouts and responsive design.",
        icon: Layers3,
        duration: "Weeks 3–5",
        topics: [
            "CSS selectors and properties",
            "Colours and typography",
            "Backgrounds and borders",
            "The box model",
            "Flexbox and CSS Grid",
            "Responsive web design",
            "Transitions and animations",
        ],
    },
    {
        number: "03",
        name: "JavaScript",
        category: "FRONTEND",
        subtitle: "Make things happen.",
        description:
            "Bring your websites to life. Learn programming fundamentals and make webpages respond to user actions.",
        icon: Braces,
        duration: "Weeks 6–9",
        topics: [
            "Variables and data types",
            "Operators and conditions",
            "Functions and scope",
            "Arrays and objects",
            "Loops and methods",
            "DOM manipulation",
            "Events and form validation",
            "Fetch API and promises",
        ],
    },
    {
        number: "04",
        name: "React",
        category: "FRONTEND",
        subtitle: "Build modern web applications.",
        description:
            "Discover how modern frontend applications are built using reusable components and interactive interfaces.",
        icon: Monitor,
        duration: "Weeks 10–12",
        topics: [
            "Introduction to React",
            "JSX and components",
            "Props and state",
            "Event handling",
            "useState and useEffect",
            "Conditional rendering",
            "Working with APIs",
            "Building React projects",
        ],
    },
    {
        number: "05",
        name: "PHP",
        category: "BACKEND",
        subtitle: "Bring your websites to life behind the scenes.",
        description:
            "Learn server-side programming and understand how websites process information, handle requests and communicate with databases.",
        icon: Server,
        duration: "Weeks 13–15",
        topics: [
            "Introduction to PHP",
            "PHP syntax and variables",
            "Data types and operators",
            "Conditions and loops",
            "Functions and arrays",
            "Form handling",
            "Sessions and cookies",
            "Connecting PHP to MySQL",
        ],
    },
    {
        number: "06",
        name: "MySQL",
        category: "BACKEND",
        subtitle: "Give your applications a place to store information.",
        description:
            "Understand databases and learn how to store, retrieve, organise and manage information for real-world applications.",
        icon: Database,
        duration: "Weeks 16–17",
        topics: [
            "Introduction to databases",
            "Creating databases",
            "Tables and data types",
            "SQL queries",
            "INSERT, SELECT, UPDATE and DELETE",
            "Primary and foreign keys",
            "Database relationships",
            "Connecting databases with PHP",
        ],
    },
];

const projects = [
    {
        number: "01",
        type: "HTML + CSS",
        title: "Personal Portfolio",
        description:
            "Design a professional personal website to introduce yourself and showcase your work.",
        icon: LaptopMinimal,
    },
    {
        number: "02",
        type: "JavaScript",
        title: "Interactive Web Experience",
        description:
            "Create a functional webpage with interactive elements, forms and dynamic content.",
        icon: Terminal,
    },
    {
        number: "03",
        type: "React",
        title: "Modern React Application",
        description:
            "Build an application using reusable components, state and interactive interfaces.",
        icon: Globe,
    },
    {
        number: "04",
        type: "PHP + MySQL",
        title: "Database-Driven Application",
        description:
            "Create a working application that processes forms, stores information and retrieves records from a database.",
        icon: Database,
    },
    {
        number: "05",
        type: "FULL STACK",
        title: "Complete Web Application",
        description:
            "Combine frontend and backend technologies to build a complete website with user registration, login and database functionality.",
        icon: Workflow,
    },
];

const faqs = [
    {
        question: "Do I need previous coding experience?",
        answer: "Not at all. The programme is designed for beginners. We'll start with the fundamentals and gradually introduce more advanced concepts.",
    },
    {
        question: "What do I need to start learning?",
        answer: "You'll need a laptop, internet access and a willingness to practise. We'll guide you through the software and tools you'll need.",
    },
    {
        question:
            "What is the difference between frontend and backend development?",
        answer: "Frontend development focuses on what users see and interact with on a website. Backend development handles the behind-the-scenes functionality, including processing information, managing databases and handling server requests.",
    },
    {
        question: "Why are PHP and MySQL included?",
        answer: "PHP helps you build the server-side functionality of websites, while MySQL stores and manages the information your applications need. Together, they help you build dynamic, database-driven websites.",
    },
    {
        question: "How long does the training take?",
        answer: "The proposed learning roadmap is 18 weeks, covering HTML, CSS, JavaScript, React, PHP and MySQL, followed by a full-stack project. The actual duration will depend on the training schedule.",
    },
    {
        question: "Will I work on practical projects?",
        answer: "Yes. You'll practise throughout the programme, progressing from simple webpages to interactive applications and complete full-stack projects.",
    },
    {
        question: "How do I register?",
        answer: "Click any of the WhatsApp registration buttons on this website. You'll be able to send us a message directly and receive information about joining.",
    },
];

function SectionTag({ children }) {
    return (
        <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c66d43]" />
            <span className="text-[11px] font-bold uppercase tracking-[.2em] text-[#b9633e]">
                {children}
            </span>
        </div>
    );
}

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState(0);

    const navItems = [
        ["Curriculum", "#curriculum"],
        ["Projects", "#projects"],
        ["Pricing", "#pricing"],
        ["FAQs", "#faq"],
    ];

    return (
        <main className="min-h-screen overflow-hidden bg-[#f6f3ec] text-[#20251f]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

                * { scroll-behavior: smooth; }
                body { font-family: 'DM Sans', sans-serif; }
                .display-font { font-family: 'Manrope', sans-serif; }
                .mono-font { font-family: 'DM Mono', monospace; }

                .hero-grid {
                    background-image:
                        linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
                    background-size: 44px 44px;
                }

                .course-card {
                    transition: transform .3s ease, border-color .3s ease;
                }

                .course-card:hover {
                    transform: translateY(-5px);
                    border-color: #c66d43;
                }

                .faq-answer {
                    animation: reveal .25s ease;
                }

                @keyframes reveal {
                    from { opacity: 0; transform: translateY(-5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            {/* NAVIGATION */}
            <header className="relative z-50 border-b border-[#e5e0d6] bg-[#f6f3ec]">
                <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
                    <a href="#" className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center bg-[#20251f] text-[#e9a47c]">
                            <Code2 size={23} />
                        </div>
                        <div>
                            <p className="display-font text-[16px] font-extrabold tracking-tight">
                                AMARIAH<span className="text-[#c66d43]">.</span>
                            </p>
                            <p className="mono-font text-[9px] uppercase tracking-[.17em] text-gray-500">
                                Full-Stack Academy
                            </p>
                        </div>
                    </a>

                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map(([label, href]) => (
                            <a
                                key={label}
                                href={href}
                                className="text-[13px] font-medium text-gray-600 transition hover:text-[#b9633e]"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    <a
                        href={whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden items-center gap-2 bg-[#20251f] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#b9633e] sm:flex"
                    >
                        Enquire now <ArrowUpRight size={15} />
                    </a>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-10 w-10 items-center justify-center border border-gray-300 md:hidden"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>

                {menuOpen && (
                    <div className="absolute left-0 top-full w-full border-b border-gray-200 bg-[#f6f3ec] px-6 py-7 shadow-lg md:hidden">
                        <div className="flex flex-col gap-6">
                            {navItems.map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm font-semibold"
                                >
                                    {label}
                                </a>
                            ))}
                            <a
                                href={whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#20251f] px-5 py-4 text-center text-sm font-bold text-white"
                            >
                                Contact us on WhatsApp
                            </a>
                        </div>
                    </div>
                )}
            </header>

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#20251f] text-white">
                <div className="hero-grid absolute inset-0 opacity-60" />
                <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-white/[.07]" />
                <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/[.08]" />

                <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-14 lg:py-28">
                    <div className="relative z-10">
                        <div className="mb-8 inline-flex items-center gap-3 border border-[#e9a47c]/30 bg-[#e9a47c]/10 px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-[#e9a47c]" />
                            <span className="mono-font text-[10px] uppercase tracking-[.15em] text-[#e9a47c]">
                                From your first line of code to full-stack.
                            </span>
                        </div>

                        <h1 className="display-font max-w-3xl text-[clamp(3.4rem,7vw,6.5rem)] font-extrabold leading-[.99] tracking-[-.075em]">
                            Build beyond
                            <span className="mt-2 block text-[#e9a47c]">
                                the frontend.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
                            Learn to design, develop and build complete websites
                            from the ground up. Master HTML, CSS, JavaScript and
                            React on the frontend, then explore PHP and MySQL to
                            build powerful backend systems.
                        </p>

                        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-[#e9a47c] px-7 py-4 text-sm font-extrabold text-[#20251f] transition hover:bg-white"
                            >
                                Begin your journey <ArrowUpRight size={18} />
                            </a>
                            <a
                                href="#curriculum"
                                className="inline-flex items-center justify-center gap-3 border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#e9a47c] hover:text-[#e9a47c]"
                            >
                                Explore the curriculum <ArrowRight size={17} />
                            </a>
                        </div>

                        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/15 pt-7">
                            {[
                                ["06", "Core technologies"],
                                ["18", "Proposed weeks"],
                                ["01", "Complete journey"],
                            ].map(([value, label]) => (
                                <div key={label}>
                                    <p className="display-font text-2xl font-extrabold">
                                        {value}
                                    </p>
                                    <p className="mono-font mt-1 text-[9px] uppercase tracking-widest text-gray-400">
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CODE PANEL */}
                    <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
                        <div className="absolute -right-5 -top-5 h-24 w-24 border-r border-t border-[#e9a47c]/60" />
                        <div className="absolute -bottom-5 -left-5 h-24 w-24 border-b border-l border-[#e9a47c]/60" />

                        <div className="relative overflow-hidden border border-white/15 bg-[#2a332b] shadow-2xl">
                            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                <div className="flex gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#d98b70]" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#e5bd79]" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#a4b88a]" />
                                </div>
                                <span className="mono-font text-[10px] text-gray-400">
                                    full-stack-journey
                                </span>
                                <Code2 size={16} className="text-[#e9a47c]" />
                            </div>

                            <div className="p-6 sm:p-9">
                                <div className="mono-font space-y-4 text-xs leading-7 sm:text-sm">
                                    <p className="text-gray-500">
                                        // Your journey into web development.
                                    </p>
                                    <p>
                                        <span className="text-[#d8a8ef]">
                                            const
                                        </span>{" "}
                                        <span className="text-[#e9a47c]">
                                            myJourney
                                        </span>{" "}
                                        = {"{"}
                                    </p>
                                    <p className="pl-5">
                                        <span className="text-[#9bd5ed]">
                                            frontend
                                        </span>
                                        : {"["}
                                        <span className="text-[#e5bd79]">
                                            "HTML", "CSS",
                                        </span>
                                    </p>
                                    <p className="pl-14 text-[#e5bd79]">
                                        "JavaScript", "React"
                                    </p>
                                    <p className="pl-5">{"],"} </p>
                                    <p className="pl-5">
                                        <span className="text-[#9bd5ed]">
                                            backend
                                        </span>
                                        : {"["}
                                        <span className="text-[#e5bd79]">
                                            "PHP", "MySQL"
                                        </span>
                                        {"]"},
                                    </p>
                                    <p className="pl-5">
                                        <span className="text-[#9bd5ed]">
                                            goal
                                        </span>
                                        :{" "}
                                        <span className="text-[#e5bd79]">
                                            "Build complete websites"
                                        </span>
                                    </p>
                                    <p>{"};"}</p>
                                    <div className="border-t border-white/10 pt-5">
                                        <p className="text-gray-500">
                                            // Everything starts with a first
                                            step.
                                        </p>
                                        <p>
                                            <span className="text-[#d8a8ef]">
                                                startLearning
                                            </span>
                                            ();
                                            <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-[#e9a47c] align-middle" />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between bg-[#e9a47c] px-5 py-3 text-[#20251f]">
                                <span className="mono-font text-[10px] font-bold uppercase tracking-widest">
                                    Learn. Practise. Create.
                                </span>
                                <ArrowUpRight size={17} />
                            </div>
                        </div>

                        <div className="absolute -bottom-10 -right-2 hidden items-center gap-3 border border-white/15 bg-[#303b32] p-4 shadow-xl sm:flex">
                            <div className="flex h-10 w-10 items-center justify-center bg-[#e9a47c] text-[#20251f]">
                                <Laptop size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold">
                                    Learn by building
                                </p>
                                <p className="mt-1 text-[10px] text-gray-400">
                                    Frontend and backend training
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative border-t border-white/10">
                    <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-14">
                        <p className="mono-font text-[10px] uppercase tracking-[.2em] text-gray-400">
                            The technologies you'll learn
                        </p>
                        <div className="flex flex-wrap gap-x-8 gap-y-3">
                            {[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "React",
                                "PHP",
                                "MySQL",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="display-font text-sm font-bold text-white/80"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-14 lg:py-32">
                <div>
                    <SectionTag>Why Amariah?</SectionTag>
                    <h2 className="display-font max-w-md text-4xl font-extrabold leading-[1.12] tracking-[-.055em] sm:text-5xl">
                        You don't have to know everything to get started.
                    </h2>
                </div>

                <div className="flex flex-col justify-end">
                    <p className="max-w-2xl text-base leading-8 text-gray-600">
                        Every skilled developer was once a beginner. Our
                        training takes you through web development step by step,
                        from creating beautiful user interfaces to understanding
                        the systems that power them. Learn the fundamentals,
                        practise your skills and build complete websites of your
                        own.
                    </p>

                    <div className="mt-9 grid gap-7 border-t border-[#e3ded4] pt-7 sm:grid-cols-3">
                        <div>
                            <BookOpen
                                size={22}
                                className="mb-4 text-[#b9633e]"
                            />
                            <h3 className="text-sm font-bold">
                                Understand the basics
                            </h3>
                            <p className="mt-2 text-xs leading-6 text-gray-500">
                                Build a solid foundation before moving to
                                advanced concepts.
                            </p>
                        </div>
                        <div>
                            <Laptop size={22} className="mb-4 text-[#b9633e]" />
                            <h3 className="text-sm font-bold">
                                Practise consistently
                            </h3>
                            <p className="mt-2 text-xs leading-6 text-gray-500">
                                Apply your lessons through exercises and
                                practical projects.
                            </p>
                        </div>
                        <div>
                            <GraduationCap
                                size={22}
                                className="mb-4 text-[#b9633e]"
                            />
                            <h3 className="text-sm font-bold">
                                Become independent
                            </h3>
                            <p className="mt-2 text-xs leading-6 text-gray-500">
                                Develop the confidence to build complete web
                                applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CURRICULUM */}
            <section
                id="curriculum"
                className="bg-[#eae8df] px-5 py-24 sm:px-8 lg:px-14 lg:py-32"
            >
                <div className="mx-auto max-w-[1400px]">
                    <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
                        <div>
                            <SectionTag>The curriculum</SectionTag>
                            <h2 className="display-font max-w-2xl text-4xl font-extrabold tracking-[-.06em] sm:text-6xl">
                                Six technologies.
                                <br />
                                <span className="text-[#b9633e]">
                                    One complete journey.
                                </span>
                            </h2>
                        </div>
                        <p className="max-w-sm text-sm leading-7 text-gray-600">
                            A structured learning path that takes you from your
                            first HTML element to building full-stack
                            applications with working databases.
                        </p>
                    </div>

                    {/* FRONTEND LABEL */}
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#b9633e]" />
                        <h3 className="mono-font text-xs font-bold uppercase tracking-[.2em]">
                            01 / Frontend Development
                        </h3>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {curriculum
                            .filter((course) => course.category === "FRONTEND")
                            .map((course) => {
                                const Icon = course.icon;
                                return (
                                    <article
                                        key={course.number}
                                        className="course-card border border-[#d9d5ca] bg-[#f6f3ec] p-7 sm:p-9"
                                    >
                                        <div className="mb-9 flex items-center justify-between">
                                            <span className="mono-font text-xs text-gray-400">
                                                MODULE / {course.number}
                                            </span>
                                            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#b9633e]">
                                                <Icon size={15} />{" "}
                                                {course.duration}
                                            </span>
                                        </div>
                                        <h3 className="display-font text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">
                                            {course.name}
                                        </h3>
                                        <p className="mt-2 text-lg font-semibold text-[#b9633e]">
                                            {course.subtitle}
                                        </p>
                                        <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600">
                                            {course.description}
                                        </p>
                                        <div className="my-7 h-px bg-[#e3ded4]" />
                                        <p className="mono-font mb-5 text-[10px] font-bold uppercase tracking-[.16em] text-gray-500">
                                            What you'll learn
                                        </p>
                                        <ul className="grid gap-3 sm:grid-cols-2">
                                            {course.topics.map((topic) => (
                                                <li
                                                    key={topic}
                                                    className="flex items-start gap-2 text-xs leading-5 text-gray-700"
                                                >
                                                    <Check
                                                        size={14}
                                                        className="mt-0.5 shrink-0 text-[#b9633e]"
                                                    />
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                );
                            })}
                    </div>

                    {/* BACKEND LABEL */}
                    <div className="mb-6 mt-16 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#b9633e]" />
                        <h3 className="mono-font text-xs font-bold uppercase tracking-[.2em]">
                            02 / Backend Development
                        </h3>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {curriculum
                            .filter((course) => course.category === "BACKEND")
                            .map((course) => {
                                const Icon = course.icon;
                                return (
                                    <article
                                        key={course.number}
                                        className="course-card border border-[#d9d5ca] bg-[#f6f3ec] p-7 sm:p-9"
                                    >
                                        <div className="mb-9 flex items-center justify-between">
                                            <span className="mono-font text-xs text-gray-400">
                                                MODULE / {course.number}
                                            </span>
                                            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#b9633e]">
                                                <Icon size={15} />{" "}
                                                {course.duration}
                                            </span>
                                        </div>
                                        <h3 className="display-font text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">
                                            {course.name}
                                        </h3>
                                        <p className="mt-2 text-lg font-semibold text-[#b9633e]">
                                            {course.subtitle}
                                        </p>
                                        <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600">
                                            {course.description}
                                        </p>
                                        <div className="my-7 h-px bg-[#e3ded4]" />
                                        <p className="mono-font mb-5 text-[10px] font-bold uppercase tracking-[.16em] text-gray-500">
                                            What you'll learn
                                        </p>
                                        <ul className="grid gap-3 sm:grid-cols-2">
                                            {course.topics.map((topic) => (
                                                <li
                                                    key={topic}
                                                    className="flex items-start gap-2 text-xs leading-5 text-gray-700"
                                                >
                                                    <Check
                                                        size={14}
                                                        className="mt-0.5 shrink-0 text-[#b9633e]"
                                                    />
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                );
                            })}
                    </div>

                    <div className="mt-8 flex flex-col gap-4 border border-[#d9d5ca] bg-[#f6f3ec] p-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center bg-[#20251f] text-[#e9a47c]">
                                <Workflow size={23} />
                            </div>
                            <div>
                                <h3 className="font-bold">
                                    Final stage / Full-stack development
                                </h3>
                                <p className="mt-1 text-xs text-gray-500">
                                    Week 18 · Bring everything together in one
                                    complete project.
                                </p>
                            </div>
                        </div>
                        <span className="mono-font text-[10px] font-bold uppercase tracking-widest text-[#b9633e]">
                            Build something real
                        </span>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section
                id="projects"
                className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32"
            >
                <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
                    <div>
                        <SectionTag>Practical learning</SectionTag>
                        <h2 className="display-font max-w-lg text-4xl font-extrabold leading-[1.12] tracking-[-.06em] sm:text-5xl">
                            Don't just learn the code.
                            <span className="text-[#b9633e]">
                                {" "}
                                Put it to work.
                            </span>
                        </h2>
                        <p className="mt-6 max-w-md text-sm leading-7 text-gray-600">
                            You'll practise what you learn by creating projects,
                            gradually progressing from simple webpages to
                            complete applications powered by databases.
                        </p>
                        <a
                            href={whatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#b9633e] pb-2 text-sm font-bold transition hover:gap-5"
                        >
                            Start learning today <ArrowRight size={17} />
                        </a>
                    </div>

                    <div className="space-y-3">
                        {projects.map((project) => {
                            const Icon = project.icon;
                            return (
                                <div
                                    key={project.number}
                                    className="group grid grid-cols-[50px_1fr_auto] items-center gap-4 border-b border-[#e3ded4] py-7 transition hover:bg-[#f3f0e8] sm:grid-cols-[70px_1fr_auto] sm:px-5"
                                >
                                    <span className="mono-font text-xs text-[#b9633e]">
                                        {project.number}
                                    </span>
                                    <div>
                                        <span className="mono-font text-[9px] uppercase tracking-[.15em] text-gray-400">
                                            {project.type}
                                        </span>
                                        <h3 className="display-font mt-1 text-xl font-bold tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 max-w-md text-xs leading-6 text-gray-500">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="flex h-11 w-11 items-center justify-center border border-gray-300 transition group-hover:border-[#b9633e] group-hover:bg-[#e9a47c]">
                                        <Icon size={19} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* TRAINING BENEFITS */}
            <section className="bg-[#20251f] px-5 py-20 text-white sm:px-8 lg:px-14">
                <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <SectionTag>Designed for beginners</SectionTag>
                        <h2 className="display-font max-w-xl text-4xl font-extrabold leading-[1.1] tracking-[-.06em] sm:text-5xl">
                            A learning experience built around progress.
                        </h2>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2">
                        {[
                            {
                                icon: Clock3,
                                title: "Structured lessons",
                                text: "Follow a proposed learning roadmap that introduces each technology in the right order.",
                            },
                            {
                                icon: MessageCircle,
                                title: "Learning guidance",
                                text: "Ask questions and get guidance as you work through the training.",
                            },
                            {
                                icon: Terminal,
                                title: "Practical exercises",
                                text: "Write code, solve problems and apply concepts through practice.",
                            },
                            {
                                icon: Lightbulb,
                                title: "Full-stack projects",
                                text: "Bring your frontend and backend knowledge together to build complete applications.",
                            },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="border-l border-[#e9a47c] pl-5"
                                >
                                    <Icon
                                        size={22}
                                        className="mb-4 text-[#e9a47c]"
                                    />
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p className="mt-2 text-xs leading-6 text-gray-400">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section
                id="pricing"
                className="bg-[#eae8df] px-5 py-24 sm:px-8 lg:px-14 lg:py-32"
            >
                <div className="mx-auto max-w-[1100px]">
                    <div className="mx-auto mb-14 max-w-xl text-center">
                        <SectionTag>Programme investment</SectionTag>
                        <h2 className="display-font text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">
                            Invest in what you can create.
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-gray-600">
                            One complete learning path, from your first webpage
                            to building full-stack applications.
                        </p>
                    </div>

                    <div className="grid overflow-hidden border border-[#d6d1c5] bg-[#f6f3ec] lg:grid-cols-[1fr_1.1fr]">
                        <div className="p-8 sm:p-11">
                            <span className="mono-font text-[10px] font-bold uppercase tracking-[.18em] text-[#b9633e]">
                                Complete full-stack programme
                            </span>
                            <h3 className="display-font mt-5 text-3xl font-extrabold tracking-tight">
                                The Full Journey
                            </h3>
                            <p className="mt-3 max-w-sm text-sm leading-7 text-gray-500">
                                A complete introduction to frontend and backend
                                web development for aspiring developers.
                            </p>

                            <div className="mt-9">
                                <span className="mono-font text-xs text-gray-500">
                                    SUGGESTED TRAINING FEE
                                </span>
                                <div className="mt-2 flex items-start gap-2">
                                    <span className="mt-2 text-xl font-bold">
                                        ₦
                                    </span>
                                    <span className="display-font text-6xl font-extrabold tracking-[-.07em]">
                                        250,000
                                    </span>
                                </div>
                                <p className="mt-3 text-xs text-gray-500">
                                    Suggested one-time payment for the full
                                    programme.
                                </p>
                            </div>

                            <a
                                href={whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-9 flex w-full items-center justify-center gap-3 bg-[#20251f] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#b9633e]"
                            >
                                Enrol through WhatsApp{" "}
                                <ArrowUpRight size={17} />
                            </a>
                            <p className="mt-4 text-center text-[10px] text-gray-400">
                                Contact us for registration details and
                                available dates.
                            </p>
                        </div>

                        <div className="bg-[#20251f] p-8 text-white sm:p-11">
                            <p className="mono-font text-[10px] font-bold uppercase tracking-[.18em] text-[#e9a47c]">
                                Your programme includes
                            </p>
                            <h3 className="display-font mt-5 text-2xl font-bold">
                                Everything starts with the fundamentals.
                            </h3>
                            <div className="mt-8 space-y-5">
                                {[
                                    ["HTML", "Website structure and content"],
                                    [
                                        "CSS",
                                        "Styling, layouts and responsive design",
                                    ],
                                    [
                                        "JavaScript",
                                        "Programming logic and interactivity",
                                    ],
                                    [
                                        "React",
                                        "Components and modern applications",
                                    ],
                                    [
                                        "PHP",
                                        "Server-side programming and form processing",
                                    ],
                                    [
                                        "MySQL",
                                        "Database creation and management",
                                    ],
                                    [
                                        "Practical projects",
                                        "Apply your knowledge as you learn",
                                    ],
                                    [
                                        "Learning guidance",
                                        "Get help throughout your training",
                                    ],
                                ].map(([title, description]) => (
                                    <div
                                        key={title}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-[#e9a47c] text-[#20251f]">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">
                                                {title}
                                            </p>
                                            <p className="mt-1 text-xs leading-5 text-gray-400">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="mx-auto mt-6 max-w-2xl text-center text-[11px] leading-6 text-gray-500">
                        The displayed fee is a suggested price. Confirm the
                        actual fee, schedule, payment arrangements and training
                        format before publishing.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section
                id="faq"
                className="mx-auto max-w-[1100px] px-5 py-24 sm:px-8 lg:py-32"
            >
                <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
                    <div>
                        <SectionTag>Frequently asked questions</SectionTag>
                        <h2 className="display-font text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">
                            Before you take the first step.
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-gray-500">
                            Have another question? Send us a message. We'll be
                            happy to provide more information.
                        </p>
                        <a
                            href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hello! I have a question about Amariah Full-Stack Academy.")}`}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#b9633e]"
                        >
                            Ask us on WhatsApp <ArrowUpRight size={16} />
                        </a>
                    </div>

                    <div className="border-t border-[#e3ded4]">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.question}
                                className="border-b border-[#e3ded4]"
                            >
                                <button
                                    onClick={() =>
                                        setActiveFaq(
                                            activeFaq === index ? -1 : index,
                                        )
                                    }
                                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                                    aria-expanded={activeFaq === index}
                                >
                                    <span className="text-sm font-bold sm:text-base">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        size={18}
                                        className={`shrink-0 text-[#b9633e] transition-transform ${activeFaq === index ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {activeFaq === index && (
                                    <p className="faq-answer max-w-xl pb-6 pr-8 text-sm leading-7 text-gray-500">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CALL TO ACTION */}
            <section className="px-5 pb-16 sm:px-8 lg:px-14">
                <div className="relative mx-auto max-w-[1400px] overflow-hidden bg-[#e9a47c] px-7 py-16 sm:px-14 sm:py-20">
                    <div className="absolute -right-12 -top-28 h-80 w-80 rounded-full border border-[#20251f]/15" />
                    <div className="absolute -right-1 -top-16 h-56 w-56 rounded-full border border-[#20251f]/15" />

                    <div className="relative z-10 max-w-3xl">
                        <span className="mono-font text-[10px] font-bold uppercase tracking-[.2em] text-[#533c30]">
                            Your journey starts with a decision
                        </span>
                        <h2 className="display-font mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-.065em] sm:text-6xl">
                            Learn to build the entire experience, not just what
                            people see.
                        </h2>
                        <p className="mt-6 max-w-xl text-sm leading-7 text-[#533c30]">
                            Start with the basics, explore the world of
                            programming, understand how websites work behind the
                            scenes and give yourself the opportunity to create
                            something meaningful.
                        </p>
                        <a
                            href={whatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-9 inline-flex items-center gap-3 bg-[#20251f] px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#20251f]"
                        >
                            <MessageCircle size={18} />
                            Start learning with Amariah
                            <ArrowUpRight size={17} />
                        </a>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#20251f] px-5 py-12 text-white sm:px-8 lg:px-14">
                <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 border-b border-white/10 pb-10 md:flex-row md:items-center">
                    <div>
                        <a
                            href="#"
                            className="display-font text-xl font-extrabold tracking-tight"
                        >
                            AMARIAH<span className="text-[#e9a47c]">.</span>
                        </a>
                        <p className="mt-2 text-xs text-gray-400">
                            Full-Stack Academy. Learn. Build. Grow.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-x-7 gap-y-4 text-xs text-gray-300">
                        {navItems.map(([label, href]) => (
                            <a
                                key={label}
                                href={href}
                                className="transition hover:text-[#e9a47c]"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    <a
                        href={whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-[#e9a47c] transition hover:text-white"
                    >
                        <MessageCircle size={18} />
                        09060976683
                        <ArrowUpRight size={15} />
                    </a>
                </div>

                <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 pt-7 text-[10px] text-gray-500 sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} Amariah Full-Stack Academy.
                        All rights reserved.
                    </p>
                    <p>Built for the next generation of web developers.</p>
                </div>
            </footer>

            {/* FLOATING WHATSAPP BUTTON */}
            <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Contact Amariah on WhatsApp"
                className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#20251f] text-[#e9a47c] shadow-xl transition hover:scale-105 hover:bg-[#e9a47c] hover:text-[#20251f] sm:bottom-8 sm:right-8"
            >
                <MessageCircle size={25} />
            </a>
        </main>
    );
}

export default App;
