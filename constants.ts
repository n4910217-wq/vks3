import { 
  Container, 
  FileText, 
  QrCode, 
  Award, 
  Truck, 
  Scale, 
  Briefcase, 
} from 'lucide-react';
import { ServiceItem, BenefitItem, StepItem } from './types';

export const WHATSAPP_LINK = "https://wa.me/79038911468";
export const PHONE_DISPLAY = "+7 (903) 891-14-68";
export const ADDRESS = "Садовод, корпус А, вход 5, этаж 1, офис 1Г-100";

export const SERVICES: ServiceItem[] = [
  {
    id: 'import',
    title: 'Импорт под ключ',
    description: 'Доставка товаров из любой страны с оформлением всех документов.',
    icon: Container
  },
  {
    id: 'docs',
    title: 'Разрешительные документы',
    description: 'Сертификаты, декларации, лицензии, СГР.',
    icon: FileText
  },
  {
    id: 'mark',
    title: 'Маркировка «Честный Знак»',
    description: 'Регистрация, нанесение, отчётность.',
    icon: QrCode
  },
  {
    id: 'cert',
    title: 'Сертификация',
    description: 'Документы для торговли и импорта.',
    icon: Award
  },
  {
    id: 'logistics',
    title: 'Логистика и доставка',
    description: 'Оптимальные маршруты и сроки.',
    icon: Truck
  },
  {
    id: 'legal',
    title: 'Бухгалтерия и право',
    description: 'Бухгалтерские и юридические услуги.',
    icon: Scale
  },
  {
    id: 'complex',
    title: 'Комплексное сопровождение',
    description: 'Полное ведение вашего бизнеса.',
    icon: Briefcase
  }
];

export const BENEFITS: BenefitItem[] = [
  { id: '1', title: 'Правильное оформление', description: 'Исключаем риски на таможне.' },
  { id: '2', title: 'Скорость работы', description: 'Оптимизированные логистические цепочки.' },
  { id: '3', title: 'Отсутствие штрафов', description: 'Полное соответствие законодательству РФ.' },
  { id: '4', title: 'Безопасность и законность', description: 'Работаем исключительно в белую.' },
];

export const STEPS: StepItem[] = [
  { id: 1, title: 'Заявка', description: 'Обсуждаем задачу.' },
  { id: 2, title: 'Анализ', description: 'Подбираем решение.' },
  { id: 3, title: 'Оформление', description: 'Готовим документы.' },
  { id: 4, title: 'Доставка', description: 'Везем груз.' },
  { id: 5, title: 'Результат', description: 'Передача товара и документов.' },
];

export const TARGET_AUDIENCE = [
  "Импортёры",
  "Предприниматели",
  "Продавцы на «Садоводе»"
];