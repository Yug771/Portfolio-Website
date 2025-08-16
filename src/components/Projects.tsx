import React from 'react'
import { Github, ExternalLink, Star, GitFork, Eye, Bot, Brain, MessageCircle, Search, Server, FileText, Users } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "AutoGen MultiAgent Research Assistant",
      description: "Advanced multi-agent research assistant powered by AutoGen framework. Features intelligent agent coordination, automated research workflows, and comprehensive data analysis capabilities.",
      github: "https://github.com/Yug771/AutoGen-MultiAgent-Research-Assistant",
      demo: "https://multiagent-assistant.streamlit.app/",
      tags: ["AutoGen", "Multi-Agent", "Research", "AI", "Python", "Streamlit"],
      color: "from-blue-500 to-indigo-600",
      icon: Brain,
      featured: true,
      stats: { stars: "New", forks: "0", language: "Python" }
    },
    {
      title: "Restaurant Booking AI Agent",
      description: "Intelligent restaurant booking system with conversational AI agent. Features natural language processing, booking management, and smart recommendation engine with full-stack implementation.",
      github: "https://github.com/Yug771/Restaurant-Booking-AI-Agent",
      demo: null,
      tags: ["AI Agent", "NLP", "FastAPI", "React", "Booking System", "LangChain"],
      color: "from-purple-500 to-pink-600",
      icon: Bot,
      featured: true,
      stats: { stars: "New", forks: "0", language: "Python" }
    },
    {
      title: "AI Summarization QA Service",
      description: "Comprehensive AI service for document summarization and question-answering. Implements advanced NLP techniques for extracting key insights from large documents.",
      github: "https://github.com/Yug771/AI-Summarization-QA-Service",
      demo: null,
      tags: ["NLP", "Summarization", "Q&A", "Transformers", "API", "Machine Learning"],
      color: "from-green-500 to-teal-600",
      icon: FileText,
      featured: false,
      stats: { stars: "New", forks: "0", language: "Python" }
    },
    {
      title: "Ask MSU - QA Chatbot",
      description: "Question-answering chatbot specifically designed for MS University. Provides instant answers to student queries using advanced RAG implementation.",
      github: "https://github.com/Yug771/Ask_MSU",
      demo: null,
      tags: ["Chatbot", "RAG", "University", "Q&A", "Student Services", "AI"],
      color: "from-orange-500 to-red-600",
      icon: MessageCircle,
      featured: false,
      stats: { stars: "New", forks: "0", language: "Python" }
    },
    {
      title: "AI RAG Chatbot",
      description: "Advanced Retrieval Augmented Generation chatbot with sophisticated context understanding and response generation. Features document ingestion and intelligent retrieval.",
      github: "https://github.com/Yug771/AI-RAG-Chatbot",
      demo: "https://ai-rag-assistant.streamlit.app/",
      tags: ["RAG", "Chatbot", "Vector DB", "LLM", "Streamlit", "AI Assistant"],
      color: "from-cyan-500 to-blue-600",
      icon: Search,
      featured: true,
      stats: { stars: "New", forks: "0", language: "Python" }
    },
    {
      title: "MCP Server",
      description: "Model Context Protocol server implementation for managing AI model contexts and communication. Enables efficient model orchestration and context management.",
      github: "https://github.com/Yug771/MCP-Server",
      demo: "https://mcp-server-yug.streamlit.app/",
      tags: ["MCP", "Server", "AI Models", "Context Management", "Protocol", "API"],
      color: "from-indigo-500 to-purple-600",
      icon: Server,
      featured: false,
      stats: { stars: "New", forks: "0", language: "Python" }
    },
    {
      title: "Leadership Chatbot",
      description: "Specialized chatbot focused on leadership development and guidance. Provides personalized leadership insights and coaching recommendations.",
      github: null,
      demo: "https://vishal-leadership-chatbot.streamlit.app/",
      tags: ["Leadership", "Chatbot", "Coaching", "Personal Development", "AI", "Guidance"],
      color: "from-yellow-500 to-orange-600",
      icon: Users,
      featured: false,
      stats: { stars: "-", forks: "-", language: "Python" }
    }
  ]

  const ProjectCard = ({ project, index }) => (
    <div 
      className={`bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden hover-lift transform transition-all duration-300 ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
      
      <div className="p-6">
        {/* Project Icon and Title */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center`}>
              <project.icon className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              {project.featured && (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                  Featured
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Star size={14} />
            <span>{project.stats.stars}</span>
          </div>
          <div className="flex items-center space-x-1">
            <GitFork size={14} />
            <span>{project.stats.forks}</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>{project.stats.language}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={16} className="mr-2" />
              Source Code
            </a>
          )}
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          )}
          
          {!project.github && !project.demo && (
            <div className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-500 rounded-lg font-medium">
              <Eye size={16} className="mr-2" />
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of innovative AI projects, research implementations, and practical applications 
            demonstrating expertise in machine learning, NLP, and intelligent systems
          </p>
          
          {/* Project Stats */}
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold gradient-text">7+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text">4</div>
              <div className="text-gray-600">Live Demos</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text">Multiple</div>
              <div className="text-gray-600">Technologies</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Technology Focus */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">Technology Focus</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 hover-lift">
              <div className="text-lg font-semibold text-blue-600 mb-2">AI/ML</div>
              <div className="text-sm text-gray-600">Core Focus</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 hover-lift">
              <div className="text-lg font-semibold text-purple-600 mb-2">RAG</div>
              <div className="text-sm text-gray-600">Specialization</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 hover-lift">
              <div className="text-lg font-semibold text-green-600 mb-2">Agents</div>
              <div className="text-sm text-gray-600">Multi-Agent</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 hover-lift">
              <div className="text-lg font-semibold text-orange-600 mb-2">NLP</div>
              <div className="text-sm text-gray-600">Language</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 hover-lift">
              <div className="text-lg font-semibold text-cyan-600 mb-2">APIs</div>
              <div className="text-sm text-gray-600">Backend</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 hover-lift">
              <div className="text-lg font-semibold text-indigo-600 mb-2">Full-Stack</div>
              <div className="text-sm text-gray-600">Development</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Yug771"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}



export default Projects
