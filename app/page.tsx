"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Clock,
  CheckCircle,
  Star,
  Mail,
  MessageCircle,
  Code,
  Database,
  Cpu,
  GitBranch,
  Terminal,
  Smartphone,
  ExternalLink,
  Download,
  BookOpen,
  FileText,
  Edit,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

export default function AcademicProPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              <span className="text-lg sm:text-2xl font-bold text-white">AcademicPro Solutions</span>
              <Badge className="hidden sm:inline-flex bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                CS/SE Specialists
              </Badge>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link href="#samples" className="text-gray-300 hover:text-blue-400 transition-colors">
                Sample Work
              </Link>
              <Link href="#packages" className="text-gray-300 hover:text-blue-400 transition-colors">
                Packages
              </Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 border-0">Get Started</Button>
              <button className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link
                  href="#services"
                  className="text-gray-300 hover:text-blue-400 transition-colors py-2"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link
                  href="#samples"
                  className="text-gray-300 hover:text-blue-400 transition-colors py-2"
                  onClick={closeMenu}
                >
                  Sample Work
                </Link>
                <Link
                  href="#packages"
                  className="text-gray-300 hover:text-blue-400 transition-colors py-2"
                  onClick={closeMenu}
                >
                  Packages
                </Link>
                <Link
                  href="#testimonials"
                  className="text-gray-300 hover:text-blue-400 transition-colors py-2"
                  onClick={closeMenu}
                >
                  Testimonials
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors py-2"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                <Button className="bg-blue-600 hover:bg-blue-700 border-0 mt-4">Get Started</Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30 text-xs sm:text-sm">
                  Trusted by 8,000+ CS/SE Students Worldwide
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Master Your <span className="text-blue-400">Code</span> &{" "}
                  <span className="text-blue-400">Writing</span>, Ace Your Grades
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Complete academic support for Computer Science and Software Engineering students. From complex
                  algorithms to technical reports, we deliver high-quality code solutions and professional academic
                  writing.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 border-0 text-base sm:text-lg px-6 sm:px-8 py-3"
                >
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                >
                  View Sample Code
                </Button>
              </div>
              <div className="grid grid-cols-2 lg:flex lg:items-center lg:space-x-8 gap-4 lg:gap-0 text-sm text-gray-300">
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Clean Code</span>
                </div>
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">GitHub Integration</span>
                </div>
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Technical Writing</span>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 transform hover:rotate-0 transition-transform duration-300 rotate-1 lg:rotate-3 border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm">main.py</span>
                  </div>
                  <div className="text-green-400 font-mono text-xs sm:text-sm space-y-1">
                    <div className="text-purple-400"># Binary Search Tree Implementation</div>
                    <div>
                      <span className="text-blue-400">class</span>{" "}
                      <span className="text-yellow-400">BinarySearchTree</span>:
                    </div>
                    <div className="ml-2 sm:ml-4">
                      <span className="text-blue-400">def</span> <span className="text-yellow-400">__init__</span>
                      (self):
                    </div>
                    <div className="ml-4 sm:ml-8">
                      self.root = <span className="text-orange-400">None</span>
                    </div>
                    <div className="ml-2 sm:ml-4">
                      <span className="text-blue-400">def</span> <span className="text-yellow-400">insert</span>(self,
                      value):
                    </div>
                    <div className="ml-4 sm:ml-8">
                      <span className="text-purple-400"># Optimized insertion logic</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-700">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                      <span className="text-blue-400 font-semibold text-xs">AK</span>
                    </div>
                    <div>
                      <p className="text-white text-xs sm:text-sm font-medium">Data Structures Assignment</p>
                      <p className="text-gray-400 text-xs">Grade: A+ (98/100)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Academic Support Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From complex programming assignments to professional academic writing, we provide expert assistance across
              all technical and academic disciplines to help you achieve excellence in your studies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Code,
                title: "Programming Assignments",
                description:
                  "Complete programming solutions in Python, Java, C++, JavaScript, and more. Clean, efficient, and well-documented code.",
                badges: ["Python", "Java", "C++", "JavaScript"],
              },
              {
                icon: Database,
                title: "Data Structures & Algorithms",
                description:
                  "Complex algorithm implementations, data structure designs, and optimization solutions with detailed analysis.",
                badges: ["Trees", "Graphs", "Sorting", "Dynamic Programming"],
              },
              {
                icon: Smartphone,
                title: "Full-Stack Development",
                description:
                  "Complete web applications with frontend, backend, and database integration. Modern frameworks and best practices.",
                badges: ["React", "Node.js", "MongoDB", "Express"],
              },
              {
                icon: Cpu,
                title: "System Design & Architecture",
                description:
                  "Software architecture design, system analysis, UML diagrams, and comprehensive documentation.",
                badges: ["UML", "Design Patterns", "Architecture", "Documentation"],
              },
              {
                icon: GitBranch,
                title: "Software Engineering Projects",
                description:
                  "Complete SDLC projects including requirements analysis, testing, deployment, and maintenance documentation.",
                badges: ["Agile", "Testing", "CI/CD", "Git"],
              },
              {
                icon: Terminal,
                title: "Machine Learning & AI",
                description:
                  "ML model implementation, data analysis, neural networks, and AI project development with detailed reports.",
                badges: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas"],
              },
              {
                icon: FileText,
                title: "Technical Reports & Documentation",
                description:
                  "Professional technical reports, project documentation, API documentation, and comprehensive system analysis reports.",
                badges: ["Technical Reports", "API Docs", "User Manuals", "System Analysis"],
              },
              {
                icon: BookOpen,
                title: "Research Papers & Thesis",
                description:
                  "Academic research papers, literature reviews, thesis writing, and dissertation support for CS/SE topics and methodologies.",
                badges: ["Research Papers", "Literature Review", "Thesis", "Dissertation"],
              },
              {
                icon: Edit,
                title: "Academic Essays & Assignments",
                description:
                  "Academic essays, case studies, analysis papers, and written assignments across all CS/SE subjects with proper citations.",
                badges: ["Essays", "Case Studies", "Analysis", "Citations"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-gray-700 shadow-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors border border-blue-500/30">
                    <service.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-300 mb-4">{service.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        variant="secondary"
                        className="text-xs bg-gray-700 text-gray-300 border-gray-600"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Work Section */}
      <section id="samples" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Sample Work Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our previous projects and assignments. Each sample includes complete source code, documentation,
              and detailed explanations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                badge: { text: "Data Structures", color: "bg-green-500/20 text-green-400 border-green-500/30" },
                title: "Binary Search Tree Implementation",
                description: "Complete BST with insertion, deletion, traversal, and balancing algorithms",
                features: [
                  "Self-balancing AVL implementation",
                  "O(log n) search complexity",
                  "Complete test suite included",
                  "Visualization methods",
                ],
                language: "Python",
                grade: "A+ (96/100)",
              },
              {
                badge: { text: "Web Development", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
                title: "E-Commerce MERN Stack App",
                description: "Full-stack e-commerce platform with payment integration and admin dashboard",
                features: [
                  "MongoDB + Express + React + Node.js",
                  "JWT Authentication",
                  "Stripe Payment Integration",
                  "Responsive Design",
                ],
                language: "MERN",
                grade: "A (94/100)",
              },
              {
                badge: { text: "Machine Learning", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
                title: "Image Classification CNN",
                description: "Deep learning model for image classification with 95% accuracy on CIFAR-10",
                features: [
                  "TensorFlow/Keras implementation",
                  "Data augmentation pipeline",
                  "Transfer learning with ResNet",
                  "Comprehensive evaluation",
                ],
                language: "TensorFlow",
                grade: "A+ (98/100)",
              },
              {
                badge: { text: "Algorithms", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
                title: "Graph Algorithms Suite",
                description: "Implementation of Dijkstra, A*, BFS, DFS with visualization and performance analysis",
                features: [
                  "Dijkstra's shortest path",
                  "A* pathfinding algorithm",
                  "Graph traversal methods",
                  "Performance benchmarking",
                ],
                language: "C++",
                grade: "A+ (97/100)",
              },
              {
                badge: { text: "Mobile Development", color: "bg-red-500/20 text-red-400 border-red-500/30" },
                title: "React Native Task Manager",
                description: "Cross-platform mobile app with offline sync, push notifications, and cloud storage",
                features: [
                  "Cross-platform compatibility",
                  "Firebase integration",
                  "Offline data synchronization",
                  "Push notification system",
                ],
                language: "React Native",
                grade: "A (93/100)",
              },
              {
                badge: { text: "Database Systems", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
                title: "University Management System",
                description: "Complete database design with SQL queries, triggers, and stored procedures",
                features: [
                  "Normalized schema design",
                  "Complex SQL queries",
                  "Triggers and procedures",
                  "Performance optimization",
                ],
                language: "PostgreSQL",
                grade: "A+ (95/100)",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-gray-700 shadow-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={project.badge.color}>{project.badge.text}</Badge>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-black/50 rounded-lg p-4 text-sm border border-gray-700">
                    <div className="text-green-400 font-mono space-y-1">
                      <div className="text-purple-400"># Key Features:</div>
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex}>• {feature}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Language: {project.language}</span>
                    <span>Grade: {project.grade}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 border-0">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Access Complete Portfolio</h3>
              <p className="text-gray-300 mb-6">
                Get access to our complete portfolio with 100+ sample projects, including source code, documentation,
                and video explanations.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 border-0">
                <ExternalLink className="h-5 w-5 mr-2" />
                View Full Portfolio on Google Drive
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section id="global" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Global CS/SE Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Supporting Computer Science and Software Engineering students from top universities worldwide with 24/7
              technical assistance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { country: "Australia", universities: "UNSW, Melbourne, ANU, Monash" },
                  { country: "United States", universities: "MIT, Stanford, CMU, Berkeley" },
                  { country: "United Kingdom", universities: "Oxford, Cambridge, Imperial, UCL" },
                  { country: "Canada", universities: "UofT, UBC, Waterloo, McGill" },
                ].map((location, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700"
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                      <Globe className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{location.country}</h3>
                    <p className="text-sm text-gray-400">{location.universities}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="h-8 w-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">24/7 Technical Support</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Our team of CS/SE experts operates across all time zones to provide continuous debugging, code review,
                  and technical assistance.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {["Live code debugging", "GitHub collaboration", "Video explanations", "Screen sharing sessions"].map(
                    (feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="bg-blue-600/20 backdrop-blur-sm text-white p-8 rounded-xl border border-blue-500/30">
                <h3 className="text-2xl font-bold mb-4">Technical Expertise</h3>
                <p className="mb-4 text-gray-200">
                  Our team includes software engineers and CS graduates from top tech companies and universities
                  worldwide.
                </p>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li>• Industry-standard coding practices</li>
                  <li>• Latest frameworks and technologies</li>
                  <li>• Code optimization and performance tuning</li>
                  <li>• Academic and industry project experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">CS/SE Specialized Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored packages for Computer Science and Software Engineering students with comprehensive coding
              support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-700 hover:border-blue-500/50 transition-colors bg-gray-800/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2 text-white">Single Assignment</CardTitle>
                <div className="text-4xl font-bold text-blue-400 mb-2">From $75</div>
                <CardDescription className="text-gray-300">
                  Perfect for individual programming assignments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Complete code solution",
                    "Detailed code comments",
                    "Test cases included",
                    "24/7 debugging support",
                    "Technical documentation",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gray-600 hover:bg-gray-700 border-0">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 relative overflow-hidden bg-gray-800/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                MOST POPULAR
              </div>
              <CardHeader className="text-center pb-4 pt-12">
                <CardTitle className="text-2xl mb-2 text-white">Complete Semester</CardTitle>
                <div className="text-4xl font-bold text-blue-400 mb-2">From $500</div>
                <CardDescription className="text-gray-300">Full semester support for all CS/SE courses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "All programming assignments",
                    "Final project development",
                    "Code reviews & optimization",
                    "GitHub repository setup",
                    "Grade guarantee (B+ minimum)",
                    "All written assignments",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 border-0">Choose Package</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-700 hover:border-blue-500/50 transition-colors bg-gray-800/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2 text-white">Capstone Project</CardTitle>
                <div className="text-4xl font-bold text-blue-400 mb-2">From $1200</div>
                <CardDescription className="text-gray-300">Complete final year project development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Full-stack application",
                    "System design & architecture",
                    "Complete documentation",
                    "Presentation preparation",
                    "Deployment & hosting",
                    "Research paper & thesis",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gray-600 hover:bg-gray-700 border-0">Get Quote</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              Need help with a specific technology or framework? We offer custom packages for specialized requirements.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">CS/SE Student Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from Computer Science and Software Engineering students who achieved academic excellence with our
              specialized support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Alex Rodriguez",
                role: "Computer Science, UC Berkeley",
                initials: "AR",
                testimonial:
                  "AcademicPro helped me with my entire Data Structures course. Their Complete Semester Package included clean, well-commented code for every assignment. Maintained a 3.9 GPA while working part-time!",
              },
              {
                name: "Sarah Patel",
                role: "Software Engineering, MIT",
                initials: "SP",
                testimonial:
                  "My capstone project was a complex machine learning application. The team delivered a complete solution with TensorFlow, detailed documentation, and even helped with my presentation. Got an A+!",
              },
              {
                name: "Li Wei",
                role: "Computer Science, University of Toronto",
                initials: "LW",
                testimonial:
                  "As an international student, I struggled with advanced algorithms. Their step-by-step explanations and optimized code solutions helped me understand complex concepts. Now I'm confident in coding interviews!",
              },
              {
                name: "Maria Johnson",
                role: "Software Engineering, Stanford University",
                initials: "MJ",
                testimonial:
                  "Needed help with both my software engineering project and the accompanying research paper. They delivered excellent code AND a perfectly written 20-page technical report. Both got A grades!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border-gray-700 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">"{testimonial.testimonial}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                      <span className="text-blue-400 font-semibold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-700">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "5,000+", label: "CS/SE Students Helped" },
                  { number: "97%", label: "Projects Delivered On Time" },
                  { number: "4.9/5", label: "Average Code Quality Rating" },
                  { number: "50+", label: "Programming Languages" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <p className="text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Start Your CS/SE Project Today</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to excel in your Computer Science or Software Engineering courses? Get expert coding assistance and
              professional academic writing support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Get Your Code Solution</CardTitle>
                <CardDescription className="text-gray-300">
                  Tell us about your programming assignment and get a free quote within 1 hour.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">First Name</label>
                    <Input
                      placeholder="Enter your first name"
                      className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                    <Input
                      placeholder="Enter your last name"
                      className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">University/Institution</label>
                  <Input
                    placeholder="Enter your university name"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Course/Subject</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white">
                      <option>Select your course</option>
                      <option>Data Structures & Algorithms</option>
                      <option>Software Engineering</option>
                      <option>Web Development</option>
                      <option>Machine Learning</option>
                      <option>Database Systems</option>
                      <option>Mobile Development</option>
                      <option>Technical Writing</option>
                      <option>Research Methods</option>
                      <option>Academic Writing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Programming Language</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white">
                      <option>Select language</option>
                      <option>Python</option>
                      <option>Java</option>
                      <option>C++</option>
                      <option>JavaScript</option>
                      <option>C#</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Service Type</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white">
                    <option>Select service type</option>
                    <option>Programming Assignment</option>
                    <option>Technical Writing</option>
                    <option>Research Paper</option>
                    <option>Both Coding & Writing</option>
                    <option>Complete Project</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Assignment Details</label>
                  <Textarea
                    placeholder="Describe your programming assignment, requirements, deadline, and any specific instructions..."
                    className="min-h-[120px] bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 border-0 text-lg py-3">
                  Get Free Quote & Sample Code
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Our CS/SE Experts</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Mail, title: "Email Support", description: "cs-support@academicprosolutions.com" },
                      { icon: MessageCircle, title: "Live Chat", description: "Instant coding help available 24/7" },
                      {
                        icon: Code,
                        title: "GitHub Collaboration",
                        description: "Direct code collaboration and reviews",
                      },
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                          <contact.icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{contact.title}</p>
                          <p className="text-gray-300">{contact.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-600/20 backdrop-blur-sm text-white border-blue-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Fast Response Guarantee</h3>
                  <div className="space-y-4">
                    {[
                      "Free quote within 1 hour",
                      "Sample code with quote",
                      "24/7 debugging support",
                      "100% confidential service",
                    ].map((guarantee, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-blue-300" />
                        <span className="text-gray-200">{guarantee}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">AcademicPro Solutions</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for CS/SE academic excellence. Professional coding assistance, reliable support,
                and guaranteed results.
              </p>
              <div className="flex space-x-2">
                <Badge className="bg-blue-600 text-white border-0">CS Specialists</Badge>
                <Badge className="bg-green-600 text-white border-0">SE Experts</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Programming Services</h3>
              <ul className="space-y-2 text-gray-400">
                {["Data Structures & Algorithms", "Web Development", "Machine Learning", "Mobile Development"].map(
                  (service, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:text-white transition-colors">
                        {service}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Technical Support</h3>
              <ul className="space-y-2 text-gray-400">
                {["24/7 Code Debugging", "GitHub Collaboration", "Video Code Reviews", "Live Programming Help"].map(
                  (support, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:text-white transition-colors">
                        {support}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                {[
                  "Sample Code Portfolio",
                  "Programming Tutorials",
                  "Code Quality Guidelines",
                  "Academic Integrity Policy",
                ].map((resource, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {resource}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} AcademicPro Solutions. All rights reserved. | Specialized CS/SE Academic
              Support
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
