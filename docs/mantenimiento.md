# Manual de instalacion y mantenimiento

## Instalacion

Este sitio es completamente estatico. No requiere backend, base de datos, CMS ni framework.

Para abrirlo de forma simple, usar `index.html` en un navegador. Para probar rutas absolutas como `/libros/`, conviene servir la carpeta con cualquier servidor estatico.

Ejemplo si se tiene Node disponible:

```bash
npm run start
```

## Agregar un nuevo libro

1. Crear una carpeta nueva:

```text
/libros/libro-02/
```

2. Copiar la estructura de `/libros/libro-01/index.html`.
3. Reemplazar placeholders por contenido oficial.
4. Agregar el libro en `assets/js/data-books.js`.
5. Agregar la nueva URL a `sitemap.xml` cuando la pagina sea publica.

Mantener identificadores estables:

```js
id: "libro-02"
```

## Agregar nuevas paginas

1. Crear una carpeta con `index.html`.
2. Copiar el header y footer existentes.
3. Actualizar `title`, `description`, `canonical` y metadatos sociales.
4. Agregar la pagina en la navegacion solo si es una seccion principal.
5. Agregar la URL a `sitemap.xml`.

## Agregar documentos

1. Definir si el documento es publico o QR.
2. Agregar una entrada en `assets/js/data-documents.js`.
3. Para documentos QR, crear una ruta estable en `/documentos/desbloqueados/`.
4. No cambiar rutas ya impresas en un libro o material fisico.

Ejemplo:

```js
{
  id: "qr-002",
  type: "Documento QR",
  access: "qr",
  status: "Ruta estable reservada",
  title: "[Titulo pendiente]",
  summary: "[Resumen pendiente]",
  href: "/documentos/desbloqueados/qr-002/",
  tags: ["QR", "Desbloqueable"]
}
```

## Agregar entradas del mundo

Editar `assets/js/data-world.js` y agregar una nueva ficha. Si la entrada crece, crear una pagina especifica dentro de `/mundo/`.

Categorias recomendadas:

- Geografia
- Historia
- Instituciones
- Tecnologia
- Religion
- Sistemas
- Personajes
- Cronologia

## Agregar imagenes

Usar carpetas segun funcion:

- `assets/img/books/`
- `assets/img/documents/`
- `assets/img/world/`
- `assets/img/brand/`

Recomendaciones:

- Usar WebP para imagenes finales.
- Mantener PNG o JPG solo cuando sea necesario.
- Usar `loading="lazy"` en imagenes dentro del contenido.
- Definir siempre `alt` cuando la imagen transmita informacion.

## Modificar textos

Los textos estructurales viven en cada HTML. Los datos repetibles viven en:

- `assets/js/data-books.js`
- `assets/js/data-documents.js`
- `assets/js/data-world.js`

Los placeholders estan marcados con corchetes, por ejemplo:

```text
[Sinopsis oficial pendiente]
```

No reemplazar placeholders con informacion inventada.

## Documentacion del codigo

CSS:

- `tokens.css`: colores, tipografias, medidas.
- `base.css`: estilos globales y accesibilidad.
- `layout.css`: header, navegacion, secciones, grillas y footer.
- `components.css`: tarjetas, botones, hero, documentos e indices.
- `pages.css`: patrones especificos de paginas internas.

JavaScript:

- `main.js`: navegacion movil y renderizado de listas.
- `data-books.js`: datos de libros.
- `data-documents.js`: datos de documentos.
- `data-world.js`: datos del mundo.
- `site-audit.js`: revision simple de enlaces locales.

## Recomendaciones futuras

- Agregar imagen real de portada cuando este disponible.
- Crear paginas detalle para documentos QR definitivos.
- Mantener una tabla editorial externa con rutas publicadas para no romper codigos impresos.
- Agregar version `/en/` solo cuando exista contenido traducido oficialmente.
- Ejecutar Lighthouse despues de subir el sitio a un servidor publico.
