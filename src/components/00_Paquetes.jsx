import { paquetes } from "../data/paquetes";
import { Sparkles } from "lucide-react";

export default function Paquetes() {
  return (
    <section className="paquetes">
      <div className="paquetes-contenedor">
        <h2 className="paquetes-titulo">
          Nuestros <span className="paquetes-destacar">Paquetes</span>
        </h2>
        <p className="paquetes-subtitulo">
          Elegí el plan que mejor se adapte a tu vehículo
        </p>

        <div className="paquetes-grid">
          {Object.values(paquetes).map((paquete, index) => (
            <div 
              key={index} 
              className={`paquete-card ${paquete.destacado ? "destacado" : ""}`}
            >
              {paquete.popular && (
                <div className="paquete-badge">{paquete.popular}</div>
              )}
              
              <div className="paquete-header">
                <Sparkles className="paquete-icono" size={28} />
                <h3 className="paquete-titulo">{paquete.titulo}</h3>
              </div>
              
              <h4 className="paquete-subtitulo-card">{paquete.subtitulo}</h4>
              <p className="paquete-descripcion">{paquete.descripcion}</p>
              
              <div className="paquete-incluye">Servicios incluidos:</div>
              <ul className="paquete-lista">
                {paquete.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              <a href="#contacto" className="paquete-boton">
                Solicitar {paquete.titulo}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}