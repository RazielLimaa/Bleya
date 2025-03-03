import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code, Users, Zap } from 'lucide-react';
import gsap from 'gsap';

const About = () => {
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (teamRef.current) {
      const members = teamRef.current.querySelectorAll('.team-member');
      
      gsap.fromTo(members, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const values = [
    {
      icon: <Code className="w-10 h-10 text-purple-500" />,
      title: "Excelência Técnica",
      description: "Buscamos a perfeição em cada linha de código, garantindo soluções robustas, escaláveis e fáceis de manter."
    },
    {
      icon: <Users className="w-10 h-10 text-purple-500" />,
      title: "Parceria com o Cliente",
      description: "Construímos relacionamentos duradouros com nossos clientes, trabalhando de forma colaborativa para alcançar seus objetivos."
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Inovação",
      description: "Abraçamos novas tecnologias e abordagens para entregar soluções inovadoras que se destacam."
    },
    {
      icon: <Award className="w-10 h-10 text-purple-500" />,
      title: "Garantia de Qualidade",
      description: "Testamos e refinamos rigorosamente nosso trabalho para garantir os mais altos padrões de qualidade e desempenho."
    }
];

const team = [
  {
    name: "Raziel Lima",
    role: "Fundador e Desenvolvedor Líder",
    image: "/.img/profile.jpeg",
    bio: "Olá, tudo bem? Me chamo Raziel, sou desenvolvedor front-end mirim de 17 anos e criador da Bleya. A Bleya é uma empresa especializada em criar designs personalizados para outras empresas, oferecendo soluções criativas e únicas para atender às necessidades de cada cliente. Estou sempre em busca de aprender e aprimorar minhas habilidades para criar experiências digitais inovadoras."
  },
];

  return (
    <main className="pt-20 overflow-hidden">
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="relative py-20 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-35" />
        </div>

        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center"
          style={{ y }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            Sobre a Bleya
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
           Sou um artesão digital, moldando ideias em experiências únicas, onde cada linha de código e cada design criam mundos excepcionais e envolventes.
          </motion.p>
        </motion.div>
      </section>

      {/* Nossa Historia Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Nossa Historia
              </h2>
              <p className="text-gray-300 mb-6">
              Nossa jornada começou em 2024, quando fundamos a JovensTech, uma iniciativa voltada para incentivar o desenvolvimento de sites voltados para o setor de administração. No início, éramos uma pequena equipe com grandes sonhos e, ao longo do tempo, evoluímos para uma empresa focada em criar soluções digitais personalizadas para outras empresas.
              </p>
              <p className="text-gray-300 mb-6">
              Nos primeiros passos da nossa trajetória, lançamos a ECOviva, um projeto inovador que incentivava a prática da reciclagem em instituições parceiras. A ECOviva foi um grande desafio para nós, pois estávamos apenas começando, sem muito conhecimento na área. Porém, com dedicação, estudo e muito esforço, conseguimos criar uma plataforma onde os usuários podiam criar contas para registrar "check-ins", os quais eram baseados na quantidade de reciclagem realizada.
              </p>
              <p className="text-gray-300">
              Este projeto foi uma verdadeira ponte para o nosso crescimento. A ECOviva nos ensinou muito e nos ajudou a aprimorar nossas habilidades. Hoje, com mais experiência e uma equipe fortalecida, seguimos oferecendo soluções digitais de alta qualidade, atendendo diversas empresas e acumulando uma série de projetos de sucesso.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-30 blur-xl" />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Team collaboration" 
                className="rounded-xl relative z-10 w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mossos valores Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Esses princípios fundamentais guiam tudo o que fazemos e moldam a maneira como trabalhamos com nossos clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black border border-gray-800 rounded-xl p-8 hover:border-purple-500 transition-all duration-300"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Conheça-Me"
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma pessoa talentosa que transforma criatividade, expertise e paixão em resultados incríveis em cada projeto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1  gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="team-member group"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;