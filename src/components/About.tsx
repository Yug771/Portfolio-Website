import React from 'react'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about leveraging artificial intelligence to solve complex real-world problems. 
            I specialize in developing innovative AI solutions, conducting cutting-edge research, 
            and building scalable systems that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Personal Info */}
          <div className="space-y-8">
            <div className="animate-fadeInLeft">
              <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I am a dedicated AI Engineer with a strong academic foundation and practical experience 
                in machine learning, deep learning, and software development. My journey began with a 
                passion for technology and evolved into specializing in artificial intelligence and 
                research-driven solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Currently working as a Senior AI Engineer at Codiste, I focus on developing intelligent 
                systems, implementing RAG frameworks, and conducting research in advanced AI methodologies. 
                My experience spans from traditional software development to cutting-edge AI research.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 animate-fadeInLeft" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="text-2xl font-bold gradient-text">M.Tech</div>
                <div className="text-sm text-gray-600">Computer Science</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500">
                <div className="text-2xl font-bold gradient-text-secondary">Senior</div>
                <div className="text-sm text-gray-600">AI Engineer</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
                <div className="text-2xl font-bold gradient-text-accent">Research</div>
                <div className="text-sm text-gray-600">Publications</div>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-l-4 border-orange-500">
                <div className="text-2xl font-bold" style={{ background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Innovation</div>
                <div className="text-sm text-gray-600">Focused</div>
              </div>
            </div>
          </div>

          {/* Right side - Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 gradient-text animate-fadeInRight">Education</h3>
            
            {/* M.Tech */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover-lift animate-fadeInRight">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Master of Technology (M.Tech)</h4>
                  <p className="text-gray-600 font-semibold mb-2">Computer Science Engineering</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      Parul University
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      2023 - 2025
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award size={16} className="text-yellow-500" />
                    <span className="text-lg font-bold gradient-text">CGPA: 8.69/10</span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    Specialized in AI/ML with research focus on Retrieval Augmented Generation and Multi-Agent Systems
                  </p>
                </div>
              </div>
            </div>

            {/* B.Tech */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover-lift animate-fadeInRight" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-gray-600 font-semibold mb-2">Information Technology</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      SVIT, Vasad
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      2019 - 2023
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Award size={16} className="text-yellow-500" />
                    <span className="text-lg font-bold gradient-text">CGPA: 8.73/10</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Foundation in information technology with focus on software development, data structures, and system design
                  </p>
                </div>
              </div>
            </div>

            {/* Higher Secondary (without percentage) */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover-lift animate-fadeInRight" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Higher Secondary Education</h4>
                  <p className="text-gray-600 font-semibold mb-2">Science Stream (PCM)</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      High School
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      2017 - 2019
                    </div>
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

export default About
