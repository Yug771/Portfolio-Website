import React from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">


          {/* Main Content */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Yug Patel</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700">
              Senior AI Engineer & Research Scholar
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Transforming ideas into intelligent solutions through cutting-edge AI, 
              machine learning, and innovative research. Specialized in 
              <span className="gradient-text-accent font-semibold"> RAG systems</span>, 
              <span className="gradient-text-secondary font-semibold"> multi-agent frameworks</span>, and 
              <span className="gradient-text font-semibold"> serverless architectures</span>.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>

            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary flex items-center space-x-2"
            >
              <ExternalLink size={20} />
              <span>View My Work</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">7+</div>
              <div className="text-gray-600">AI Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2</div>
              <div className="text-gray-600">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">8.69</div>
              <div className="text-gray-600">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce"
            style={{ animationDelay: '0.8s' }}
          >
            <ChevronDown size={32} className="text-gray-400 hover:text-blue-600 transition-colors mx-auto" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 text-blue-200 opacity-20">
        <div className="text-6xl animate-float" style={{ animationDelay: '1s' }}>⚡</div>
      </div>
      <div className="absolute top-1/3 right-1/4 text-purple-200 opacity-20">
        <div className="text-6xl animate-float" style={{ animationDelay: '3s' }}>🚀</div>
      </div>
      <div className="absolute bottom-1/4 left-1/3 text-pink-200 opacity-20">
        <div className="text-6xl animate-float" style={{ animationDelay: '5s' }}>💡</div>
      </div>
    </section>
  )
}

export default Hero
