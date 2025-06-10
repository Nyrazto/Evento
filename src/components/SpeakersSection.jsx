
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { Linkedin } from 'lucide-react';

export const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Elena Vargas",
      role: "Directora de Innovación, ASICA",
      topic: "IA Generativa: Revolucionando Industrias",
      imagePlaceholder: "Professional woman, latina, confident, presenting on stage about AI in dark blue tones",
      bio: "La Dra. Vargas es una reconocida experta en Inteligencia Artificial con más de 15 años de experiencia liderando proyectos de transformación digital. Autora de 'El Futuro Inteligente', su investigación se centra en el impacto de la IA en los modelos de negocio.",
      linkedin: "https://linkedin.com/in/elenavargas"
    },
    {
      name: "Marco Solís",
      role: "Arquitecto Jefe de Software, TechSolutions Global",
      topic: "Arquitecturas Serverless: Escalabilidad y Eficiencia",
      imagePlaceholder: "Professional man, focused, coding on a laptop in a modern dark blue office setting",
      bio: "Marco es un arquitecto de software con una década de experiencia diseñando y construyendo sistemas distribuidos de alta disponibilidad. Es un defensor de las metodologías ágiles y DevOps, y ha implementado soluciones serverless para empresas Fortune 500.",
      linkedin: "https://linkedin.com/in/marcosolis"
    },
    {
      name: "Sofía Chen",
      role: "Especialista en Ciberseguridad, SecureNet",
      topic: "Navegando el Panorama de Amenazas Digitales",
      imagePlaceholder: "Professional woman, asian, analyzing data on multiple screens in a dark blue security operations center",
      bio: "Sofía es una experta en ciberseguridad con un profundo conocimiento en la detección y mitigación de amenazas. Ha trabajado en la protección de infraestructuras críticas y es una ponente frecuente en conferencias internacionales sobre seguridad.",
      linkedin: "https://linkedin.com/in/sofiachen"
    },
    {
      name: "Javier Ríos",
      role: "Consultor Senior en Transformación Digital, Innovatec",
      topic: "Estrategias Cloud para la Empresa Moderna",
      imagePlaceholder: "Professional man, charismatic, discussing strategy with a group in a bright meeting room with dark blue accents",
      bio: "Javier ayuda a las organizaciones a adoptar tecnologías en la nube para optimizar sus procesos y fomentar la innovación. Con experiencia en múltiples sectores, ofrece una perspectiva estratégica sobre cómo la nube puede impulsar el crecimiento empresarial.",
      linkedin: "https://linkedin.com/in/javierrios"
    }
  ];

  return (
    <section id="speakers" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background tech-pattern">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Nuestros Panelistas Expertos</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="glass-effect p-6 rounded-xl shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-primary/20 transition-shadow duration-300 border border-border hover:border-primary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary shadow-lg bg-secondary">
                <img  alt={speaker.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1703528696307-c9008a679141" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-foreground">{speaker.name}</h3>
                <p className="text-primary font-semibold mb-1">{speaker.role}</p>
                <p className="text-sm text-muted-foreground mb-3">Tema: <span className="font-medium text-foreground/80">{speaker.topic}</span></p>
                <p className="text-muted-foreground text-sm mb-3">{speaker.bio}</p>
                <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm">
                  <Linkedin size={16} className="mr-1" /> Perfil de LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
