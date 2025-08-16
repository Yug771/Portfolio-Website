import React from 'react'
import { FileText, ExternalLink, Award, Calendar, Users, BookOpen } from 'lucide-react'

const Research = () => {
  const publications = [
    {
      title: "A Survey on Revival Augmented Generation: From Naive to Adaptive Approaches with Financial Insights",
      journal: "Scopus Journal Kornika",
      type: "Journal Publication",
      status: "Published",
      description: "Comprehensive survey exploring the evolution of Retrieval Augmented Generation (RAG) systems, focusing on financial applications and adaptive methodologies. This work examines the progression from basic RAG implementations to sophisticated adaptive approaches.",
      tags: ["RAG", "Financial AI", "Survey Research", "Adaptive Systems"],
      link: "https://scholar.google.com",
      color: "from-blue-500 to-cyan-500",
      icon: BookOpen,
      year: "2024"
    },
    {
      title: "Agentic Retrieval-Augmented Generation for Financial QA: A SingleStore Optimization Approach",
      conference: "PiCET Conference 2025 - Parul University International Conference on Engineering and Technology",
      type: "Conference Presentation",
      status: "Presented",
      description: "Novel approach to financial question-answering systems using agentic RAG frameworks optimized with SingleStore database. Demonstrates significant improvements in query performance and accuracy for financial data retrieval.",
      tags: ["Agentic AI", "Financial QA", "Database Optimization", "SingleStore"],
      link: "#",
      color: "from-purple-500 to-pink-500",
      icon: Users,
      year: "2025"
    }
  ]

  const researchStats = [
    { value: "2", label: "Publications", icon: FileText },
    { value: "1", label: "Journal Paper", icon: Award },
    { value: "1", label: "Conference", icon: Users },
    { value: "2024-25", label: "Period", icon: Calendar }
  ]

  return (
    <section id="research" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Research & <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to the advancement of AI research with focus on Retrieval Augmented Generation, 
            Financial AI, and Adaptive Systems
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {researchStats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-100 hover-lift animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="space-y-8">
          {publications.map((paper, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden hover-lift animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${paper.color} rounded-lg flex items-center justify-center`}>
                        <paper.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {paper.type}
                        </span>
                        <div className="text-sm text-gray-500 mt-1">{paper.year}</div>
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-relaxed">
                      {paper.title}
                    </h3>
                  </div>
                  
                  <div className="flex-shrink-0 mt-4 lg:mt-0">
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      {paper.status}
                    </span>
                  </div>
                </div>

                {/* Venue */}
                <div className="mb-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="font-semibold text-gray-800">
                    {paper.journal || paper.conference}
                  </div>
                  {paper.journal && (
                    <div className="text-sm text-gray-600 mt-1">Available on Google Scholar</div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {paper.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={paper.link}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    {paper.journal ? "View on Google Scholar" : "View Conference Details"}
                  </a>
                </div>
              </div>

              {/* Bottom accent */}
              <div className={`h-1 bg-gradient-to-r ${paper.color}`}></div>
            </div>
          ))}
        </div>

        {/* Research Focus Areas */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">Research Focus Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <div className="text-lg font-semibold text-blue-800 mb-2">RAG Systems</div>
              <div className="text-sm text-blue-600">Retrieval Augmented Generation</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <div className="text-lg font-semibold text-purple-800 mb-2">Financial AI</div>
              <div className="text-sm text-purple-600">FinTech Applications</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="text-lg font-semibold text-green-800 mb-2">Agentic Systems</div>
              <div className="text-sm text-green-600">Multi-Agent Frameworks</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
              <div className="text-lg font-semibold text-orange-800 mb-2">Optimization</div>
              <div className="text-sm text-orange-600">Database & Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
