
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { Code, Database, Shield, Cloud, Smartphone, Globe } from 'lucide-react';

export const SoftwareSection = () => {
  const softwareTypes = [
    { icon: <Code className="w-8 h-8 text-primary" />, title: "Desarrollo a Medida", description: "Soluciones personalizadas que se adaptan perfectamente a sus necesidades." },
    { icon: <Database className="w-8 h-8 text-primary" />, title: "Business Intelligence", description: "Transforme sus datos en información valiosa para la toma de decisiones." },
    { icon: <Shield className="w-8 h-8 text-primary" />, title: "Seguridad Gestionada", description: "Protección integral para sus activos digitales más críticos." },
    { icon: <Cloud className="w-8 h-8 text-primary" />, title: "Servicios Cloud", description: "Migración, optimización y gestión de infraestructuras en la nube." },
    { icon: <Smartphone className="w-8 h-8 text-primary" />, title: "Aplicaciones Móviles", description: "Experiencias móviles intuitivas y de alto rendimiento para sus usuarios." },
    { icon: <Globe className="w-8 h-8 text-primary" />, title: "Consultoría Tecnológica", description: "Asesoramiento experto para guiar su estrategia digital." }
  ];

  return (
    <section id="software" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>Nuestras Soluciones de Software</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {softwareTypes.map((software, index) => (
            <motion.div
              key={index}
              className="p-6 bg-card rounded-lg shadow-lg text-center hover:shadow-primary/10 transition-shadow duration-300 border border-border hover:border-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">{software.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{software.title}</h3>
              <p className="text-sm text-muted-foreground">{software.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
