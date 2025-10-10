import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, Users, Award, Wrench, Shield, Lightbulb, 
  Phone, Mail, Clock, MapPin, Menu, X,
  Leaf, Zap, Droplets, Target, ChevronDown,
  Linkedin, Facebook, Instagram, MessageCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img src="/LOGO-EBIM.png" alt="EBIM" className="h-12 w-auto" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                EBIM Engenharia
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sobre</button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Serviços</button>
              <button onClick={() => scrollToSection('diferenciais')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Diferenciais</button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contato</button>
              <button onClick={() => scrollToSection('contato')} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium">
                Fale Conosco
              </button>
            </nav>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-700">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="md:hidden py-6 border-t">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Home</button>
                <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Sobre</button>
                <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Serviços</button>
                <button onClick={() => scrollToSection('diferenciais')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Diferenciais</button>
                <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">Contato</button>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20" style={{ backgroundImage: 'url(/EBIM-Engenharia/images/hero-industrial.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Inovando o <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Futuro da Engenharia</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 mb-12 font-light max-w-4xl mx-auto">
              Soluções inteligentes e sustentáveis para a indústria moderna
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => scrollToSection('contato')} className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold">
                Fale Conosco
              </button>
              <button onClick={() => scrollToSection('servicos')} className="px-10 py-5 bg-white/10 backdrop-blur-md text-white text-lg rounded-full border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 font-semibold">
                Nossos Serviços
              </button>
            </div>
          </motion.div>
          <motion.div className="absolute bottom-12 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={40} className="text-white/70" />
          </motion.div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <motion.div className="container mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl">
                <Award className="w-12 h-12 text-white" />
              </div>
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">20+</div>
              <div className="text-xl text-gray-600 font-medium">Anos de Experiência</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-xl">
                <Factory className="w-12 h-12 text-white" />
              </div>
              <div className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-3">100+</div>
              <div className="text-xl text-gray-600 font-medium">Projetos Realizados</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-xl">
                <Users className="w-12 h-12 text-white" />
              </div>
              <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-3">50+</div>
              <div className="text-xl text-gray-600 font-medium">Clientes Atendidos</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="relative py-32" style={{ backgroundImage: 'url(/EBIM-Engenharia/images/team-engineering.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        <motion.div className="relative z-10 container mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Sobre a EBIM Engenharia</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto mb-16">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center">
              Desde 2000, fornecendo soluções especializadas em engenharia de Produção e Mecânica com as melhores ferramentas e conceitos tecnológicos.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Nossa Missão</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Oferecer soluções de engenharia de alta qualidade, contribuindo para o desenvolvimento sustentável e a eficiência operacional.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Nossa Visão</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Ser reconhecida como referência em consultoria e engenharia industrial, promovendo inovação e excelência técnica.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <motion.div className="container mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nossos <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Soluções completas em engenharia industrial</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Factory className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engenharia de Produção</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Otimização de processos e gestão da qualidade.</p>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-700">Planejamento e Controle</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-700">Gestão da Qualidade</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-700">Logística Industrial</span></li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engenharia Mecânica</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Projetos mecânicos e soluções técnicas.</p>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-700">Projetos Mecânicos</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-700">Análise de Estruturas</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-700">Manutenção Industrial</span></li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultoria Especializada</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Assessoria técnica em diversos segmentos.</p>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-700">Diagnóstico Operacional</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-700">Otimização de Processos</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-700">Gestão de Projetos</span></li>
              </ul>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <img src="/EBIM-Engenharia/images/team-planning.jpg" alt="Planejamento" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-3xl font-bold text-white mb-3">Planejamento Estratégico</h3>
                <p className="text-lg text-gray-200">Soluções personalizadas</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <img src="/EBIM-Engenharia/images/offshore-platform.jpg" alt="Offshore" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-3xl font-bold text-white mb-3">Serviços Offshore</h3>
                <p className="text-lg text-gray-200">Experiência marítima</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="relative py-32" style={{ backgroundImage: 'url(/EBIM-Engenharia/images/automation-tech.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        <motion.div className="relative z-10 container mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nossos <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Diferenciais</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">Compromisso com sustentabilidade e inovação</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sustentabilidade</h3>
              <p className="text-gray-200">Práticas ecológicas</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Inovação</h3>
              <p className="text-gray-200">Tecnologias de ponta</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Eficiência Energética</h3>
              <p className="text-gray-200">Otimização de consumo</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Gestão de Recursos</h3>
              <p className="text-gray-200">Racionalização de insumos</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Áreas */}
      <section className="py-32 bg-white">
        <motion.div className="container mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Áreas de <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Atuação</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Expertise nos principais segmentos</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <img src="/EBIM-Engenharia/images/offshore-engineering.jpg" alt="Petróleo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-4xl font-bold text-white mb-3">Petróleo e Gás</h3>
                <p className="text-lg text-gray-200">On shore e off shore</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <img src="/EBIM-Engenharia/images/refinery-night.jpg" alt="Petroquímica" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-4xl font-bold text-white mb-3">Petroquímica</h3>
                <p className="text-lg text-gray-200">Processos industriais</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-gray-700 to-gray-900">
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-3">Siderurgia</h3>
                <p className="text-lg text-gray-200">Processos siderúrgicos</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-blue-700 to-blue-900">
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-3">Indústria Naval</h3>
                <p className="text-lg text-gray-200">Construção naval</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Localização */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <motion.div className="container mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Estamos Sempre <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Perto de Você</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Matriz e filial estrategicamente localizadas</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Matriz</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Quissamã, Rio de Janeiro<br />Centro da cidade<br />CEP: 28000-000</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Filial</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Rio das Ostras, Rio de Janeiro<br />Região central<br />CEP: 28890-000</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-32 bg-white">
        <motion.div className="container mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Entre em <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Contato</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Estamos prontos para atender</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Telefone</h3>
                    <p className="text-gray-600">+55 (22) 9999-9999</p>
                    <p className="text-gray-600">+55 (22) 8888-8888</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">E-mail</h3>
                    <p className="text-gray-600">contato@ebimengenharia.com.br</p>
                    <p className="text-gray-600">projetos@ebimengenharia.com.br</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Horário</h3>
                    <p className="text-gray-600">Segunda a Sexta</p>
                    <p className="text-gray-600">08:00 às 17:00h</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Envie sua Mensagem</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nome</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors text-lg" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">E-mail</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors text-lg" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Telefone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors text-lg" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Mensagem</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors text-lg resize-none" placeholder="Como podemos ajudá-lo?"></textarea>
                  </div>
                  <button type="submit" disabled={formStatus === 'sending'} className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xl font-semibold rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50">
                    {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                  {formStatus === 'success' && (
                    <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-2xl text-center font-semibold">
                      Mensagem enviada com sucesso!
                    </div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src="/LOGO-EBIM.png" alt="EBIM" className="h-10 w-auto" />
                <span className="text-xl font-bold">EBIM Engenharia</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">Soluções inovadoras desde 2000.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-white transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="text-gray-300 hover:text-white transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection('diferenciais')} className="text-gray-300 hover:text-white transition-colors">Diferenciais</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Áreas de Atuação</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Petróleo e Gás</li>
                <li>Petroquímica</li>
                <li>Siderurgia</li>
                <li>Indústria Naval</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Contato</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2"><Phone size={18} /><span>(22) 9999-9999</span></li>
                <li className="flex items-center space-x-2"><Mail size={18} /><span>contato@ebimengenharia.com.br</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>© 2025 EBIM Engenharia e Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50">
        <MessageCircle size={32} className="text-white" />
      </a>
    </div>
  );
}

export default App;
