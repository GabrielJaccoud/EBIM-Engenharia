import './App.css'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Menu, X, CheckCircle, Users, Award, Lightbulb, Shield, Wrench, Factory, Cog, Building2, Droplet, Zap, Leaf, Clock } from 'lucide-react'
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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logoEbim} alt="EBIM Logo" className="w-14 h-14" />
            <span className="text-2xl font-bold text-blue-700">EBIM Engenharia</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-700 transition duration-300 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-700 transition duration-300 font-medium">Sobre Nós</a>
            <a href="#services" className="text-gray-700 hover:text-blue-700 transition duration-300 font-medium">Serviços</a>
            <a href="#differentials" className="text-gray-700 hover:text-blue-700 transition duration-300 font-medium">Diferenciais</a>
            <a href="#areas" className="text-gray-700 hover:text-blue-700 transition duration-300 font-medium">Áreas de Atuação</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition duration-300 font-medium">Contato</a>
            <button onClick={scrollToContact} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 font-semibold shadow-lg">
              Agende uma Consulta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-700 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Home</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Sobre Nós</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Serviços</a>
              <a href="#differentials" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Diferenciais</a>
              <a href="#areas" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Áreas de Atuação</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Contato</a>
              <button onClick={() => { toggleMenu(); scrollToContact(); }} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 font-semibold">
                Agende uma Consulta
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative text-white py-24 px-6 min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(/images/hero-industrial.jpg)`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
          
          <div className="text-center z-10 max-w-5xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-8"
            >
              INOVANDO O
              <span className="block text-yellow-400">FUTURO</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              Mais inteligente, mais conectado e mais sustentável. A EBIM Engenharia caminha lado a lado com a evolução, realizando projetos inovadores para a transição de novas tecnologias.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="#services" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition duration-300 shadow-xl">
                Conheça Nossos Serviços
              </a>
              <button onClick={scrollToContact} className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
                Agende uma Reunião
              </button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
              >
                SEJA BEM-VINDO
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A EBIM Engenharia, criada em 2000, é uma empresa de Engenharia e consultoria que fornece serviços especializados nas áreas de engenharia de Produção e Mecânica, buscando sempre as melhores ferramentas e conceitos tecnológicos para soluções inovadoras e personalizadas para nossos clientes.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Na atualidade, desenvolvemos nossas atividades realizando serviços especializados tais como: consultoria em planejamento de obras, metalização por aspersão térmica, teste hidrostático, limpeza química, flushing e tensionamento em parafusos de guindastes on shore e off shore, serviços de inspeções, planejamento e manutenção de equipamentos dos segmentos da indústria naval, petróleo e gás, siderúrgica e petroquímica.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A EBIM Engenharia possui uma estrutura organizacional que oferece uma administração centralizada do portfólio de projetos de nanotecnologia, visando o apoio à decisão e a facilitação de elaboração de novos contratos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                      <Lightbulb className="w-6 h-6 mr-2" />
                      Nossa Missão
                    </h3>
                    <p className="text-gray-700">
                      Oferecer soluções de engenharia de alta qualidade, contribuindo para o desenvolvimento sustentável e a eficiência operacional de nossos clientes.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                      <Award className="w-6 h-6 mr-2" />
                      Nossa Visão
                    </h3>
                    <p className="text-gray-700">
                      Ser reconhecida como referência em consultoria e engenharia industrial, promovendo inovação e excelência técnica.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img 
                    src="/images/team-engineering.jpg" 
                    alt="Equipe de engenharia EBIM" 
                    className="w-full h-96 object-cover"
                  />
                </div>
                
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Por que escolher a EBIM?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                      <span>Mais de 20 anos de experiência no mercado</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                      <span>Equipe tecnicamente qualificada</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                      <span>Soluções personalizadas e inovadoras</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                      <span>Compromisso com a sustentabilidade</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                      <span>Atuação em múltiplos segmentos industriais</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
              >
                Nossos Serviços
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos soluções completas em engenharia industrial, sempre buscando as melhores ferramentas e conceitos tecnológicos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-blue-600"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-blue-600 mb-4">
                  <Factory className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Engenharia de Produção</h3>
                <p className="text-gray-700 mb-4">Otimização de processos, planejamento e controle de produção, gestão da qualidade e melhoria contínua para maximizar a eficiência operacional.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Consultoria em planejamento de obras</li>
                  <li>• Otimização de processos industriais</li>
                  <li>• Gestão da qualidade</li>
                  <li>• Planejamento e manutenção de equipamentos</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-yellow-500"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-yellow-600 mb-4">
                  <Cog className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Engenharia Mecânica</h3>
                <p className="text-gray-700 mb-4">Desenvolvimento de projetos mecânicos, análise estrutural, manutenção industrial e soluções técnicas especializadas.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Metalização por aspersão térmica</li>
                  <li>• Teste hidrostático</li>
                  <li>• Tensionamento em parafusos de guindastes</li>
                  <li>• Fabricação de contentores navais (IMO 860, DNV 2.7-1)</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-green-500"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-green-600 mb-4">
                  <Wrench className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Consultoria Especializada</h3>
                <p className="text-gray-700 mb-4">Assessoria técnica especializada em diversos segmentos industriais, incluindo naval, petróleo e gás, siderurgia e petroquímica.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Limpeza química e flushing</li>
                  <li>• Serviços de inspeções on shore e off shore</li>
                  <li>• Planejamento estratégico</li>
                  <li>• Projetos de nanotecnologia</li>
                </ul>
              </motion.div>
            </div>

            {/* Service Image Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/images/team-planning.jpg" 
                  alt="Planejamento de projetos" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Planejamento Estratégico</h4>
                    <p>Soluções personalizadas para cada projeto</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/images/offshore-platform.jpg" 
                  alt="Serviços offshore" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Serviços Offshore</h4>
                    <p>Experiência em plataformas e instalações marítimas</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section id="differentials" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
              >
                Por que oferecemos a melhor solução para você?
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A EBIM Engenharia é uma empresa de novas tecnologias a favor da sustentabilidade. Utilizando-se como marco teórico o conceito de uma empresa ecologicamente correta, a EBIM apresenta como proposta fornecimento de produtos e serviços inovadores para otimização de processos, com o mínimo dispêndio de insumos básicos, com destaque para água e energia.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Racionalização do consumo de água, eficiência energética e controle de temperatura apresentam-se como as principais práticas sustentáveis oferecidas pela empresa aos setores comerciais, residenciais e industriais.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Sempre atenta às melhores soluções tecnológicas, a EBIM Engenharia mantém uma rede de empresas parceiras nacionais e internacionais, bem como convênios com instituições de ensino e pesquisa. Engenharia de produto, pesquisa, desenvolvimento e engenharia (P&D&E), além de inovação tecnológica se caracterizam como as principais atividades da empresa.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl mb-6">
                  <img 
                    src="/images/automation-tech.jpg" 
                    alt="Tecnologia e automação industrial" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center"
              >
                <div className="text-green-600 mb-4 flex justify-center">
                  <Leaf className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sustentabilidade</h3>
                <p className="text-gray-700">
                  Práticas ecologicamente corretas e otimização de recursos naturais em todos os projetos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  <Lightbulb className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Inovação</h3>
                <p className="text-gray-700">
                  Tecnologias de ponta e parcerias com instituições de pesquisa para soluções inovadoras.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl text-center"
              >
                <div className="text-yellow-600 mb-4 flex justify-center">
                  <Zap className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Eficiência Energética</h3>
                <p className="text-gray-700">
                  Otimização do consumo de energia e controle de temperatura em processos industriais.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl text-center"
              >
                <div className="text-cyan-600 mb-4 flex justify-center">
                  <Droplet className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Gestão de Recursos</h3>
                <p className="text-gray-700">
                  Racionalização do consumo de água e gestão eficiente de insumos básicos.
                </p>
              </motion.div>
            </div>

            {/* Professional Team Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 flex items-center">
                    <Users className="w-10 h-10 mr-3" />
                    Profissionais Qualificados
                  </h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Com equipe tecnicamente qualificada e com experiência no mercado, a EBIM Engenharia avança também na elaboração de projetos e fabricação de contentores para transportes navais, obedecendo criteriosamente as normas internacionais IMO 860 e DNV 2.7-1.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400">20+</div>
                      <div className="text-sm">Anos de Experiência</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400">100+</div>
                      <div className="text-sm">Projetos Realizados</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400">50+</div>
                      <div className="text-sm">Clientes Atendidos</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Shield className="w-64 h-64 text-blue-300 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Operation Section */}
        <section id="areas" className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
              >
                Áreas de Atuação
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Atuamos nos principais segmentos da indústria, oferecendo soluções especializadas e personalizadas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group overflow-hidden rounded-xl shadow-lg h-64"
              >
                <img 
                  src="/images/offshore-engineering.jpg" 
                  alt="Petróleo e Gás" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Petróleo e Gás</h4>
                    <p className="text-sm">Serviços on shore e off shore</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group overflow-hidden rounded-xl shadow-lg h-64"
              >
                <img 
                  src="/images/refinery-night.jpg" 
                  alt="Petroquímica" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Petroquímica</h4>
                    <p className="text-sm">Processos e manutenção industrial</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group overflow-hidden rounded-xl shadow-lg h-64 bg-gradient-to-br from-gray-700 to-gray-900"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Factory className="w-32 h-32 text-gray-500 opacity-30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Siderurgia</h4>
                    <p className="text-sm">Processos siderúrgicos e metalurgia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group overflow-hidden rounded-xl shadow-lg h-64 bg-gradient-to-br from-blue-700 to-blue-900"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="w-32 h-32 text-blue-500 opacity-30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Indústria Naval</h4>
                    <p className="text-sm">Construção e manutenção naval</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
              >
                Estamos Sempre Perto de Você
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl"
              >
                <div className="flex items-start mb-4">
                  <MapPin className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">Matriz</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Rod RJ 196, S/N - Km 22 Zen 1 - S<br />
                      Bairro: Conde de Araruama<br />
                      Quissamã/RJ<br />
                      CEP: 28.735-000
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl"
              >
                <div className="flex items-start mb-4">
                  <MapPin className="w-8 h-8 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">Filial</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Rua um, nº 117<br />
                      Bairro: Balneário das Garças<br />
                      Rio das Ostras/RJ<br />
                      CEP: 28898-268
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Entre em Contato
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Estamos prontos para atender suas necessidades. Entre em contato conosco e descubra como podemos ajudar seu projeto.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-start">
                  <div className="bg-yellow-500 p-4 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Telefone</h3>
                    <p className="text-blue-100">+55 (22) 9999-9999</p>
                    <p className="text-blue-100">+55 (22) 8888-8888</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 p-4 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">E-mail</h3>
                    <p className="text-blue-100">contato@ebimengenharia.com.br</p>
                    <p className="text-blue-100">projetos@ebimengenharia.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 p-4 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Horário de Atendimento</h3>
                    <p className="text-blue-100">Segunda a Sexta</p>
                    <p className="text-blue-100">08:00 às 17:00h</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 text-gray-900"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Envie sua Mensagem</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Mensagem</label>
                    <textarea 
                      rows="4" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                      placeholder="Como podemos ajudá-lo?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 font-semibold shadow-lg"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-950 text-white py-12 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img src={logoEbim} alt="EBIM Logo" className="w-12 h-12" />
                  <span className="text-xl font-bold">EBIM Engenharia</span>
                </div>
                <p className="text-blue-200 text-sm">
                  Soluções inovadoras em engenharia industrial desde 2000.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-blue-200 text-sm">
                  <li><a href="#about" className="hover:text-yellow-400 transition">Sobre Nós</a></li>
                  <li><a href="#services" className="hover:text-yellow-400 transition">Serviços</a></li>
                  <li><a href="#differentials" className="hover:text-yellow-400 transition">Diferenciais</a></li>
                  <li><a href="#contact" className="hover:text-yellow-400 transition">Contato</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Áreas de Atuação</h4>
                <ul className="space-y-2 text-blue-200 text-sm">
                  <li>• Petróleo e Gás</li>
                  <li>• Petroquímica</li>
                  <li>• Siderurgia</li>
                  <li>• Indústria Naval</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
              <p>&copy; {new Date().getFullYear()} EBIM Engenharia e Consultoria. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
