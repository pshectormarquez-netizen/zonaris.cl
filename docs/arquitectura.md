# Arquitectura del portal Zonaris

## Principio rector

Diseñar el portal oficial de un universo narrativo, no la pagina promocional de una novela.

## Mapa del sitio

- `/` Inicio
- `/libros/` Indice de libros
- `/libros/libro-01/` Ficha del primer libro
- `/mundo/` Biblioteca del mundo
- `/mundo/zonaris/` Introduccion al planeta
- `/mundo/republica/` Instituciones de la Republica
- `/mundo/colision-realidades/` Acontecimiento historico
- `/mundo/geografia-ciudades/` Ciudades actuales y desaparecidas
- `/mundo/portus-kas/` Ficha de Portus Kas
- `/mundo/flora-fauna/` Naturaleza y ecosistemas
- `/mundo/teologia/` Tradiciones religiosas
- `/mundo/clima-cielo-calendario/` Clima, cielo y calendario
- `/documentos/` Archivo documental
- `/documentos/desbloqueados/` Rutas reservadas para QR
- `/galeria/` Recursos visuales
- `/autor/` Origen del proyecto
- `/contacto/` Enlaces oficiales

## Estructura de carpetas

```text
/
  index.html
  robots.txt
  sitemap.xml
  site.webmanifest

  /libros/
    index.html
    /libro-01/
      index.html

  /mundo/
    index.html

  /documentos/
    index.html
    /desbloqueados/
      index.html

  /galeria/
    index.html

  /autor/
    index.html

  /contacto/
    index.html

  /assets/
    /css/
      reset.css
      tokens.css
      base.css
      layout.css
      components.css
      pages.css
      styles.css
    /js/
      data-books.js
      data-documents.js
      data-world.js
      main.js
      site-audit.js
    /img/
      /brand/
      /books/
      /documents/
      /world/
    /icons/
    /fonts/

  /docs/
    arquitectura.md
    componentes.md
    mantenimiento.md
```

## Arquitectura de contenido

El sitio se organiza en tres lenguajes:

- Institucional: Inicio, Autor y Contacto.
- Editorial: Libros y fichas de compra.
- Archivistico: Mundo y Documentos.

La navegacion principal usa terminos claros para visitantes nuevos. Los conceptos internos del universo pueden aparecer dentro de subtitulos, metadatos y componentes.

## Wireframe conceptual

```text
Inicio
  Header institucional
  Hero: que es Zonaris, que libro es, por que leerlo
  Estado del portal
  Libro destacado
  Entradas al mundo
  Documentos recientes
  Footer

Libros
  Hero editorial
  Grid de libros desde data-books.js

Libro individual
  Portada
  Sinopsis
  Premisa
  Personajes
  Opiniones futuras
  Donde comprar
  Formatos
  QR relacionado
  Material adicional

Mundo
  Hero de biblioteca
  Fichas por categoria desde data-world.js

Documentos
  Hero de archivo
  Fichas desde data-documents.js
  Indices por tipo
```

## Internacionalizacion futura

El lanzamiento es solo en español. Para preparar i18n futura:

- Mantener rutas actuales como version canonica en español.
- Evitar codificar nombres de secciones en JavaScript cuando el contenido pueda ir en datos.
- Si se agrega ingles, usar una estructura clara como `/en/` y duplicar las paginas principales.
- Mantener los identificadores internos (`id`) en formato estable y no dependiente del idioma.

## SEO y publicacion

Cada pagina base incluye:

- `title`
- `description`
- `canonical`
- Open Graph
- Twitter Card
- favicon
- manifest

El proyecto incluye `robots.txt` y `sitemap.xml`. Actualizar el sitemap cada vez que se agregue una pagina publica estable.
