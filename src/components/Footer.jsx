
import React from 'react';

export const Footer = ({ companyInfo }) => {
  return (
    <footer className="py-12 px-4 bg-secondary text-center border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center gap-2 mb-3">
          <img src={companyInfo.logoUrl} alt={`${companyInfo.name} Logo`} className="h-8" />
          <span className="text-xl font-semibold text-foreground">{companyInfo.name}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {companyInfo.eventName} - Conectando el futuro, hoy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground/70">
          <span>© {new Date().getFullYear()} {companyInfo.name}. Todos los derechos reservados.</span>
          <span><a href="mailto:info@asica.com.sv" className="hover:text-primary">info@asica.com.sv</a></span>
          <span><a href="tel:+50322223333" className="hover:text-primary">+503 2222 3333</a></span>
        </div>
      </div>
    </footer>
  );
};
