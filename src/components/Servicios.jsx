import { servicios } from "../data/servicios";
import { Sparkles } from "lucide-react";

export default function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <div className="servicios-contenedor">
        <div className="servicios-header">
          <div className="servicios-badge">
            <Sparkles className="servicios-badge-icon" />
            <span>QUÉ OFRECEMOS</span>
          </div>
          <h2 className="servicios-titulo">Nuestros Servicios</h2>
          <p className="servicios-subtitulo">
            Servicios profesionales de estética vehicular con productos de primer nivel
          </p>
        </div>

        <div className="servicios-grid">
          {Object.values(servicios).map((servicio, index) => {
            const Icono = servicio.icono;
            return (
              <div key={index} className="servicio-card">
                <div className="servicio-icono-wrapper">
                  <Icono className="servicio-icono" />
                </div>
                <h3 className="servicio-titulo">{servicio.titulo}</h3>
                <p className="servicio-descripcion">{servicio.descripcion}</p>
                
                <div className="servicio-items">
                  <ul className="servicio-lista">
                    {servicio.items.map((item, idx) => (
                      <li key={idx}>
                        <span className="servicio-bullet"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}