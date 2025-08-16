import React from 'react'
import { Code, Brain, Database, Cloud, Wrench, Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      skills: [
        { name: "Large Language Models", level: 95 },
        { name: "Retrieval Augmented Generation", level: 90 },
        { name: "Multi-Agent Systems", level: 85 },
        { name: "Natural Language Processing", level: 88 },
        { name: "Deep Learning", level: 82 },
        { name: "Model Optimization", level: 80 },
        { name: "Knowledge Distillation", level: 85 },
        { name: "Computer Vision", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "SQL", level: 80 },
        { name: "R", level: 70 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      title: "AI Frameworks & Libraries",
      icon: Zap,
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "LangChain", level: 90 },
        { name: "AutoGen", level: 88 },
        { name: "OpenAI API", level: 92 },
        { name: "Hugging Face", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 82 },
        { name: "Streamlit", level: 88 },
        { name: "FastAPI", level: 85 }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Microsoft Azure", level: 85 },
        { name: "Azure Function Apps", level: 88 },
        { name: "Azure Service Bus", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Serverless Architecture", level: 82 },
        { name: "Microservices", level: 80 }
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      color: "from-indigo-500 to-purple-600",
      skills: [
        { name: "Vector Databases", level: 85 },
        { name: "SingleStore", level: 80 },
        { name: "PostgreSQL", level: 78 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Elasticsearch", level: 72 }
      ]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "from-pink-500 to-rose-600",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Jupyter Notebooks", level: 88 },
        { name: "Postman", level: 80 },
        { name: "Linux/Unix", level: 75 },
        { name: "CI/CD Pipelines", level: 70 }
      ]
    }
  ]

  const SkillBar = ({ skill, delay = 0 }) => (
    <div className="mb-4" style={{ animationDelay: `${delay}s` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div 
          className="h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  )

  const SkillCategory = ({ category, index }) => (
    <div 
      className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 hover-lift animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
          <category.icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar key={skillIndex} skill={skill} delay={index * 0.1 + skillIndex * 0.05} />
        ))}
      </div>
    </div>
  )

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across AI/ML technologies, cloud platforms, and modern development tools. 
            Specialized in building intelligent systems and scalable solutions.
          </p>
        </div>

        {/* Skills Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-100 animate-fadeInUp">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="text-white" size={28} />
            </div>
            <div className="text-2xl font-bold gradient-text mb-2">8+</div>
            <div className="text-gray-600 font-medium">AI Technologies</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-white" size={28} />
            </div>
            <div className="text-2xl font-bold gradient-text mb-2">6+</div>
            <div className="text-gray-600 font-medium">Languages</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-100 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="text-white" size={28} />
            </div>
            <div className="text-2xl font-bold gradient-text mb-2">Azure</div>
            <div className="text-gray-600 font-medium">Cloud Platform</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-white" size={28} />
            </div>
            <div className="text-2xl font-bold gradient-text mb-2">2+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>

        {/* Key Expertise Highlights */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Key Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100 hover-lift">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-white" size={28} />
                </div>
                <h4 className="text-lg font-bold text-purple-800 mb-2">AI Research & Development</h4>
                <p className="text-purple-600 text-sm">
                  Specialized in RAG systems, multi-agent frameworks, and advanced NLP applications
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 hover-lift">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="text-white" size={28} />
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">Cloud Architecture</h4>
                <p className="text-blue-600 text-sm">
                  Expert in Azure serverless solutions, microservices, and scalable system design
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100 hover-lift">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" size={28} />
                </div>
                <h4 className="text-lg font-bold text-green-800 mb-2">Full-Stack AI Solutions</h4>
                <p className="text-green-600 text-sm">
                  End-to-end development from research prototypes to production-ready AI applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
