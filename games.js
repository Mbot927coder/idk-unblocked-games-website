const games = [
  {
    title: "Basket Random",
    category: "Sports",
    status: "Ready to play",
    description: "Arcade basketball chaos with quick rounds and simple controls.",
    href: "Maths%20stuff/clbasketrandom.html"
  },
  {
    title: "Boxing Random",
    category: "Sports",
    status: "Ready to play",
    description: "A goofy one-on-one boxing game built for short, fast matches.",
    href: "Maths%20stuff/clboxingrandom.html"
  },
  {
    title: "Brotato",
    category: "Action",
    status: "Ready to play",
    description: "Arena survival action with swarms, upgrades, and constant movement.",
    href: "Maths%20stuff/Brotato.html"
  },
  {
    title: "Hollow Knight",
    category: "Adventure",
    status: "Ready to play",
    description: "An exploration-heavy action adventure with platforming and combat.",
    href: "Maths%20stuff/Hollow%20Knight.html"
  },
  {
    title: "Soccer Random",
    category: "Sports",
    status: "Ready to play",
    description: "Physics-heavy soccer matches with unpredictable bounces and fast pacing.",
    href: "Maths%20stuff/clsoccerrandomgood.html"
  },
  {
    title: "Volley Random",
    category: "Sports",
    status: "Ready to play",
    description: "A volleyball spin on the random sports formula with quick back-and-forth rounds.",
    href: "Maths%20stuff/clvolleyrandom.html"
  },
  {
    title: "10 Minutes Till Dawn",
    category: "Action",
    status: "Ready to play",
    description: "A survival shooter focused on crowd control, dodging, and weapon upgrades.",
    href: "Maths%20stuff/cl10minutestildawn.html"
  }
];

// ── DOM refs ────────────────────────────────────────────────
const searchInput    = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const gamesGrid      = document.getElementById("gamesGrid");
const resultsCount   = document.getElementById("resultsCount");
const gameView       = document.getElementById("gameView");
const gameFrame      = document.getElementById("gameFrame");
const gameTitle      = document.getElementById("gameTitle");
const enterFullscreenButton = document.getElementById("enterFullscreenButton");
const exitFullscreenButton  = document.getElementById("exitFullscreenButton");

// ── Populate category dropdown ───────────────────────────────
function uniqueCategories() {
  return [...new Set(games.map(g => g.category))].sort();
}

function fillCategoryOptions() {
  uniqueCategories().forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.append(opt);
  });
}

// ── Filtering ────────────────────────────────────────────────
function filteredGames() {
  const query = searchInput.value.trim().toLowerCase();
  const cat   = categoryFilter.value;
  return games.filter(g => {
    const text = `${g.title} ${g.category} ${g.description}`.toLowerCase();
    return (!query || text.includes(query)) && (cat === "all" || g.category === cat);
  });
}

// ── Render ───────────────────────────────────────────────────
function renderGames() {
  const items = filteredGames();
  resultsCount.textContent = `${items.length} item${items.length === 1 ? "" : "s"} shown`;
  if (!items.length) {
    gamesGrid.innerHTML = `<div class="empty-state">No items match that search. Try a different title or category.</div>`;
    return;
  }
  gamesGrid.innerHTML = items.map(g => `
    <article class="math-card">
      <div class="math-top">
        <div>
          <p class="math-tag">${g.category}</p>
          <h3>${g.title}</h3>
        </div>
        <span class="math-meta">${g.status}</span>
      </div>
      <p class="math-description">${g.description}</p>
      <div class="math-actions">
        <button class="card-button primary" onclick="launchGame('${g.href}','${g.title}')">Play now</button>
        <span class="card-button">File: ${decodeURIComponent(g.href).replace('Maths stuff/','')}</span>
      </div>
    </article>
  `).join("");
}

// ── Game launcher ────────────────────────────────────────────
function launchGame(url, title) {
  gameFrame.src = url;
  gameTitle.textContent = title;
  gameView.style.display = "flex";
  syncFullscreenButtons();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeGame() {
  if (document.fullscreenElement === gameView) {
    document.exitFullscreen().catch(() => {});
  }
  gameFrame.src = "about:blank";
  gameView.style.display = "none";
  syncFullscreenButtons();
}

function syncFullscreenButtons() {
  const fullscreenSupported = Boolean(document.fullscreenEnabled && gameView.requestFullscreen);
  const isFullscreen = document.fullscreenElement === gameView;
  enterFullscreenButton.hidden = !fullscreenSupported || isFullscreen;
  exitFullscreenButton.hidden = !fullscreenSupported || !isFullscreen;
}

async function enterFullscreen() {
  if (!document.fullscreenEnabled || !gameView.requestFullscreen) return;
  await gameView.requestFullscreen();
}

async function exitFullscreen() {
  if (document.fullscreenElement !== gameView) return;
  await document.exitFullscreen();
}

// ── Sidebar category link highlight ─────────────────────────
function applyURLFilter() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("category");
  if (cat) {
    categoryFilter.value = cat;
    // Highlight matching sidebar link
    document.querySelectorAll(".sidebar-nav .nav-item[data-filter]").forEach(link => {
      link.classList.toggle("active", link.dataset.filter === cat);
    });
    // Remove active from the "Games" top-level link so the category one wins
    document.querySelectorAll(".sidebar-nav .nav-item:not([data-filter])").forEach(link => {
      if (link.getAttribute("href") === "games.html") link.classList.remove("active");
    });
  }
  renderGames();
}

// ── Init ─────────────────────────────────────────────────────
fillCategoryOptions();
applyURLFilter();

searchInput.addEventListener("input", renderGames);
categoryFilter.addEventListener("change", renderGames);
document.addEventListener("fullscreenchange", syncFullscreenButtons);
syncFullscreenButtons();
