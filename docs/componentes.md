# Guia de componentes

## Sistema tipografico

- Titulos: serif del sistema (`Georgia`) para un tono editorial e institucional.
- Texto: sans serif del sistema (`Segoe UI`, `Roboto`, `Helvetica`, `Arial`) para rendimiento y legibilidad.
- Codigos, metadatos y etiquetas: monospace del sistema para reforzar el caracter archivistico.

No se usan fuentes externas en la version inicial para favorecer rendimiento y estabilidad.

## Sistema de colores

- Fondo principal: carbon profundo.
- Superficies: grafito y negro verdoso.
- Texto principal: marfil frio.
- Texto secundario: gris mineral.
- Acento principal: laton envejecido.
- Acento archivistico: verde archivo.
- Acento restringido: rojo lacre.

Los tokens viven en `assets/css/tokens.css`.

## Componentes disponibles

### Header institucional

Usado en todas las paginas. Incluye marca, subtitulo y navegacion responsive.

### Hero

Usado en inicio con imagen institucional. Debe responder:

- Que es Zonaris.
- Que libro es.
- Por que deberia leerlo.

### Page hero

Usado en paginas internas. Mantiene jerarquia clara sin repetir la imagen principal.

### Tarjeta de libro

Renderizada desde `assets/js/data-books.js`. Preparada para libros publicados, proximos y futuros.

### Documento oficial

Renderizado desde `assets/js/data-documents.js`. Soporta:

- Tipo.
- Estado.
- Nivel de acceso.
- Etiquetas.
- Ruta estable.

### Ficha de mundo

Renderizada desde `assets/js/data-world.js`. Preparada para ciudades, cronologia, razas, gobierno, historia, tecnologia, religion, fractales, Curia y Magistraturas.

### Indices

Listas simples para categorias futuras. Conviene usarlas cuando todavia no existe suficiente contenido para una pagina detalle.

### CTA editorial

Botones primarios para compra y secundarios para exploracion. Evitar exceso de llamados comerciales.

## Regla de diseño

Si una pieza parece anuncio, reducir intensidad. Si parece expediente ilegible, aumentar claridad. El equilibrio deseado es institucion oficial con profundidad narrativa.
