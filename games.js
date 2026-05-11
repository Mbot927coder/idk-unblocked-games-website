const games = [
  { title: "Basket Random", category: "Sports", status: "Ready", description: "Arcade basketball chaos with quick rounds and simple controls.", href: "Maths%20stuff/clbasketrandom.html" },
  { title: "Boxing Random", category: "Sports", status: "Ready", description: "A goofy one-on-one boxing game built for short, fast matches.", href: "Maths%20stuff/clboxingrandom.html" },
  { title: "Soccer Random", category: "Sports", status: "Ready", description: "Physics-heavy soccer matches with unpredictable bounces and fast pacing.", href: "Maths%20stuff/clsoccerrandomgood.html" },
  { title: "Volley Random", category: "Sports", status: "Ready", description: "A volleyball spin on the random sports formula with quick back-and-forth rounds.", href: "Maths%20stuff/clvolleyrandom.html" },
  { title: "Snow Rider", category: "Sports", status: "Ready", description: "Downhill sledding with obstacle dodging, fast reactions, and endless runs.", href: "Maths%20stuff/clsnowrider.html" },
  { title: "Retro Bowl", category: "Sports", status: "Ready", description: "Old-school American football management and play-calling in a retro package.", href: "Maths%20stuff/Retro%20Bowl.html" },
  { title: "Baseball Bros", category: "Sports", status: "Ready", description: "Arcade baseball with fast innings, simple controls, and plenty of chaos.", href: "Maths%20stuff/Baseball%20Bros.html" },
  { title: "Basket Bros", category: "Sports", status: "Ready", description: "Two-player basketball action with exaggerated physics and quick matches.", href: "Maths%20stuff/Basket%20Bros.html" },
  { title: "Football Bros", category: "Sports", status: "Ready", description: "Arcade football built around quick drives, big hits, and easy pick-up-and-play controls.", href: "Maths%20stuff/Football%20Bros.html" },
  { title: "Basketball Stars", category: "Sports", status: "Ready", description: "Arcade basketball with quick shots, steals, dunks, and head-to-head matches.", href: "Maths%20stuff/basketballstars.html" },
  { title: "Brotato", category: "Action", status: "Ready", description: "Arena survival action with swarms, upgrades, and constant movement.", href: "Maths%20stuff/Brotato.html" },
  { title: "Brotato Paws and Claws edition", category: "Action", status: "Ready", description: "A Brotato expansion-style survival run with more upgrades, enemies, and chaos.", href: "Maths%20stuff/brotatopaws%26claws.html" },
  { title: "Five Nights at Freddy's", category: "Action", status: "Ready", description: "The original survive-the-night horror game. Watch the cameras and manage the power.", href: "Maths%20stuff/clFNAF.html" },
  { title: "Five Nights at Freddy's 2", category: "Action", status: "Ready", description: "More animatronics, no doors, just a mask and a flashlight. Harder than the first.", href: "Maths%20stuff/Five%20Nights%20at%20Freddy's%202.html" },
  { title: "Five Nights at Freddy's 3", category: "Action", status: "Ready", description: "One animatronic, one vent system, and a lot of audio lures. Good luck.", href: "Maths%20stuff/clFNAF3.html" },
  { title: "Five Nights at Freddy's 4", category: "Action", status: "Ready", description: "No cameras — just doors, a flashlight, and sounds in the dark.", href: "Maths%20stuff/clFNAF4.html" },
  { title: "Five Nights at Epstein's", category: "Action", status: "Ready", description: "A fan-made FNAF-style horror game with a very different cast of characters.", href: "Maths%20stuff/Five%20Nights%20at%20Epstein's.html" },
  { title: "Buckshot Roulette", category: "Shooter", status: "Ready", description: "A tense tabletop survival game built around risk, bluffing, and one very dangerous shotgun.", href: "Maths%20stuff/Buckshot%20Roulette.html" },
  { title: "10 Minutes Till Dawn", category: "Action", status: "Ready", description: "A survival shooter focused on crowd control, dodging, and weapon upgrades.", href: "Maths%20stuff/cl10minutestildawn.html" },
  { title: "20 Minutes Till Dawn", category: "Action", status: "Ready", description: "Survive waves of monsters with upgrade builds, weapon combos, and constant dodging.", href: "Maths%20stuff/20minutesTillDawn.html" },
  { title: "Bad Time Simulator", category: "Action", status: "Ready", description: "A difficult boss-fight challenge built around dodging fast attack patterns.", href: "Maths%20stuff/Bad%20Time%20Simulator.html" },
  { title: "People Playground", category: "Action", status: "Ready", description: "A sandbox game for experimenting with physics, tools, and chain reactions.", href: "Maths%20stuff/People%20Playground.html" },
  { title: "Bad Parenting 1", category: "Action", status: "Ready", description: "A short horror game with tense exploration and story-driven scares.", href: "Maths%20stuff/Bad%20Parenting%201.html" },
  { title: "Gladihoppers", category: "Action", status: "Ready", description: "Arcade gladiator fights with floppy physics, weapons, and quick duels.", href: "Maths%20stuff/Gladihoppers.html" },
  { title: "Clover Pit", category: "Puzzle", status: "Ready", description: "A luck-driven puzzle and strategy game with escalating choices and high-risk turns.", href: "Maths%20stuff/Clover%20Pit.html" },
  { title: "2048", category: "Puzzle", status: "Ready", description: "Slide matching number tiles together and build up to the 2048 tile.", href: "Maths%20stuff/2048.html" },
  { title: "State.io", category: "Puzzle", status: "Ready", description: "A territory strategy game about timing attacks and capturing every state on the map.", href: "Maths%20stuff/State.io.html" },
  { title: "Hollow Knight", category: "Adventure", status: "Ready", description: "An exploration-heavy action adventure with platforming and combat.", href: "Maths%20stuff/Hollow%20Knight.html" },
  { title: "AdVenture Capitalist", category: "Adventure", status: "Ready", description: "An idle clicker about building a business empire through nonstop upgrades.", href: "Maths%20stuff/Adventure%20Capatalist.html" },
  { title: "Minecraft 1.12.2", category: "Adventure", status: "Ready", description: "Classic block-building survival and creative gameplay in the browser.", href: "Maths%20stuff/1dot12dot2.html" },
  { title: "EaglercraftX 1.8", category: "Adventure", status: "Ready", description: "A browser version of Minecraft-style survival, building, and multiplayer exploration.", href: "Maths%20stuff/EaglercraftX_1dot8_Web.html" },
  { title: "OvO", category: "Adventure", status: "Ready", description: "A movement-focused platformer built around wall jumps, slides, and speed.", href: "Maths%20stuff/OvO.html" },
  { title: "OvO 2", category: "Adventure", status: "Ready", description: "A follow-up movement platformer with more timing challenges, jumps, and speed routes.", href: "Maths%20stuff/OvO%202.html" },
  { title: "OvO 3 Dimensions", category: "Adventure", status: "Ready", description: "A 3D take on OvO-style movement with obstacle courses and precision platforming.", href: "Maths%20stuff/OvO%203%20Dimensions.html" },
  { title: "Slime Rancher", category: "Adventure", status: "Ready", description: "A colorful collecting adventure about rounding up slimes and exploring new areas.", href: "Maths%20stuff/Slime%20Rancher.html" },
  { title: "Super Mario Bros", category: "Adventure", status: "Ready", description: "A classic side-scrolling platformer with tight jumps, enemies, and power-ups.", href: "Maths%20stuff/Super%20Mario%20Bros.html" },
  { title: "Undertale", category: "Adventure", status: "Ready", description: "A story-driven RPG adventure built around choices, dodging, and memorable battles.", href: "Maths%20stuff/undertale.html" },
  { title: "Undertale 10th Anniversary", category: "Adventure", status: "Ready", description: "A special Undertale-themed anniversary experience in the browser.", href: "Maths%20stuff/10thAnniversaryUndertale.html" },
  { title: "Crossy Road", category: "Adventure", status: "Ready", description: "Hop through traffic, rivers, and moving hazards while chasing a higher score.", href: "Maths%20stuff/crossy.html" },
  { title: "Schoolboy Runaway", category: "Adventure", status: "Ready", description: "A stealthy escape adventure about sneaking through rooms and avoiding capture.", href: "Maths%20stuff/Schoolboy%20Runaway.html" },
  { title: "That's Not My Neighbor", category: "Puzzle", status: "Ready", description: "A deduction game about checking details, spotting impostors, and making the right call.", href: "Maths%20stuff/That's%20Not%20My%20Neighbor.html" },
  { title: "Drift Boss", category: "Racing", status: "Ready", description: "A one-button drifting challenge where every turn tests timing and control.", href: "Maths%20stuff/cldriftboss.html" },
  { title: "Slope", category: "Racing", status: "Ready", description: "Control a ball rolling down a steep slope at ever-increasing speed.", href: "Maths%20stuff/Slope.html" },
  { title: "Cluster Rush", category: "Racing", status: "Ready", description: "Leap across moving trucks in a fast first-person platforming challenge.", href: "Maths%20stuff/clusterRush.html" },
  { title: "Eggy Car", category: "Racing", status: "Ready", description: "Drive carefully over hills while keeping the egg balanced on top of the car.", href: "Maths%20stuff/eggycar.html" },
  { title: "Escape Road", category: "Racing", status: "Ready", description: "Speed through traffic, dodge police cars, and keep the getaway going as long as possible.", href: "Maths%20stuff/escaperoad.html" },
  { title: "Escape Road 2", category: "Racing", status: "Ready", description: "A faster escape-driving sequel with tighter roads, more pressure, and quick reactions.", href: "Maths%20stuff/escaperoad2.html" },
  { title: "Escape Road 3", category: "Racing", status: "Ready", description: "Another high-speed getaway challenge focused on sharp turns and clean dodges.", href: "Maths%20stuff/escape3.html" },
  { title: "Escape Road City 2", category: "Racing", status: "Ready", description: "City escape driving with traffic, obstacles, and police pursuit pressure.", href: "Maths%20stuff/escaperoadcity2.html" },
  { title: "ULTRAKILL", category: "Shooter", status: "Ready", description: "A fast-paced retro shooter focused on movement, combos, and relentless aggression.", href: "Maths%20stuff/ULTRAKILL.html" },
  { title: "1v1.LOL", category: "Shooter", status: "Ready", description: "A build-and-battle shooter focused on quick edits, aim, and one-on-one fights.", href: "Maths%20stuff/1.html" },
  { title: "Bowmasters", category: "Shooter", status: "Ready", description: "Aim carefully, adjust power, and land trick shots in projectile duels.", href: "Maths%20stuff/Bowmasters.html" },
  { title: "BuildNow GG", category: "Shooter", status: "Ready", description: "A fast building shooter with practice arenas, aiming, and quick construction fights.", href: "Maths%20stuff/BuildNow.gg.html" },
  { title: "Doom", category: "Shooter", status: "Ready", description: "Classic demon-blasting FPS action with fast rooms, key hunts, and heavy weapons.", href: "Maths%20stuff/doom.html" },
  { title: "Doom 2", category: "Shooter", status: "Ready", description: "A bigger classic Doom campaign with more arenas, enemies, and firepower.", href: "Maths%20stuff/doom2.html" },
  { title: "Doom 3", category: "Shooter", status: "Ready", description: "A darker Doom shooter built around tense corridors and heavy sci-fi combat.", href: "Maths%20stuff/doom3.html" },
  { title: "Doom 64", category: "Shooter", status: "Ready", description: "A moody Doom entry with maze-like levels, demons, and retro FPS pacing.", href: "Maths%20stuff/doom64.html" },
  { title: "Slither.io", category: "Action", status: "Ready", description: "Grow a snake, cut off rivals, and survive as long as possible in an online arena.", href: "Maths%20stuff/Slither.io.html" },
  { title: "Rocket Goal.io", category: "Puzzle", status: "Ready", description: "A physics-based goal-scoring game where you launch rockets to hit targets with precision and strategy.", href: "Maths%20stuff/Rocket%20Goal.io.html" },
];

// ── Thumbnail generation ──
const thumbCanvas = document.createElement('canvas');
thumbCanvas.width = 320;
thumbCanvas.height = 200;
const thumbCtx = thumbCanvas.getContext('2d');

const categoryColors = {
  Action:    ['#ff6b35', '#f7c59f'],
  Sports:    ['#00ffc6', '#004d3d'],
  Adventure: ['#8338ec', '#c4a4ff'],
  Puzzle:    ['#ffbe0b', '#fff3cd'],
  Racing:    ['#ff006e', '#ffb3d1'],
  Shooter:   ['#3a86ff', '#b3d1ff'],
};

function generateThumbnail(title, category) {
  const colors = categoryColors[category] || ['#00ffc6', '#004d3d'];
  const c1 = colors[0];
  const c2 = colors[1];

  // Reset the shared canvas so previous labels don't bleed into the next thumb.
  thumbCtx.clearRect(0, 0, thumbCanvas.width, thumbCanvas.height);
  thumbCtx.fillStyle = '#05070d';
  thumbCtx.fillRect(0, 0, thumbCanvas.width, thumbCanvas.height);

  // Background gradient
  const grad = thumbCtx.createLinearGradient(0, 0, 320, 200);
  grad.addColorStop(0, c1 + '22');
  grad.addColorStop(1, c2 + '18');
  thumbCtx.fillStyle = grad;
  thumbCtx.fillRect(0, 0, 320, 200);

  // Grid pattern
  thumbCtx.strokeStyle = c1 + '11';
  thumbCtx.lineWidth = 1;
  for (let x = 0; x < 320; x += 40) {
    thumbCtx.beginPath(); thumbCtx.moveTo(x, 0); thumbCtx.lineTo(x, 200); thumbCtx.stroke();
  }
  for (let y = 0; y < 200; y += 40) {
    thumbCtx.beginPath(); thumbCtx.moveTo(0, y); thumbCtx.lineTo(320, y); thumbCtx.stroke();
  }

  // Corner accents
  thumbCtx.fillStyle = c1 + '33';
  thumbCtx.fillRect(0, 0, 60, 4);
  thumbCtx.fillRect(0, 0, 4, 60);
  thumbCtx.fillRect(320-60, 200-4, 60, 4);
  thumbCtx.fillRect(320-4, 200-60, 4, 60);

  // Large initial(s)
  const initials = title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  thumbCtx.font = 'bold 80px "Orbitron", sans-serif';
  thumbCtx.fillStyle = c1 + '18';
  thumbCtx.textAlign = 'center';
  thumbCtx.textBaseline = 'middle';
  thumbCtx.fillText(initials, 160, 90);

  // Title
  thumbCtx.font = '600 16px "Inter", sans-serif';
  thumbCtx.fillStyle = '#f0f0f5';
  thumbCtx.textAlign = 'left';
  thumbCtx.fillText(title.length > 22 ? title.slice(0, 22) + '...' : title, 16, 170);

  // Category tag
  thumbCtx.font = '600 11px "Orbitron", sans-serif';
  thumbCtx.fillStyle = c1;
  thumbCtx.textAlign = 'right';
  thumbCtx.fillText(category.toUpperCase(), 304, 170);

  // Decorative line
  thumbCtx.strokeStyle = c1 + '44';
  thumbCtx.lineWidth = 2;
  thumbCtx.beginPath(); thumbCtx.moveTo(16, 185); thumbCtx.lineTo(304, 185); thumbCtx.stroke();

  return thumbCanvas.toDataURL('image/png');
}

const thumbnailCache = {};

function getThumbnail(title, category) {
  const key = title + '|' + category;
  if (!thumbnailCache[key]) {
    thumbnailCache[key] = generateThumbnail(title, category);
  }
  return thumbnailCache[key];
}

// ── Favorites & Recently Played ──
function getFavorites() {
  try { return JSON.parse(localStorage.getItem('favorites') || '[]'); }
  catch { return []; }
}

function setFavorites(arr) {
  localStorage.setItem('favorites', JSON.stringify(arr));
}

function toggleFavorite(title) {
  const favs = getFavorites();
  const idx = favs.indexOf(title);
  if (idx >= 0) favs.splice(idx, 1);
  else favs.push(title);
  setFavorites(favs);
  return idx < 0; // true if now favorited
}

function isFavorite(title) {
  return getFavorites().includes(title);
}

function getRecentlyPlayed() {
  try { return JSON.parse(localStorage.getItem('recentlyPlayed') || '[]'); }
  catch { return []; }
}

function addRecentlyPlayed(title, href, category) {
  let recents = getRecentlyPlayed().filter(r => r.title !== title);
  recents.unshift({ title, href, category, time: Date.now() });
  recents = recents.slice(0, 12);
  localStorage.setItem('recentlyPlayed', JSON.stringify(recents));
}

// ── DOM refs ──
const searchInput    = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const gamesGrid      = document.getElementById('gamesGrid');
const resultsCount   = document.getElementById('resultsCount');
const libraryTitle   = document.getElementById('libraryTitle');
const gameCategoryHub  = document.getElementById('gameCategoryHub');
const gameCategoryGrid = document.getElementById('gameCategoryGrid');
const gameToolbar      = document.getElementById('gameToolbar');
const sortBar          = document.getElementById('sortBar');
const gameLibrary      = document.getElementById('gameLibrary');
const gameView       = document.getElementById('gameView');
const gameFrame      = document.getElementById('gameFrame');
const gameTitle      = document.getElementById('gameTitle');
const enterFullscreenButton = document.getElementById('enterFullscreenButton');
const exitFullscreenButton  = document.getElementById('exitFullscreenButton');
const hasGamePage    = Boolean(searchInput && categoryFilter && gamesGrid && resultsCount && gameView && gameFrame && gameTitle);

let currentSort = localStorage.getItem('gameSort') || 'default';

// ── Category dropdown ──
function fillCategoryOptions() {
  [...new Set(games.map(g => g.category))].sort().forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.append(opt);
  });
}

function getGameCategoryCounts() {
  const counts = {};
  games.forEach(g => { counts[g.category] = (counts[g.category] || 0) + 1; });
  return counts;
}

function getCategoryCardStyle(category) {
  const map = {
    All:       { color: 'var(--accent-cyan)',   glow: 'rgba(0,255,198,0.15)' },
    Action:    { color: 'var(--accent-orange)', glow: 'rgba(251,86,7,0.15)' },
    Sports:    { color: 'var(--accent-cyan)',   glow: 'rgba(0,255,198,0.15)' },
    Adventure: { color: 'var(--accent-purple)', glow: 'rgba(131,56,236,0.15)' },
    Puzzle:    { color: 'var(--accent-yellow)', glow: 'rgba(255,190,11,0.15)' },
    Racing:    { color: 'var(--accent-magenta)',glow: 'rgba(255,0,110,0.15)' },
    Shooter:   { color: 'var(--accent-blue)',   glow: 'rgba(58,134,255,0.15)' },
  };
  return map[category] || map.All;
}

function renderCategoryHub() {
  if (!gameCategoryGrid) return;
  const counts = getGameCategoryCounts();
  const categoryIcons = {
    Action: '⚔️',
    Sports: '🏆',
    Adventure: '🗺️',
    Puzzle: '🧩',
    Racing: '🏎️',
    Shooter: '🔫',
  };
  const categories = [...new Set(games.map(g => g.category))].sort();
  const cards = [
    {
      title: 'All Games',
      href: 'games.html?category=all',
      icon: '🎮',
      count: games.length,
      description: 'Every game in the library',
      style: getCategoryCardStyle('All'),
    },
    ...categories.map(cat => ({
      title: cat,
      href: `games.html?category=${encodeURIComponent(cat)}`,
      icon: categoryIcons[cat] || '🎮',
      count: counts[cat],
      description: `${counts[cat]} game${counts[cat] === 1 ? '' : 's'}`,
      style: getCategoryCardStyle(cat),
    })),
  ];

  gameCategoryGrid.innerHTML = cards.map(card => `
    <a class="category-card" href="${card.href}" style="--card-accent:${card.style.color};--card-glow:${card.style.glow}">
      <div class="category-icon">${card.icon}</div>
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <span class="category-count">${card.count}</span>
    </a>
  `).join('');
}

function showCategoryHub() {
  if (gameCategoryHub) gameCategoryHub.style.display = '';
  if (gameToolbar) gameToolbar.style.display = 'none';
  if (sortBar) sortBar.style.display = 'none';
  if (gameLibrary) gameLibrary.style.display = 'none';
}

function showGameLibrary() {
  if (gameCategoryHub) gameCategoryHub.style.display = 'none';
  if (gameToolbar) gameToolbar.style.display = '';
  if (sortBar) sortBar.style.display = 'flex';
  if (gameLibrary) gameLibrary.style.display = '';
}

// ── Filtering ──
function filteredGames() {
  const query = searchInput.value.trim().toLowerCase();
  const cat   = categoryFilter.value;
  let items = games.filter(g => {
    const text = `${g.title} ${g.category} ${g.description}`.toLowerCase();
    return (!query || text.includes(query)) && (cat === 'all' || g.category === cat);
  });

  // Sort
  if (currentSort === 'az')       items.sort((a, b) => a.title.localeCompare(b.title));
  else if (currentSort === 'za')  items.sort((a, b) => b.title.localeCompare(a.title));
  else if (currentSort === 'fav') {
    const favs = getFavorites();
    items.sort((a, b) => (favs.includes(b.title) ? 1 : 0) - (favs.includes(a.title) ? 1 : 0));
  }
  return items;
}

// ── Render ──
function renderGames() {
  const items = filteredGames();
  resultsCount.textContent = `${items.length} game${items.length === 1 ? '' : 's'}`;
  if (!items.length) {
    gamesGrid.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;">No games match that search. Try a different title or category.</div>`;
    return;
  }

  const favs = getFavorites();

  gamesGrid.innerHTML = items.map((g, i) => {
    const thumb = getThumbnail(g.title, g.category);
    const isFav = favs.includes(g.title);
    return `
      <article class="math-card" style="opacity:0; animation-delay:${i * 0.04}s">
        <img class="game-thumb" src="${thumb}" alt="${g.title}" loading="lazy">
        <div class="math-card-body">
          <div class="math-top">
            <div>
              <p class="math-tag">${g.category}</p>
              <h3>${g.title}</h3>
            </div>
            <span class="math-meta">${g.status}</span>
          </div>
          <p class="math-description">${g.description}</p>
          <div class="math-actions">
            <button class="card-button primary" type="button" data-game-href="${g.href}" data-game-title="${g.title}" data-game-cat="${g.category}">Play now</button>
            <button class="btn-favorite ${isFav ? 'is-fav' : ''}" data-fav-title="${g.title}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">${isFav ? '❤' : '♡'}</button>
            <a class="card-button" href="${g.href}" download title="Download game file">↓</a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Trigger animations
  requestAnimationFrame(() => {
    document.querySelectorAll('.math-card').forEach((el, i) => {
      el.style.animation = `slideUpIn 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.04}s forwards`;
    });
  });
}

// ── Game launcher ──
function queueGameLaunch(title) {
  sessionStorage.setItem('launchGame', title);
  if (!window.location.pathname.endsWith('/games.html')) {
    window.location.href = 'games.html';
  }
}

function launchGame(url, title, category) {
  if (!hasGamePage) {
    queueGameLaunch(title);
    return;
  }
  gameFrame.src = url;
  gameTitle.textContent = title;
  gameView.style.display = 'flex';
  syncFullscreenButtons();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  addRecentlyPlayed(title, url, category);
}

function closeGame() {
  if (!hasGamePage) return;
  if (document.fullscreenElement === gameView) {
    document.exitFullscreen().catch(() => {});
  }
  gameFrame.src = 'about:blank';
  gameView.style.display = 'none';
  syncFullscreenButtons();
}

function syncFullscreenButtons() {
  if (!hasGamePage || !enterFullscreenButton || !exitFullscreenButton) return;
  const supported = Boolean(document.fullscreenEnabled && gameView.requestFullscreen);
  const isFullscreen = document.fullscreenElement === gameView;
  enterFullscreenButton.hidden = !supported || isFullscreen;
  exitFullscreenButton.hidden  = !supported || !isFullscreen;
}

async function enterFullscreen() {
  if (hasGamePage && document.fullscreenEnabled && gameView.requestFullscreen) {
    await gameView.requestFullscreen();
  }
}

async function exitFullscreen() {
  if (hasGamePage && document.fullscreenElement === gameView) {
    await document.exitFullscreen();
  }
}

// ── URL-based category filter ──
function applyURLFilter() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('category');
  const validCategories = new Set(games.map(g => g.category));
  const isCategoryHub = !cat;
  const activeCategory = cat === 'all' || (cat && validCategories.has(cat)) ? cat : 'all';

  if (isCategoryHub) {
    categoryFilter.value = 'all';
    document.title = 'sharpness.math — Games';
    renderCategoryHub();
    showCategoryHub();
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === 'games.html' && !link.dataset.filter);
    });
    return;
  }

  categoryFilter.value = activeCategory;
  if (libraryTitle) {
    libraryTitle.textContent = activeCategory === 'all' ? 'All Games' : `${activeCategory} Games`;
  }
  document.title = activeCategory === 'all'
    ? 'sharpness.math — All Games'
    : `sharpness.math — ${activeCategory} Games`;

  if (activeCategory !== 'all') {
    document.querySelectorAll('.sidebar-nav .nav-item[data-filter]').forEach(link => {
      link.classList.toggle('active', link.dataset.filter === activeCategory);
    });
    document.querySelectorAll('.sidebar-nav .nav-item:not([data-filter])').forEach(link => {
      if (link.getAttribute('href') === 'games.html') link.classList.remove('active');
    });
  } else {
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === 'games.html' && !link.dataset.filter);
    });
  }
  showGameLibrary();
  renderGames();
}

if (hasGamePage) {
  searchInput.placeholder = `Search ${games.length} games...`;

  // ── Sidebar category clicks ──
  document.querySelectorAll('.sidebar-nav').forEach(nav => {
    nav.addEventListener('click', e => {
      const link = e.target.closest('.nav-item[data-filter]');
      if (!link) return;
      e.preventDefault();
      const newUrl = new URL(window.location);
      newUrl.searchParams.set('category', link.dataset.filter);
      window.history.pushState({}, '', newUrl);
      categoryFilter.value = link.dataset.filter;
      applyURLFilter();
      const sidebar = document.querySelector('.sidebar');
      if (sidebar && sidebar.classList.contains('active')) toggleHub();
    });
  });

  // ── Grid click handlers ──
  gamesGrid.addEventListener('click', e => {
    const playBtn = e.target.closest('[data-game-href][data-game-title]');
    if (playBtn) {
      launchGame(playBtn.dataset.gameHref, playBtn.dataset.gameTitle, playBtn.dataset.gameCat);
      return;
    }
    const favBtn = e.target.closest('[data-fav-title]');
    if (favBtn) {
      const title = favBtn.dataset.favTitle;
      const nowFav = toggleFavorite(title);
      favBtn.classList.toggle('is-fav', nowFav);
      favBtn.innerHTML = nowFav ? '❤' : '♡';
      favBtn.title = nowFav ? 'Remove from favorites' : 'Add to favorites';
      if (currentSort === 'fav') renderGames();
    }
  });

  // ── Sort buttons ──
  function updateSortButtons() {
    document.querySelectorAll('.sort-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.sort === currentSort);
    });
  }

  document.addEventListener('click', e => {
    const sortBtn = e.target.closest('.sort-btn[data-sort]');
    if (!sortBtn) return;
    currentSort = sortBtn.dataset.sort;
    localStorage.setItem('gameSort', currentSort);
    updateSortButtons();
    renderGames();
  });

  // ── Init ──
  fillCategoryOptions();
  applyURLFilter();

  searchInput.addEventListener('input', renderGames);
  categoryFilter.addEventListener('change', () => {
    const newUrl = new URL(window.location);
    if (categoryFilter.value === 'all') {
      newUrl.searchParams.set('category', 'all');
    } else {
      newUrl.searchParams.set('category', categoryFilter.value);
    }
    window.history.pushState({}, '', newUrl);
    applyURLFilter();
  });
  window.addEventListener('popstate', applyURLFilter);
  document.addEventListener('fullscreenchange', syncFullscreenButtons);
  syncFullscreenButtons();
  updateSortButtons();
}
