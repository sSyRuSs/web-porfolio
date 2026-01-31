"use client";

import { useState, useRef } from "react";
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
  const [isDark, setIsDark] = useState(false);
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const contactRef = useRef<HTMLDivElement>(null);

  // GitHub username - thay bằng username thật của bạn
  const githubUsername = "yourusername";

  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A modern web application built with Next.js and TypeScript",
      tags: ["Next.js", "React", "TypeScript"],
      github: `https://github.com/${githubUsername}/project-one`,
      link: "#",
      stars: 45,
      forks: 12,
    },
    {
      id: 2,
      title: "Project Two",
      description: "Full-stack application with real-time features",
      tags: ["Node.js", "React", "WebSocket"],
      github: `https://github.com/${githubUsername}/project-two`,
      link: "#",
      stars: 32,
      forks: 8,
    },
    {
      id: 3,
      title: "Project Three",
      description: "Mobile-first responsive design implementation",
      tags: ["HTML", "CSS", "JavaScript"],
      github: `https://github.com/${githubUsername}/project-three`,
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
      items: ["Node.js", "PostgreSQL", "REST API"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "VS Code"],
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
              Portfolio
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
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 transition-all group-hover:border-gray-400 dark:group-hover:border-gray-600">
                <Image
                  src="/images/IMG_9092.JPG"
                  alt="Profile"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-2xl border border-gray-200 dark:border-gray-800 -z-10 group-hover:border-gray-300 dark:group-hover:border-gray-700 transition-all"></div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-4">
                  Hi, I'm a developer
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                  I create clean, functional web experiences. Focused on
                  building simple solutions to complex problems.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild>
                  <Link href="#projects">View Work</Link>
                </Button>
                <Button asChild variant="outline" onClick={scrollToContact}>
                  <span>Get in Touch</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <Image
                    src="/images/IMG_9092.JPG"
                    alt="About me"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gray-200 dark:border-gray-800 rounded-2xl -z-10"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h2 className="text-3xl font-light tracking-tight mb-4">
                  About Me
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    I'm a passionate developer with a focus on creating clean,
                    efficient, and user-friendly web applications. With years of
                    experience in modern web technologies, I bring ideas to life
                    through code.
                  </p>
                  <p>
                    My approach combines technical expertise with a keen eye for
                    design, ensuring that every project not only works
                    flawlessly but also provides an exceptional user experience.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open source, or sharing
                    knowledge with the developer community.
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
                    3+ Years
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
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-light tracking-tight mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-light tracking-tight mb-8">Projects</h2>

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
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
            ))}
          </div>
        </section>

        {/* GitHub Stats Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-light tracking-tight mb-12">
            GitHub Activity
          </h2>

          {/* Stats Grid with Icons */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
          </div>

          {/* Contribution Streak */}
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

          {/* Top Languages */}
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

          {/* Achievements */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-gray-200 dark:border-gray-800 text-center">
              <CardContent className="pt-6">
                <Trophy className="mx-auto mb-3 text-yellow-500" size={32} />
                <p className="text-sm font-medium mb-1">Top Contributor</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Open Source
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800 text-center">
              <CardContent className="pt-6">
                <Star className="mx-auto mb-3 text-orange-500" size={32} />
                <p className="text-sm font-medium mb-1">Early Adopter</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  GitHub Actions
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800 text-center">
              <CardContent className="pt-6">
                <GitFork className="mx-auto mb-3 text-blue-500" size={32} />
                <p className="text-sm font-medium mb-1">Collaborator</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  20+ Projects
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800 text-center">
              <CardContent className="pt-6">
                <Eye className="mx-auto mb-3 text-green-500" size={32} />
                <p className="text-sm font-medium mb-1">Profile Views</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  5K+ visits
                </p>
              </CardContent>
            </Card>
          </div>

          {/* GitHub Link */}
          <div className="mt-12 text-center">
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
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-light tracking-tight mb-12">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="flex gap-6">
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
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-light tracking-tight mb-12">Skills</h2>

          {/* Tech Stack Badges */}
          <div className="mb-12">
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
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="space-y-3">
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
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-light tracking-tight mb-12">
            Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-gray-200 dark:border-gray-800">
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
            ))}
          </div>
        </section>

        {/* Blog/Articles Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-light tracking-tight mb-12">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
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
              <Card
                key={idx}
                className="border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors cursor-pointer"
              >
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
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          id="contact"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-light tracking-tight mb-8">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
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
                  {copied ? "Copied!" : "your-email@example.com"}
                </button>
              </div>

              {/* Social Links */}
              <div className="space-y-2">
                <p className="text-sm font-medium">Follow</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
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
            </div>

            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
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
            </form>
          </div>
        </section>

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
