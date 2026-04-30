function toggleHub() {
    if (document.body.classList.contains('regular-sidebar')) return;
    const sidebar = document.querySelector('.sidebar');
    const trigger = document.querySelector('.hub-trigger');
    const isActive = sidebar.classList.toggle('active');
    trigger.classList.toggle('active', isActive);
    trigger.textContent = isActive ? '✕' : 'S';
}

function applySidebarSetting() {
    document.body.classList.toggle('regular-sidebar', localStorage.getItem('sidebarMode') === 'regular');
}

window.toggleSidebarMode = function(isRegular) {
    localStorage.setItem('sidebarMode', isRegular ? 'regular' : 'hub');
    applySidebarSetting();
};

// Close hub when clicking outside
document.addEventListener('click', e => {
    if (document.body.classList.contains('regular-sidebar')) return;
    const sidebar = document.querySelector('.sidebar');
    const trigger = document.querySelector('.hub-trigger');
    if (sidebar && sidebar.classList.contains('active') &&
        !sidebar.contains(e.target) && !trigger.contains(e.target)) {
        sidebar.classList.remove('active');
        trigger.classList.remove('active');
        trigger.textContent = 'S';
    }
});

// ── Theme System ──
function applyTheme() {
    const theme = localStorage.getItem('siteTheme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
}

window.setSiteTheme = function(theme) {
    localStorage.setItem('siteTheme', theme);
    applyTheme();
};

// ── Scroll-in animation ──
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

function observeElements() {
    document.querySelectorAll('.hero-copy > *, .math-section, .about > *, .hero-panel, .math-card, .category-card, .featured-card, .stat, .settings-card, .strip-card').forEach((el, i) => {
        if (!el.classList.contains('animate-in')) {
            el.style.opacity = '0';
            el.style.animationDelay = `${i * 0.08}s`;
            observer.observe(el);
        }
    });
}

// Watch for dynamically added game cards
function setupGamesGridObserver() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;
    new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.classList.contains('math-card')) {
                    if (!node.classList.contains('animate-in')) {
                        node.style.opacity = '0';
                        node.style.animationDelay = `${mutation.target.children.length * 0.05}s`;
                        observer.observe(node);
                    }
                }
            });
        });
    }).observe(gamesGrid, { childList: true });
}

// ── Homepage helpers ──
function getCategoryCounts() {
    if (typeof games === 'undefined') return {};
    const counts = {};
    games.forEach(g => { counts[g.category] = (counts[g.category] || 0) + 1; });
    return counts;
}

function getRecentlyPlayed() {
    try {
        const recents = JSON.parse(localStorage.getItem('recentlyPlayed') || '[]');
        if (typeof games === 'undefined') return recents;
        const validTitles = new Set(games.map(g => g.title));
        const filtered = recents.filter(entry => validTitles.has(entry.title));
        if (filtered.length !== recents.length) {
            localStorage.setItem('recentlyPlayed', JSON.stringify(filtered));
        }
        return filtered;
    }
    catch { return []; }
}

function getFavorites() {
    try {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (typeof games === 'undefined') return favorites;
        const validTitles = new Set(games.map(g => g.title));
        const filtered = favorites.filter(title => validTitles.has(title));
        if (filtered.length !== favorites.length) {
            localStorage.setItem('favorites', JSON.stringify(filtered));
        }
        return filtered;
    }
    catch { return []; }
}

function getFavoriteGames() {
    if (typeof games === 'undefined') return [];
    const favs = getFavorites();
    return games.filter(g => favs.includes(g.title));
}

function getCategoryColor(category) {
    const map = {
        Action:    { color: 'var(--accent-orange)', glow: 'rgba(251,86,7,0.15)' },
        Sports:    { color: 'var(--accent-cyan)',   glow: 'rgba(0,255,198,0.15)' },
        Adventure: { color: 'var(--accent-purple)', glow: 'rgba(131,56,236,0.15)' },
        Puzzle:    { color: 'var(--accent-yellow)', glow: 'rgba(255,190,11,0.15)' },
        Racing:    { color: 'var(--accent-magenta)',glow: 'rgba(255,0,110,0.15)' },
        Shooter:   { color: 'var(--accent-blue)',   glow: 'rgba(58,134,255,0.15)' },
    };
    return map[category] || { color: 'var(--accent-cyan)', glow: 'rgba(0,255,198,0.15)' };
}

function formatCategorySummary(categories) {
    if (categories.length === 0) return 'No categories yet.';
    const labels = categories.map(cat => cat.toLowerCase());
    if (labels.length === 1) return `${labels[0]} titles.`;
    if (labels.length === 2) return `${labels[0]} and ${labels[1]} titles.`;
    return `${labels.slice(0, -1).join(', ')}, and ${labels.at(-1)} titles.`;
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
    applySidebarSetting();
    applyTheme();
    observeElements();
    setupGamesGridObserver();

    // Homepage specific
    const catGrid = document.getElementById('categoryGrid');
    if (catGrid && typeof games !== 'undefined') {
        const counts = getCategoryCounts();
        const cats = [...new Set(games.map(g => g.category))].sort();
        const catIcons = {
            Action: '⚔️', Sports: '🏆', Adventure: '🗺️', Puzzle: '🧩', Racing: '🏎️', Shooter: '🔫'
        };
        catGrid.innerHTML = cats.map(cat => {
            const style = getCategoryColor(cat);
            return `
                <a class="category-card" href="games.html?category=${encodeURIComponent(cat)}" style="--card-accent:${style.color};--card-glow:${style.glow}">
                    <div class="category-icon">${catIcons[cat] || '🎮'}</div>
                    <h3>${cat}</h3>
                    <p>${counts[cat]} game${counts[cat] !== 1 ? 's' : ''}</p>
                </a>
            `;
        }).join('');
    }

    const heroGameCount = document.getElementById('heroGameCount');
    const heroCategorySummary = document.getElementById('heroCategorySummary');
    if (typeof games !== 'undefined') {
        const cats = [...new Set(games.map(g => g.category))].sort();
        if (heroGameCount) {
            heroGameCount.textContent = `${games.length} Games`;
        }
        if (heroCategorySummary) {
            heroCategorySummary.textContent = formatCategorySummary(cats);
        }
    }

    // Featured games
    const featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid && typeof games !== 'undefined') {
        const featured = ['Slope', 'Retro Bowl', 'Hollow Knight', 'Snow Rider', 'Brotato', '10 Minutes Till Dawn'];
        const featuredGames = featured.map(t => games.find(g => g.title === t)).filter(Boolean);
        featuredGrid.innerHTML = featuredGames.map(g => {
            const thumb = typeof getThumbnail === 'function' ? getThumbnail(g.title, g.category) : '';
            return `
                <a class="featured-card" href="games.html" onclick="sessionStorage.setItem('launchGame','${g.title}');">
                    <img class="featured-thumb" src="${thumb}" alt="${g.title}" loading="lazy">
                    <div class="featured-info">
                        <span class="featured-tag">${g.category}</span>
                        <h3>${g.title}</h3>
                        <p>${g.description}</p>
                    </div>
                </a>
            `;
        }).join('');
    }

    // Recently played strip
    const recentStrip = document.getElementById('recentStrip');
    if (recentStrip) {
        const recents = getRecentlyPlayed().slice(0, 6);
        if (recents.length === 0) {
            recentStrip.innerHTML = '<div class="empty-state" style="grid-column:1/-1;">No games played yet. Start playing to see them here!</div>';
        } else {
            recentStrip.innerHTML = recents.map(r => {
                const thumb = typeof getThumbnail === 'function' ? getThumbnail(r.title, r.category) : '';
                return `
                    <a class="strip-card" href="${r.href}" data-game-title="${r.title}" data-game-cat="${r.category}">
                        <img class="strip-thumb" src="${thumb}" alt="${r.title}" loading="lazy">
                        <div class="strip-info">
                            <h4>${r.title}</h4>
                            <p>${r.category}</p>
                        </div>
                    </a>
                `;
            }).join('');
            recentStrip.addEventListener('click', e => {
                const card = e.target.closest('.strip-card');
                if (!card) return;
                e.preventDefault();
                if (typeof launchGame === 'function') {
                    launchGame(card.getAttribute('href'), card.dataset.gameTitle, card.dataset.gameCat);
                }
            });
        }
    }

    // Favorites strip on homepage
    const favStrip = document.getElementById('favStrip');
    if (favStrip && typeof games !== 'undefined') {
        const favGames = getFavoriteGames().slice(0, 6);
        if (favGames.length === 0) {
            favStrip.innerHTML = '<div class="empty-state" style="grid-column:1/-1;">No favorites yet. Heart games on the Games page to see them here!</div>';
        } else {
            favStrip.innerHTML = favGames.map(g => {
                const thumb = typeof getThumbnail === 'function' ? getThumbnail(g.title, g.category) : '';
                return `
                    <a class="strip-card" href="${g.href}" data-game-title="${g.title}" data-game-cat="${g.category}">
                        <img class="strip-thumb" src="${thumb}" alt="${g.title}" loading="lazy">
                        <div class="strip-info">
                            <h4>${g.title}</h4>
                            <p>${g.category}</p>
                        </div>
                    </a>
                `;
            }).join('');
            favStrip.addEventListener('click', e => {
                const card = e.target.closest('.strip-card');
                if (!card) return;
                e.preventDefault();
                if (typeof launchGame === 'function') {
                    launchGame(card.getAttribute('href'), card.dataset.gameTitle, card.dataset.gameCat);
                }
            });
        }
    }

    // Auto-launch from sessionStorage
    const launchTitle = sessionStorage.getItem('launchGame');
    if (launchTitle && typeof games !== 'undefined') {
        sessionStorage.removeItem('launchGame');
        const g = games.find(x => x.title === launchTitle);
        if (g && typeof launchGame === 'function') {
            setTimeout(() => launchGame(g.href, g.title, g.category), 300);
        }
    }
});
