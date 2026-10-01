import React, { useState, useEffect } from 'react';


// Official Atylus Logo SVG recreating image_b0fa1e.png:
// Stylized 3D 'A' with ascending growth arrow and tech node network
const AtylusBrandLogo = ({ className = "h-10", lightMode = false }) => (
  <div className="flex items-center gap-3 select-none">
    <svg className={className} viewBox="0 0 580 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="atylusBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D2FF" />
          <stop offset="50%" stopColor="#1C64F2" />
          <stop offset="100%" stopColor="#0B132B" />
        </linearGradient>
        <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#00D2FF" />
        </linearGradient>
        <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
Filter      </filter>
      </defs>

      {/* Symbol Container - Stylized 'A' with Node Network & Growth Arrow */}
      <g id="LogoSymbol" transform="translate(10, 10)">
        {/* Network Node Lines */}
        <line x1="25" y1="45" x2="60" y2="25" stroke="#00D2FF" strokeWidth="2.5" opacity="0.8" />
        <line x1="25" y1="45" x2="85" y2="110" stroke="#00D2FF" strokeWidth="2.5" opacity="0.8" />
        <line x1="85" y1="110" x2="135" y2="60" stroke="#00D2FF" strokeWidth="2.5" opacity="0.8" />
        <line x1="60" y1="25" x2="135" y2="60" stroke="#00D2FF" strokeWidth="2" opacity="0.6" />

        {/* Network Dots (Nodes) */}
        <circle cx="25" cy="45" r="6" fill="#00D2FF" filter="url(#glowEffect)" />
        <circle cx="60" cy="25" r="4.5" fill="#1C64F2" />
        <circle cx="85" cy="110" r="6.5" fill="#00D2FF" filter="url(#glowEffect)" />
        <circle cx="135" cy="60" r="5" fill="#1C64F2" />

        {/* Outer Curved A-Leg (Left Arch) */}
        <path
          d="M 20 115 C 30 75, 60 20, 95 18 C 115 17, 130 35, 125 65 C 120 85, 105 110, 145 125"
          fill="none"
          stroke="url(#atylusBlueGrad)"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* Ascending Swooping Growth Arrow (Center-Right Upward) */}
        <path
          d="M 15 115 Q 65 95 125 35"
          fill="none"
          stroke="url(#arrowGrad)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* Arrow Head */}
        <polygon points="120,20 148,22 138,50" fill="#00D2FF" filter="url(#glowEffect)" />
      </g>

      {/* Main Text ATYLUS */}
      <text
        x="180"
        y="112"
        fontFamily="System-UI, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="90"
        letterSpacing="6"
        fill={lightMode ? "#0B132B" : "#FFFFFF"}
      >
        ATYLUS
      </text>

      {/* Subtitle Bar and SOLUÇÕES DIGITAIS */}
      <line x1="180" y1="144" x2="235" y2="144" stroke="#00D2FF" strokeWidth="5" strokeLinecap="round" />
      <text
        x="250"
        y="151"
        fontFamily="System-UI, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="11"
        fill={lightMode ? "#1E293B" : "#CBD5E1"}
      >
        SOLUÇÕES DIGITAIS
      </text>
      <line x1="520" y1="144" x2="570" y2="144" stroke="#00D2FF" strokeWidth="5" strokeLinecap="round" />
    </svg>
  </div>
);

const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448l-6.105 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const ChefHatIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 10C4.343 10 3 8.657 3 7C3 5.343 4.343 4 6 4C6.5 4 6.97 4.12 7.39 4.34C8.12 2.96 9.55 2 11.2 2C13.2 2 14.85 3.39 15.3 5.25C15.82 5.09 16.39 5 17 5C19.21 5 21 6.79 21 9C21 10.87 19.71 12.44 18 12.87V18C18 19.1 17.1 20 16 20H8C6.9 20 6 19.1 6 18V12.87C4.29 12.44 3 10.87 3 9" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 20V22H18V20" />
  </svg>
);

const TrendingUpIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const UsersIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CheckCircleIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MapPinIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CalculatorIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M9 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const ChevronDownIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const StarIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const DollarSignIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 12v-2m0 0c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


export default function App() {
  // Official Phone & Direct WhatsApp Link
  const ATYLUS_PHONE_NUMBER = "5521973158363";
  const ATYLUS_FORMATTED_PHONE = "+55 (21) 97315-8363";
  
  const DIRECT_WHATSAPP_URL = `https://wa.me/${ATYLUS_PHONE_NUMBER}?text=${encodeURIComponent(
    "Olá! Vim pelo Instagram e quero agendar a Consultoria Presencial para o meu restaurante!"
  )}`;

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    restaurantName: '',
    neighborhood: 'Barra da Tijuca / Z. Oeste',
    platform: 'iFood e 99Food',
    whatsapp: '',
    monthlyOrders: '300 - 800 pedidos/mês'
  });

  // Simulator State
  const [currentRevenue, setCurrentRevenue] = useState(35000);
  const [avgTicket, setAvgTicket] = useState(52);

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  // Calculations for interactive simulator (+45% average increase with menu engineering)
  const projectedRevenue = Math.round(currentRevenue * 1.52);
  const extraRevenue = projectedRevenue - currentRevenue;
  const projectedTicket = Math.round(avgTicket * 1.35);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.restaurantName) {
      alert("Por favor, informe seu Nome e o Nome do Restaurante.");
      return;
    }

    const messageText = 
      `*ATYLUS SOLUÇÕES DIGITAIS - DIAGNÓSTICO PRESENCIAL*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `🍔 *Restaurante:* ${formData.restaurantName}\n` +
      `📍 *Região (RJ):* ${formData.neighborhood}\n` +
      `📱 *WhatsApp:* ${formData.whatsapp || 'Não informado'}\n` +
      `📦 *Plataforma:* ${formData.platform}\n` +
      `📊 *Pedidos/mês:* ${formData.monthlyOrders}\n\n` +
      `_Vim pelo anúncio do Instagram e gostaria de agendar a visita presencial dos consultores da Atylus._`;

    const url = `https://wa.me/${ATYLUS_PHONE_NUMBER}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070C18] text-slate-100 font-sans antialiased selection:bg-[#00D2FF] selection:text-[#070C18] pb-24 md:pb-0">

      {}
      
      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#070C18]/90 border-b border-slate-800/80 shadow-xl shadow-black/40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo Atylus */}
          <div className="flex items-center gap-2">
            <AtylusBrandLogo className="h-8 sm:h-9" lightMode={false} />
          </div>

          {/* Location Badge - Desktop */}
          <div className="hidden lg:flex items-center gap-2 bg-[#0D1B2A]/90 text-slate-300 text-xs px-3.5 py-1.5 rounded-full border border-[#0066FF]/30 font-medium">
            <MapPinIcon className="w-4 h-4 text-[#00D2FF] animate-bounce" />
            <span>Consultoria Presencial no Rio de Janeiro e Região</span>
          </div>

          {/* TOP CTA BUTTON (Required) */}
          <a
            href={DIRECT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-[#25D366]/20 border border-emerald-300/30"
          >
            <WhatsAppIcon className="w-5 h-5 fill-slate-950" />
            <span className="hidden sm:inline">Falar no WhatsApp Agora</span>
            <span className="sm:hidden">WhatsApp</span>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </a>
        </div>
      </header>

      {}

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#070C18] via-[#0D1B2A] to-[#070C18] border-b border-slate-800/60">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#0066FF]/15 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          
          {/* Badge Presencial */}
          <div className="inline-flex items-center gap-2 bg-[#0D1B2A] border border-[#00D2FF]/40 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#00D2FF] mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse"></span>
            <span>Atendimento In Loco no seu Estabelecimento • Rio de Janeiro</span>
          </div>

          {/* REQUIRED MAIN TITLE */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            Consultoria em Gestão de Equipe, Engenharia de Cardápio e Vendas.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#1C64F2] to-blue-400">
              (Presencial)!
            </span>
          </h1>

          {/* REQUIRED SUBTITLE */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto mb-8 leading-relaxed">
            Consultoria personalizada: vamos até o local para fazer todo o treinamento e gestão do comércio.
          </p>

          {/* Delivery Platforms & Location Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className="bg-[#1C2541]/90 text-slate-200 border border-slate-700 text-xs sm:text-sm px-4 py-1.5 rounded-full flex items-center gap-2 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> iFood Otimizado
            </span>
            <span className="bg-[#1C2541]/90 text-slate-200 border border-slate-700 text-xs sm:text-sm px-4 py-1.5 rounded-full flex items-center gap-2 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> 99Food Alavancado
            </span>
            <span className="bg-[#1C2541]/90 text-slate-200 border border-slate-700 text-xs sm:text-sm px-4 py-1.5 rounded-full flex items-center gap-2 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF]"></span> Treinamento de Cozinha
            </span>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-gradient-to-r from-[#25D366] to-emerald-600 hover:from-[#20bd5a] hover:to-emerald-500 text-slate-950 font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-[#25D366]/20 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-3 border border-emerald-400/40"
            >
              <WhatsAppIcon className="w-6 h-6 fill-slate-950" />
              <span>SOLICITAR DIAGNÓSTICO PRESENCIAL</span>
            </button>
          </div>

          <p className="text-slate-400 text-xs mt-3 flex items-center justify-center gap-2">
            <span>Atylus Soluções Digitais</span> • 
            <span>WhatsApp: {ATYLUS_FORMATTED_PHONE}</span>
          </p>

          {/* Quick Metrics Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
            <div className="bg-[#0D1B2A]/80 p-4 rounded-2xl border border-slate-800">
              <p className="text-2xl sm:text-3xl font-black text-[#00D2FF]">+45%</p>
              <p className="text-xs text-slate-400 font-medium mt-1">Aumento de Ticket Médio</p>
            </div>
            <div className="bg-[#0D1B2A]/80 p-4 rounded-2xl border border-slate-800">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">2.5x</p>
              <p className="text-xs text-slate-400 font-medium mt-1">Margem de Lucro Real</p>
            </div>
            <div className="bg-[#0D1B2A]/80 p-4 rounded-2xl border border-slate-800">
              <p className="text-2xl sm:text-3xl font-black text-amber-400">-35%</p>
              <p className="text-xs text-slate-400 font-medium mt-1">Tempo de Expedição</p>
            </div>
            <div className="bg-[#0D1B2A]/80 p-4 rounded-2xl border border-slate-800">
              <p className="text-2xl sm:text-3xl font-black text-white">100%</p>
              <p className="text-xs text-slate-400 font-medium mt-1">Treinamento Presencial</p>
            </div>
          </div>

        </div>
      </section>

      {}

      {/* 4 CORE PILLARS OF TRANSFORMATION */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#00D2FF] text-xs font-black uppercase tracking-widest bg-[#0066FF]/10 px-3 py-1 rounded-full border border-[#0066FF]/20">
            Pilares Metodológicos Atylus
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-3">
            Engenharia de Cardápio e Gestão Presencial
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            A Atylus Soluções Digitais atua diretamente dentro da sua operação para eliminar gargalos e acelerar suas vendas no iFood e 99Food.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-[#0D1B2A] p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-[#00D2FF]/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/20 border border-[#00D2FF]/30 text-[#00D2FF] flex items-center justify-center mb-5 group-hover:scale-110 transition">
              <ChefHatIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">1. Engenharia de Cardápio para iFood & 99Food</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Ajustamos a hierarquia visual do seu aplicativo. Pratos com maior margem de lucro ganham destaque prioritário, fotos apelativas, títulos com gatilhos de apetite e combos irresistíveis.
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-[#00D2FF]">✓</span> Descrições que vendem por impulso
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D2FF]">✓</span> Combos e venda casada para elevar Ticket
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#0D1B2A] p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-[#00D2FF]/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/20 border border-[#00D2FF]/30 text-[#00D2FF] flex items-center justify-center mb-5 group-hover:scale-110 transition">
              <UsersIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">2. Gestão & Treinamento de Equipe Presencial</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Nossa equipe vai até a sua cozinha. Padronizamos as fichas técnicas, tempo de preparo e processos de embalagem para evitar atrasos e reclamações nos horários de pico.
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-[#00D2FF]">✓</span> Fichas técnicas e padrão de montagem
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D2FF]">✓</span> Eliminação de erros na expedicão
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#0D1B2A] p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-[#00D2FF]/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/20 border border-[#00D2FF]/30 text-[#00D2FF] flex items-center justify-center mb-5 group-hover:scale-110 transition">
              <TrendingUpIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">3. Alavancagem de Vendas & Algoritmo</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Configuramos cupons estratégicos, campanhas inteligentes e otimizamos suas métricas operacionais para colocar sua loja no topo do ranking da região.
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-[#00D2FF]">✓</span> Estratégia de posicionamento e Super Restaurante
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D2FF]">✓</span> Fidelização de clientes recorrentes
              </li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="bg-[#0D1B2A] p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-[#00D2FF]/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/20 border border-[#00D2FF]/30 text-[#00D2FF] flex items-center justify-center mb-5 group-hover:scale-110 transition">
              <DollarSignIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">4. Diagnóstico Financeiro & DRE do Delivery</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Mapeamos CMV (Custo de Mercadoria Vendida), embalagens e comissões das plataformas para que cada prato vendido traga margem de lucro real no seu bolso.
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-[#00D2FF]">✓</span> Precificação científica cobrindo taxas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D2FF]">✓</span> Apuração de margem líquida real
              </li>
            </ul>
          </div>

        </div>
      </section>

      {}

      {/* SIMULADOR INTERATIVO DE LUCRO */}
      <section className="py-16 bg-[#0D1B2A]/60 border-t border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-b from-[#0B132B] to-[#1C2541] p-6 sm:p-10 rounded-3xl border border-[#0066FF]/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#0066FF]/20 border border-[#00D2FF]/30 rounded-2xl text-[#00D2FF]">
                <CalculatorIcon className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white">Simulador de Faturamento Atylus</h2>
                <p className="text-slate-300 text-xs sm:text-sm">Veja quanto seu restaurante pode faturar após a Engenharia de Cardápio</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-bold mb-2">
                    <span className="text-slate-300">Faturamento Mensal Atual:</span>
                    <span className="text-[#00D2FF] text-base font-extrabold">
                      R$ {currentRevenue.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="120000"
                    step="5000"
                    value={currentRevenue}
                    onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-[#00D2FF]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-medium">
                    <span>R$ 10.000</span>
                    <span>R$ 60.000</span>
                    <span>R$ 120.000+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-bold mb-2">
                    <span className="text-slate-300">Ticket Médio por Pedido Atual:</span>
                    <span className="text-amber-400 text-base font-extrabold">R$ {avgTicket},00</span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="110"
                    step="1"
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-medium">
                    <span>R$ 25</span>
                    <span>R$ 65</span>
                    <span>R$ 110+</span>
                  </div>
                </div>
              </div>

              {/* Result Box */}
              <div className="bg-[#070C18] p-6 rounded-2xl border border-slate-800 text-center space-y-4 shadow-xl">
                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Novo Ticket Estimado</p>
                  <p className="text-lg font-bold text-amber-400">R$ {projectedTicket},00 por pedido</p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <p className="text-[#00D2FF] text-xs font-black uppercase tracking-wider">Projeção Mensal Estimada</p>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-400">
                    R$ {projectedRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                  <div className="mt-3 inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs px-3.5 py-1 rounded-full font-bold">
                    + R$ {extraRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} /mês em vendas!
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs sm:text-sm py-3 px-4 rounded-xl transition shadow-lg shadow-[#25D366]/20"
                >
                  QUERO ESTES RESULTADOS NA MINHA LOJA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}

      {/* ANTES VS. DEPOIS */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Cardápio Comum vs. Engenharia de Cardápio Atylus
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Veja por que os clientes compram mais e geram mais lucro com a nossa gestão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Antes */}
          <div className="bg-[#0D1B2A]/70 rounded-2xl p-6 border border-red-500/30">
            <h3 className="text-base font-bold text-red-400 mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              Operação Tradicional (Antes)
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Fotos genéricas sem padronização ou apelo visual.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Itens com baixa margem ocupando o topo do cardápio.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Sem combos ou complementos sugeridos no pedido.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Atrasos na cozinha e avaliações baixas no iFood.</span>
              </li>
            </ul>
          </div>

          {/* Depois */}
          <div className="bg-[#0D1B2A] rounded-2xl p-6 border border-[#00D2FF]/40 shadow-xl">
            <h3 className="text-base font-bold text-[#00D2FF] mb-4 flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-[#00D2FF]" />
              Com Consultoria Presencial Atylus
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="text-[#00D2FF] font-bold">✓</span>
                <span><strong>Apresentação Vendedora:</strong> Pratos irresistíveis e organizados.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00D2FF] font-bold">✓</span>
                <span><strong>Margem Otimizada:</strong> Os pratos mais lucrativos em evidência.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00D2FF] font-bold">✓</span>
                <span><strong>Combos Estratégicos:</strong> Ticket médio +35% mais alto.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00D2FF] font-bold">✓</span>
                <span><strong>Coletivo Treinado:</strong> Rapidez e nota alta na plataforma.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {}

      {/* DEPOIMENTOS DE RESTAURANTES NO RIO DE JANEIRO */}
      <section className="py-16 bg-[#0D1B2A]/40 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#00D2FF] text-xs font-bold uppercase tracking-widest">Casos de Sucesso</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Restaurantes Transformados pela Atylus</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#070C18] p-6 rounded-2xl border border-slate-800">
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic mb-4">
                "O treinamento presencial da Atylus reorganizou nossa cozinha. Passamos de R$ 28 mil para R$ 54 mil em vendas no iFood em apenas 40 dias!"
              </p>
              <p className="text-xs font-bold text-white">Hamburgueria do Chef</p>
              <p className="text-[11px] text-slate-400">Barra da Tijuca - Rio de Janeiro</p>
            </div>

            <div className="bg-[#070C18] p-6 rounded-2xl border border-slate-800">
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic mb-4">
                "A Engenharia de Cardápio fez nosso ticket médio subir de R$ 42 para R$ 68. O atendimento in loco da Atylus é sensacional."
              </p>
              <p className="text-xs font-bold text-white">Pizzeria & Pasta</p>
              <p className="text-[11px] text-slate-400">Copacabana - Rio de Janeiro</p>
            </div>

            <div className="bg-[#070C18] p-6 rounded-2xl border border-slate-800">
              <div className="flex text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic mb-4">
                "Ajustaram nossa precificação e reduziram atrasos na cozinha. Hoje rodamos o iFood e 99Food com margem real no bolso."
              </p>
              <p className="text-xs font-bold text-white">Sabor & Cia Delivery</p>
              <p className="text-[11px] text-slate-400">Niterói - RJ</p>
            </div>
          </div>
        </div>
      </section>

      {}

      {/* FAQ SECTION */}
      <section className="py-16 max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Perguntas Frequentes</h2>
          <p className="text-slate-400 text-sm mt-1">Dúvidas sobre a Consultoria Presencial Atylus</p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Qual região do Rio de Janeiro é atendida presencialmente?",
              a: "Atendemos presencialmente na Zona Sul, Zona Oeste (Barra, Recreio, Jacarepaguá, Campo Grande), Zona Norte, Baixada Fluminense, Niterói e São Gonçalo."
            },
            {
              q: "Vocês atendem iFood e 99Food?",
              a: "Sim! Trabalhamos com a otimização completa do cardápio e das métricas tanto no iFood quanto no 99Food."
            },
            {
              q: "Quanto tempo dura a consultoria presencial?",
              a: "Iniciamos com a imersão e treinamento da equipe em sua loja física e acompanhamos o desempenho dos indicadores durante as semanas seguintes."
            },
            {
              q: "Como solicitar o diagnóstico gratuito?",
              a: "Basta clicar em qualquer botão do WhatsApp na página, preencher os dados do seu restaurante e falar diretamente com nossa equipe técnica."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-[#0D1B2A] border border-slate-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4.5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 hover:bg-[#1C2541]/50 transition"
              >
                <span>{faq.q}</span>
                <ChevronDownIcon className={`w-5 h-5 text-[#00D2FF] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="p-4.5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-[#070C18]/60">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {}

      {/* SECONDARY BOTTOM CTA */}
      <section className="py-16 bg-gradient-to-b from-[#0D1B2A] to-[#070C18] border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          
          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-4">
            Aumente Suas Vendas e Organize Sua Equipe com a Atylus
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Clique no botão abaixo e garanta o diagnóstico presencial gratuito no seu restaurante no Rio de Janeiro.
          </p>

          <div className="max-w-md mx-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-base sm:text-lg py-4 px-8 rounded-2xl shadow-xl shadow-[#25D366]/20 transition transform hover:scale-105 flex items-center justify-center gap-3 border border-emerald-300/40"
            >
              <WhatsAppIcon className="w-6 h-6 fill-slate-950" />
              <span>GARANTIR VAGA PRESENCIAL NO WHATSAPP</span>
            </button>
            <p className="text-slate-400 text-xs mt-3">
              Contato Direto: {ATYLUS_FORMATTED_PHONE}
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-800 text-center text-xs text-slate-400 bg-[#070C18]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-3">
          <AtylusBrandLogo className="h-7" lightMode={false} />
          <p>© {new Date().getFullYear()} Atylus Soluções Digitais. Todos os direitos reservados.</p>
        </div>
      </footer>

      {}

      {/* FIXED MOBILE BAR FOR INSTAGRAM ADS TRAFFIC */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070C18]/95 backdrop-blur-lg border-t border-slate-800 p-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-white truncate">Atylus Soluções Digitais</p>
          <p className="text-[10px] text-[#00D2FF] font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse"></span>
            WhatsApp: {ATYLUS_FORMATTED_PHONE}
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#25D366] text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-[#25D366]/20 shrink-0"
        >
          <WhatsAppIcon className="w-4 h-4 fill-slate-950" />
          <span>FALAR AGORA</span>
        </button>
      </div>

      {}

      {/* MODAL LEAD CAPTURE FORM */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070C18]/85 backdrop-blur-md">
          <div className="bg-[#0D1B2A] border border-slate-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative text-left">
            
            {/* Close */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <CloseIcon className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-bold text-[#25D366] flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
                Atylus Soluções Digitais
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Solicitar Diagnóstico Presencial Gratuito
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Preencha os dados do seu restaurante para falarmos via WhatsApp:
              </p>
            </div>

            {/* Lead Form */}
            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#070C18] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D2FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Nome do Restaurante / Delivery *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Hamburgueria Atylus"
                  value={formData.restaurantName}
                  onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                  className="w-full bg-[#070C18] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D2FF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Bairro / Região (RJ)
                  </label>
                  <select
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full bg-[#070C18] border border-slate-800 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-[#00D2FF]"
                  >
                    <option value="Barra da Tijuca / Z. Oeste">Barra / Recreio / Z. Oeste</option>
                    <option value="Zona Sul (Copacabana, Botafogo)">Zona Sul</option>
                    <option value="Zona Norte (Tijuca, Méier)">Zona Norte</option>
                    <option value="Niterói / São Gonçalo">Niterói / São Gonçalo</option>
                    <option value="Baixada Fluminense">Baixada Fluminense</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Seu WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="Ex: (21) 97315-8363"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-[#070C18] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D2FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Plataforma Principal
                  </label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full bg-[#070C18] border border-slate-800 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-[#00D2FF]"
                  >
                    <option value="iFood e 99Food">iFood e 99Food</option>
                    <option value="Apenas iFood">Apenas iFood</option>
                    <option value="Apenas 99Food">Apenas 99Food</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Volume de Pedidos
                  </label>
                  <select
                    value={formData.monthlyOrders}
                    onChange={(e) => setFormData({ ...formData, monthlyOrders: e.target.value })}
                    className="w-full bg-[#070C18] border border-slate-800 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-[#00D2FF]"
                  >
                    <option value="Até 200 pedidos/mês">Até 200 pedidos/mês</option>
                    <option value="200 - 600 pedidos/mês">200 - 600 pedidos/mês</option>
                    <option value="Mais de 600 pedidos/mês">Mais de 600 pedidos/mês</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-base py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 border border-emerald-300/40"
              >
                <WhatsAppIcon className="w-5 h-5 fill-slate-950" />
                <span>INICIAR ATENDIMENTO NO WHATSAPP</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center mt-2">
                🔒 Atylus Soluções Digitais • Atendimento rápido e seguro.
              </p>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}