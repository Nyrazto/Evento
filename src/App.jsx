
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/Navbar';
import { ImageCarousel } from '@/components/ImageCarousel';
import { AboutSection } from '@/components/AboutSection';
import { ScheduleSection } from '@/components/ScheduleSection';
import { SpeakersSection } from '@/components/SpeakersSection';
import { SoftwareSection } from '@/components/SoftwareSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

export const companyInfo = {
  name: "ASICA S.A. DE C.V.",
  eventName: "Asica Innovation Day",
  logoUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/2d2b901f-cbdf-46ee-a2f4-b8bd29a6198b/b3b9c67bbfaadbfcb69b240fe8a0f66f.png",
  description: "Grupo ASICA es líder empresarial en la implementación de software propio y de terceros en Honduras y resto de Centroamérica con mas de 30 años. Su trabajo está enfocado en la consultoría y la asesoría en servicios de informática para organizaciones complejas. Con un equipo multidisciplinario y altamente especializado, se ha convertido en una verdadera garantía de éxito en el desarrollo de proyectos de tecnología informática, Grupo ASICA ha basado su desarrollo institucional en la tecnología de punta y el compromiso con sus clientes, implementando un sistema interno de capacitación continua de su personal. Somos expertos en el desarrollo, implementación y capacitación de Software para los sectores: Financiero, Distribución, Gestión Documental, Recursos Humanos Y ERP para PYME; sin dejar de lado nuestra experiencia como un verdadero integrador de diferentes soluciones de Software, comprometiéndonos con nuestros clientes en implementar en tiempo y forma las soluciones adquiridas con el objetivo de que optimicen su potencial",
  mission: "Proveer productos y servicios con tecnología de punta, utilizando metodologías y estándares de clase mundial, respaldados por profesionales certificados para brindar un servicio eficiente, que garantice la inversión de nuestros clientes, así como la rentabilidad y crecimiento permanentes de nuestra empresa.",
  vision: "Ser para el 2025 el grupo líder en gestión, consultoría, desarrollo e integración de soluciones de arquitectura informática empresarial, para satisfacer las necesidades de nuestros clientes y contribuir al desarrollo de la región centroamericana.."
};

const App = () => {
  const { toast } = useToast();

  const handleRegister = () => {
    toast({
      title: "¡Registro exitoso!",
      description: "Te hemos enviado los detalles del evento por email.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar companyInfo={companyInfo} />
      <ImageCarousel eventName={companyInfo.eventName} handleRegister={handleRegister} />
      <main>
        <AboutSection companyInfo={companyInfo} />
        <ScheduleSection companyInfo={companyInfo} />
        <SpeakersSection />
        <SoftwareSection />
        <CTASection eventName={companyInfo.eventName} companyName={companyInfo.name} handleRegister={handleRegister} />
      </main>
      <Footer companyInfo={companyInfo} />
      <Toaster />
    </div>
  );
};

export default App;
