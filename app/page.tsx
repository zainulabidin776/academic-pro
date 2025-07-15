"use client"

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
  Eye,
  BookOpen,
  FileText,
  Edit,
} from "lucide-react"
import Link from "next/link"

export default function AcademicProPortfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <span className="text-lg sm:text-2xl font-bold text-gray-900">AcademicPro Solutions</span>
              <Badge className="hidden sm:inline-flex bg-blue-100 text-blue-800 text-xs">CS/SE Specialists</Badge>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="#samples" className="text-gray-600 hover:text-blue-600 transition-colors">
                Sample Work
              </Link>
              <Link href="#packages" className="text-gray-600 hover:text-blue-600 transition-colors">
                Packages
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700">Get Started</Button>
              <button className="lg:hidden p-2">
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="block w-5 h-0.5 bg-gray-600 mb-1"></span>
                  <span className="block w-5 h-0.5 bg-gray-600 mb-1"></span>
                  <span className="block w-5 h-0.5 bg-gray-600"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs sm:text-sm">
                  Trusted by 8,000+ CS/SE Students Worldwide
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Master Your <span className="text-blue-600">Code</span> &{" "}
                  <span className="text-blue-600">Writing</span>, Ace Your Grades
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Complete academic support for Computer Science and Software Engineering students. From complex
                  algorithms to technical reports, we deliver high-quality code solutions and professional academic
                  writing.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg px-6 sm:px-8 py-3">
                  Start Your Project
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-transparent">
                  View Sample Code
                </Button>
              </div>
              <div className="grid grid-cols-2 lg:flex lg:items-center lg:space-x-8 gap-4 lg:gap-0 text-sm text-gray-600">
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Clean Code</span>
                </div>
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">GitHub Integration</span>
                </div>
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Technical Writing</span>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-4 sm:p-6 transform hover:rotate-0 transition-transform duration-300 rotate-1 lg:rotate-3">
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
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-xs">AK</span>
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
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Academic Support Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complex programming assignments to professional academic writing, we provide expert assistance across
              all technical and academic disciplines to help you achieve excellence in your studies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Code className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Programming Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-4">
                  Complete programming solutions in Python, Java, C++, JavaScript, and more. Clean, efficient, and
                  well-documented code.
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Java
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    C++
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    JavaScript
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Database className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Data Structures & Algorithms</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-4">
                  Complex algorithm implementations, data structure designs, and optimization solutions with detailed
                  analysis.
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    Trees
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Graphs
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Sorting
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Dynamic Programming
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Smartphone className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Full-Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-4">
                  Complete web applications with frontend, backend, and database integration. Modern frameworks and best
                  practices.
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MongoDB
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Express
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Cpu className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">System Design & Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-4">
                  Software architecture design, system analysis, UML diagrams, and comprehensive documentation.
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    UML
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Design Patterns
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Architecture
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Documentation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <GitBranch className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Software Engineering Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-4">
                  Complete SDLC projects including requirements analysis, testing, deployment, and maintenance
                  documentation.
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    Agile
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Testing
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    CI/CD
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Git
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Terminal className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Machine Learning & AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-4">
                  ML model implementation, data analysis, neural networks, and AI project development with detailed
                  reports.
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    TensorFlow
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    PyTorch
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Scikit-learn
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Pandas
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <FileText className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Technical Reports & Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-4">
                  Professional technical reports, project documentation, API documentation, and comprehensive system
                  analysis reports.
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    Technical Reports
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    API Docs
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    User Manuals
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    System Analysis
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <BookOpen className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Research Papers & Thesis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-4">
                  Academic research papers, literature reviews, thesis writing, and dissertation support for CS/SE
                  topics and methodologies.
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    Research Papers
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Literature Review
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Thesis
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Dissertation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Edit className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Academic Essays & Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-4">
                  Academic essays, case studies, analysis papers, and written assignments across all CS/SE subjects with
                  proper citations.
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    Essays
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Case Studies
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Analysis
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Citations
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Work Section */}
      <section id="samples" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sample Work Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our previous projects and assignments. Each sample includes complete source code, documentation,
              and detailed explanations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-green-100 text-green-800">Data Structures</Badge>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">Binary Search Tree Implementation</CardTitle>
                <CardDescription>
                  Complete BST with insertion, deletion, traversal, and balancing algorithms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 text-sm">
                  <div className="text-green-400 font-mono space-y-1">
                    <div className="text-purple-400"># Key Features:</div>
                    <div>• Self-balancing AVL implementation</div>
                    <div>• O(log n) search complexity</div>
                    <div>• Complete test suite included</div>
                    <div>• Visualization methods</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Language: Python</span>
                  <span>Grade: A+ (96/100)</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-blue-100 text-blue-800">Web Development</Badge>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">E-Commerce MERN Stack App</CardTitle>
                <CardDescription>
                  Full-stack e-commerce platform with payment integration and admin dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 text-sm">
                  <div className="text-green-400 font-mono space-y-1">
                    <div className="text-purple-400"># Tech Stack:</div>
                    <div>• MongoDB + Express + React + Node.js</div>
                    <div>• JWT Authentication</div>
                    <div>• Stripe Payment Integration</div>
                    <div>• Responsive Design</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Framework: MERN</span>
                  <span>Grade: A (94/100)</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-purple-100 text-purple-800">Machine Learning</Badge>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">Image Classification CNN</CardTitle>
                <CardDescription>
                  Deep learning model for image classification with 95% accuracy on CIFAR-10
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 text-sm">
                  <div className="text-green-400 font-mono space-y-1">
                    <div className="text-purple-400"># Model Details:</div>
                    <div>• TensorFlow/Keras implementation</div>
                    <div>• Data augmentation pipeline</div>
                    <div>• Transfer learning with ResNet</div>
                    <div>• Comprehensive evaluation</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Framework: TensorFlow</span>
                  <span>Grade: A+ (98/100)</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Notebook
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Dataset
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-orange-100 text-orange-800">Algorithms</Badge>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">Graph Algorithms Suite</CardTitle>
                <CardDescription>
                  Implementation of Dijkstra, A*, BFS, DFS with visualization and performance analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 text-sm">
                  <div className="text-green-400 font-mono space-y-1">
                    <div className="text-purple-400"># Algorithms Included:</div>
                    <div>• Dijkstra's shortest path</div>
                    <div>• A* pathfinding algorithm</div>
                    <div>• Graph traversal methods</div>
                    <div>• Performance benchmarking</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Language: C++</span>
                  <span>Grade: A+ (97/100)</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    Visualization
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-red-100 text-red-800">Mobile Development</Badge>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">React Native Task Manager</CardTitle>
                <CardDescription>
                  Cross-platform mobile app with offline sync, push notifications, and cloud storage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 text-sm">
                  <div className="text-green-400 font-mono space-y-1">
                    <div className="text-purple-400"># Features:</div>
                    <div>• Cross-platform compatibility</div>
                    <div>• Firebase integration</div>
                    <div>• Offline data synchronization</div>
                    <div>• Push notification system</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Framework: React Native</span>
                  <span>Grade: A (93/100)</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View App
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    APK
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-indigo-100 text-indigo-800">Database Systems</Badge>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">University Management System</CardTitle>
                <CardDescription>
                  Complete database design with SQL queries, triggers, and stored procedures
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4 text-sm">
                  <div className="text-green-400 font-mono space-y-1">
                    <div className="text-purple-400"># Database Features:</div>
                    <div>• Normalized schema design</div>
                    <div>• Complex SQL queries</div>
                    <div>• Triggers and procedures</div>
                    <div>• Performance optimization</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Database: PostgreSQL</span>
                  <span>Grade: A+ (95/100)</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Schema
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    SQL Files
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-teal-100 text-teal-800">Technical Writing</Badge>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">Software Architecture Report</CardTitle>
                <CardDescription>
                  Comprehensive technical report on microservices architecture with system design analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 text-sm">
                  <div className="text-gray-700 space-y-1">
                    <div className="font-semibold text-blue-600">Report Highlights:</div>
                    <div>• 25-page comprehensive analysis</div>
                    <div>• UML diagrams and flowcharts</div>
                    <div>• Performance benchmarking</div>
                    <div>• Industry best practices</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Type: Technical Report</span>
                  <span>Grade: A+ (95/100)</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Report
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-violet-100 text-violet-800">Research Paper</Badge>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">AI Ethics in Software Development</CardTitle>
                <CardDescription>
                  Academic research paper on ethical considerations in AI-driven software systems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 text-sm">
                  <div className="text-gray-700 space-y-1">
                    <div className="font-semibold text-blue-600">Paper Features:</div>
                    <div>• 15 peer-reviewed sources</div>
                    <div>• IEEE citation format</div>
                    <div>• Original research methodology</div>
                    <div>• 8,000 words comprehensive</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Type: Research Paper</span>
                  <span>Grade: A (92/100)</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Paper
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    Bibliography
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-amber-100 text-amber-800">Case Study</Badge>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">Agile vs Waterfall Analysis</CardTitle>
                <CardDescription>
                  Comparative case study analysis of software development methodologies with real-world examples
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 text-sm">
                  <div className="text-gray-700 space-y-1">
                    <div className="font-semibold text-blue-600">Analysis Includes:</div>
                    <div>• 3 real company case studies</div>
                    <div>• Comparative framework</div>
                    <div>• Statistical analysis</div>
                    <div>• Recommendations section</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Type: Case Study</span>
                  <span>Grade: A+ (96/100)</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Study
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Access Complete Portfolio</h3>
              <p className="text-gray-600 mb-6">
                Get access to our complete portfolio with 100+ sample projects, including source code, documentation,
                and video explanations.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <ExternalLink className="h-5 w-5 mr-2" />
                View Full Portfolio on Google Drive
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section id="global" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global CS/SE Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting Computer Science and Software Engineering students from top universities worldwide with 24/7
              technical assistance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Australia</h3>
                  <p className="text-sm text-gray-600">UNSW, Melbourne, ANU, Monash</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">United States</h3>
                  <p className="text-sm text-gray-600">MIT, Stanford, CMU, Berkeley</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">United Kingdom</h3>
                  <p className="text-sm text-gray-600">Oxford, Cambridge, Imperial, UCL</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Canada</h3>
                  <p className="text-sm text-gray-600">UofT, UBC, Waterloo, McGill</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">24/7 Technical Support</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our team of CS/SE experts operates across all time zones to provide continuous debugging, code review,
                  and technical assistance.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Live code debugging</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>GitHub collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Video explanations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Screen sharing sessions</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Technical Expertise</h3>
                <p className="mb-4">
                  Our team includes software engineers and CS graduates from top tech companies and universities
                  worldwide.
                </p>
                <ul className="space-y-2 text-sm">
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
      <section id="packages" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">CS/SE Specialized Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored packages for Computer Science and Software Engineering students with comprehensive coding
              support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors bg-white">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">Single Assignment</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2">From $75</div>
                <CardDescription>Perfect for individual programming assignments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Complete code solution</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Detailed code comments</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Test cases included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>24/7 debugging support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Technical documentation</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-600 hover:bg-gray-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 relative overflow-hidden bg-white">
              <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                MOST POPULAR
              </div>
              <CardHeader className="text-center pb-4 pt-12">
                <CardTitle className="text-2xl mb-2">Complete Semester</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2">From $500</div>
                <CardDescription>Full semester support for all CS/SE courses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>All programming assignments</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Final project development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Code reviews & optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>GitHub repository setup</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Grade guarantee (B+ minimum)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>All written assignments</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Package</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors bg-white">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">Capstone Project</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2">From $1200</div>
                <CardDescription>Complete final year project development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Full-stack application</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>System design & architecture</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Complete documentation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Presentation preparation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Deployment & hosting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Research paper & thesis</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-600 hover:bg-gray-700">Get Quote</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need help with a specific technology or framework? We offer custom packages for specialized requirements.
            </p>
            <Button variant="outline" size="lg">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">CS/SE Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from Computer Science and Software Engineering students who achieved academic excellence with our
              specialized support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gray-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "AcademicPro helped me with my entire Data Structures course. Their Complete Semester Package included
                  clean, well-commented code for every assignment. Maintained a 3.9 GPA while working part-time!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">AR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alex Rodriguez</p>
                    <p className="text-sm text-gray-500">Computer Science, UC Berkeley</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "My capstone project was a complex machine learning application. The team delivered a complete
                  solution with TensorFlow, detailed documentation, and even helped with my presentation. Got an A+!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">SP</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Patel</p>
                    <p className="text-sm text-gray-500">Software Engineering, MIT</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "As an international student, I struggled with advanced algorithms. Their step-by-step explanations
                  and optimized code solutions helped me understand complex concepts. Now I'm confident in coding
                  interviews!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">LW</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Li Wei</p>
                    <p className="text-sm text-gray-500">Computer Science, University of Toronto</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Needed help with both my software engineering project and the accompanying research paper. They
                  delivered excellent code AND a perfectly written 20-page technical report. Both got A grades!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Maria Johnson</p>
                    <p className="text-sm text-gray-500">Software Engineering, Stanford University</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                  <p className="text-gray-600">CS/SE Students Helped</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
                  <p className="text-gray-600">Projects Delivered On Time</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
                  <p className="text-gray-600">Average Code Quality Rating</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <p className="text-gray-600">Programming Languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your CS/SE Project Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to excel in your Computer Science or Software Engineering courses? Get expert coding assistance and
              professional academic writing support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <Card className="bg-white border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Code Solution</CardTitle>
                <CardDescription>
                  Tell us about your programming assignment and get a free quote within 1 hour.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <Input placeholder="Enter your first name" className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input placeholder="Enter your last name" className="w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">University/Institution</label>
                  <Input placeholder="Enter your university name" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Course/Subject</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                    <label className="text-sm font-medium text-gray-700">Programming Language</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                  <label className="text-sm font-medium text-gray-700">Service Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select service type</option>
                    <option>Programming Assignment</option>
                    <option>Technical Writing</option>
                    <option>Research Paper</option>
                    <option>Both Coding & Writing</option>
                    <option>Complete Project</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Assignment Details</label>
                  <Textarea
                    placeholder="Describe your programming assignment, requirements, deadline, and any specific instructions..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Get Free Quote & Sample Code
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Our CS/SE Experts</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email Support</p>
                        <p className="text-gray-600">cs-support@academicprosolutions.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Live Chat</p>
                        <p className="text-gray-600">Instant coding help available 24/7</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Code className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">GitHub Collaboration</p>
                        <p className="text-gray-600">Direct code collaboration and reviews</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-600 text-white border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Fast Response Guarantee</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>Free quote within 1 hour</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>Sample code with quote</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>24/7 debugging support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>100% confidential service</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                <Badge className="bg-blue-600 text-white">CS Specialists</Badge>
                <Badge className="bg-green-600 text-white">SE Experts</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Programming Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Data Structures & Algorithms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mobile Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Technical Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    24/7 Code Debugging
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    GitHub Collaboration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Video Code Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Live Programming Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sample Code Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Programming Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Code Quality Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Academic Integrity Policy
                  </Link>
                </li>
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
