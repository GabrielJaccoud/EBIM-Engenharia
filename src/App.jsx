import './App.css'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react'
import { useState } from 'react'
import logoEbim from './assets/logo-ebim.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logoEbim} alt="EBIM Logo" className="w-12 h-12" />
            <span className="text-xl font-bold text-blue-600">EBIM Engenharia</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">Serviços</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">Sobre</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contato</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Agende uma consulta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Home</a>
              <a href="#services" className="block text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Serviços</a>
              <a href="#about" className="block text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Sobre</a>
              <a href="#contact" className="block text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Contato</a>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Agende uma consulta
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 min-h-screen flex items-center justify-center">
          <div className="text-center z-10 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            >
              EBIM Engenharia e Consultoria
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              Soluções inovadoras em engenharia industrial para o seu negócio.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 shadow-lg"
            >
              Saiba Mais
            </motion.button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-800 mb-12">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Engenharia de Produção</h3>
                <p className="text-gray-700">Otimização de processos, planejamento e controle de produção, gestão da qualidade.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Engenharia Mecânica</h3>
                <p className="text-gray-700">Desenvolvimento de projetos mecânicos, análise estrutural, manutenção industrial.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Consultoria Especializada</h3>
                <p className="text-gray-700">Assessoria técnica em metalização, teste hidrostático, limpeza química e inspeções.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-800 mb-12">Sobre a EBIM</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A EBIM Engenharia e Consultoria é uma empresa dedicada a fornecer soluções inovadoras e eficientes em engenharia industrial. Com uma equipe de especialistas altamente qualificados, atuamos nos setores naval, petróleo e gás, siderurgia e petroquímica, garantindo excelência e segurança em todos os projetos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Nossa Missão</h3>
                  <p className="text-gray-700">
                    Oferecer soluções de engenharia de alta qualidade, contribuindo para o desenvolvimento sustentável e a eficiência operacional de nossos clientes.
                  </p>
                </div>
                
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">Nossa Visão</h3>
                  <p className="text-gray-700">
                    Ser reconhecida como referência em consultoria e engenharia industrial, promovendo inovação e excelência técnica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-800 mb-12">Entre em Contato</h2>
            <p className="text-lg text-gray-700 mb-12">Estamos prontos para atender às suas necessidades. Entre em contato para saber como podemos ajudar.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Telefone</h3>
                <p className="text-gray-700">(21) 99999-9999</p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Email</h3>
                <p className="text-gray-700">contato@ebimengenharia.com.br</p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Endereço</h3>
                <p className="text-gray-700">Rio de Janeiro - RJ</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 px-6 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} EBIM Engenharia e Consultoria. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
