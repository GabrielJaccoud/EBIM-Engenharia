import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>EBIM Engenharia e Consultoria</title>
        <meta name="description" content="Soluções em Engenharia Industrial" />
        <link rel="icon" href="/logo-ebim.png" />
      </Head>

      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            <Image src="/logo-ebim.png" alt="EBIM Logo" width={50} height={50} />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">Serviços</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600">Portfólio</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">Sobre</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contato</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Agende uma consulta</button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 flex items-center justify-center min-h-screen-75">
          <div className="text-center z-10">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
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

        <section id="about" className="py-20 px-6 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-800 mb-12">Sobre a EBIM</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              A EBIM Engenharia e Consultoria é uma empresa dedicada a fornecer soluções inovadoras e eficientes em engenharia industrial. Com uma equipe de especialistas altamente qualificados, atuamos nos setores naval, petróleo e gás, siderurgia e petroquímica, garantindo excelência e segurança em todos os projetos.
            </p>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-800 mb-12">Entre em Contato</h2>
            <p className="text-lg text-gray-700 mb-8">Estamos prontos para atender às suas necessidades. Entre em contato para saber como podemos ajudar.</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">Telefone</h3>
                <p className="text-gray-700">(21) 99999-9999</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">Email</h3>
                <p className="text-gray-700">contato@ebimengenharia.com.br</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">Endereço</h3>
                <p className="text-gray-700">Rua Exemplo, 123 - Centro, Rio de Janeiro - RJ</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8 px-6 text-center">
        <p>&copy; {new Date().getFullYear()} EBIM Engenharia e Consultoria. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

