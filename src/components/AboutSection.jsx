
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { Target, Eye } from 'lucide-react';

export const AboutSection = ({ companyInfo }) => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 tech-pattern">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>Sobre {companyInfo.name}</SectionTitle>
        <motion.div 
          className="glass-effect p-8 md:p-12 rounded-xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img src={companyInfo.logoUrl} alt={`${companyInfo.name} Logo`} className="h-20 md:h-24 flex-shrink-0" />
            <div className="text-center md:text-left">
              <p className="text-lg text-muted-foreground mb-6">{companyInfo.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center"><Target className="mr-2" /> Misión</h3>
                  <p className="text-sm text-muted-foreground">{companyInfo.mission}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center"><Eye className="mr-2" /> Visión</h3>
                  <p className="text-sm text-muted-foreground">{companyInfo.vision}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
