/*
export const servicios = {
    lavado: {
        titulo: "Lavados",
        descripcion: "Descripción general del lavado."
    },

    tapizado: {
        titulo: "Limpieza de tapizados",
        descripcion: "Descripción general de la limpieza de tapizados."
    },

    abrillantado: {
        titulo: "Abrillantado",
        descripcion: "Descripción general del abrillantado."
    },

    preventa: {
        titulo: "Preventa",
        descripcion: "Descripción general del preventa."
    }
};
*/
import { Sparkles, Droplet, Shield, Crown, WashingMachine, Car, Droplets, Wind, Brush } from "lucide-react";

export const servicios = {
    lavado: {
      titulo: "Lavado Premium",
      descripcion: "Lavado exterior e interior profundo con productos especializados de alta calidad.",
      icono: Droplets,
      items: [
        "Lavado a mano",
        "Aspirado completo",
        "Limpieza de llantas",
        "Secado sin marcas"
      ]
    },
    tapizado: {
      titulo: "Detallado Interior",
      descripcion: "Limpieza exhaustiva de todos los componentes internos del vehículo.",
      icono: Sparkles,
      items: [
        "Limpieza de tapizados",
        "Paneles de puerta",
        "Eliminación de manchas difíciles",
        "Limpieza de techo"
      ]
    },
    abrillantado: {
      titulo: "Pulido Abrillantado",
      descripcion: "Devolvemos el brillo original a tu vehículo con productos de alta gama.",
      icono: Car,
      items: [
        "Pulido profesional",
        "Eliminación de swirls",
        "Correccioón de pintura",
        "Sellado de brillo"
      ]
    },
    sanitizacion: {
      titulo: "Sanitización",
      descripcion: "Eliminación de bacterias, virus y malos olores del habitáculo.",
      icono:  Wind,      
      items: [
        "Eliminación de olores",
        "Desinfección total", 
        "Ambiente fresco"
      ]
    },

    motor: {
      titulo: "Limpieza de Motor",
      descripcion: "Limpieza y desengrase profesional del compartimento del motor.",
      icono: Brush,
      items: [
        "Desengrase profundo", 
        "Protección de componentes", 
        "Acabado brillante", 
        "Seguro y profesional"
      ]
    },

    acondicionamiento: {
      titulo: "Acondicionamiento",
      descripcion: "Protección y restauración de superficies interiores y exteriores.",
      icono: Shield,
      items: [
        "Tratamiento de plásticos",
        "Acondicionado de cuero",
        "Brillo duradero"
      ]
    },

    preventa: {
      titulo: "Preventa Premium",
      descripcion: "Servicio completo para dejar tu vehículo impecable antes de venderlo.",
      icono: Crown,
      items: [
        "Retiro de asientos",
        "Limpieza de techo y paneles",
        "Acondicionado completo",
        "Abrillantado incluido"
      ]
    }
};
// lavados, otro limpieza de tapizados, otro abrillantado y el último preventa

/*
profesional: {
    titulo: "Arquitectura Legal y Profesional",
    descripcion: "Una estructura sólida y elegante diseñada para transmitir autoridad. Ideal para estudios que buscan reflejar trayectoria y seguridad en cada detalle visual.",
    puntos: [
      "Diseño Inclusivo con alto contraste",
      "Perfil profesional destacado",
      "Sección de especialidades detallada",
      "Diseño Inclusivo y navegación accesible",
      "Optimizado para carga rápida en móviles"
    ],
    
    // Aquí podrías agregar qué secciones incluye esa plantilla específicamente
    secciones: ["Hero Impacto", "Sobre el Estudio", "Servicios Legales", "Contacto Directo"],
    slug: "profesional",
    screenshots: [
      "/img/Profesional_Pantalla_1.png",
      "/img/Profesional_Pantalla_2.png",
      "/img/Profesional_Pantalla_3.png",
      "/img/Profesional_Pantalla_4.png"
    ],
    faqs: [
      { q: "¿Cómo se actualiza el contenido de mi página?", a: "Me encargo de realizar las actualizaciones de tus textos y servicios. Esto garantiza que el diseño y la optimización se mantengan siempre profesionales, mientras vos te concentrás en tu actividad." },
      { q: "¿Qué sucede si quiero publicar artículos o novedades?", a: "¡Es excelente para el SEO! Solo necesitás enviarme el contenido y yo me encargaré de subirlo y darle el formato adecuado dentro de tu sección de blog o noticias." },
      { q: "¿Qué material necesito entregar para comenzar?", a: "Necesitaremos los textos básicos de tus servicios y, preferentemente, las fotografías que desees utilizar. Si no contás con fotos propias, puedo orientarte sobre qué tipo de imágenes buscar para que representen fielmente tu marca." },
      { q: "¿La página se adapta a dispositivos móviles?", a: "Absolutamente. El diseño es totalmente responsive, lo que significa que tus clientes podrán contactarte y navegar tu sitio con total comodidad desde su celular, tablet o computadora." },
      { q: "¿Incluye el modo de accesibilidad que mencionaste?", a: "Sí, todas mis plantillas están preparadas con modos claro, oscuro y una configuración especial de accesibilidad para personas daltónicas, asegurando que nadie tenga barreras para conocer tu trabajo." }
    ]
  },
*/

//  {
//       titulo: "Retiro de Asientos",
//       descripcion: "Se retiran los asientos para acceder a limpiar por completo el interior del vehículo."
//     },
//     {
//       titulo: "Limpieza de Tapizados y Techo",
//       descripcion: "Limpieza profunda de tapizados, alfombras y cielo interior."
//     },
//     {
//       titulo: "Acondicionado Integral",
//       descripcion: "Detallado completo de interior, guías, paneles de puerta y baúl."
//     },
//     {
//       titulo: "Abrillantado Sonax",
//       descripcion: "Abrillantado en dos pasos con productos de primer nivel."
//     }