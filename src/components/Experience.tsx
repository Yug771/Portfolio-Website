import React from 'react'
import { Building, Calendar, TrendingUp, ChevronRight, Zap, Briefcase } from 'lucide-react'

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My career journey in AI and software development, showcasing growth from development to research leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>

            {/* Current Position */}
            <div className="relative mb-12 animate-fadeInRight">
              <div className="flex items-start">
                {/* Timeline Node */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <Briefcase className="text-white" size={28} />
                </div>
                
                {/* Content Card */}
                <div className="ml-8 bg-white rounded-xl shadow-xl border border-gray-100 p-8 hover-lift flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">Senior AI Engineer</h3>
                      <div className="flex items-center space-x-2 text-green-600 font-semibold">
                        <Building size={18} />
                        <span>Codiste - AI & Blockchain Development Company</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 mt-2 lg:mt-0">
                      <Calendar size={18} />
                      <span className="font-medium">August 2025 - Present</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700">Leading AI research initiatives and developing cutting-edge solutions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700">Architecting and implementing advanced RAG systems for enterprise clients</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700">Mentoring junior developers and contributing to technical strategy</p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <span className="text-green-700 font-medium">🎯 Current Focus: Advanced AI Research & Development</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Software Developer at Infodesk */}
            <div className="relative mb-12 animate-fadeInLeft" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <TrendingUp className="text-white" size={28} />
                </div>
                
                {/* Content Card */}
                <div className="ml-8 bg-white rounded-xl shadow-xl border border-gray-100 p-8 hover-lift flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">AI Software Developer</h3>
                      <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                        <Building size={18} />
                        <span>Infodesk</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 mt-2 lg:mt-0">
                      <Calendar size={18} />
                      <span className="font-medium">March 2025 - August 2025</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700">
                        <strong>Serverless Migration:</strong> Led the migration of monolithic architecture to serverless microservices 
                        using Azure Function App and Azure Service Bus
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700">
                        <strong>Knowledge Distillation:</strong> Advanced classification distillation by transferring knowledge 
                        from larger teacher models to compact student models
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700">
                        <strong>Performance Optimization:</strong> Improved model efficiency, reduced computational overhead, 
                        and enhanced inference speed while maintaining high accuracy
                      </p>
                    </div>
                  </div>

                  {/* Achievement Badges */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Azure Cloud</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Microservices</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Model Optimization</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Knowledge Distillation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Associate Software Developer at Infodesk */}
            <div className="relative mb-12 animate-fadeInRight" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <Briefcase className="text-white" size={28} />
                </div>
                
                <div className="ml-8 bg-white rounded-xl shadow-xl border border-gray-100 p-8 hover-lift flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">Associate Software Developer</h3>
                      <div className="flex items-center space-x-2 text-indigo-600 font-semibold">
                        <Building size={18} />
                        <span>Infodesk</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 mt-2 lg:mt-0">
                      <Calendar size={18} />
                      <span className="font-medium">May 2023 - March 2025</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="text-indigo-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700">
                        <strong>AskWN QA System:</strong> Developed an intelligent QA system leveraging open and closed-source LLMs 
                        (OpenAI's GPT-4, Meta's Llama, Google Gemini) with optimized retrieval pipelines using RAG and ElasticSearch
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="text-indigo-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700">
                        <strong>AI Taxonomy Predictor:</strong> Engineered an AI-driven system to categorize and label posts across 
                        diverse domains (medical, pharmaceutical, finance, technology) using Diffbot and OpenAI models
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="text-indigo-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700">
                        <strong>Newsletter Automation:</strong> Built an AI-driven automated newsletter system using Python, FastAPI, 
                        and AWS tools (Lambda, S3, API Gateway), transforming manual workflows into dynamic content delivery
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="text-indigo-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700">
                        <strong>R&D Leadership:</strong> Led proof-of-concept projects including Assistant API development, 
                        Question Answering Systems with ElasticSearch and Pinecone, Azure Lambda integrations, document parsing solutions, 
                        and SetFit classification systems; currently fine-tuning Llama 3.2 for performance optimization
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">RAG Systems</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">LLMs</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">ElasticSearch</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">AWS</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">FastAPI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI ML Intern at Infodesk */}
            <div className="relative mb-12 animate-fadeInLeft" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <Zap className="text-white" size={28} />
                </div>
                
                <div className="ml-8 bg-white rounded-xl shadow-xl border border-gray-100 p-8 hover-lift flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">AI ML Intern</h3>
                      <div className="flex items-center space-x-2 text-teal-600 font-semibold">
                        <Building size={18} />
                        <span>Infodesk</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 mt-2 lg:mt-0">
                      <Calendar size={18} />
                      <span className="font-medium">January 2023 - May 2023</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="text-teal-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700">
                        <strong>BioSum Healthcare System:</strong> Designed and developed an article summarization system for the 
                        healthcare domain utilizing state-of-the-art machine learning algorithms
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ChevronRight className="text-teal-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700">
                        <strong>Hybrid Summarization:</strong> Integrated both abstractive models (OpenAI's GPT-4, Meta's Llama, 
                        Google Gemini) and extractive models (BERT, BART, Luhn's algorithm) to deliver domain-specific summaries
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Healthcare AI</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Text Summarization</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">BERT/BART</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">ML Algorithms</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
