
import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = ({ companyInfo }) => {
  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Acerca de", href: "#about" },
    { name: "Agenda", href: "#schedule" },
    { name: "Panelistas", href: "#speakers" },
    { name: "Software", href: "#software" },
    { name: "Contacto", href: "#contact" }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <img src={companyInfo.logoUrl} alt={`${companyInfo.name} Logo`} className="h-10 mr-3" />
        <span className="font-bold text-xl text-foreground">{companyInfo.name}</span>
      </div>
      <div className="hidden md:flex space-x-6">
        {navLinks.map(link => (
          <a key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};
