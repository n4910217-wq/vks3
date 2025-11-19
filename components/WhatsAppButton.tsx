import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'outline';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text = "Получить консультацию", 
  className = "",
  variant = 'primary'
}) => {
  const baseStyles = "inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "bg-white text-vks-main border-2 border-vks-accent hover:bg-vks-light shadow-lg",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white/10"
  };

  return (
    <a 
      href={WHATSAPP_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={20} className={variant === 'primary' ? 'text-vks-accent' : 'text-white'} />
      <span>{text}</span>
    </a>
  );
};

export default WhatsAppButton;