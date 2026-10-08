(function () {
  const body = document.body;
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Cerrar menu");
      nav.classList.toggle("is-open", !isOpen);
      body.classList.toggle("menu-open", !isOpen);
    });
  }

  document.querySelectorAll("[data-render]").forEach((target) => {
    const type = target.getAttribute("data-render");
    const limit = Number(target.getAttribute("data-limit") || "0");

    if (type === "books") {
      renderBooks(target, limit);
    }

    if (type === "documents") {
      renderDocuments(target, limit);
    }

    if (type === "world") {
      renderWorld(target, limit);
    }
  });

  function takeLimit(items, limit) {
    return limit > 0 ? items.slice(0, limit) : items;
  }

  function renderBooks(target, limit) {
    const books = takeLimit(window.ZONARIS_BOOKS || [], limit);
    target.innerHTML = books.map((book) => `
      <article class="book-card">
       <a class="book-card__cover" href="${escapeAttribute(book.href)}">
  ${
   book.cover
     ? `<img
         src="${escapeAttribute(book.cover)}"
         alt="Portada de ${escapeHtml(book.title)}"
         loading="lazy">`
     : `<span>Portada pendiente</span>`
    }
</a>
        <div class="book-card__body">
          <p class="eyebrow">Libro ${book.order} · ${escapeHtml(book.status)}</p>
          <h3>${escapeHtml(book.title)}</h3>
         <p>
           ${escapeHtml(book.synopsis)}
          <strong> Leer más.</strong>
          </p>
          ${renderAction(book.href, "Ver ficha")}
        </div>
      </article>
    `).join("");
  }

  function renderDocuments(target, limit) {
    const docs = takeLimit(window.ZONARIS_DOCUMENTS || [], limit);
    target.innerHTML = docs.map((doc) => `
      <article class="document-card" data-access="${escapeAttribute(doc.access)}">
        <p class="eyebrow">${escapeHtml(doc.type)} · ${escapeHtml(doc.status)}</p>
        <h3>${escapeHtml(doc.title)}</h3>
        <p class="muted">${escapeHtml(doc.summary)}</p>
        <ul class="tag-list">
          ${doc.tags.map((tag) => `<li class="tag">${escapeHtml(tag)}</li>`).join("")}
        </ul>
        ${renderAction(doc.href, "Consultar")}
      </article>
    `).join("");
  }

  function renderWorld(target, limit) {
    const entries = takeLimit(window.ZONARIS_WORLD || [], limit);
    target.innerHTML = entries.map((entry) => `
      <article class="record" id="${escapeAttribute(entry.id)}">
        <p class="eyebrow">${escapeHtml(entry.category)}</p>
        <h3>${escapeHtml(entry.title)}</h3>
        <p class="muted">${escapeHtml(entry.summary)}</p>
        ${renderAction(entry.href, "Abrir ficha")}
      </article>
    `).join("");
  }

  function renderAction(href, label) {
    if (!href || href === "#") {
      return `<span class="button button--secondary button--disabled" aria-disabled="true">${escapeHtml(label)} pendiente</span>`;
    }

    return `<a class="button button--secondary" href="${escapeAttribute(href)}">${escapeHtml(label)}</a>`;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replaceAll("`", "&#096;");
  }
})();
