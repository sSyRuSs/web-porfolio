"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Star,
  GitFork,
  GitCommit,
  Code2,
  Trophy,
  Eye,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.NODE_ENV === "production" ? "/web-porfolio" : "");

  const [isDark, setIsDark] = useState(false);
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  const slideVariants = {
    hidden: (direction: "left" | "right") => ({
      opacity: 0,
      x: direction === "left" ? -32 : 32,
    }),
    show: { opacity: 1, x: 0 },
  };

  const staggerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const sectionMotion = {
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0.2 },
    variants: sectionVariants,
  } as const;

  // Animation variants
  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  } as const;

  const rotateVariants = {
    hidden: { opacity: 0, rotate: -10 },
    show: {
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", duration: 0.8 },
    },
  } as const;

  const glowVariants = {
    hidden: { boxShadow: "0 0 0px rgba(0,0,0,0)" },
    show: {
      boxShadow: [
        "0 0 0px rgba(0,0,0,0)",
        "0 0 20px rgba(59, 130, 246, 0.5)",
        "0 0 0px rgba(0,0,0,0)",
      ],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  // Counter component
  const Counter = ({ value }: { value: string }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;

    useEffect(() => {
      let current = 0;
      const increment = Math.ceil(numericValue / 50);
      const interval = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(numericValue);
          clearInterval(interval);
        } else {
          setDisplayValue(current);
        }
      }, 20);
      return () => clearInterval(interval);
    }, [numericValue]);

    return (
      <>
        {displayValue}
        {value.replace(/[0-9]/g, "")}
      </>
    );
  };

  // GitHub username - thay bằng username thật của bạn
  const githubUsername = "sSyRuSs";

  const projects = [
    {
      id: 1,
      title: "ERP-CMMS System",
      description:
        "A modern web application built with Next.js and Spring Boot",
      tags: ["Next.js", "Spring Boot", "Flutter"],
      github: `https://github.com/${githubUsername}/erp-cmms-system`,
      link: "#",
      stars: 45,
      forks: 12,
    },
    {
      id: 2,
      title: "STPMS",
      description: "HUIT Student Training Point Management System",
      tags: [".NET", "Flutter", "Azure"],
      github: `https://github.com/${githubUsername}/stpms`,
      link: "#",
      stars: 32,
      forks: 8,
    },
    {
      id: 3,
      title: "Agricultural Auction Web System",
      description: "A web-based auction system for agricultural products",
      tags: ["Spring Boot", "Jenkins", "NextJS"],
      github: `https://github.com/${githubUsername}/agricultural-auction-web-system`,
      link: "#",
      stars: 28,
      forks: 5,
    },
  ];

  const experience = [
    {
      year: "2024",
      title: "Senior Developer",
      company: "Tech Company",
      description:
        "Leading frontend development and mentoring junior developers",
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "StartUp Co",
      description: "Built and deployed multiple production applications",
    },
    {
      year: "2022",
      title: "Junior Developer",
      company: "First Company",
      description: "Started my journey in web development",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Product Manager",
      company: "Tech Corp",
      text: "Amazing work on our project. Very professional and delivers on time.",
    },
    {
      name: "Jane Smith",
      role: "CEO",
      company: "StartUp Inc",
      text: "Great developer with excellent problem-solving skills.",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "20+" },
    { label: "Years Experience", value: "3+" },
    { label: "Happy Clients", value: "15+" },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Spring Boot", ".NET", "PostgreSQL", "REST API"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Jenkins CI/CD", "VS Code"],
    },
    {
      category: "Other",
      items: ["Web Design", "Performance", "Accessibility"],
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const filteredProjects = filterTag
    ? projects.filter((p) => p.tags.includes(filterTag))
    : projects;

  const copyEmail = () => {
    navigator.clipboard.writeText("your-email@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="text-lg font-semibold tracking-tight">
              Nguyễn Thành Long
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  contactRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Contact
              </button>
              <Button
                onClick={() => setIsDark(!isDark)}
                variant="ghost"
                size="sm"
                className="hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                {isDark ? "Light" : "Dark"}
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.section
          {...sectionMotion}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
        >
          <motion.div
            variants={staggerVariants}
            className="grid md:grid-cols-[auto_1fr] gap-12 items-center"
          >
            {/* Profile Image */}
            <motion.div
              variants={rotateVariants}
              whileInView="show"
              initial="hidden"
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div
                variants={glowVariants}
                whileInView="show"
                initial="hidden"
                viewport={{ once: true }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 transition-all group-hover:border-gray-400 dark:group-hover:border-gray-600"
              >
                <Image
                  src={`${basePath}/images/IMG_9092.JPG`}
                  alt="Profile"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-2xl border border-gray-200 dark:border-gray-800 -z-10 group-hover:border-gray-300 dark:group-hover:border-gray-700 transition-all"></div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400">
                  Hi, I'm a developer
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                  I create clean, functional web experiences. Focused on
                  building simple solutions to complex problems.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  <Link href="#projects">View Work</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  onClick={scrollToContact}
                  className="border-purple-500 dark:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950"
                >
                  <span>Get in Touch</span>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-cyan-500 dark:border-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-950"
                >
                  <a href={`${basePath}/Long-Nguyen-Thanh-CV.pdf`} download>
                    Download CV
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          {...sectionMotion}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800"
        >
          <motion.div
            variants={staggerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image Side */}
            <motion.div variants={scaleVariants} className="order-2 md:order-1">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <Image
                    src={`${basePath}/images/IMG_9092.JPG`}
                    alt="About me"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gray-200 dark:border-gray-800 rounded-2xl -z-10"></div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              variants={itemVariants}
              className="order-1 md:order-2 space-y-6"
            >
              <div>
                <h2 className="text-3xl font-light tracking-tight mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
                  About Me
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    I'm a passionate Back-End Developer with hands-on experience
                    building scalable, high-performance systems, especially in
                    ERP-related domains. My main focus is on Java Spring Boot
                    and .NET, and I love automating workflows with Jenkins and
                    optimizing caching with Redis.
                  </p>
                  <p>
                    I enjoy turning complex requirements into reliable services
                    with clean architecture, solid testing, and performance in
                    mind. I'm always eager to learn the latest in backend tech
                    and DevOps.
                  </p>
                  <p>
                    When I'm not coding, you'll find me collaborating on open
                    source or connecting with like-minded developers in the
                    community.
                  </p>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium min-w-[100px]">Location:</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    Vietnam
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium min-w-[100px]">Experience:</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    2+ Years
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium min-w-[100px]">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    Open to opportunities
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          {...sectionMotion}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800"
        >
          <motion.div
            variants={staggerVariants}
            className="grid grid-cols-3 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleVariants}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-light tracking-tight mb-2">
                  <Counter value={stat.value} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          {...sectionMotion}
          id="projects"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-light tracking-tight mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
            Projects
          </h2>

          {/* Filter Tags */}
          <div className="mb-12 flex flex-wrap gap-2">
            <button
              onClick={() => setFilterTag(null)}
              className={`px-3 py-1 text-sm border rounded transition-colors ${
                filterTag === null
                  ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
                  : "border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-3 py-1 text-sm border rounded transition-colors ${
                  filterTag === tag
                    ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
                    : "border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <motion.div
            key={filterTag ?? "all"}
            variants={staggerVariants}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={slideVariants}
                custom={idx % 2 === 0 ? "left" : "right"}
              >
                <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-medium">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs font-normal cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                          onClick={() => setFilterTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400 mb-3">
                      <span>⭐ {project.stars}</span>
                      <span>🔀 {project.forks}</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <Link
                          href={project.link}
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={14} />
                          View
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* GitHub Stats Section */}
        <motion.section
          {...sectionMotion}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-light tracking-tight mb-12 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent dark:from-orange-400 dark:to-red-400">
            GitHub Activity
          </h2>

          {/* Stats Grid with Icons */}
          <motion.div
            variants={staggerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="border-gray-200 dark:border-gray-800">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Code2
                      size={20}
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <CardTitle className="text-sm font-medium">
                      Repositories
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-light">50+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Public repos
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-gray-200 dark:border-gray-800">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Star
                      size={20}
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <CardTitle className="text-sm font-medium">
                      Stars Earned
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-light">200+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Across projects
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-gray-200 dark:border-gray-800">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <GitCommit
                      size={20}
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <CardTitle className="text-sm font-medium">
                      Contributions
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-light">1.2K+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    This year
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-gray-200 dark:border-gray-800">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Users
                      size={20}
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <CardTitle className="text-sm font-medium">
                      Followers
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-light">150+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    GitHub followers
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contribution Streak */}
          <motion.div variants={itemVariants}>
            <Card className="border-gray-200 dark:border-gray-800 mb-12">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar
                      size={20}
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <CardTitle className="text-base">
                      Contribution Streak
                    </CardTitle>
                  </div>
                  <TrendingUp
                    size={20}
                    className="text-gray-600 dark:text-gray-400"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-2xl font-light mb-1">45</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Current Streak
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-light mb-1">120</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Longest Streak
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-light mb-1">365</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Days Active
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Languages */}
          <motion.div variants={itemVariants}>
            <Card className="border-gray-200 dark:border-gray-800 mb-12">
              <CardHeader>
                <CardTitle className="text-base">Top Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "TypeScript", percent: 45, color: "bg-blue-500" },
                    { name: "JavaScript", percent: 30, color: "bg-yellow-500" },
                    { name: "Python", percent: 15, color: "bg-green-500" },
                    { name: "CSS", percent: 10, color: "bg-purple-500" },
                  ].map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{lang.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {lang.percent}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${lang.color}`}
                          style={{ width: `${lang.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={staggerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={itemVariants}>
              <Card className="border-gray-200 dark:border-gray-800 text-center">
                <CardContent className="pt-6">
                  <Trophy className="mx-auto mb-3 text-yellow-500" size={32} />
                  <p className="text-sm font-medium mb-1">Top Contributor</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Open Source
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-gray-200 dark:border-gray-800 text-center">
                <CardContent className="pt-6">
                  <Star className="mx-auto mb-3 text-orange-500" size={32} />
                  <p className="text-sm font-medium mb-1">Early Adopter</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    GitHub Actions
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-gray-200 dark:border-gray-800 text-center">
                <CardContent className="pt-6">
                  <GitFork className="mx-auto mb-3 text-blue-500" size={32} />
                  <p className="text-sm font-medium mb-1">Collaborator</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    20+ Projects
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-gray-200 dark:border-gray-800 text-center">
                <CardContent className="pt-6">
                  <Eye className="mx-auto mb-3 text-green-500" size={32} />
                  <p className="text-sm font-medium mb-1">Profile Views</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    5K+ visits
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* GitHub Link */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Button asChild variant="outline">
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={16} />
                View Full GitHub Profile
              </a>
            </Button>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          {...sectionMotion}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-light tracking-tight mb-12 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-400">
            Experience
          </h2>
          <motion.div variants={staggerVariants} className="space-y-8">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-6"
              >
                <div className="min-w-fit">
                  <div className="text-sm font-semibold">{exp.year}</div>
                </div>
                <div className="pb-8 border-l border-gray-200 dark:border-gray-800 pl-6">
                  <h3 className="text-base font-medium mb-1">{exp.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          {...sectionMotion}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-light tracking-tight mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            Skills
          </h2>

          {/* Tech Stack Badges */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-sm font-medium mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              <img
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                alt="React"
              />
              <img
                src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
                alt="Next.js"
              />
              <img
                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
              />
              <img
                src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                alt="Tailwind CSS"
              />
              <img
                src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
                alt="Node.js"
              />
              <img
                src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
                alt="PostgreSQL"
              />
              <img
                src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
                alt="Git"
              />
              <img
                src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"
                alt="Docker"
              />
              <img
                src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"
                alt="VS Code"
              />
              <img
                src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"
                alt="Spring Boot"
              />
              <img
                src="https://img.shields.io/badge/Jenkins_CI%2FCD-D24939?style=for-the-badge&logo=jenkins&logoColor=white"
                alt="Jenkins CI/CD"
              />
              <img
                src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white"
                alt=".NET"
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="space-y-3"
              >
                <h3 className="text-sm font-medium">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          {...sectionMotion}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-light tracking-tight mb-12 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent dark:from-pink-400 dark:to-rose-400">
            Testimonials
          </h2>
          <motion.div
            variants={staggerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={slideVariants}
                custom={idx % 2 === 0 ? "left" : "right"}
              >
                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <CardTitle className="text-base">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {testimonial.role} at {testimonial.company}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Blog/Articles Section */}
        <motion.section
          {...sectionMotion}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-light tracking-tight mb-12 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">
            Latest Articles
          </h2>
          <motion.div
            variants={staggerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                title: "Building Modern Web Apps",
                date: "Jan 2024",
                excerpt: "Best practices for Next.js development",
              },
              {
                title: "TypeScript Tips",
                date: "Dec 2023",
                excerpt: "Advanced TypeScript patterns and techniques",
              },
            ].map((article, idx) => (
              <motion.div
                key={idx}
                variants={slideVariants}
                custom={idx % 2 === 0 ? "left" : "right"}
              >
                <Card className="border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-base">{article.title}</CardTitle>
                    <CardDescription className="text-xs">
                      {article.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {article.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          {...sectionMotion}
          ref={contactRef}
          id="contact"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-light tracking-tight mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Get in Touch
          </h2>
          <motion.div
            variants={staggerVariants}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400">
                Have a project or question? Feel free to reach out. I'm always
                interested in hearing about new opportunities.
              </p>

              {/* Email Copy Button */}
              <div className="space-y-2">
                <p className="text-sm font-medium">Email</p>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-sm"
                >
                  <Copy size={16} />
                  {copied ? "Copied!" : "thanhlong1393@gmail.com"}
                </button>
              </div>

              {/* Social Links */}
              <div className="space-y-2">
                <p className="text-sm font-medium">Follow</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/sSyRuSs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nguyexenlong0504"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleFormSubmit}
              className="space-y-4"
            >
              <div>
                <label className="text-sm font-medium block mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </motion.form>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-8">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  © 2024. Built with Next.js & shadcn/ui
                </p>
              </div>
              <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                <a
                  href="#"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="hover:text-black dark:hover:text-white transition-colors"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
