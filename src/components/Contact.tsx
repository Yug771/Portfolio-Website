import React, { useState } from 'react'
import { Mail, Phone, MapPin, Github, Send, Calendar, ExternalLink } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (you can integrate with a service like Formspree, EmailJS, etc.)
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! I\'ll get back to you soon.')
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '027yug@gmail.com',
      link: 'mailto:027yug@gmail.com',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXX',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: null,
      color: 'from-purple-500 to-pink-600'
    }
  ]

  const socialLinks = [
    {
      icon: ExternalLink,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/027-yug-patel/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Yug771',
      color: 'hover:text-gray-800'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:027yug@gmail.com',
      color: 'hover:text-red-600'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on exciting AI projects or discuss research opportunities? 
            I'm always open to new challenges and interesting conversations about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 hover-lift">
              <h3 className="text-2xl font-bold gradient-text mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                Whether you're looking for collaboration on AI research, need consultation on machine learning projects, 
                or just want to discuss the latest in AI technology, I'd love to hear from you.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center`}>
                      <contact.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{contact.label}</div>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-gray-800 font-medium">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                      title={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-medium">Available for new opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 hover-lift">
              <h3 className="text-2xl font-bold gradient-text mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project Collaboration Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or how we can work together..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Quick Contact Options */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
                <div className="grid md:grid-cols-1 gap-4">
                  <a
                    href="https://calendly.com/yug-patel" // Replace with actual Calendly link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
                  >
                    <Calendar className="text-blue-600" size={20} />
                    <div>
                      <div className="font-medium text-blue-800">Schedule a Call</div>
                      <div className="text-sm text-blue-600">Book a meeting</div>
                    </div>
                    <ExternalLink className="text-blue-600" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">Y</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">Yug Patel</h3>
              <p className="text-gray-600">Senior AI Engineer & Research Scholar</p>
            </div>

            <div className="flex justify-center space-x-6 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors`}
                  title={social.name}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>

            <div className="text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Yug Patel. All rights reserved.</p>
              <p className="mt-1">Built with React, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact
