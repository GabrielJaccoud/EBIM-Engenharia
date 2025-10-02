import './App.css'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Menu, X, CheckCircle, Users, Award, Lightbulb, Shield, Wrench, Factory, Cog } from 'lucide-react'
import { useState } from 'react'
import logoEbim from './assets/logo-ebim.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition duration-300 font-medium">Contato</a>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 font-semibold shadow-lg">
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
              <a href="#contact" className="block text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>Contato</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 font-semibold">
                Agende uma Consulta
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 px-6 min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
          
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
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition duration-300 shadow-xl">
                Conheça Nossos Serviços
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
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
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
              >
                SEJA BEM-VINDO
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A EBIM Engenharia e Consultoria é uma empresa dedicada a fornecer soluções inovadoras e eficientes em engenharia industrial. Com uma equipe de especialistas altamente qualificados, atuamos nos setores naval, petróleo e gás, siderurgia e petroquímica, garantindo excelência e segurança em todos os projetos.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Na atualidade, desenvolvemos nossas atividades realizando serviços especializados como consultoria em planejamento de obras, metalização por aspersão térmica, teste hidrostático, limpeza química, flushing e tensionamento em parafusos de guindastes on shore e off shore, serviços de inspeções, planejamento e manutenção de equipamentos.
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
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Por que escolher a EBIM?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-yellow-400 mr-3" />
                      <span>Mais de 20 anos de experiência</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-yellow-400 mr-3" />
                      <span>Equipe altamente qualificada</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-yellow-400 mr-3" />
                      <span>Soluções personalizadas</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-yellow-400 mr-3" />
                      <span>Compromisso com a sustentabilidade</span>
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
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-yellow-500"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-green-500"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-green-600 mb-4">
                  <Wrench className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Consultoria Especializada</h3>
                <p className="text-gray-700 mb-4">Assessoria técnica especializada em diversos segmentos industriais, incluindo naval, petróleo e gás, siderurgia e petroquímica.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Limpeza química e flushing</li>
                  <li>• Serviços de inspeções</li>
                  <li>• Planejamento e manutenção de equipamentos</li>
                </ul>
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
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A EBIM Engenharia é uma empresa de novas tecnologias a favor da sustentabilidade. Utilizando-se como marco teórico o conceito de uma empresa ecologicamente correta, apresentamos soluções inovadoras para otimização de processos, com o mínimo dispêndio de insumos básicos.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Racionalização do consumo de água, eficiência energética e controle de temperatura apresentam-se como as principais práticas sustentáveis oferecidas pela empresa aos setores comerciais, residenciais e industriais.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Sustentabilidade</h3>
                  <p className="text-gray-600">Soluções ecologicamente corretas e eficientes</p>
                </div>
                
                <div className="text-center p-6 bg-yellow-50 rounded-lg">
                  <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Equipe Qualificada</h3>
                  <p className="text-gray-600">Profissionais experientes e capacitados</p>
                </div>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Estamos sempre perto de você</h3>
              <p className="text-lg mb-6">Com estrutura organizacional que oferece administração centralizada de projetos</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">Matriz:</h4>
                  <p className="text-sm">Rio de Janeiro - RJ</p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">Atuação:</h4>
                  <p className="text-sm">Nacional e Internacional</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
              >
                Entre em Contato
              </motion.h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estamos prontos para atender às suas necessidades. Entre em contato para saber como podemos ajudar seu projeto.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Telefone</h3>
                <p className="text-gray-700 font-medium">(21) 99999-9999</p>
              </motion.div>
              
              <motion.div 
                className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Email</h3>
                <p className="text-gray-700 font-medium">contato@ebimengenharia.com.br</p>
              </motion.div>
              
              <motion.div 
                className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Endereço</h3>
                <p className="text-gray-700 font-medium">Rio de Janeiro - RJ</p>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-300 font-semibold text-lg shadow-lg">
                Agende sua Reunião
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <img src={logoEbim} alt="EBIM Logo" className="w-12 h-12 mr-3" />
            <span className="text-2xl font-bold">EBIM Engenharia</span>
          </div>
          <p className="text-blue-200 mb-4">Inovando o futuro da engenharia industrial</p>
          <p className="text-blue-300">&copy; {new Date().getFullYear()} EBIM Engenharia e Consultoria. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
