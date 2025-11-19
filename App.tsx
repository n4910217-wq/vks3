import React, { useEffect, useState } from 'react';
import { 
  HeroSection, 
  AboutSection, 
  ServicesSection, 
  BenefitsSection, 
  WarehouseSection, 
  ProcessSection, 
  AudienceSection, 
  ContactsSection 
} from './components/Sections';
import WhatsAppButton from './components/WhatsAppButton';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen font-sans text-vks-main bg-[#E0E1DD] overflow-x-hidden">
      
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-vks-main/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 z-50">
             <div className={`font-bold text-2xl tracking-tighter border-2 px-2 rounded ${isScrolled ? 'text-white border-white' : 'text-white border-white'}`}>
                ВКС
             </div>
             <div className={`hidden sm:block text-xs uppercase font-medium tracking-widest ${isScrolled ? 'text-gray-300' : 'text-gray-300'}`}>
                Внешторг <br/> Консьерж Сервис
             </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-white hover:text-vks-accent transition-colors text-sm font-medium uppercase tracking-wide">Услуги</a>
            <a href="#contacts" className="text-white hover:text-vks-accent transition-colors text-sm font-medium uppercase tracking-wide">Контакты</a>
            <WhatsAppButton text="Связаться" className="py-2 px-4 text-sm" />
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white z-50 p-2">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-vks-main z-40 transition-transform duration-300 flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <a href="#services" onClick={toggleMenu} className="text-white text-2xl font-bold">Услуги</a>
           <a href="#contacts" onClick={toggleMenu} className="text-white text-2xl font-bold">Контакты</a>
           <a href={WHATSAPP_LINK} className="text-vks-accent text-xl font-bold">WhatsApp</a>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BenefitsSection />
        <WarehouseSection />
        <ProcessSection />
        <AudienceSection />
        <ContactsSection />
      </main>

      <footer className="bg-vks-main text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-white font-bold text-lg mb-1">ООО «Внешторг Консьерж Сервис»</p>
            <p className="text-sm">ВКС — один партнёр для честного и безопасного бизнеса</p>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;