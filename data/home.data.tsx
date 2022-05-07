export enum FormElements {
  Input = "input",
  Textarea = "textarea",
}

export const homeData = {
  hero: {
    headline: "Desarrollo web",
    typed: ["Personalizado", "De Calidad"],
    description: "Es fácil crear sitios web con nosotros.",
    button: "Ver más"
  },

  aboutUs: {
    title: "Sobre nosotros",
    text: [
      "Somos un grupo de amantes de nuestro trabajo y plasmamos esa pasión en cada desarrollo. Actualmente contamos con un equipo de profesionales especializados en diferentes áreas del desarrollo de sitios web, con lo cual aseguramos la calidad de cada trabajo que realizamos",
      "Diseño web, Desarrollo web, Comercio Electrónico, Posicionamiento en Buscadores, etc."
    ],
    values: [
      {
        id: "001",
        name: "Misión",
        text: "Proveer a nuestros clientes de herramientas web que impulsen el desarrollo competitivo y efectivo proporcionando crecimiento a sus negocios internacionalmente"
      },
      {
        id: "002",
        name: "Visión",
        text: "Proyectarnos como empresa líder en el desarrollo web, innovando productos de alta calidad que potencien el crecimiento de nuestros clientes."
      },
    ],
    image: {
      url: "/assets/AboutUs.png",
      alt: "Sobre Vipacio"
    }
  },

  services: {
    title: "Servicios",
    serviceList: [
      {
        id: "001",
        name: "Diseño web",
        text: "Creamos potentes diseños que superarán a sus competidores más fuertes.",
      },
      {
        id: "002",
        name: "Desarrollo web",
        text: "Creamos sitios web robustos y funcionales utilizando la tecnología más avanzada disponible.",
      },
      {
        id: "003",
        name: "Maquetación",
        text: "Estructuramos todas las partes requeridas de tu web al detalle y preocupándonos por el futuro de ese código.",
      },
      {
        id: "004",
        name: "SEO",
        text: "Optimizamos el sitio web para un buen Posicionamiento en el motor de búsqueda, ganando mayor visibilidad en el mercado.",
      },
    ],
    image: {
      url: "/assets/Services.png",
      alt: "Servicios Vipacio"
    }
  },

  publicity: {
    title: "¡Comencemos Tu Proyecto!",
    button: {
      text: "contáctanos",
      url: "/#contacto"
    },
    background: "/assets/BackgroundPublicity",
  },

  processWork: {
    title: "¿Cómo trabajamos?",
    processList: [
      {
        id: "001",
        title: "1. Recopilación de información",
        text: "Se necesita una buena comprensión de cual es el objetivo del sitio web."
      },
      {
        id: "002",
        title: "2. Planificación",
        text: "Se define la estructura del sitio web dando prioridad a los objetivos generales."
      },
      {
        id: "003",
        title: "3. Diseño",
        text: "Se determina cual será la apariencia de su sitio web."
      },
      {
        id: "004",
        title: "4. Maquetación",
        text: "Se transforma el diseño del sitio web para que los navegadores puedan interpretarlos."
      },
      {
        id: "005",
        title: "5. Desarrollo",
        text: "Se hace uso de tecnologías de software para agregar interacción al sitio web."
      },
      {
        id: "006",
        title: "6. Prueba y Lanzamiento",
        text: "Prueba completa de funcionalidad y lanzamiento del producto final."
      },
    ],
    image: {
      url: "/assets/ProcessWork.png",
      alt: "Proceso de trabajo vipacio"
    }
  },

  prices: {
    title: "Precios",

    pricesList: [
      {
        id: "001",
        title: "Landing Page",
        price: "$249",
        items: [
          {
            id: "001-item",
            text: "Página Vertical",
          },
          {
            id: "002-item",
            text: "Diseño personalizado",
          },
          {
            id: "003-item",
            text: "Diseño adaptable a dispositivos moviles",
          },
          {
            id: "004-item",
            text: "Formulario de contacto",
          },
          {
            id: "005-item",
            text: "Integración de Redes Sociales WhatsApp & Messenger",
          },
          {
            id: "006-item",
            text: "Mapa de ubicación",
          },
          {
            id: "007-item",
            text: "Hosting Gratis - 1 año",
          },
          {
            id: "008-item",
            text: "Dominio (.com - .net - .org) Gratis - 1 año",
          },
          {
            id: "009-item",
            text: "SSL - Secure Sockets Layer",
          },
          {
            id: "010-item",
            text: "SEO (Search Engine Optimización)",
          },
        ]
      },
      {
        id: "002",
        title: "Básico",
        price: "$399",
        items: [
          {
            id: "001-item",
            text: "5 Páginas",
          },
          {
            id: "002-item",
            text: "Diseño personalizado",
          },
          {
            id: "003-item",
            text: "Diseño adaptable a dispositivos moviles",
          },
          {
            id: "004-item",
            text: "Formulario de contacto",
          },
          {
            id: "005-item",
            text: "Integración de Redes Sociales WhatsApp & Messenger",
          },
          {
            id: "006-item",
            text: "Mapa de ubicación",
          },
          {
            id: "007-item",
            text: "Hosting Gratis - 1 año",
          },
          {
            id: "008-item",
            text: "Dominio (.com - .net - .org) Gratis - 1 año",
          },
          {
            id: "009-item",
            text: "SSL - Secure Sockets Layer",
          },
          {
            id: "010-item",
            text: "SEO (Search Engine Optimización)",
          },
        ]
      },
      {
        id: "003",
        title: "Avanzado",
        price: "$499",
        items: [
          {
            id: "001-item",
            text: "Páginas Dinamicas",
          },
          {
            id: "002-item",
            text: "Diseño personalizado",
          },
          {
            id: "003-item",
            text: "Diseño adaptable a dispositivos moviles",
          },
          {
            id: "004-item",
            text: "Formulario de contacto",
          },
          {
            id: "005-item",
            text: "Sección de productos",
          },
          {
            id: "006-item",
            text: "Integración de Redes Sociales WhatsApp & Messenger",
          },
          {
            id: "007-item",
            text: "Ventas por WhatsApp",
          },
          {
            id: "008-item",
            text: "Mapa de ubicación",
          },
          {
            id: "009-item",
            text: "Hosting Gratis - 1 año",
          },
          {
            id: "010-item",
            text: "Dominio (.com - .net - .org) Gratis - 1 año",
          },
          {
            id: "011-item",
            text: "SSL - Secure Sockets Layer",
          },
          {
            id: "012-item",
            text: "SEO (Search Engine Optimización)",
          },
        ]
      },
    ]
  },

  portfolio: {
    title: "Proyectos realizados",
    projectList: [
      {
        id: "001-project",
        name: "Elite Tour WW",
        image: {
          url: "/assets/portfolio/EliteTourWW.png",
          alt: "Elite Tour proyecto vipacio"
        },
        link: "https://elitetourww.com",
      },
      {
        id: "002-project",
        name: "HMComputer",
        image: {
          url: "/assets/portfolio/HMComputer.png",
          alt: "HMComputer proyecto vipacio"
        },
        link: "https://hm-computer.com",
      },
      {
        id: "003-project",
        name: "Bolt Agro",
        image: {
          url: "/assets/portfolio/BoltAgro.png",
          alt: "Bolt Agro proyecto vipacio"
        },
        link: "https://boltagro.com",
      }
    ]
  },

  contact: {
    title: "Contáctanos",
    infoList: {
      phones: {
        title: "Celulares",
        list: [
          {
            id: "001-phone",
            text: "+593 99 984 0677",
          },
          {
            id: "002-phone",
            text: "+593 99 012 7109",
          },
        ],
      },

      emails: {
        title: "Email",
        list: [
          {
            id: "001-email",
            text: "contacto@vipacio.com",
          },
          {
            id: "002-email",
            text: "soporte@vipacio.com",
          },
        ]
      }
    }
  }
}