// --- ICONS (SVG Strings) ---
const ICONS = {
    dashboard: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
    orders: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>`,
    tasks: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
    clients: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
    logout: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
    menu: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    plus: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`,
    search: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
    close: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    whatsapp: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
    edit: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
    eye: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    trash: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`,
    upload: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>`,
    trend: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    bag: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`,
    money: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
    invoice: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    table_view: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 10h18M3 14h18M10 3v18M3 3h18v18H3z"/></svg>`,
    kanban_view: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="5" height="18" rx="1"/><rect x="10" y="3" width="5" height="11" rx="1"/><rect x="17" y="3" width="5" height="15" rx="1"/></svg>`,
};

// --- CONFIG ---
const STATUSES = ["To Do", "Doing", "Done"];
const STATUS_COLORS = {
    "To Do": { bg: "#EEF2FF", text: "#4338CA", dot: "#6366F1" },
    "Doing": { bg: "#FEF3C7", text: "#92400E", dot: "#F59E0B" },
    "Done": { bg: "#ECFDF5", text: "#065F46", dot: "#10B981" },
    "New": { bg: "#EEF2FF", text: "#4338CA", dot: "#6366F1" },
    "Design Ready": { bg: "#FFF7ED", text: "#C2410C", dot: "#F97316" },
    "In Production": { bg: "#FEF3C7", text: "#92400E", dot: "#F59E0B" },
    "Ready": { bg: "#ECFDF5", text: "#065F46", dot: "#10B981" },
    "Delivered": { bg: "#EFF6FF", text: "#1D4ED8", dot: "#3B82F6" },
    "Cancelled": { bg: "#FFF1F2", text: "#BE123C", dot: "#F43F5E" },
};
const TASK_STATUSES = ["To Do", "Doing", "Done"];
const TASK_COLORS = { 
    "To Do": { bg: "#EEF2FF", text: "#4338CA", dot: "#6366F1" }, 
    "Doing": { bg: "#FEF3C7", text: "#92400E", dot: "#F59E0B" }, 
    "Done": { bg: "#ECFDF5", text: "#065F46", dot: "#10B981" } 
};
const PRODUCTS = [
    "Ruban",
    "Sachet sylable",
    "Sachet non tissé (avec poignet)",
    "Sachet non tissé (sans poignet)"
];
const CITIES = [];   // Kept empty or remove if fully unused, but ville is now text

const RUBANS_COULEURS = [
    { name: "Cappuccino", hex: "#A68966" },
    { name: "Beige rosé", hex: "#E6D4D1" },
    { name: "Rose pastel", hex: "#FFD1DC" },
    { name: "Fuchsia", hex: "#FF00FF" },
    { name: "Vert menthe clair", hex: "#D0F0C0" },
    { name: "Vert olive", hex: "#808000" },
    { name: "Vert sauge", hex: "#B2AC88" },
    { name: "Vert émeraude", hex: "#50C878" },
    { name: "Blanc", hex: "#FFFFFF" },
    { name: "Blanc cassée", hex: "#FFFDD0" },
    { name: "Doré champagne", hex: "#F7E7CE" },
    { name: "Doré", hex: "#D4AF37" },
    { name: "Pêche clair", hex: "#FFDAB9" },
    { name: "Pêche pastel", hex: "#FFD1B3" },
    { name: "Orange cuivré", hex: "#CB6D51" },
    { name: "Jaune pastel", hex: "#FFFBCC" },
    { name: "Jaune vif", hex: "#FFFF00" },
    { name: "Violet très clair", hex: "#F8F4FF" },
    { name: "Violet clair lavande", hex: "#E6E6FA" },
    { name: "Vieux rose violet", hex: "#C08081" },
    { name: "Prune/aubergine", hex: "#66023C" },
    { name: "Gris perlé", hex: "#E5E4E2" },
    { name: "Gris acier", hex: "#778899" },
    { name: "Noir", hex: "#000000" },
    { name: "Bleu nuit", hex: "#191970" },
    { name: "Bleu ciel", hex: "#87CEEB" },
    { name: "Bleu royal", hex: "#4169E1" },
    { name: "Bordeaux", hex: "#800020" },
    { name: "Rouge", hex: "#FF0000" }
];

const PRINT_COLORS = ["White", "Black", "Gold", "Silver", "Bleu", "Red", "Pink", "Yellow"];

// --- GOOGLE SHEETS CONFIG ---
const API_URL = "https://script.google.com/macros/s/AKfycbxpjR4S7PXwxTo81GfMZofKQ2HrnqAM65-3ESSa5FVB4BeZ574ifLPzaZn1rjJe8es/exec";

// --- INITIAL DATA ---
let orders = [];
let tasks = [];
let clients = [];

// --- STATE ---
let currentView = 'dashboard';
let isSidebarCollapsed = false;
let ordersFilter = { search: '', status: '', city: '' };
let ordersViewMode = 'table'; // 'table' | 'kanban'

// --- UTILS ---
const uid = () => Math.random().toString(36).slice(2, 9);
const formatCurrency = (val) => Number(val).toLocaleString() + ' MAD';

async function sheetsAction(action, payload = {}) {
    showLoading(true);
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors', // Apps Script requires no-cors sometimes but then we can't read response. 
            // Actually, for better CRUD we use standard fetch and handle the redirect if possible, 
            // but standard 'no-cors' POST is easiest for simple append.
            // For reading (getOrders), we'll use a trick or just use the official redirect handling.
        });
        // Wait, standard fetch to Google Apps Script needs a specific approach.
        // Let's use a more robust fetch wrapper.
    } catch (e) {
        console.error("Sheets Error:", e);
    } finally {
        showLoading(false);
    }
}

// Optimized fetch for Apps Script
async function callSheets(data) {
    showLoading(true);
    try {
        if (data.action === 'getOrders') {
            const response = await fetch(API_URL);
            const result = await response.json();
            if (!result.success && result.message) alert("Sheets Error: " + result.message);
            return result;
        }

        // Send as text/plain to avoid preflight, then wait 1.5s for Google to process
        await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(data)
        });
        
        return { success: true };
    } catch (e) {
        console.error("Sheets Connection Error:", e);
        alert("Connection to Google Sheets failed. Check your internet or Script URL.");
        return { success: false };
    } finally {
        // Longer timeout to ensure background process finishes on Google side
        setTimeout(() => showLoading(false), 1500);
    }
}

function showLoading(show) {
    let loader = document.getElementById('global-loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'global-loader';
        loader.innerHTML = '<div class="loader-spinner"></div>';
        document.body.appendChild(loader);
    }
    loader.style.display = show ? 'flex' : 'none';
}

// --- CORE LOGIC ---
async function init() {
    // Inject Icons
    document.querySelectorAll('[id^="icon-"]').forEach(el => {
        const name = el.id.replace('icon-', '');
        if (ICONS[name]) el.innerHTML = ICONS[name];
    });

    // Event Listeners
    setupEventListeners();

    // Initial Data Fetch from Sheets
    const result = await callSheets({ action: 'getOrders' });
    if (result && result.success) {
        orders = result.orders;
    } else {
        console.warn("Could not load from Sheets, using empty/local storage.");
    }

    // Initial Render
    renderView();
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link[data-view]').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelector('.nav-link.active').classList.remove('active');
            link.classList.add('active');
            currentView = link.dataset.view;
            renderView();
            
            // Auto-close sidebar on mobile
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('mobile-open');
                document.getElementById('sidebar-overlay')?.classList.remove('active');
            }
        });
    });

    // Sidebar Toggle
    document.getElementById('toggle-sidebar').addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('mobile-open');
            overlay?.classList.toggle('active');
        } else {
            isSidebarCollapsed = !isSidebarCollapsed;
            sidebar.classList.toggle('collapsed', isSidebarCollapsed);
        }
    });

    // Sidebar Overlay Click (to close)
    document.getElementById('sidebar-overlay')?.addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('mobile-open');
        document.getElementById('sidebar-overlay').classList.remove('active');
    });

    // Modal Close
    document.getElementById('close-modal').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'modal-overlay') closeModal();
    });
}

function renderView() {
    const content = document.getElementById('main-content');
    const title = document.getElementById('view-title');
    title.textContent = currentView.charAt(0).toUpperCase() + currentView.slice(1);
    
    content.innerHTML = '';
    content.className = 'content-area fade-in';

    switch (currentView) {
        case 'dashboard':
            renderDashboard(content);
            break;
        case 'orders':
            renderOrders(content);
            break;
        case 'tasks':
            renderTasks(content);
            break;
        case 'clients':
            renderClients(content);
            break;
    }
}

// --- VIEWS ---

function renderDashboard(container) {
    const today = new Date().toISOString().slice(0, 10);
    const stats = [
        { label: 'Orders Today', value: orders.filter(o => o.date === today).length, icon: 'bag', color: '#EEF2FF', iconColor: '#6366F1' },
        { label: 'To Do', value: orders.filter(o => o.status === 'To Do').length, icon: 'orders', color: '#FEF3C7', iconColor: '#F59E0B' },
        { label: 'Doing', value: orders.filter(o => o.status === 'Doing').length, icon: 'trend', color: '#ECFDF5', iconColor: '#10B981' },
        { label: 'Total Clients', value: clients.length, icon: 'clients', color: '#F0FDF4', iconColor: '#16A34A' },
    ];

    let html = `<div class="stats-grid">`;
    stats.forEach(s => {
        html += `
            <div class="stat-card">
                <div class="stat-icon" style="background: ${s.color}; color: ${s.iconColor}">
                    ${ICONS[s.icon]}
                </div>
                <div class="stat-value">${s.value}</div>
                <div class="stat-label">${s.label}</div>
            </div>
        `;
    });
    html += `</div>`;

    html += `
        <div class="dashboard-grid">
            <div class="card">
                <h3 class="font-bold mb-4" style="font-size: 15px;">Orders by Status</h3>
                <div class="progress-container">
                    ${STATUSES.map(s => {
                        const count = orders.filter(o => o.status === s).length;
                        const pct = orders.length ? Math.round((count / orders.length) * 100) : 0;
                        const c = STATUS_COLORS[s];
                        return `
                            <div class="progress-bar-group">
                                <div class="progress-info">
                                    <span>${s}</span>
                                    <span style="color: var(--text-light)">${count}</span>
                                </div>
                                <div class="progress-track">
                                    <div class="progress-fill" style="width: ${pct}%; background: ${c.dot}"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            <div class="card">
                <h3 class="font-bold mb-4" style="font-size: 15px;">Pending Tasks</h3>
                <div class="task-list">
                    ${tasks.filter(t => t.status !== 'Done').slice(0, 5).map(t => `
                        <div class="flex items-center gap-3 py-3" style="border-bottom: 1px solid #f3f4f6;">
                            <div style="width: 8px; height: 8px; border-radius: 50%; background: ${TASK_COLORS[t.status].dot}"></div>
                            <div style="flex: 1; font-size: 14px;">${t.title}</div>
                            <div style="font-size: 12px; color: var(--text-light)">${t.deadline}</div>
                        </div>
                    `).join('') || '<p style="color: var(--text-light); font-size: 14px;">No pending tasks</p>'}
                </div>
            </div>
        </div>
    `;

    html += `
        <div class="card">
            <h3 class="font-bold mb-4" style="font-size: 15px;">Recent Orders</h3>
            <div class="table-wrapper" style="border: none;">
                <table>
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Article</th>
                            <th>Ville</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${orders.slice(0, 5).map(o => `
                            <tr>
                                <td class="font-bold">${o.client}</td>
                                <td>${o.article}</td>
                                <td>${o.ville}</td>
                                <td>${renderBadge(o.status)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

function renderOrders(container) {
    const filtered = orders.filter(o => {
        const q = ordersFilter.search.toLowerCase();
        return (!q || o.client.toLowerCase().includes(q) || (o.article && o.article.toLowerCase().includes(q))) &&
               (!ordersFilter.status || o.status === ordersFilter.status) &&
               (!ordersFilter.city || (o.ville && o.ville.toLowerCase().includes(ordersFilter.city.toLowerCase())));
    });

    let html = `
        <div class="flex justify-between items-center mb-4">
            <div>
                <p class="text-sm" style="color: var(--text-muted)">${filtered.length} total orders</p>
            </div>
            <div class="flex gap-2">
                <div class="flex" style="background: white; border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden;">
                    <button class="btn-icon ${ordersViewMode === 'table' ? 'active' : ''}" id="view-table" style="padding: 10px 14px; border-radius: 0; background: ${ordersViewMode === 'table' ? '#18181B' : 'transparent'}; color: ${ordersViewMode === 'table' ? 'white' : 'var(--text-muted)'}">${ICONS.table_view} Table</button>
                    <button class="btn-icon ${ordersViewMode === 'kanban' ? 'active' : ''}" id="view-kanban" style="padding: 10px 14px; border-radius: 0; background: ${ordersViewMode === 'kanban' ? '#18181B' : 'transparent'}; color: ${ordersViewMode === 'kanban' ? 'white' : 'var(--text-muted)'}">${ICONS.kanban_view} Kanban</button>
                </div>
                <button class="btn btn-primary" id="add-order-btn">${ICONS.plus} New Order</button>
            </div>
        </div>

        <div class="flex gap-3 mb-4">
            <div style="position: relative; flex: 1; max-width: 300px;">
                <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-light)">${ICONS.search}</span>
                <input type="text" id="order-search" placeholder="Search orders..." value="${ordersFilter.search}" style="padding-left: 36px;">
            </div>
            <select id="order-status-filter" style="width: auto; min-width: 140px;">
                <option value="">All Statuses</option>
                ${STATUSES.map(s => `<option value="${s}" ${ordersFilter.status === s ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
            <div style="position: relative; flex: 1; max-width: 200px;">
                <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-light)">${ICONS.search}</span>
                <input type="text" id="order-city-filter" placeholder="Filter by Ville..." value="${ordersFilter.city}" style="padding-left: 36px;">
            </div>
        </div>
    `;

    if (ordersViewMode === 'table') {
        html += `
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Article</th>
                            <th>Colors/Qty</th>
                            <th>Ville</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filtered.map(o => `
                            <tr>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <div style="width: 28px; height: 28px; background: #f3f4f6; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700;">${o.client ? o.client.charAt(0) : '?'}</div>
                                        <span class="font-bold">${o.client}</span>
                                    </div>
                                </td>
                                <td>${o.article}</td>
                                <td>
                                    <div class="text-xs">${o.colors}</div>
                                    <div class="text-xs" style="color: var(--text-light)">${o.quantities}</div>
                                </td>
                                <td>${o.ville}</td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <a href="https://wa.me/212${o.phone ? String(o.phone).startsWith('0') ? String(o.phone).slice(1) : o.phone : ''}" target="_blank" style="color: #10b981;">${ICONS.whatsapp}</a>
                                        <span class="text-sm">${o.phone}</span>
                                    </div>
                                </td>
                                <td>${renderStatusDropdown(o)}</td>
                                <td>
                                    <div class="flex gap-2">
                                        <button class="btn-icon view-order" data-id="${o.id}" title="View Details">${ICONS.eye}</button>
                                        <button class="btn-icon edit-order" data-id="${o.id}" title="Edit">${ICONS.edit}</button>
                                        <button class="btn-icon delete-order" data-id="${o.id}" title="Delete" style="color: var(--accent-rose);">${ICONS.trash}</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                        ${filtered.length === 0 ? '<tr><td colspan="7" style="text-align: center; padding: 40px; color: var(--text-light)">No orders found</td></tr>' : ''}
                    </tbody>
                </table>
            </div>
        `;
    } else {
        html += `
            <div class="kanban-board">
                ${STATUSES.map(s => {
                    const colOrders = filtered.filter(o => o.status === s);
                    const color = STATUS_COLORS[s];
                    return `
                        <div class="kanban-column" data-status="${s}">
                            <div class="kanban-header">
                                ${renderBadge(s)}
                                <span class="text-xs font-bold" style="color: var(--text-light)">${colOrders.length}</span>
                            </div>
                            <div class="kanban-cards-area" style="min-height: 200px;">
                                ${colOrders.map(o => `
                                    <div class="kanban-card" draggable="true" data-id="${o.id}">
                                        ${o.design ? `<img src="${o.design}">` : ''}
                                        <h4>${o.client}</h4>
                                        <p>${o.article} · ${o.colors}</p>
                                        <p class="text-xs" style="color: var(--text-light); margin-top: -8px; margin-bottom: 8px;">${o.quantities}</p>
                                        <div class="flex justify-between items-center">
                                            <span class="text-xs font-bold">${o.ville}</span>
                                            <div class="flex gap-2">
                                                <button class="btn-icon view-order" data-id="${o.id}" style="padding: 4px;" title="View Details">${ICONS.eye}</button>
                                                <button class="btn-icon edit-order" data-id="${o.id}" style="padding: 4px;" title="Edit">${ICONS.edit}</button>
                                                <button class="btn-icon delete-order" data-id="${o.id}" style="padding: 4px; color: var(--accent-rose);" title="Delete">${ICONS.trash}</button>
                                                <a href="https://wa.me/212${o.phone ? String(o.phone).startsWith('0') ? String(o.phone).slice(1) : o.phone : ''}" target="_blank" style="color: #10b981;" title="WhatsApp">${ICONS.whatsapp}</a>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    container.innerHTML = html;

    // Attach local listeners
    document.getElementById('view-table').addEventListener('click', () => { ordersViewMode = 'table'; renderView(); });
    document.getElementById('view-kanban').addEventListener('click', () => { ordersViewMode = 'kanban'; renderView(); });
    document.getElementById('add-order-btn').addEventListener('click', () => showOrderModal());
    document.getElementById('order-search').addEventListener('input', (e) => { ordersFilter.search = e.target.value; renderView(); });
    document.getElementById('order-status-filter').addEventListener('change', (e) => { ordersFilter.status = e.target.value; renderView(); });
    document.getElementById('order-city-filter').addEventListener('input', (e) => { ordersFilter.city = e.target.value; renderView(); });

    container.querySelectorAll('.edit-order').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const order = orders.find(o => o.id === id);
            showOrderModal(order);
        });
    });

    container.querySelectorAll('.view-invoice').forEach(btn => {
        btn.addEventListener('click', () => showInvoice(btn.dataset.id));
    });

    container.querySelectorAll('.view-order').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const order = orders.find(o => o.id === id);
            if(order) showOrderDetailsModal(order);
        });
    });

    container.querySelectorAll('.delete-order').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteOrder(btn.dataset.id);
        });
    });

    container.querySelectorAll('.status-dropdown').forEach(select => {
        select.addEventListener('change', async (e) => {
            const id = e.target.dataset.id;
            const newStatus = e.target.value;
            const order = orders.find(o => o.id === id);
            
            if (order && order.status !== newStatus) {
                const originalStatus = order.status;
                const updatedOrder = { ...order, status: newStatus };
                
                // Optimistic UI update
                orders = orders.map(o => o.id === id ? updatedOrder : o);
                renderView();
                
                const result = await callSheets({ action: 'updateOrder', order: updatedOrder });
                if (!result || !result.success) {
                    alert("Failed to update status in the database.");
                    // Revert back on failure
                    orders = orders.map(o => o.id === id ? { ...order, status: originalStatus } : o);
                    renderView();
                }
            }
        });
    });

    if (ordersViewMode === 'kanban') setupKanbanListeners();
}

function renderTasks(container) {
    const activeOrders = orders.filter(o => ['To Do', 'Doing'].includes(o.status));
    
    // Aggregate inventory
    const inventory = {}; // group by article, then by combination
    
    activeOrders.forEach(order => {
        const items = order.items && order.items.length > 0 ? order.items : [{
            article: order.article,
            colorsData: order.colorsData || [],
            sachetData: order.sachetData || {}
        }];

        items.forEach(item => {
            if (!item.article) return;
            const article = item.article;
            if (!inventory[article]) inventory[article] = {};

            const isRibbon = article === 'Ruban';
            if (isRibbon) {
                if (order.status === 'Doing') return;
                
                const colorsData = (item.colorsData && item.colorsData.length > 0) ? item.colorsData : [{
                    name: order.colors || 'Unknown Color',
                    qty: order.quantities || 1,
                    printColor: 'Standard'
                }];
                
                colorsData.forEach(c => {
                    let qty = parseInt(c.qty, 10);
                    if (isNaN(qty)) {
                        const match = String(c.qty).match(/\\d+/);
                        qty = match ? parseInt(match[0], 10) : 1;
                    }
                    const key = `${c.name}|||${c.hex || '#cccccc'}`;
                    if (!inventory[article][key]) {
                        inventory[article][key] = { name: c.name, hex: c.hex || '#cccccc', qty: 0 };
                    }
                    inventory[article][key].qty += qty;
                });
            } else {
                const sd = item.sachetData || {};
                let qty = parseInt(sd.qty || order.quantities, 10);
                if (isNaN(qty)) {
                    const match = String(sd.qty || order.quantities).match(/\\d+/);
                    qty = match ? parseInt(match[0], 10) : 1;
                }
                const color = sd.color || 'Unknown Color';
                const size = sd.size || 'Unknown Size';
                const print = sd.print || 'Standard';
                const key = `${color}|||${size}|||${print}`;
                
                if (!inventory[article][key]) {
                    inventory[article][key] = { color, size, print, qty: 0 };
                }
                inventory[article][key].qty += qty;
            }
        });
    });

    let html = `
        <div class="flex justify-between items-center mb-6 fade-in">
            <div>
                <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 4px;">Inventory Overview</h2>
                <p class="text-sm" style="color: var(--text-muted)">Total items needed for all active orders (To Do, Doing)</p>
            </div>
            <div class="badge" style="background: #e0e7ff; color: #4338ca; font-size: 14px; padding: 8px 16px;">
                <span class="badge-dot" style="background: #6366f1;"></span>
                ${activeOrders.length} Active Orders
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;" class="fade-in">
    `;

    if (Object.keys(inventory).length === 0) {
        html += `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: #64748b; background: white; border-radius: 16px; border: 1px solid #e2e8f0;">No items in active orders.</div>`;
    } else {
        for (const [article, itemsObj] of Object.entries(inventory)) {
            const isRibbon = article === 'Ruban';
            const itemsList = Object.values(itemsObj).sort((a, b) => b.qty - a.qty);
            
            const listHtml = itemsList.map(it => {
                if (isRibbon) {
                    return `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid #f1f5f9;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: ${it.hex}; border: 1px solid #e2e8f0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"></div>
                                <div>
                                    <div style="font-weight: 700; color: #0f172a;">${it.name}</div>
                                </div>
                            </div>
                            <div style="font-weight: 800; color: #0f172a; font-size: 1.1rem; background: #f1f5f9; padding: 4px 12px; border-radius: 8px;">
                                ${it.qty}
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid #f1f5f9;">
                            <div>
                                <div style="font-weight: 700; color: #0f172a;">${it.color} <span style="color: #94a3b8; font-weight: 400; margin: 0 4px;">|</span> ${it.size}</div>
                                <div style="font-size: 0.75rem; color: #64748b;">Print: <span style="color: #4338ca; font-weight: 600;">${it.print}</span></div>
                            </div>
                            <div style="font-weight: 800; color: #0f172a; font-size: 1.1rem; background: #f1f5f9; padding: 4px 12px; border-radius: 8px;">
                                ${it.qty}
                            </div>
                        </div>
                    `;
                }
            }).join('');

            html += `
                <div style="background: white; border: 1px solid #e2e8f0; border-radius: 16px; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h3 style="margin: 0; font-size: 1.1rem; color: #0f172a;">${article}</h3>
                        <div style="font-size: 0.8rem; background: #f8fafc; color: #64748b; padding: 4px 8px; border-radius: 6px; font-weight: 600;">
                            ${itemsList.length} Variations
                        </div>
                    </div>
                    <div style="max-height: 400px; overflow-y: auto; padding-right: 8px;">
                        ${listHtml}
                    </div>
                </div>
            `;
        }
    }

    html += `</div>`;
    container.innerHTML = html;
}

function renderClients(container) {
    let html = `
        <div class="flex justify-between items-center mb-4">
            <p class="text-sm" style="color: var(--text-muted)">${clients.length} listed clients</p>
            <button class="btn btn-primary" id="add-client-btn">${ICONS.plus} New Client</button>
        </div>
        <div class="clients-grid">
            ${clients.map(c => {
                const oCount = orders.filter(o => o.client === c.name).length;
                const totalSpent = orders.filter(o => o.client === c.name).reduce((s, o) => s + o.price, 0);
                return `
                    <div class="client-card">
                        <div class="flex justify-between items-start mb-4">
                            <div class="flex gap-3">
                                <div class="client-avatar">${c.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase()}</div>
                                <div>
                                    <h4 class="font-bold">${c.name}</h4>
                                    <p class="text-xs" style="color: var(--text-light)">${c.city}</p>
                                </div>
                            </div>
                            <a href="https://wa.me/212${c.phone.slice(1)}" target="_blank" style="color: #10b981;">${ICONS.whatsapp}</a>
                        </div>
                        <div class="flex gap-2 mb-4">
                            <div style="flex: 1; background: #f8f7f5; padding: 10px; border-radius: 8px; text-align: center;">
                                <div class="font-bold">${oCount}</div>
                                <div class="text-xs" style="color: var(--text-light)">Orders</div>
                            </div>
                            <div style="flex: 1; background: #f8f7f5; padding: 10px; border-radius: 8px; text-align: center;">
                                <div class="font-bold">${totalSpent}</div>
                                <div class="text-xs" style="color: var(--text-light)">Spent</div>
                            </div>
                        </div>
                        <p class="text-sm mb-4" style="color: var(--text-muted); min-height: 40px;">${c.notes || 'No notes available.'}</p>
                        <div class="flex gap-2" style="border-top: 1px solid #f3f4f6; pt-4">
                            <button class="btn btn-secondary edit-client" data-id="${c.id}" style="flex: 1; justify-content: center; font-size: 12px; margin-top: 12px;">${ICONS.edit} Edit</button>
                            <button class="btn btn-danger delete-client" data-id="${c.id}" style="margin-top: 12px;">${ICONS.trash}</button>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    container.innerHTML = html;

    document.getElementById('add-client-btn').addEventListener('click', () => showClientModal());
    container.querySelectorAll('.edit-client').forEach(btn => {
        btn.addEventListener('click', () => {
            const client = clients.find(c => c.id === btn.dataset.id);
            showClientModal(client);
        });
    });
    container.querySelectorAll('.delete-client').forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('Delete this client?')) {
                clients = clients.filter(c => c.id !== btn.dataset.id);
                renderView();
            }
        });
    });
}

function renderBadge(status) {
    const c = STATUS_COLORS[status] || { bg: "#F3F4F6", text: "#374151", dot: "#9CA3AF" };
    return `
        <span class="badge" style="background: ${c.bg}; color: ${c.text}">
            <span class="badge-dot" style="background: ${c.dot}"></span>
            ${status}
        </span>
    `;
}

function renderStatusDropdown(order) {
    const c = STATUS_COLORS[order.status] || { bg: "#F3F4F6", text: "#374151", dot: "#9CA3AF" };
    return `
        <div style="position: relative; display: inline-block;">
            <select class="status-dropdown" data-id="${order.id}" style="
                appearance: none;
                background: ${c.bg};
                color: ${c.text};
                border: 1px solid transparent;
                padding: 4px 24px 4px 24px;
                border-radius: 99px;
                font-size: 12px;
                font-weight: 700;
                cursor: pointer;
                outline: none;
                font-family: inherit;
                box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                transition: all 0.2s ease;
            " onmouseover="this.style.boxShadow='0 4px 8px rgba(0,0,0,0.08)'" onmouseout="this.style.boxShadow='0 2px 4px rgba(0,0,0,0.05)'">
                ${(STATUSES.includes(order.status) ? STATUSES : [order.status, ...STATUSES]).map(s => `<option value="${s}" ${s === order.status ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
            <span style="
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: ${c.dot};
                pointer-events: none;
            "></span>
            <svg style="
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
                pointer-events: none;
            " width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${c.text}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </div>
    `;
}

// --- MODALS ---

function showOrderModal(order = null) {
    const title = order ? 'Edit Order' : 'New Order';
    const STEPS = [
        { label: 'Client',   icon: '👤' },
        { label: 'Products', icon: '🗂️' },
        { label: 'Design',   icon: '🖼️' },
        { label: 'Delivery', icon: '📦' },
    ];
    let currentStep = 0;

    const orderItems = order?.items || [
        { id: uid(), article: 'Ruban', colorsData: [], sachetData: {} }
    ];

    // ---- Render helpers ----
    const renderItemsList = () => {
        const container = document.getElementById('items-container');
        if (!container) return;
        container.innerHTML = orderItems.map((item, idx) => {
            const isRibbon = !['Sachet sylable', 'Sachet non tissé (avec poignet)', 'Sachet non tissé (sans poignet)'].includes(item.article);
            return `
                <div class="order-item-card">
                    <div class="order-item-number">
                        <span>Product Selection — ${item.article}</span>
                    </div>
                    <div class="form-group" style="margin-bottom:14px;">
                        <label>Article / Product</label>
                        <select onchange="updateItemArticle(${idx}, this.value)">
                            <option value="Ruban" ${item.article==='Ruban'?'selected':''}>Ruban</option>
                            <option value="Sachet sylable" ${item.article==='Sachet sylable'?'selected':''}>Sachet sylable</option>
                            <option value="Sachet non tissé (avec poignet)" ${item.article==='Sachet non tissé (avec poignet)'?'selected':''}>Sachet non tissé (avec poignet)</option>
                            <option value="Sachet non tissé (sans poignet)" ${item.article==='Sachet non tissé (sans poignet)'?'selected':''}>Sachet non tissé (sans poignet)</option>
                        </select>
                    </div>
                    <div id="item-fields-${idx}">
                    ${isRibbon ? `
                        <p style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:10px;">Ribbon Colors &amp; Printing</p>
                        <div id="ribbon-list-${idx}" class="mb-3"></div>
                        <button type="button" class="btn btn-secondary w-full" style="justify-content:center;border-style:dashed;font-size:12px;" onclick="openRibbonPicker(${idx})">${ICONS.plus} Add Ribbon Color</button>
                    ` : `
                        <p style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:12px;">Sachet Specifications</p>
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                            <div class="form-group" style="margin-bottom:0;"><label>Color</label><input type="text" value="${item.sachetData?.color||''}" placeholder="White" onchange="updateSachetData(${idx},'color',this.value)"></div>
                            <div class="form-group" style="margin-bottom:0;"><label>Printing</label><input type="text" value="${item.sachetData?.print||''}" placeholder="Gold" onchange="updateSachetData(${idx},'print',this.value)"></div>
                            <div class="form-group" style="margin-bottom:0;"><label>Quantity</label><input type="number" value="${item.sachetData?.qty||''}" placeholder="1000" onchange="updateSachetData(${idx},'qty',this.value)"></div>
                            <div class="form-group" style="margin-bottom:0;"><label>Sizes (cm)</label><input type="text" value="${item.sachetData?.size||''}" placeholder="30x40" onchange="updateSachetData(${idx},'size',this.value)"></div>
                        </div>
                    `}
                    </div>
                </div>
            `;
        }).join('');

        orderItems.forEach((item, idx) => {
            const lc = document.getElementById(`ribbon-list-${idx}`);
            if (!lc) return;
            if (!item.colorsData?.length) {
                lc.innerHTML = '<p style="color:var(--text-light);font-size:12px;padding:6px 0;">No ribbons added yet.</p>';
            } else {
                lc.innerHTML = `<table style="width:100%;font-size:12px;border-collapse:collapse;">
                    <thead><tr style="border-bottom:1px solid #eee;">
                        <th style="text-align:left;padding:4px;font-weight:700;">Color</th>
                        <th style="width:56px;text-align:center;font-weight:700;">Qty</th>
                        <th style="text-align:left;padding:4px;font-weight:700;">Print</th>
                        <th style="width:28px;"></th>
                    </tr></thead>
                    <tbody>${item.colorsData.map((c,cIdx)=>`
                        <tr style="border-bottom:1px solid #f9f9f9;">
                            <td style="padding:6px 4px;">
                                <div style="display:flex;align-items:center;gap:8px;">
                                    <div style="width:14px;height:14px;border-radius:50%;background:${c.hex};border:1px solid #ddd;flex-shrink:0;"></div>
                                    <span style="font-weight:600;">${c.name}</span>
                                </div>
                            </td>
                            <td style="padding:4px;text-align:center;">
                                <input type="number" value="${c.qty}" style="padding:2px;width:44px;text-align:center;border-radius:4px;" onchange="updateRibbonProp(${idx},${cIdx},'qty',this.value)">
                            </td>
                            <td style="padding:4px;">
                                <select style="padding:4px 6px;font-size:11px;" onchange="updateRibbonProp(${idx},${cIdx},'printColor',this.value)">
                                    ${PRINT_COLORS.map(pc=>`<option value="${pc}" ${c.printColor===pc?'selected':''}>${pc}</option>`).join('')}
                                    <option value="custom" ${!PRINT_COLORS.includes(c.printColor)&&c.printColor?'selected':''}>Other...</option>
                                </select>
                            </td>
                            <td style="text-align:right;">
                                <button type="button" onclick="removeRibbon(${idx},${cIdx})" style="color:#ef4444;font-size:14px;">✕</button>
                            </td>
                        </tr>
                    `).join('')}</tbody>
                </table>`;
            }
        });
    };

    // ---- Global item handlers ----
    window.updateItemArticle = (idx, val) => { orderItems[idx].article = val; renderItemsList(); };
    window.removeItem = (idx) => { orderItems.splice(idx,1); renderItemsList(); };
    window.addItem = () => { orderItems.push({id:uid(),article:'Ruban',colorsData:[],sachetData:{}}); renderItemsList(); };
    window.updateSachetData = (idx,field,val) => { orderItems[idx].sachetData = orderItems[idx].sachetData||{}; orderItems[idx].sachetData[field]=val; };
    window.openRibbonPicker = (idx) => {
        const currentNames = (orderItems[idx].colorsData || []).map(c => c.name);
        showColorPicker((color, isAdded) => {
            orderItems[idx].colorsData = orderItems[idx].colorsData || [];
            if (isAdded) {
                if (!orderItems[idx].colorsData.find(c => c.name === color.name)) {
                    orderItems[idx].colorsData.push({ ...color, qty: 1, printColor: 'White' });
                }
            } else {
                orderItems[idx].colorsData = orderItems[idx].colorsData.filter(c => c.name !== color.name);
            }
            renderItemsList();
        }, currentNames);
    };
    window.updateRibbonProp = (iIdx,rIdx,prop,val) => {
        orderItems[iIdx].colorsData[rIdx][prop] = val;
        if (prop==='printColor' && val==='custom') {
            const cv = prompt('Enter custom printing color:');
            if (cv) orderItems[iIdx].colorsData[rIdx][prop] = cv;
            renderItemsList();
        }
    };
    window.removeRibbon = (iIdx,rIdx) => { orderItems[iIdx].colorsData.splice(rIdx,1); renderItemsList(); };

    // ---- Step content ----
    const stepPanels = [
        // Step 0 – Client
        `<div class="wizard-section-title">Client Info</div>
         <div class="wizard-section-sub">Who placed this order?</div>
         <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">
             <div class="form-group" style="margin-bottom:0;">
                 <label>Client Name</label>
                 <input type="text" id="form-client" value="${order?.client||''}" placeholder="Full name" list="clients-datalist">
                 <datalist id="clients-datalist">${clients.map(c=>`<option value="${c.name}">`).join('')}</datalist>
             </div>
             <div class="form-group" style="margin-bottom:0;">
                 <label>Phone Number</label>
                 <input type="text" id="form-phone" value="${order?.phone||''}" placeholder="06xxxxxxxx">
             </div>
             <div class="form-group" style="grid-column: span 2; margin-top: 10px;">
                 <label>Current Status</label>
                 <select id="form-status">
                    ${(STATUSES.includes(order?.status || 'To Do') ? STATUSES : [order?.status || 'To Do', ...STATUSES]).map(s => `<option value="${s}" ${ (order?.status || 'To Do') === s ? 'selected' : '' }>${s}</option>`).join('')}
                 </select>
             </div>
         </div>`,

        // Step 1 – Products
        `<div class="wizard-section-title">Order Product</div>
         <div class="wizard-section-sub">Select the product for this order.</div>
         <div id="items-container"></div>`,

        // Step 2 – Design
        `<div class="wizard-section-title">Design Image</div>
         <div class="wizard-section-sub">Upload the reference or design file for this order.</div>
         <div id="image-upload-zone" style="border:2px dashed #d1d5db;border-radius:14px;padding:40px 28px;text-align:center;cursor:pointer;background:white;transition:border-color .2s;">
             ${order?.design
                 ? `<img src="${order.design}" style="max-height:140px;border-radius:10px;">`
                 : `<div style="color:#9ca3af;">${ICONS.upload}<p style="margin-top:12px;font-size:14px;font-weight:600;">Click to upload design image</p><p style="font-size:12px;margin-top:4px;">PNG, JPG, WEBP</p></div>`}
             <input type="file" id="form-design" class="hidden" accept="image/*">
         </div>`,

        // Step 3 – Delivery
        `<div class="wizard-section-title">Delivery Info</div>
         <div class="wizard-section-sub">Where should we send it?</div>
         <div class="form-group">
             <label>Full Address</label>
             <input type="text" id="form-address" value="${order?.address||''}" placeholder="Street, building, floor...">
         </div>
         <div class="form-group" style="margin-bottom:0;">
             <label>Ville (City)</label>
             <input type="text" id="form-ville" value="${order?.ville||''}" placeholder="e.g. Casablanca">
         </div>`,
    ];

    // ---- build modal body (progress UI + panels) ----
    const body = `
        <div class="wizard-progress-wrap" id="wizard-progress" style="padding: 32px 32px 24px; border-bottom: 1px solid #f1f5f9; margin-bottom: 24px; background: #fafafa;">
            <div class="wizard-steps-header">
                ${STEPS.map((s,i) => `
                    <div class="wizard-step-dot" id="wdot-${i}" onclick="wizNav(${i - currentStep})" style="cursor:pointer;">
                        <div class="wizard-step-circle">${s.icon}</div>
                        <div class="wizard-step-label">${s.label}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        <form id="order-form" style="padding: 0 28px 28px;">
            ${stepPanels.map((html,i) => `<div class="wizard-panel${i===0?' active':''}" id="wstep-${i}">${html}</div>`).join('')}
        </form>
    `;

    const footer = `
        <div style="display: flex; justify-content: center; align-items: center; width: 100%; gap: 10px; flex-wrap: wrap;">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            ${order ? `<button class="btn btn-danger" onclick="deleteOrder('${order.id}')" style="background: transparent; border-color: #fee2e2; color: #ef4444;">Delete Order</button>` : ''}
            <button class="btn btn-secondary" id="wiz-back" style="display:none;" onclick="wizNav(-1)">← Back</button>
            <button class="btn btn-primary" id="wiz-next" onclick="wizNav(1)" style="padding-left: 24px; padding-right: 24px;">Next Step →</button>
            <button class="btn btn-primary" id="wiz-save" style="background:var(--accent-emerald); border-color:var(--accent-emerald); color: white; padding-left: 24px; padding-right: 24px;">✓ Save Changes</button>
        </div>
    `;

    openModal(title, body, footer);

    // ---- Stepper engine ----
    const updateWizard = () => {
        const total = STEPS.length;

        STEPS.forEach((_,i) => {
            const dot = document.getElementById(`wdot-${i}`);
            dot.className = 'wizard-step-dot' + (i < currentStep ? ' done' : i === currentStep ? ' active' : '');
        });

        document.querySelectorAll('.wizard-panel').forEach((p,i) => {
            p.classList.toggle('active', i === currentStep);
        });

        document.getElementById('wiz-back').style.display  = currentStep > 0 ? '' : 'none';
        document.getElementById('wiz-next').style.display  = currentStep < total-1 ? '' : 'none';

        if (currentStep === 2) renderItemsList();
        if (currentStep === 3) {
            document.getElementById('image-upload-zone').addEventListener('click', () => document.getElementById('form-design').click());
            document.getElementById('form-design').addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) => {
                    document.getElementById('image-upload-zone').innerHTML = `<img src="${ev.target.result}" style="max-height:140px;border-radius:10px;">`;
                    window.tempImage = ev.target.result;
                };
                reader.readAsDataURL(file);
            });
        }
    };

    window.wizNav = (dir) => {
        currentStep = Math.max(0, Math.min(STEPS.length-1, currentStep + dir));
        updateWizard();
        document.querySelector('.modal')?.scrollTo({top:0,behavior:'smooth'});
    };

    // Save
    document.getElementById('wiz-save').addEventListener('click', async () => {
        const colorsStr = orderItems.map(item => {
            if (!['Sachet sylable','Sachet non tissé (avec poignet)','Sachet non tissé (sans poignet)'].includes(item.article))
                return (item.colorsData||[]).map(c=>c.name).join(', ');
            return item.sachetData?.color || '';
        }).filter(s=>s).join(' | ');

        const quantitiesStr = orderItems.map(item => {
            if (!['Sachet sylable','Sachet non tissé (avec poignet)','Sachet non tissé (sans poignet)'].includes(item.article))
                return (item.colorsData||[]).map(c=>`${c.name}: ${c.qty}`).join(', ');
            return `${item.article}: ${item.sachetData?.qty||0} pcs`;
        }).join(' | ');

        const newOrder = {
            id: order?.id || uid(),
            client: document.getElementById('form-client').value,
            phone: document.getElementById('form-phone').value,
            address: document.getElementById('form-address').value,
            ville: document.getElementById('form-ville').value,
            items: orderItems,
            article: orderItems.length > 1 ? `${orderItems.length} Products` : orderItems[0].article,
            colors: colorsStr,
            quantities: quantitiesStr,
            design: window.tempImage || order?.design || null,
            status: document.getElementById('form-status').value || 'To Do',
            date: order?.date || new Date().toISOString().slice(0,10)
        };

        const action = order ? 'updateOrder' : 'addOrder';
        const result = await callSheets({ action, order: newOrder });
        
        if (result && result.success) {
            if (order) orders = orders.map(o => o.id === order.id ? newOrder : o);
            else orders.unshift(newOrder);
            renderView();
            closeModal();
        } else {
            alert("Error: could not save to Google Sheets.");
        }
    });

    updateWizard();
}

function showTaskModal(task = null) {
    const title = task ? 'Edit Task' : 'New Task';
    const body = `
        <div class="form-group">
            <label>Task Description</label>
            <input type="text" id="task-title" value="${task?.title || ''}" required>
        </div>
        <div class="flex gap-3">
            <div class="form-group w-full">
                <label>Status</label>
                <select id="task-status">${TASK_STATUSES.map(s => `<option value="${s}" ${task?.status === s ? 'selected' : ''}>${s}</option>`).join('')}</select>
            </div>
            <div class="form-group w-full">
                <label>Deadline</label>
                <input type="date" id="task-deadline" value="${task?.deadline || ''}">
            </div>
        </div>
        <div class="form-group">
            <label>Link to Order (optional)</label>
            <select id="task-order">
                <option value="">None</option>
                ${orders.map(o => `<option value="${o.id}" ${task?.orderId === o.id ? 'selected' : ''}>${o.client} - ${o.product}</option>`).join('')}
            </select>
        </div>
    `;
    const footer = `<button class="btn btn-secondary" onclick="closeModal()">Cancel</button><button class="btn btn-primary" id="save-task-btn">Save Task</button>`;
    
    openModal(title, body, footer);

    document.getElementById('save-task-btn').addEventListener('click', () => {
        const newTask = {
            id: task?.id || uid(),
            title: document.getElementById('task-title').value,
            status: document.getElementById('task-status').value || 'To Do',
            deadline: document.getElementById('task-deadline').value,
            orderId: document.getElementById('task-order').value || null
        };
        if (task) tasks = tasks.map(t => t.id === task.id ? newTask : t);
        else tasks.unshift(newTask);
        renderView();
        closeModal();
    });
}

function showInvoice(id) {
    const order = orders.find(o => o.id === id);
    const title = 'Order Details #' + order.id.toUpperCase();
    const body = `
        <div style="text-align: left; margin-bottom: 24px; border-bottom: 1px solid #f3f4f6; padding-bottom: 16px;">
            <img src="img/Wecraft Final Logos.png" alt="wecraft" style="margin: 0 0 12px; width: 160px; height: 70px; object-fit: contain; display: block;">
            <p class="text-xs" style="color: var(--text-light)">Generated on ${new Date().toLocaleDateString()}</p>
        </div>
        <div class="mb-4">
            <div class="flex justify-between py-2"><span style="color: var(--text-muted)">Client</span><span class="font-bold">${order.client}</span></div>
            <div class="flex justify-between py-2"><span style="color: var(--text-muted)">Phone</span><span>${order.phone}</span></div>
            <div class="flex justify-between py-2"><span style="color: var(--text-muted)">Article</span><span>${order.article}</span></div>
            <div class="flex justify-between py-2"><span style="color: var(--text-muted)">Ville</span><span>${order.ville}</span></div>
            
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1.5px solid #000;">
                <h4 style="font-size: 11px; font-weight: 800; margin-bottom: 12px; letter-spacing: 0.1em; color: #000; text-transform: uppercase;">Order Items</h4>
                ${(order.items || [{ article: order.article, colorsData: order.colorsData, sachetData: order.sachetData }]).map((item, i) => {
                    const isRibbon = item.article === 'Ruban';
                    return `
                        <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px dashed #e5e7eb;">
                            <div class="flex justify-between items-center mb-2">
                                <span style="font-weight: 900; font-size: 14px; color: var(--indigo-primary);">${item.article}</span>
                                <span style="font-size: 11px; padding: 2px 8px; background: #f1f5f9; border-radius: 4px; font-weight: 600;">#${i + 1}</span>
                            </div>
                            ${isRibbon ? 
                                (item.colorsData || []).map(c => `
                                    <div class="flex items-center justify-between py-1">
                                        <div class="flex items-center gap-2">
                                            <div style="width: 10px; height: 10px; border-radius: 50%; background: ${c.hex}; border: 1px solid #ddd;"></div>
                                            <span style="font-size: 12px;">${c.name} x <strong>${c.qty}</strong></span>
                                        </div>
                                        <span style="font-size: 11px; color: var(--accent-blue);">Print: ${c.printColor || 'Std'}</span>
                                    </div>
                                `).join('') :
                                `<div style="font-size: 12px; line-height: 1.6;">
                                    <div class="flex justify-between"><span>Color:</span><strong>${item.sachetData?.color || '-'}</strong></div>
                                    <div class="flex justify-between"><span>Size:</span><strong>${item.sachetData?.size || '-'}</strong></div>
                                    <div class="flex justify-between"><span>Qty:</span><strong>${item.sachetData?.qty || '-'} pcs</strong></div>
                                    <div class="flex justify-between"><span>Print:</span><strong style="color: var(--accent-blue)">${item.sachetData?.print || '-'}</strong></div>
                                </div>`
                            }
                        </div>
                    `;
                }).join('')}
            </div>

            <div class="py-2" style="border-top: 1px solid #f9f9f9; margin-top: 8px;">
                <span style="color: var(--text-muted); font-size: 12px; display: block; margin-bottom: 4px;">Address:</span>
                <span style="font-size: 13px;">${order.address}</span>
            </div>
            <div class="flex justify-between py-2"><span style="color: var(--text-muted)">Date</span><span>${order.date}</span></div>
        </div>
    `;
    const footer = `
        <button class="btn btn-secondary" onclick="closeModal()">Close</button>
        <a href="https://wa.me/212${order.phone ? order.phone.slice(1) : ''}?text=Hello ${order.client}, your order for ${order.article} (${order.colors}) is now ${order.status}." class="btn btn-success" target="_blank">${ICONS.whatsapp} Share Status</a>
    `;
    openModal(title, body, footer);
}

function showClientModal(client = null) {
    const title = client ? 'Edit Client' : 'New Client';
    const body = `
        <div class="form-group"><label>Full Name</label><input type="text" id="client-name" value="${client?.name || ''}"></div>
        <div class="form-group"><label>Phone</label><input type="text" id="client-phone" value="${client?.phone || ''}"></div>
        <div class="form-group"><label>City</label><select id="client-city">${CITIES.map(c => `<option value="${c}" ${client?.city === c ? 'selected' : ''}>${c}</option>`).join('')}</select></div>
        <div class="form-group"><label>Notes</label><textarea id="client-notes">${client?.notes || ''}</textarea></div>
    `;
    const footer = `<button class="btn btn-secondary" onclick="closeModal()">Cancel</button><button class="btn btn-primary" id="save-client-btn">Save Client</button>`;
    
    openModal(title, body, footer);

    document.getElementById('save-client-btn').addEventListener('click', () => {
        const nc = {
            id: client?.id || uid(),
            name: document.getElementById('client-name').value,
            phone: document.getElementById('client-phone').value,
            city: document.getElementById('client-city').value,
            notes: document.getElementById('client-notes').value
        };
        if (client) clients = clients.map(c => c.id === client.id ? nc : c);
        else clients.unshift(nc);
        renderView();
        closeModal();
    });
}

// --- COLOR PICKER ---
function showColorPicker(onSelect, initialSelectedNames = []) {
    let pickerOverlay = document.getElementById('color-picker-overlay');
    if (!pickerOverlay) {
        pickerOverlay = document.createElement('div');
        pickerOverlay.id = 'color-picker-overlay';
        pickerOverlay.className = 'modal-overlay';
        pickerOverlay.style.zIndex = '2000';
        pickerOverlay.innerHTML = `
            <div class="modal" style="max-width: 800px; width: 95%;">
                <div class="modal-header">
                    <h3 style="font-size: 20px;">Select Ribbon Colors</h3>
                    <button class="btn-icon" id="close-picker">${ICONS.close}</button>
                </div>
                <div class="modal-body">
                    <div style="position: relative; margin-bottom: 24px;">
                        <span style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-light)">${ICONS.search}</span>
                        <input type="text" id="color-search" placeholder="Search for a color..." style="padding-left: 44px; height: 50px; font-size: 16px;">
                    </div>
                    <div id="color-grid" class="color-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px; max-height: 550px; overflow-y: auto; padding: 4px;">
                        ${RUBANS_COULEURS.map(c => `
                            <div class="color-option" data-name="${c.name}" style="cursor: pointer; padding: 16px; border-radius: 16px; border: 1px solid #f3f4f6; display: flex; flex-direction: column; align-items: center; gap: 12px; transition: all 0.2s; background: white; position: relative;">
                                <div style="width: 48px; height: 48px; border-radius: 50%; background: ${c.hex}; border: 1px solid #eee; flex-shrink: 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"></div>
                                <div style="font-size: 14px; font-weight: 600; text-align: center; color: var(--text-main);">${c.name}</div>
                                <div class="check-mark" style="position: absolute; top: 8px; right: 8px; background: #10b981; color: white; width: 20px; height: 20px; border-radius: 50%; display: none; align-items: center; justify-content: center; font-size: 12px;">✓</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="modal-footer" style="padding: 16px 24px;">
                    <button class="btn btn-primary" id="done-picker" style="padding: 12px 32px; font-size: 15px;">Done Selecting</button>
                </div>
            </div>
        `;
        document.body.appendChild(pickerOverlay);

        const searchInput = pickerOverlay.querySelector('#color-search');
        searchInput.oninput = (e) => {
            const q = e.target.value.toLowerCase();
            pickerOverlay.querySelectorAll('.color-option').forEach(opt => {
                const name = opt.dataset.name.toLowerCase();
                opt.style.display = name.includes(q) ? 'flex' : 'none';
            });
        };
    }
    
    pickerOverlay.classList.add('active');
    
    const updateUI = () => {
        pickerOverlay.querySelectorAll('.color-option').forEach(opt => {
            const name = opt.dataset.name;
            const isSelected = initialSelectedNames.includes(name);
            opt.style.background = isSelected ? '#f0fdf4' : 'white';
            opt.style.borderColor = isSelected ? '#10b981' : '#f3f4f6';
            opt.querySelector('.check-mark').style.display = isSelected ? 'flex' : 'none';
        });
    };
    updateUI();
    
    const close = () => pickerOverlay.classList.remove('active');
    pickerOverlay.querySelector('#close-picker').onclick = close;
    pickerOverlay.querySelector('#done-picker').onclick = close;
    pickerOverlay.onclick = (e) => { if(e.target === pickerOverlay) close(); };
    
    pickerOverlay.querySelectorAll('.color-option').forEach(opt => {
        opt.onclick = () => {
            const name = opt.dataset.name;
            const color = RUBANS_COULEURS.find(c => c.name === name);
            const index = initialSelectedNames.indexOf(name);
            
            if (index === -1) {
                initialSelectedNames.push(name);
                onSelect(color, true);
            } else {
                initialSelectedNames.splice(index, 1);
                onSelect(color, false);
            }
            updateUI();
        };
    });
}

function openModal(title, body, footer, maxWidth = '500px') {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = body;
    document.getElementById('modal-footer').innerHTML = footer;
    document.getElementById('modal-footer').style.display = footer ? 'block' : 'none';
    document.querySelector('#modal-overlay .modal').style.maxWidth = maxWidth;
    document.getElementById('modal-overlay').classList.add('active');
    window.tempImage = null;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
}

// Global scope delete helper
window.deleteOrder = async (id) => {
    if (confirm('Are you sure you want to delete this order?')) {
        const result = await callSheets({ action: 'deleteOrder', id: id });
        if (result && result.success) {
            orders = orders.filter(o => o.id !== id);
            renderView();
            closeModal();
        } else {
            alert("Error deleting from Sheets.");
        }
    }
}

// --- KANBAN DRAG & DROP ---
function setupKanbanListeners() {
    const cards = document.querySelectorAll('.kanban-card');
    const cols = document.querySelectorAll('.kanban-column');
    let draggedId = null;

    cards.forEach(card => {
        card.addEventListener('dragstart', () => {
            draggedId = card.dataset.id;
            card.classList.add('dragging');
        });
        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
            draggedId = null;
        });
    });

    cols.forEach(col => {
        col.addEventListener('dragover', (e) => {
            e.preventDefault();
            col.classList.add('drag-over');
        });
        col.addEventListener('dragleave', () => col.classList.remove('drag-over'));
        col.addEventListener('drop', async () => {
            col.classList.remove('drag-over');
            const newStatus = col.dataset.status;
            const type = col.dataset.type; // 'task' or undefined (order)

            if (type === 'task') {
                tasks = tasks.map(t => t.id === draggedId ? { ...t, status: newStatus } : t);
                renderView();
            } else {
                const order = orders.find(o => o.id === draggedId);
                if (order && order.status !== newStatus) {
                    const updatedOrder = { ...order, status: newStatus };
                    const result = await callSheets({ action: 'updateOrder', order: updatedOrder });
                    if (result && result.success) {
                        orders = orders.map(o => o.id === draggedId ? updatedOrder : o);
                        renderView();
                    } else {
                        alert("Failed to sync status change to Sheets.");
                    }
                }
            }
        });
    });
}

window.downloadOrderImage = function(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

function showOrderDetailsModal(order) {
    const sc = STATUS_COLORS[order.status] || { bg: "#F3F4F6", text: "#374151", dot: "#9CA3AF" };
    
    const items = order.items && order.items.length > 0 ? order.items : [{
        article: order.article,
        colorsData: order.colorsData || [],
        sachetData: order.sachetData || {}
    }];

    let itemsHtml = items.map((item, idx) => {
        const isRibbon = item.article === 'Ruban';
        let detailsHtml = '';
        if (isRibbon) {
            if (item.colorsData && item.colorsData.length > 0) {
                detailsHtml = item.colorsData.map(c => `
                    <div class="so-detail-row">
                        <div class="so-detail-label" style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 16px; height: 16px; border-radius: 50%; background: ${c.hex || '#ccc'}; border: 1px solid #cbd5e1;"></div>
                            ${c.name}
                        </div>
                        <div class="so-detail-value">
                            Qty: ${c.qty} <span style="color: #cbd5e1; margin: 0 6px; font-weight: 400;">|</span> <span style="font-weight: 500; color: #64748b; font-size: 0.8rem;">PRINT:</span> <span style="color: #4338ca;">${c.printColor || 'Standard'}</span>
                        </div>
                    </div>
                `).join('');
            } else {
                detailsHtml = `<div class="so-detail-row"><span class="so-detail-label">Colors</span><span class="so-detail-value">${order.colors || '-'}</span></div>`;
            }
        } else {
            const sd = item.sachetData || {};
            detailsHtml = `
                <div class="so-detail-row"><span class="so-detail-label">Color</span><span class="so-detail-value">${sd.color || '-'}</span></div>
                <div class="so-detail-row"><span class="so-detail-label">Size</span><span class="so-detail-value">${sd.size || '-'}</span></div>
                <div class="so-detail-row"><span class="so-detail-label">Quantity</span><span class="so-detail-value">${sd.qty || order.quantities || '-'} pcs</span></div>
                <div class="so-detail-row"><span class="so-detail-label">Print</span><span class="so-detail-value" style="color: #4338ca;">${sd.print || '-'}</span></div>
            `;
        }

        return `
            <div class="so-item-card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h3 style="margin: 0; color: #0f172a; font-size: 1.1rem;">${item.article || 'Unknown Article'}</h3>
                    <span style="font-size: 11px; padding: 4px 8px; background: #e2e8f0; border-radius: 6px; font-weight: 700; color: #475569;">ITEM #${idx + 1}</span>
                </div>
                ${detailsHtml}
            </div>
        `;
    }).join('');

    let designHtml = '';
    if (order.design) {
        const safeClientName = (order.client || 'Client').replace(/\s+/g, '_');
        const safeOrderId = order.id || 'Order';
        designHtml = `
            <div class="so-design-img-container">
                <img src="${order.design}" class="so-design-img" alt="Order Design">
                <button class="so-btn-download" onclick="window.downloadOrderImage('${order.design}', 'Design_${safeClientName}_${safeOrderId}.png')">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download Design
                </button>
            </div>
        `;
    } else {
        designHtml = `
            <div class="so-design-img-container" style="padding: 4rem 2rem; display: flex; flex-direction: column; align-items: center;">
                <div style="width: 64px; height: 64px; background: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                    <svg width="32" height="32" fill="none" stroke="#94a3b8" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <div style="color: #64748b; font-weight: 600; font-size: 1.1rem;">No Design Attached</div>
                <div style="color: #94a3b8; font-size: 0.9rem; margin-top: 0.25rem;">This order doesn't have an image file.</div>
            </div>
        `;
    }

    const safePhone = String(order.phone).startsWith('0') ? String(order.phone).slice(1) : order.phone;
    const phoneHtml = order.phone ? `<a href="https://wa.me/212${safePhone}" target="_blank" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 6px;">${order.phone} <svg width="14" height="14" viewBox="0 0 24 24" fill="#10b981"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>` : '-';

    const body = `
        <style>
            .so-order-header { padding: 2rem; background: linear-gradient(135deg, #1e1b4b, #4338ca); color: white; border-radius: 12px; margin-bottom: 1.5rem; text-align: left; }
            .so-order-header h1 { margin: 0 0 0.5rem 0; font-size: 1.75rem; font-weight: 800; letter-spacing: -0.02em; }
            .so-badge { display: inline-flex; align-items: center; padding: 6px 12px; border-radius: 99px; font-size: 12px; font-weight: 700; gap: 6px; }
            .so-order-content { display: grid; grid-template-columns: 1.5fr 1fr; gap: 2rem; text-align: left; }
            .so-section-title { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; font-weight: 800; margin-bottom: 1rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem; }
            .so-item-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem; }
            .so-detail-row { display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px dashed #e2e8f0; }
            .so-detail-row:last-child { border-bottom: none; padding-bottom: 0; }
            .so-detail-label { color: #64748b; font-weight: 500; font-size: 0.9rem; }
            .so-detail-value { color: #0f172a; font-weight: 700; font-size: 0.9rem; }
            .so-design-img-container { background: #f1f5f9; border-radius: 12px; padding: 1rem; text-align: center; border: 1px solid #e2e8f0; }
            .so-design-img { max-width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); margin-bottom: 1rem; display: block; }
            .so-btn-download { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; background: #4338ca; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; text-decoration: none; transition: all 0.2s; width: 100%; border: none; cursor: pointer; font-family: inherit; font-size: 0.95rem; }
            .so-btn-download:hover { background: #3730a3; transform: translateY(-1px); }
            .so-client-info { display: flex; flex-direction: column; gap: 1rem; }
            .so-client-info-item { display: flex; align-items: flex-start; gap: 1rem; }
            .so-icon-box { width: 36px; height: 36px; border-radius: 10px; background: #e0e7ff; color: #4338ca; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
            @media (max-width: 768px) { .so-order-content { grid-template-columns: 1fr; } }
        </style>
        
        <div class="so-order-header">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    <div style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.8; margin-bottom: 0.5rem; font-weight: 700;">Order ID: ${order.id || 'N/A'}</div>
                    <h1>${order.client || 'Unknown Client'}</h1>
                    <div style="opacity: 0.9; font-size: 0.95rem; display: flex; align-items: center; gap: 8px;">
                        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        Created on ${order.date ? new Date(order.date).toLocaleDateString() : new Date().toLocaleDateString()}
                    </div>
                </div>
                <div class="so-badge" style="background: ${sc.bg}; color: ${sc.text}; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: ${sc.dot};"></span>
                    ${order.status || 'To Do'}
                </div>
            </div>
        </div>
        
        <div class="so-order-content">
            <div>
                <div class="so-section-title">Order Items</div>
                ${itemsHtml}
                
                <div class="so-section-title" style="margin-top: 2rem;">Client Details</div>
                <div class="so-client-info">
                    <div class="so-client-info-item">
                        <div class="so-icon-box">
                            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div>
                            <div style="font-size: 0.8rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Phone Number</div>
                            <div style="font-weight: 700; color: #0f172a; margin-top: 2px;">
                                ${phoneHtml}
                            </div>
                        </div>
                    </div>
                    <div class="so-client-info-item">
                        <div class="so-icon-box">
                            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div>
                            <div style="font-size: 0.8rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Delivery Address</div>
                            <div style="font-weight: 700; color: #0f172a; margin-top: 2px;">
                                ${order.address || 'No address provided'}
                                ${order.ville ? `<div style="color: #64748b; font-weight: 500; font-size: 0.85rem; margin-top: 2px;">${order.ville}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div class="so-section-title">Design Preview</div>
                ${designHtml}
            </div>
        </div>
    `;

    openModal('Order Details', body, '', '900px');
}

// Initialize App
init();

