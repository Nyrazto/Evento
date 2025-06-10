import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { Briefcase, DollarSign, Shield, Coffee, Users, BarChart2, Eye, Cloud, Network, GraduationCap, Zap, Award, Star } from 'lucide-react';

export const ScheduleSection = ({ companyInfo }) => {
  const schedule = [
    { time: "8:30 / 9:00 a.m.", event: "Bienvenida y Presentación corporativa de Grupo ASICA", subEvent: "Bienvenida y Visión estratégica", speaker: "Andres Pohl", icon: <Zap className="text-primary" /> },
    { time: "9:00 / 9:30 a.m.", event: "SAS en el Sector Financiero", subEvent: "", speaker: "Javier del Rio (SAS)", icon: <BarChart2 className="text-primary" /> },
    { time: "10:00 / 10:45 a.m.", event: "Impulsando decisiones estratégicas con SAS Viya", subEvent: "", speaker: "Javier del Rio", icon: <Briefcase className="text-primary" /> },
    { time: "10:45 / 11:00 a.m.", event: "Pausa café (15 Minutos)", subEvent: "", speaker: "", icon: <Coffee className="text-primary" /> },
    { time: "11:00 / 11:45 a.m.", event: "Gestión de riesgos, prevención de lavado de activos (AML) y cumplimiento normativo", subEvent: "", speaker: "Javier del Rio", icon: <Shield className="text-primary" /> },
    { time: "11:45 / 12:30 p.m.", event: "Optimización del flujo de efectivo y rentabilidad inteligente", subEvent: "", speaker: "Javier del Rio", icon: <DollarSign className="text-primary" /> },
    { time: "12:30 / 01:30 p.m.", event: "Pausa del medio dia (Una Hora)", subEvent: "", speaker: "", icon: <Users className="text-primary" /> },
    { time: "2:00 / 2:45 p.m.", event: "Inteligencia del cliente con SAS CI360: personalización y campañas omnicanal", subEvent: "", speaker: "Javier del Rio (SAS)", icon: <Users className="text-primary" /> },
    { time: "2:45 / 3:45 p.m.", event: "Observabilidad y monitoreo de sistemas con Datadog", subEvent: "", speaker: "Ricardo Rea (DataDog)", icon: <Eye className="text-primary" /> },
    { time: "3:45 / 4:00 p.m.", event: "Pausa café (15 minutos)", subEvent: "", speaker: "", icon: <Coffee className="text-primary" /> },
    { time: "4:00 / 5:00 p.m.", event: "Seguridad convergente en la nube con CATO", subEvent: "", speaker: "Miguel Minicz (CATO Networks)", icon: <Cloud className="text-primary" /> },
    { time: "5:00 / 5:30 p.m.", event: "Formación práctica en ciberseguridad", subEvent: "", speaker: "Andres Pohl (ASICA University)", icon: <GraduationCap className="text-primary" /> },
    { time: "5:30 / 6:00 p.m.", event: "Conclusiones", subEvent: "Cierre del Evento", speaker: "Andres Pohl", icon: <Star className="text-primary" /> },
    { time: "6:00 p.m. en adelante", event: "Coctel (Una hora)", subEvent: "", speaker: "", icon: <Award className="text-primary" /> }
  ];

  return (
    <section id="schedule" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Agenda de {companyInfo.eventName}</SectionTitle>
        <div className="space-y-6">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start p-6 bg-card rounded-lg shadow-md hover:shadow-primary/10 transition-shadow duration-300 border border-border"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.02, borderColor: 'hsl(var(--primary))' }}
            >
              <div className="mr-4 pt-1">{item.icon}</div>
              <div>
                <p className="text-sm font-semibold text-primary">{item.time}</p>
                <h3 className="text-lg font-medium text-foreground mt-1">{item.event}</h3>
                {item.subEvent && <p className="text-sm text-muted-foreground/80 mt-0.5">{item.subEvent}</p>}
                {item.speaker && <p className="text-xs text-muted-foreground mt-1">Por: {item.speaker}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};