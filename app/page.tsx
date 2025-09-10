'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo-ebim.png"
                alt="EBIM Engenharia"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <span className="text-xl font-bold text-white">EBIM Engenharia</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
              <a href="#servicos" className="text-gray-300 hover:text-green-400 transition-colors">Serviços</a>
              <a href="#portfolio" className="text-gray-300 hover:text-green-400 transition-colors">Portfólio</a>
              <a href="#sobre" className="text-gray-300 hover:text-green-400 transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-300 hover:text-green-400 transition-colors">Contato</a>
              <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg transition-colors">
                Agende uma consulta
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
                <a href="#servicos" className="text-gray-300 hover:text-green-400 transition-colors">Serviços</a>
                <a href="#portfolio" className="text-gray-300 hover:text-green-400 transition-colors">Portfólio</a>
                <a href="#sobre" className="text-gray-300 hover:text-green-400 transition-colors">Sobre</a>
                <a href="#contato" className="text-gray-300 hover:text-green-400 transition-colors">Contato</a>
                <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg transition-colors w-fit">
                  Agende uma consulta
                </button>
              </div>
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
              Inovando com precisão
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
              Transformando projetos em realidade
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Soluções completas em engenharia, consultoria e gestão de obras – com foco em qualidade, sustentabilidade e entrega dentro do prazo.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              Conheça nossos serviços
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Valores / Diferenciais */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">
              Nossos Diferenciais
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprometidos com a excelência técnica e inovação em cada projeto
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: "🏗️",
                title: "BIM & Tecnologia",
                description: "Modelagem 3D avançada e coordenação multidisciplinar"
              },
              {
                icon: "🌱",
                title: "Sustentabilidade",
                description: "Soluções eco-eficientes e responsabilidade ambiental"
              },
              {
                icon: "👥",
                title: "Equipe Especializada",
                description: "Profissionais experientes e multidisciplinares"
              },
              {
                icon: "⚡",
                title: "Eficiência",
                description: "Gestão de projetos focada em resultados e prazos"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Quem Somos</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A EBIM Engenharia e Consultoria é uma empresa especializada em serviços de engenharia de produção e mecânica, 
                fundada com o compromisso de oferecer excelência técnica, inovação e soluções personalizadas para cada cliente.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Atuamos com foco em planejamento de obras, metalização por aspersão térmica, teste hidrostático, 
                limpeza química, flushing, tensionamento em guindastes on shore e off shore, inspeções técnicas e 
                manutenção para os setores naval, petróleo e gás, siderurgia e petroquímica.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nossa equipe é formada por engenheiros experientes com formação em universidades renomadas, 
                garantindo a qualidade e confiabilidade em todos os nossos projetos.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500 to-blue-600 p-8 rounded-lg">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Nossa Missão</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Fornecer soluções de engenharia inovadoras e sustentáveis, 
                    superando as expectativas dos clientes através da excelência técnica 
                    e do compromisso com a qualidade.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">
              Nossos Serviços
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Soluções especializadas para os principais setores industriais
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Consultoria em Planejamento",
                description: "Planejamento estratégico e gestão de obras industriais",
                icon: "📋"
              },
              {
                title: "Metalização por Aspersão",
                description: "Proteção anticorrosiva e revestimentos especiais",
                icon: "🔧"
              },
              {
                title: "Teste Hidrostático",
                description: "Verificação de integridade de equipamentos e tubulações",
                icon: "💧"
              },
              {
                title: "Limpeza Química",
                description: "Limpeza industrial especializada e descontaminação",
                icon: "🧪"
              },
              {
                title: "Flushing e Tensionamento",
                description: "Serviços de flushing e tensionamento em parafusos",
                icon: "⚙️"
              },
              {
                title: "Inspeções Técnicas",
                description: "Inspeções on shore e off shore, manutenção preventiva",
                icon: "🔍"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tecnologia & Inovação */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">A tecnologia que impulsiona seu projeto</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
              Utilizamos as mais avançadas ferramentas de modelagem 3D, detecção de colisões e coordenação multidisciplinar
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Revit", description: "Modelagem BIM avançada" },
                { name: "Navisworks", description: "Coordenação e análise" },
                { name: "Civil 3D", description: "Projetos de infraestrutura" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{tech.name[0]}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">{tech.name}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
              <p className="text-gray-300 text-lg mb-8">
                Pronto para transformar seu projeto em realidade? Entre em contato conosco para uma consulta personalizada.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-400">Email</h3>
                    <p className="text-gray-300">contato@ebimengenharia.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-400">Telefone</h3>
                    <p className="text-gray-300">(00) 0000-0000</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-400">Endereço</h3>
                    <p className="text-gray-300">Rua Exemplo, 123 - Cidade/UF</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="bg-gray-700 p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Nome</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Empresa</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      placeholder="Sua empresa"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 text-gray-300">Tipo de Serviço</label>
                  <select className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white">
                    <option>Selecione um serviço</option>
                    <option>Consultoria em Planejamento</option>
                    <option>Metalização por Aspersão</option>
                    <option>Teste Hidrostático</option>
                    <option>Limpeza Química</option>
                    <option>Inspeções Técnicas</option>
                    <option>Outros</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 text-gray-300">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    placeholder="Descreva seu projeto ou necessidade"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo-ebim.png"
                  alt="EBIM Engenharia"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-lg font-bold">EBIM Engenharia</span>
              </div>
              <p className="text-gray-400">
                Soluções completas em engenharia e consultoria para os principais setores industriais.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-green-400">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Consultoria em Planejamento</li>
                <li>Metalização por Aspersão</li>
                <li>Teste Hidrostático</li>
                <li>Inspeções Técnicas</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-green-400">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
                <li><a href="#servicos" className="hover:text-green-400 transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-green-400 transition-colors">Sobre</a></li>
                <li><a href="#contato" className="hover:text-green-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-green-400">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@ebimengenharia.com.br</li>
                <li>(00) 0000-0000</li>
                <li>Rua Exemplo, 123 - Cidade/UF</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EBIM Engenharia e Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
