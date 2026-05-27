export const generarLinkWhatsApp = (paquete = null) => {
    const numero = "5492284234077";
    let mensaje = "Hola! Me interesa saber más sobre sus servicios";
    
    if (paquete) {
        mensaje = `Hola! Me interesa saber más sobre el paquete ${paquete}`;
    }
    
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
};