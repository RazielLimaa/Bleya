import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

emailjs.init('fpO7Zn1V_TtQzAUcg');

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(async () => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      try {
        // Envia o e-mail via EmailJS
        const response = await emailjs.send('service_kc205db', 'template_6npfirx', formData);
        console.log('E-mail enviado com sucesso:', response);
        setSubmitted(true); // Marca como enviado
        setFormData({ name: '', email: '', subject: '', message: '' }); // Limpa os campos do formulário
      } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
      } finally {
        setIsSubmitting(false);
      }
    
      

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-500" />,
      title: "Email",
      details: "eurael30215@gmail.com",
      link: "mailto:eurael30215@gmail.com"  // Link para abrir o cliente de e-mail
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-500" />,
      title: "Telefone",
      details: "+55 (11) 98198-2168",
      link: "https://wa.me/5511981982168"  // Link para fazer uma ligação diretamente
    },
    
  ];
  return (
    <main className="pt-20 overflow-hidden">
      {/* Header Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          className="container mx-auto px-6 relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tem alguma dúvida ou quer trabalhar conosco? Adoraríamos ouvir de você.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Informação de Contato
                </h2>
                <p className="text-gray-300 mb-8">
                  Sinta-se à vontade para entrar em contato conosco por meio de qualquer um dos seguintes canais. Estamos sempre prontos para discutir seu projeto ou responder a qualquer dúvida.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-gray-800 p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <a
                        href={item.link}
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                        target={item.title === "Office" ? "_blank" : undefined}
                        rel={item.title === "Office" ? "noopener noreferrer" : undefined}
                      >
                        {item.details}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold mb-4">Siga Nós</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Github size={20} />, url: 'https://github.com/RazhiLz', label: 'GitHub' },
                    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/raziel-freitas-lima-ab3592332/', label: 'LinkedIn' },
                    { icon: <Mail size={20} />, url: 'mailto:eurael30215@gmail.com', label: 'Email' },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="sr-only">{social.label}</span>
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
        <h2 className="text-2xl font-bold mb-6">Envie Uma Mensagem Para Nós</h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-900/30 border border-green-500 text-green-300 p-4 rounded-lg mb-6"
          >
            <p className="font-medium">Obrigado pela sua mensagem!</p>
            <p>Nós iremos responder o mais rápido possível!</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Assunto
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Escolha um assunto</option>
                <option value="General Inquiry">Consulta Geral</option>
                <option value="Project Proposal">Proposta de Projeto</option>
                <option value="Job Opportunity">Oportunidade de Trabalho</option>
                <option value="Other">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Sua Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <>
                  <span>Envie a Mensagem</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </motion.div>
          </div>
        </div>
      </section>


    </main>
  );
}

export default Contact;