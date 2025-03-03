import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (projectsRef.current) {
      const projects = projectsRef.current.querySelectorAll('.project-card');
      
      gsap.fromTo(projects, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Um aplicativo móvel para acompanhar treinos, nutrição e métricas de saúde com recomendações personalizadas.",
      image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Health & Fitness App",
      description: "Um aplicativo móvel para acompanhar treinos, nutrição e métricas de saúde com recomendações personalizadas.",
      image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      tags: ["React Native", "Firebase", "Redux", "Machine Learning"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Um sistema completo de listagem e gestão de propriedades com funcionalidades avançadas de busca e filtragem.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      tags: ["Vue.js", "Express", "PostgreSQL", "Google Maps API"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Financial Dashboard",
      description: "Um painel interativo para visualizar dados financeiros com atualizações em tempo real e análises preditivas.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Angular", "D3.js", "Node.js", "WebSockets"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Educational Platform",
      description: "Uma plataforma de aprendizado online com gerenciamento de cursos, aulas interativas e acompanhamento de progresso.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      tags: ["React", "GraphQL", "MongoDB", "AWS"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Uma ferramenta para analisar o desempenho nas redes sociais em várias plataformas, com relatórios personalizáveis e insights.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      tags: ["Next.js", "Python", "TensorFlow", "Social APIs"],
      demoUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <main className="pt-20 overflow-hidden">
      {/* Header Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div 
          ref={headerRef}
          className="container mx-auto px-6 relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Nossos Projetos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore nosso portfólio de soluções digitais inovadoras, criadas para clientes de diversas indústrias.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="project-card group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-60">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex space-x-4">
                    <a 
                      href={project.demoUrl} 
                      className="bg-white text-purple-900 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.repoUrl} 
                      className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-700 transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-purple-900/50 text-purple-300 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Tem um projeto em mente?
            </h2>
            <p className="text-xl text-purple-100 mb-10">
            Vamos conversar sobre como podemos transformar sua visão em realidade com nossa expertise em design e desenvolvimento.
            </p>
            <a 
              href="/contact" 
              className="px-10 py-4 bg-white text-purple-900 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Inicie uma conversa conosco!
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;