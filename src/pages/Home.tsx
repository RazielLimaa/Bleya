import { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, Code, Database, Layers, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// @ts-ignore
import TextPressure from '../components/TextPressure';
import Waves from './Waves';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll('.service-card');
      
      gsap.fromTo(cards, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const services = [
    {
      icon: <Code className="w-10 h-10 text-purple-500" />,
      title: "Web Development",
      description: "Criando websites e aplicações web responsivas e de alto desempenho usando frameworks e tecnologias modernas."
    },
    {
      icon: <Layers className="w-10 h-10 text-purple-500" />,
      title: "UI/UX Design",
      description: "Projetando interfaces de usuário intuitivas e envolventes que proporcionam experiências excepcionais."
    },
    {
      icon: <Database className="w-10 h-10 text-purple-500" />,
      title: "Backend Solutions",
      description: "Desenvolvendo aplicações robustas no lado do servidor, APIs e arquiteturas de banco de dados para impulsionar seus produtos digitais."
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Performance Optimization",
      description: "Aprimorando a velocidade e a eficiência da aplicação por meio de técnicas avançadas de otimização."
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        
        <motion.div className="absolute inset-0 z-0">

          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-100" />
          
          <Waves
            lineColor="#FF00FF"
            backgroundColor="rgba(63, 63, 63, 0.17)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={20}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={20}
            xGap={12}
            yGap={36}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/30 to-black" />

        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            
            <div className=" relative tp-30 flex items-center justify-center h-300px md:h-[400px] ">
              <TextPressure 
                text="Bleya - Studio"
                flex={true}
                alpha={false}
                stroke={true}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#8b5cf6"
                minFontSize={48}
                
              />
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Bleya, Aqui seu Design é seu Pensamento.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center"
          >
            <a 
              href="/projects" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Visualizar Projetos
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-transparent border-2 border-white rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Entre em Contato
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          <ArrowDown className="w-8 h-8 text-white opacity-70" />
        </motion.div>
        
      </section>
          
      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-black">
      

        <div className="container mx-auto px-6">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
             Nossas Experiencias
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nós combinamos excelência técnica com inovação criativa para entregar soluções digitais excepcionais.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Stats Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-fixed bg-center opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/30 to-black" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "5+", label: "Happy Clients" },
              { number: "1+", label: "Years Experience" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8"
              >
                <h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-xl text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Pronto para transformar sua presença digital?
            </h2>
            <p className="text-xl text-purple-100 mb-10">
            Vamos colaborar para criar algo extraordinário juntos.
            </p>
            <a 
              href="/contact" 
              className="px-10 py-4 bg-white text-purple-900 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Inicie seu projeto.
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;