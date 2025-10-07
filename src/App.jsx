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
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={logoEbim} alt="EBIM Logo" className="w-12 h-12" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                EBIM Engenharia
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium text-sm">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium text-sm">Sobre Nós</a>
              <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium text-sm">Serviços</a>
              <a href="#differentials" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium text-sm">Diferenciais</a>
              <a href="#areas" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium text-sm">Áreas de Atuação</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors duration-300 font-medium text-sm">Contato</a>
              <button 
                onClick={scrollToContact} 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-sm"
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
            <div className="px-6 py-6 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Home</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Sobre Nós</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Serviços</a>
              <a href="#differentials" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Diferenciais</a>
              <a href="#areas" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Áreas de Atuação</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Contato</a>
              <button 
                onClick={() => { toggleMenu(); scrollToContact(); }} 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Fale Conosco
              </button>
            </div>
          </motion.div>
        )}
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Inovando o
                  <span className="block bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    Futuro da Engenharia
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              >
                Soluções inteligentes, conectadas e sustentáveis para a indústria moderna
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button 
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                >
                  Fale Conosco
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#services"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 font-semibold border border-white/20"
                >
                  Conheça Nossos Serviços
                </a>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Sobre a <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">EBIM Engenharia</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div {...fadeInUp}>
                <img 
                  src="/images/equipe.jpg" 
                  alt="Equipe EBIM" 
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </motion.div>

              <motion.div {...fadeInUp} className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A <strong className="text-blue-700">EBIM Engenharia</strong>, criada em 2000, é uma empresa de Engenharia e consultoria que fornece serviços especializados nas áreas de engenharia de Produção e Mecânica, buscando sempre as melhores ferramentas e conceitos tecnológicos para soluções inovadoras e personalizadas para nossos clientes.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Na atualidade, desenvolvemos nossas atividades realizando serviços especializados tais como: consultoria em planejamento de obras, metalização por aspersão térmica, teste hidrostático, limpeza química, flushing e tensionamento em parafusos de guindastes on shore e off shore, serviços de inspeções, planejamento e manutenção de equipamentos dos segmentos da indústria naval, petróleo e gás, siderúrgica e petroquímica.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  A EBIM Engenharia possui uma estrutura organizacional que oferece uma administração centralizada do portfólio de projetos de nanotecnologia, visando o apoio à decisão e a facilitação da negociação de novos contratos.
                </p>
              </motion.div>
            </div>

            {/* Mission and Vision */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 mb-16"
            >
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-2xl border border-blue-200/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Nossa Missão</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Oferecer soluções de engenharia de alta qualidade, contribuindo para o desenvolvimento sustentável e a eficiência operacional de nossos clientes.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 rounded-2xl border border-amber-200/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Nossa Visão</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconhecida como referência em consultoria e engenharia industrial, promovendo inovação e excelência técnica.
                </p>
              </motion.div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div {...fadeInUp} className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 text-center">Por que escolher a EBIM?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Award, text: 'Mais de 20 anos de experiência no mercado' },
                  { icon: Users, text: 'Equipe tecnicamente qualificada' },
                  { icon: Lightbulb, text: 'Soluções personalizadas e inovadoras' },
                  { icon: Shield, text: 'Compromisso com a sustentabilidade' },
                  { icon: Factory, text: 'Atuação em múltiplos segmentos industriais' },
                  { icon: CheckCircle, text: 'Normas internacionais IMO 860 e DNV 2.7-1' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <p className="text-white/90">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nossos <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Serviços</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos soluções completas em engenharia industrial, sempre buscando as melhores ferramentas e conceitos tecnológicos
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mt-4"></div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              {/* Service Card 1 */}
              <motion.div variants={fadeInUp} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Engenharia de Produção</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Otimização de processos, planejamento e controle de produção, gestão da qualidade e melhoria contínua para maximizar eficiência operacional.
                </p>
                <ul className="space-y-3">
                  {[
                    'Consultoria em planejamento de obras',
                    'Otimização de processos industriais',
                    'Gestão da qualidade',
                    'Planejamento e manutenção de equipamentos'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Service Card 2 */}
              <motion.div variants={fadeInUp} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Engenharia Mecânica</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Desenvolvimento de projetos mecânicos, análise estrutural, manutenção industrial e soluções técnicas especializadas.
                </p>
                <ul className="space-y-3">
                  {[
                    'Metalização por aspersão térmica',
                    'Teste hidrostático',
                    'Tensionamento em parafusos de guindastes',
                    'Fabricação de contentores navais (IMO 860, DNV 2.7-1)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Service Card 3 */}
              <motion.div variants={fadeInUp} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultoria Especializada</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Assessoria técnica especializada em diversos segmentos industriais, incluindo naval, petróleo e gás, siderurgia e petroquímica.
                </p>
                <ul className="space-y-3">
                  {[
                    'Limpeza química e flushing',
                    'Serviços de inspeções on shore e off shore',
                    'Planejamento estratégico',
                    'Projetos de nanotecnologia'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Featured Services */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src="/images/planejamento.jpg" 
                  alt="Planejamento Estratégico" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Planejamento Estratégico</h3>
                    <p className="text-white/90">Soluções personalizadas para cada projeto</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src="/images/offshore.jpg" 
                  alt="Serviços Offshore" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Serviços Offshore</h3>
                    <p className="text-white/90">Experiência em plataformas e instalações marítimas</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Differentials Section */}
        <section id="differentials" className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nossos <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Diferenciais</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compromisso com sustentabilidade e inovação tecnológica
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mt-4"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div {...fadeInUp}>
                <img 
                  src="/images/tecnologia.jpg" 
                  alt="Tecnologia e Automação" 
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </motion.div>

              <motion.div {...fadeInUp} className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Inovação e Sustentabilidade
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A EBIM Engenharia é uma empresa de novas tecnologias a favor da sustentabilidade. Utilizando-se como marco teórico o conceito de uma empresa ecologicamente correta, a EBIM apresenta como proposta fornecimento de produtos e serviços inovadores para otimização de processos, com o mínimo dispêndio de insumos básicos, com destaque para água e energia.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Racionalização do consumo de água, eficiência energética e controle de temperatura apresentam-se como as principais práticas sustentáveis oferecidas pela empresa aos setores comerciais, residenciais e industriais.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sempre atenta às melhores soluções tecnológicas, a EBIM Engenharia mantém uma rede de empresas parceiras nacionais e internacionais, bem como convênios com instituições de ensino e pesquisa. Engenharia de produto, pesquisa, desenvolvimento e engenharia (P&D&E), além de inovação tecnológica se caracterizam como as principais atividades da empresa.
                </p>
              </motion.div>
            </div>

            {/* Differential Cards */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {[
                { icon: Leaf, title: 'Sustentabilidade', desc: 'Práticas ecologicamente corretas e otimização de recursos naturais em todos os projetos.', color: 'from-green-500 to-emerald-600' },
                { icon: Lightbulb, title: 'Inovação', desc: 'Tecnologias de ponta e parcerias com instituições de pesquisa para soluções inovadoras.', color: 'from-blue-500 to-blue-600' },
                { icon: Zap, title: 'Eficiência Energética', desc: 'Otimização do consumo de energia e controle de temperatura em processos industriais.', color: 'from-amber-500 to-orange-600' },
                { icon: Droplet, title: 'Gestão de Recursos', desc: 'Racionalização do consumo de água e gestão eficiente de insumos básicos.', color: 'from-cyan-500 to-blue-600' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Section */}
            <motion.div {...fadeInUp} className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Profissionais Qualificados</h3>
                <p className="text-white/90 max-w-3xl mx-auto text-lg">
                  Com equipe tecnicamente qualificada e com experiência no mercado, a EBIM Engenharia avança também na elaboração de projetos e fabricação de contentores para transportes navais, obedecendo criteriosamente as normas internacionais IMO 860 e DNV 2.7-1.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { number: '20+', label: 'Anos de Experiência' },
                  { number: '100+', label: 'Projetos Realizados' },
                  { number: '50+', label: 'Clientes Atendidos' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Areas Section */}
        <section id="areas" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Áreas de <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Atuação</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Atuamos nos principais segmentos da indústria, oferecendo soluções especializadas e personalizadas
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mt-4"></div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { 
                  title: 'Petróleo e Gás', 
                  desc: 'Serviços on shore e off shore',
                  image: '/images/petroleo.jpg',
                  icon: Droplet,
                  gradient: 'from-blue-600 to-cyan-600'
                },
                { 
                  title: 'Petroquímica', 
                  desc: 'Processos e manutenção industrial',
                  image: '/images/petroquimica.jpg',
                  icon: Factory,
                  gradient: 'from-purple-600 to-pink-600'
                },
                { 
                  title: 'Siderurgia', 
                  desc: 'Processos siderúrgicos e metalurgia',
                  icon: Building2,
                  gradient: 'from-gray-700 to-gray-900'
                },
                { 
                  title: 'Indústria Naval', 
                  desc: 'Construção e manutenção naval',
                  icon: Cog,
                  gradient: 'from-blue-700 to-indigo-800'
                }
              ].map((area, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {area.image ? (
                    <>
                      <img 
                        src={area.image} 
                        alt={area.title} 
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    </>
                  ) : (
                    <div className={`w-full h-80 bg-gradient-to-br ${area.gradient}`}></div>
                  )}
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-white/90">{area.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Estamos Sempre <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Perto de Você</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mt-4"></div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-10 rounded-2xl border border-blue-200/50 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Matriz</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="text-lg"><strong>Rod RJ 196, S/N - Km 22 Zen 1 - S</strong></p>
                  <p>Bairro: Conde de Araruama</p>
                  <p>Quissamã/RJ</p>
                  <p className="font-semibold">CEP: 28.735-000</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-10 rounded-2xl border border-amber-200/50 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Filial</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="text-lg"><strong>Rua um, nº 117</strong></p>
                  <p>Bairro: Balneário das Garças</p>
                  <p>Rio das Ostras/RJ</p>
                  <p className="font-semibold">CEP: 28898-268</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Entre em <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Contato</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estamos prontos para atender suas necessidades. Entre em contato conosco e descubra como podemos ajudar seu projeto
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mt-4"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div {...fadeInUp} className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Telefone</h3>
                      <p className="text-gray-700 text-lg">+55 (22) 9999-9999</p>
                      <p className="text-gray-700 text-lg">+55 (22) 8888-8888</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">E-mail</h3>
                      <p className="text-gray-700 text-lg">contato@ebimengenharia.com.br</p>
                      <p className="text-gray-700 text-lg">projetos@ebimengenharia.com.br</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Horário de Atendimento</h3>
                      <p className="text-gray-700 text-lg">Segunda a Sexta</p>
                      <p className="text-gray-700 text-lg">08:00 às 17:00h</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div {...fadeInUp} className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nome</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome completo" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">E-mail</label>
                    <input 
                      type="email" 
                      placeholder="seu@email.com" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      placeholder="(00) 00000-0000" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Mensagem</label>
                    <textarea 
                      rows="5" 
                      placeholder="Como podemos ajudá-lo?" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg"
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
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={logoEbim} alt="EBIM Logo" className="w-12 h-12" />
                <span className="text-xl font-bold">EBIM Engenharia</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Soluções inovadoras em engenharia industrial desde 2000.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#differentials" className="text-gray-300 hover:text-white transition-colors">Diferenciais</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h3 className="text-lg font-bold mb-6">Áreas de Atuação</h3>
              <ul className="space-y-3">
                <li className="text-gray-300">• Petróleo e Gás</li>
                <li className="text-gray-300">• Petroquímica</li>
                <li className="text-gray-300">• Siderurgia</li>
                <li className="text-gray-300">• Indústria Naval</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>(22) 9999-9999</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>contato@ebimengenharia.com.br</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 EBIM Engenharia e Consultoria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
