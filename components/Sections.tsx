import React from 'react';
import { SERVICES, BENEFITS, STEPS, TARGET_AUDIENCE, ADDRESS, PHONE_DISPLAY, WHATSAPP_LINK } from '../constants';
import WhatsAppButton from './WhatsAppButton';
import { CheckCircle2, MapPin, Phone, ArrowRight, Building2, ShieldCheck } from 'lucide-react';

// --- HERO SECTION ---
export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-vks-main text-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Logistics Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-vks-accent/50 rounded-full bg-vks-secondary/50 backdrop-blur-sm text-sm tracking-wider uppercase text-vks-light">
            Официальный импорт и логистика
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Легальный импорт <br/>
            и комплексное <span className="text-vks-accent">сопровождение бизнеса</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light">
            ВКС — один партнёр для честного и безопасного бизнеса. Полный цикл услуг для предпринимателей рынка «Садовод».
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
};

// --- ABOUT SECTION ---
export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-vks-light border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-vks-main mb-6">О компании ВКС</h2>
            <div className="space-y-4 text-vks-secondary text-lg">
              <p className="flex items-start gap-3">
                <ShieldCheck className="text-vks-accent flex-shrink-0 mt-1" />
                <span className="font-semibold">Более 25 лет опыта</span> на рынке логистики и таможенного оформления.
              </p>
              <p className="flex items-start gap-3">
                <Building2 className="text-vks-accent flex-shrink-0 mt-1" />
                <span><span className="font-semibold">Работаем официально.</span> Полная юридическая прозрачность всех операций.</span>
              </p>
              <p className="flex items-start gap-3">
                <Building2 className="text-vks-accent flex-shrink-0 mt-1" />
                <span className="font-semibold">Собственный Таможенный Склад</span> — гарантия сохранности и скорости.
              </p>
            </div>
          </div>
           <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl bg-vks-secondary">
             <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Office Team" 
                className="w-full h-full object-cover opacity-90"
             />
           </div>
        </div>
      </div>
    </section>
  );
};

// --- SERVICES SECTION ---
export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vks-main mb-4">Услуги ВКС</h2>
          <p className="text-vks-accent text-lg">Решаем любые задачи для вашего бизнеса</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-vks-light/30 border border-gray-100 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-vks-main text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-vks-accent transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-vks-main mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- BENEFITS SECTION ---
export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-vks-secondary text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit) => (
            <div key={benefit.id} className="bg-vks-main/50 p-6 rounded-xl border border-vks-accent/30 backdrop-blur-sm">
              <CheckCircle2 className="text-vks-accent mb-4 h-8 w-8" />
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- WAREHOUSE SECTION ---
export const WarehouseSection: React.FC = () => {
  return (
    <section className="py-20 bg-vks-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row bg-vks-main rounded-3xl overflow-hidden shadow-2xl">
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Собственный <br/>
              <span className="text-vks-accent">Таможенный Склад</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Мы не посредники. Наличие собственного склада позволяет нам гарантировать сохранность груза, ускорять процессы оформления и предлагать конкурентные цены без лишних комиссий.
            </p>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-vks-accent rounded-full"></div>
                Контроль на всех этапах
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-vks-accent rounded-full"></div>
                Быстрая обработка грузов
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-vks-accent rounded-full"></div>
                Минимальные издержки
              </li>
            </ul>
            <div>
                <WhatsAppButton variant="outline" text="Узнать условия хранения" />
            </div>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <img 
              src="https://picsum.photos/800/800?grayscale" 
              alt="Modern Warehouse" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-vks-accent/20 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- PROCESS SECTION ---
export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-vks-main text-center mb-16">Как проходит работа</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
            {/* Line connector for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
            
            {STEPS.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center text-center w-full md:w-1/5 mb-8 md:mb-0 bg-white p-4 z-10">
                    <div className="w-12 h-12 rounded-full bg-vks-main text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg ring-4 ring-white">
                        {step.id}
                    </div>
                    <h3 className="font-bold text-vks-main mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.description}</p>
                    {index < STEPS.length - 1 && (
                        <div className="md:hidden text-vks-accent mt-4">
                            <ArrowRight size={20} className="rotate-90" />
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

// --- AUDIENCE SECTION ---
export const AudienceSection: React.FC = () => {
  return (
    <section className="py-20 bg-vks-secondary text-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Для кого наши услуги</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {TARGET_AUDIENCE.map((item, idx) => (
                    <div key={idx} className="bg-vks-main px-8 py-6 rounded-xl border border-vks-accent/30 min-w-[200px] shadow-lg hover:border-vks-accent transition-colors">
                        <span className="text-lg font-medium tracking-wide">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

// --- CONTACTS SECTION ---
export const ContactsSection: React.FC = () => {
  return (
    <section id="contacts" className="py-20 bg-vks-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
                <div className="p-10 flex flex-col justify-between bg-vks-main text-white">
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Контакты</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-vks-accent flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Адрес</p>
                                    <p className="font-medium leading-relaxed">{ADDRESS}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="text-vks-accent flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Телефон</p>
                                    <a href={WHATSAPP_LINK} className="font-medium hover:text-vks-accent transition-colors text-lg">
                                        {PHONE_DISPLAY}
                                    </a>
                                    <p className="text-xs text-gray-500 mt-1">(WhatsApp)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                         <WhatsAppButton className="w-full justify-center" />
                    </div>
                </div>
                <div className="h-64 md:h-auto bg-gray-200 relative">
                    {/* Static Map Placeholder - using image for robustness */}
                    <img 
                        src="https://picsum.photos/600/600?blur=1" 
                        alt="Map Location" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg text-center">
                             <p className="text-vks-main font-bold text-sm">Корпус А, Вход 5</p>
                             <p className="text-vks-secondary text-xs">Офис 1Г-100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};