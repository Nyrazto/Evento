
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

export const CTASection = ({ eventName, companyName, handleRegister }) => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 tech-pattern">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle>¿Listo para Transformar tu Negocio?</SectionTitle>
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          No te pierdas la oportunidad de ser parte de la revolución tecnológica. Regístrate en {eventName} y descubre cómo {companyName} puede impulsar tu éxito.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button 
            onClick={handleRegister}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg rounded-md shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105"
          >
            <Users className="w-5 h-5 mr-2" />
            Reservar Mi Lugar en {eventName}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
