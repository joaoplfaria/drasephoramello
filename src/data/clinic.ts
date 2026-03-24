export const clinic = {
  name: "Sorria Mais Ortho",
  doctor: "Dra. Sephora Mello",
  tagline: "Seu sorriso merece o melhor cuidado",
  description:
    "Medicina e saúde - Beleza, cosméticos e cuidados pessoais.",
  phone: {
    display: "(48) 8802-1472",
    raw: "554888021472",
    href: "tel:+5548988021472",
  },
  whatsapp: {
    url: "https://wa.me/554888021472",
    number: "554888021472",
  },
  instagram: {
    url: "https://www.instagram.com/drasephoramello/",
    handle: "@drasephoramello",
  },
  address: {
    street: "Servidão Augusto Haeming",
    neighborhood: "Centro",
    city: "Palhoça",
    state: "SC",
    zip: "88130-090",
    country: "Brasil",
    full: "Servidão Augusto Haeming - Centro, Palhoça - SC, 88130-090",
    mapsQuery:
      "Servidão+Augusto+Haeming+-+Centro,+Palhoça+-+SC,+88130-090",
  },
  hours: [
    { day: "Segunda-feira", time: "09:00 - 18:00" },
    { day: "Terça-feira", time: "09:00 - 18:00" },
    { day: "Quarta-feira", time: "09:00 - 18:00" },
    { day: "Quinta-feira", time: "09:00 - 18:00" },
    { day: "Sexta-feira", time: "09:00 - 18:00" },
    { day: "Sábado", time: "Fechada" },
    { day: "Domingo", time: "Fechada" },
  ],
  services: [
    {
      title: "Ortodontia",
      description:
        "Aparelhos fixos e alinhadores para corrigir a posição dos dentes e conquistar um sorriso harmonioso.",
      icon: "orthodontics",
    },
    {
      title: "Clareamento Dental",
      description:
        "Tratamentos seguros para devolver a cor natural e o brilho dos seus dentes.",
      icon: "whitening",
    },
    {
      title: "Limpeza e Profilaxia",
      description:
        "Remoção de tártaro e placa bacteriana para manter a saúde bucal em dia.",
      icon: "cleaning",
    },
    {
      title: "Restaurações",
      description:
        "Recuperação de dentes danificados com materiais modernos e estéticos.",
      icon: "restoration",
    },
    {
      title: "Próteses Dentárias",
      description:
        "Soluções personalizadas para substituir dentes perdidos e restaurar sua confiança.",
      icon: "prosthetics",
    },
    {
      title: "Estética Dental",
      description:
        "Lentes de contato, facetas e procedimentos para um sorriso perfeito.",
      icon: "aesthetics",
    },
  ],
  scheduleReasons: [
    "Outros",
    "Manutenção Aparelho",
    "Ortodontia",
    "Clareamento",
    "Urgência",
  ],
} as const;
