// import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
        <div className="hero-overlay" />
      
        <div className="hero-contenedor">
        
            <div className="hero-texto">            
                <h1>
                    Estética vehicular
                    {/* Estética vehicular <br /> de
                    <span className="hero-destacar"> élite. </span> */}
                </h1> 

                <h2 className="hero-texto-destacar">
                La perfección que buscás, en cada detalle.
                </h2>
                {/* Perfección técnica para que cada unidad luzca como nueva. */}
                {/* Elevamos el estándar de brillo y limpieza en cada detalle. */}

                <div className="hero-accion">
                    <a href="#contacto" className="boton-primario"> 
                        Reservá tu turno
                    </a>
 
                    <a href="#paquetes" className="boton-fantasma">
                        Ver paquetes
                    </a> 
                </div>

            </div>

            <div className="hero-imagen">
                <img src="/img/camioneta.png" alt="Camioneta" />
            </div>

            
        
        </div>

    </section>
  );
}

/*
Nota sobre SEO: Si esos botones son parte de la navegación principal, a veces es mejor usar etiquetas <a> con estilos de botón para que los rastreadores de Google entiendan mejor la jerarquía de la página.
*/