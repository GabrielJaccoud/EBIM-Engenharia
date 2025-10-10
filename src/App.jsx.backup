import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Menu, X, CheckCircle, Users, Award, Lightbulb, Shield, Wrench, Factory, Cog, Building2, Droplet, Zap, Leaf, Clock, ArrowRight, Target, Eye } from 'lucide-react'
import { useState } from 'react'
import logoEbim from './assets/logo-ebim.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6 lg:px-16 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={logoEbim} alt="EBIM Logo" className="w-12 h-12" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                EBIM Engenharia
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              <a href="#home" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Sobre</a>
              <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Serviços</a>
              <a href="#differentials" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Diferenciais</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium">Contato</a>
              <button 
                onClick={scrollToContact} 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
              >
                Fale Conosco
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-700 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-8 space-y-6">
              <a href="#home" className="block text-gray-700 hover:text-blue-700 font-medium text-lg" onClick={toggleMenu}>Home</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-700 font-medium text-lg" onClick={toggleMenu}>Sobre</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-700 font-medium text-lg" onClick={toggleMenu}>Serviços</a>
              <a href="#differentials" className="block text-gray-700 hover:text-blue-700 font-medium text-lg" onClick={toggleMenu}>Diferenciais</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-700 font-medium text-lg" onClick={toggleMenu}>Contato</a>
              <button 
                onClick={() => { toggleMenu(); scrollToContact(); }} 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold"
              >
                Fale Conosco
              </button>
            </div>
          </motion.div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(/images/hero-industrial.jpg)`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>

          <div className="container mx-auto px-6 lg:px-16 py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                  Inovando o
                  <span className="block mt-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    Futuro da Engenharia
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl md:text-3xl text-gray-200 mb-16 leading-relaxed font-light"
              >
                Soluções inteligentes e sustentáveis para a indústria moderna
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <button 
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3"
                >
                  Fale Conosco
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <a 
                  href="#services"
                  className="bg-white/10 backdrop-blur-sm text-white px-12 py-5 rounded-full hover:bg-white/20 transition-all duration-300 font-semibold text-lg border-2 border-white/30"
                >
                  Nossos Serviços
                </a>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-white rounded-full mt-3"
              />
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">
              {[
                { number: '20+', label: 'Anos de Experiência', icon: Award },
                { number: '100+', label: 'Projetos Realizados', icon: Factory },
                { number: '50+', label: 'Clientes Atendidos', icon: Users }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                    {stat.number}
                  </div>
                  <div className="text-xl text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section with Image Background */}
        <section id="about" className="relative py-40 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(/images/equipe.jpg)`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>

          <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Sobre a EBIM Engenharia
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full mb-12"></div>
              <p className="text-2xl text-gray-200 leading-relaxed font-light">
                Desde 2000, fornecendo soluções especializadas em engenharia de Produção e Mecânica com as melhores ferramentas e conceitos tecnológicos.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div {...fadeInUp} className="bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Nossa Missão</h3>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Oferecer soluções de engenharia de alta qualidade, contribuindo para o desenvolvimento sustentável e a eficiência operacional de nossos clientes.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Nossa Visão</h3>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Ser reconhecida como referência em consultoria e engenharia industrial, promovendo inovação e excelência técnica.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-40 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-16">
            <motion.div {...fadeInUp} className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                Nossos Serviços
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-8"></div>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Soluções completas em engenharia industrial
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 mb-24">
              {[
                { 
                  icon: Cog, 
                  title: 'Engenharia de Produção',
                  desc: 'Otimização de processos e gestão da qualidade para maximizar eficiência operacional.',
                  color: 'from-blue-500 to-blue-700'
                },
                { 
                  icon: Wrench, 
                  title: 'Engenharia Mecânica',
                  desc: 'Desenvolvimento de projetos mecânicos e soluções técnicas especializadas.',
                  color: 'from-amber-500 to-amber-700'
                },
                { 
                  icon: Shield, 
                  title: 'Consultoria Especializada',
                  desc: 'Assessoria técnica em diversos segmentos industriais com excelência.',
                  color: 'from-green-500 to-green-700'
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                  className="group bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Featured Services with Images */}
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div {...fadeInUp} className="relative rounded-3xl overflow-hidden shadow-2xl group h-96">
                <img 
                  src="/images/planejamento.jpg" 
                  alt="Planejamento Estratégico" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent flex items-end p-12">
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-4">Planejamento Estratégico</h3>
                    <p className="text-xl text-white/90">Soluções personalizadas para cada projeto</p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative rounded-3xl overflow-hidden shadow-2xl group h-96">
                <img 
                  src="/images/offshore.jpg" 
                  alt="Serviços Offshore" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent flex items-end p-12">
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-4">Serviços Offshore</h3>
                    <p className="text-xl text-white/90">Experiência em plataformas marítimas</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Differentials Section with Image Background */}
        <section id="differentials" className="relative py-40 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(/images/tecnologia.jpg)`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>

          <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <motion.div {...fadeInUp} className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Nossos Diferenciais
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full mb-8"></div>
              <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Compromisso com sustentabilidade e inovação tecnológica
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
              {[
                { icon: Leaf, title: 'Sustentabilidade', desc: 'Práticas ecologicamente corretas', color: 'from-green-500 to-emerald-600' },
                { icon: Lightbulb, title: 'Inovação', desc: 'Tecnologias de ponta', color: 'from-blue-500 to-blue-600' },
                { icon: Zap, title: 'Eficiência Energética', desc: 'Otimização de consumo', color: 'from-amber-500 to-orange-600' },
                { icon: Droplet, title: 'Gestão de Recursos', desc: 'Racionalização de insumos', color: 'from-cyan-500 to-blue-600' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-center group hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-200">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="py-40 bg-white">
          <div className="container mx-auto px-6 lg:px-16">
            <motion.div {...fadeInUp} className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                Áreas de Atuação
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-8"></div>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Expertise nos principais segmentos da indústria
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                { 
                  title: 'Petróleo e Gás', 
                  desc: 'Serviços on shore e off shore',
                  image: '/images/petroleo.jpg'
                },
                { 
                  title: 'Petroquímica', 
                  desc: 'Processos e manutenção industrial',
                  image: '/images/petroquimica.jpg'
                },
                { 
                  title: 'Siderurgia', 
                  desc: 'Processos siderúrgicos e metalurgia',
                  image: '/images/tecnologia.jpg'
                },
                { 
                  title: 'Indústria Naval', 
                  desc: 'Construção e manutenção naval',
                  image: '/images/offshore.jpg'
                }
              ].map((area, index) => (
                <motion.div 
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.15 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl group h-96"
                >
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent flex items-end p-12">
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-3">{area.title}</h3>
                      <p className="text-xl text-white/90">{area.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-16">
            <motion.div {...fadeInUp} className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                Entre em Contato
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mb-8"></div>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Estamos prontos para atender suas necessidades
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div {...fadeInUp} className="space-y-10">
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Telefone</h3>
                      <p className="text-xl text-gray-700">+55 (22) 9999-9999</p>
                      <p className="text-xl text-gray-700">+55 (22) 8888-8888</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">E-mail</h3>
                      <p className="text-xl text-gray-700">contato@ebimengenharia.com.br</p>
                      <p className="text-xl text-gray-700">projetos@ebimengenharia.com.br</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Horário</h3>
                      <p className="text-xl text-gray-700">Segunda a Sexta</p>
                      <p className="text-xl text-gray-700">08:00 às 17:00h</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Envie sua Mensagem</h3>
                <form className="space-y-8">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">Nome</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome completo" 
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">E-mail</label>
                    <input 
                      type="email" 
                      placeholder="seu@email.com" 
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">Telefone</label>
                    <input 
                      type="tel" 
                      placeholder="(00) 00000-0000" 
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-lg">Mensagem</label>
                    <textarea 
                      rows="5" 
                      placeholder="Como podemos ajudá-lo?" 
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none text-lg"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-5 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-xl"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={logoEbim} alt="EBIM Logo" className="w-14 h-14" />
                <span className="text-2xl font-bold">EBIM Engenharia</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Soluções inovadoras em engenharia industrial desde 2000.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
              <ul className="space-y-4">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors text-lg">Sobre Nós</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-lg">Serviços</a></li>
                <li><a href="#differentials" className="text-gray-300 hover:text-white transition-colors text-lg">Diferenciais</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors text-lg">Contato</a></li>
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h3 className="text-xl font-bold mb-6">Áreas de Atuação</h3>
              <ul className="space-y-4">
                <li className="text-gray-300 text-lg">Petróleo e Gás</li>
                <li className="text-gray-300 text-lg">Petroquímica</li>
                <li className="text-gray-300 text-lg">Siderurgia</li>
                <li className="text-gray-300 text-lg">Indústria Naval</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300 text-lg">
                  <Phone className="w-5 h-5" />
                  <span>(22) 9999-9999</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-lg">
                  <Mail className="w-5 h-5" />
                  <span>contato@ebimengenharia.com.br</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 text-center">
            <p className="text-gray-400 text-lg">
              © 2025 EBIM Engenharia e Consultoria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

