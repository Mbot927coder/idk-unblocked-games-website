const games = [
  {
    title: "Basket Random",
    category: "Sports",
    status: "Ready to play",
    description: "Arcade basketball chaos with quick rounds and simple controls.",
    primaryLabel: "Play now",
    primaryHref: "Maths%20stuff/clbasketrandom.html",
    secondaryLabel: "File: clbasketrandom.html"
  },
  {
    title: "Boxing Random",
    category: "Sports",
    status: "Ready to play",
    description: "A goofy one-on-one boxing game built for short, fast matches.",
    primaryLabel: "Play now",
    primaryHref: "Maths%20stuff/clboxingrandom.html",
    secondaryLabel: "File: clboxingrandom.html"
  },
  {
    title: "Brotato",
    category: "Action",
    status: "Ready to play",
    description: "Arena survival action with swarms, upgrades, and constant movement.",
    primaryLabel: "Play now",
    primaryHref: "Maths%20stuff/Brotato.html",
    secondaryLabel: "File: Brotato.html"
  },
  {
    title: "Hollow Knight",
    category: "Adventure",
    status: "Ready to play",
    description: "An exploration-heavy action adventure with platforming and combat.",
    primaryLabel: "Play now",
    primaryHref: "Maths%20stuff/Hollow%20Knight.html",
    secondaryLabel: "File: Hollow Knight.html"
  },
  {
    title: "Soccer Random",
    category: "Sports",
    status: "Ready to play",
    description: "Physics-heavy soccer matches with unpredictable bounces and fast pacing.",
    primaryLabel: "Play now",
    primaryHref: "Maths%20stuff/clsoccerrandomgood.html",
    secondaryLabel: "File: clsoccerrandomgood.html"
  },
  {
    title: "Volley Random",
    category: "Sports",
    status: "Ready to play",
    description: "A volleyball spin on the random sports formula with quick back-and-forth rounds.",
    primaryLabel: "Play now",
    primaryHref: "Maths%20stuff/clvolleyrandom.html",
    secondaryLabel: "File: clvolleyrandom.html"
  },
  {
    title: "10 Minutes Till Dawn",
    category: "Action",
    status: "Ready to play",
    description: "A survival shooter focused on crowd control, dodging, and weapon upgrades.",
    primaryLabel: "Play now",
    primaryHref: "Maths%20stuff/cl10minutestildawn.html",
    secondaryLabel: "File: cl10minutestildawn.html"
  }
];

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const gamesGrid = document.getElementById("gamesGrid");
const resultsCount = document.getElementById("resultsCount");

function uniqueCategories(items) {
  return [...new Set(items.map((item) => item.category))].sort();
}

function fillCategoryOptions() {
  uniqueCategories(games).forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.append(option);
  });
}

function matchesSearch(game, query) {
  const haystack = `${game.title} ${game.category} ${game.description}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function filteredGames() {
  const query = searchInput.value.trim();
  const category = categoryFilter.value;

  return games.filter((game) => {
    const searchMatch = query ? matchesSearch(game, query) : true;
    const categoryMatch = category === "all" ? true : game.category === category;
    return searchMatch && categoryMatch;
  });
}

function gameCardMarkup(game) {
  return `
    <article class="math-card">
      <div class="math-top">
        <div>
          <p class="math-tag">${game.category}</p>
          <h3>${game.title}</h3>
        </div>
        <span class="math-meta">${game.status}</span>
      </div>
      <p class="math-description">${game.description}</p>
      <div class="math-actions">
        <button class="card-button primary" onclick="loadGame('${game.primaryHref}')">${game.primaryLabel}</button>
        <span class="card-button">${game.secondaryLabel}</span>
      </div>
    </article>
  `;
}

function renderGames() {
  const items = filteredGames();
  resultsCount.textContent = `${items.length} item${items.length === 1 ? "" : "s"} shown`;

  if (!items.length) {
    gamesGrid.innerHTML = `
      <div class="empty-state">
        No items match that search. Try a different title or category.
      </div>
    `;
    return;
  }

  gamesGrid.innerHTML = items.map(gameCardMarkup).join("");
}

fillCategoryOptions();
renderGames();

searchInput.addEventListener("input", renderGames);
categoryFilter.addEventListener("change", renderGames);

// Sidebar Navigation
const sidebarLinks = document.querySelectorAll(".sidebar-link");
const sections = document.querySelectorAll(".section-content");
const gameView = document.getElementById("gameView");
const gameFrame = document.getElementById("gameFrame");

function loadGame(url) {
  if (gameFrame.src !== url) {
    gameFrame.src = url;
  }
  switchSection("gameView");
  if (window.location.hash !== "#play:" + encodeURIComponent(url)) {
    window.location.hash = "play:" + encodeURIComponent(url);
  }
}

function switchSection(sectionId) {
  // Update active link
  sidebarLinks.forEach(link => {
    if (link.dataset.section === sectionId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Update visible section
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });

  // If we're not playing a game, clear the iframe
  if (sectionId !== "gameView") {
    gameFrame.src = "about:blank";
    // Also remove play hash if switching away from gameView
    if (window.location.hash.startsWith("#play:")) {
      window.location.hash = sectionId;
    }
  }

  // Scroll to top of the new section (page shell)
  window.scrollTo({ top: 0, behavior: "smooth" });
}

sidebarLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const sectionId = link.dataset.section;
    if (sectionId) {
      switchSection(sectionId);
    }
  });
});

// Handle direct links and browser back/forward
function handleRouting() {
  const hash = window.location.hash.replace("#", "");
  if (hash.startsWith("play:")) {
    const url = decodeURIComponent(hash.substring(5));
    loadGame(url);
  } else if (hash) {
    const targetSection = document.getElementById(hash);
    if (targetSection && targetSection.classList.contains("section-content")) {
      switchSection(hash);
    }
  } else {
    // Default to home if no hash
    switchSection("top");
  }
}

// Obfuscated Loader (Anti-Bot)
window.addEventListener("load", () => {
    setTimeout(async () => {
        const e = atob("Ym90fGhlYWRsZXNzfGNyYXdsZXJ8c3BpZGVyfGluc3BlY3R8ZmlsdGVyfGdwdHxjbGF1ZGV8Ynl0ZXNwaWRlcnx5YW5kZXh8Z29vZ2xlYm90fGJpbmdib3R8c2x1cnA=");
        if (!navigator.webdriver && !new RegExp(e, "i").test(navigator.userAgent)) {
            // Optional: Implement the random fetch replacement logic here if desired
            // For now, we keep it as a placeholder as per user request
            console.log("Anti-bot check passed");
        }
    }, 750)
});

window.addEventListener("hashchange", handleRouting);
handleRouting(); // Initial load
