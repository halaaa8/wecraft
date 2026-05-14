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
    table_view: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
    kanban_view: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>`,
    phone: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18.85a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.33a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.75-1.29a2 2 0 0 1 2.11-.45c.73.35 1.52.6 2.33.72A2 2 0 0 1 22 16.92z"></path></svg>`,
    mail: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    inventory: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16V8z"/><path d="M3.27 6.96L12 12.01l8.73-5.05"/><path d="M12 22.08V12"/></svg>`,
    sun: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>`,
    moon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3c0 .4.04.79.1 1.17A7 7 0 0021 12.79z"></path></svg>`,
};

// --- CONFIG ---
const RECAP_EMAIL = "madrari.oussama.officiel@gmail.com";
const EMAILJS_PUBLIC_KEY = "s1vwibeWEKQ7ZsE2z"; // Replace with your Public Key
const EMAILJS_SERVICE_ID = "service_9eabz8i"; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "template_1m9z65r"; // Replace with your Template ID

// Initialize EmailJS
(function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: EMAILJS_PUBLIC_KEY,
        });
    }
})();

const STATUSES = ["To Do", "Doing", "Done"];
// Consolidated status colors compliant with Red Rarity Rule (≤10% red per screen)
const STATUS_COLORS = {
    "To Do": { bg: "#ffe5e5", text: "#8c0909", dot: "#f54d4d" },
    "Doing": { bg: "#ffd6d6", text: "#8c0909", dot: "#d90f0f" },
    "Done": { bg: "#fcb3b3", text: "#660606", dot: "#b30c0c" },
    "New": { bg: "#ffe5e5", text: "#8c0909", dot: "#f54d4d" },
    "Design Ready": { bg: "#ffd6d6", text: "#8c0909", dot: "#d90f0f" },
    "In Production": { bg: "#ffd6d6", text: "#8c0909", dot: "#d90f0f" },
    "Ready": { bg: "#fcb3b3", text: "#660606", dot: "#b30c0c" },
    "Delivered": { bg: "#fcb3b3", text: "#660606", dot: "#b30c0c" },
    "Cancelled": { bg: "#f5f5f5", text: "#666666", dot: "#999999" }
};
const TASK_STATUSES = ["To Do", "Doing", "Done"];
const TASK_COLORS = {
    "To Do": { bg: "#ffe5e5", text: "#8c0909", dot: "#f54d4d" },
    "Doing": { bg: "#ffd6d6", text: "#8c0909", dot: "#d90f0f" },
    "Done": { bg: "#fcb3b3", text: "#660606", dot: "#b30c0c" }
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
let clients = JSON.parse(localStorage.getItem('wecraft-clients')) || [];
let stocks = JSON.parse(localStorage.getItem('wecraft-stocks')) || {
    "Ruban": 0,
    "Sachet sylable": 0,
    "Sachet non tissé": 0
};

function saveStocks() {
    localStorage.setItem('wecraft-stocks', JSON.stringify(stocks));
}

function saveClients() {
    localStorage.setItem('wecraft-clients', JSON.stringify(clients));
}

// Maps statuses to their badge class and icon label
const STATUS_BADGE_CONFIG = {
    "To Do": { class: "todo", label: "To Do", icon: "◯" },
    "Doing": { class: "doing", label: "In Progress", icon: "⬤" },
    "Done": { class: "done", label: "Done", icon: "✓" },
    "New": { class: "todo", label: "New", icon: "◯" },
    "Design Ready": { class: "doing", label: "Design Ready", icon: "⬤" },
    "In Production": { class: "doing", label: "In Production", icon: "⬤" },
    "Ready": { class: "done", label: "Ready", icon: "✓" },
    "Delivered": { class: "done", label: "Delivered", icon: "✓" },
    "Cancelled": { class: "cancelled", label: "Cancelled", icon: "✕" }
};

function getStatusBadgeHTML(status) {
    const config = STATUS_BADGE_CONFIG[status] || { class: "todo", label: status, icon: "◯" };
    return `<span class="status-badge ${config.class}" title="${config.label}"><span class="status-badge-dot"></span>${status}</span>`;
}

// --- LOADING & EMPTY STATES ---
function getLoadingCardHTML() {
    return `
        <div class="skeleton-card">
            <div class="skeleton skeleton-line full" style="height: 20px; margin-bottom: 16px;"></div>
            <div class="skeleton skeleton-line full" style="height: 12px; margin-bottom: 8px;"></div>
            <div class="skeleton skeleton-line half" style="height: 12px;"></div>
        </div>
    `;
}

function getLoadingTableHTML() {
    let html = `<div class="table-wrapper"><table><thead><tr><th colspan="8" style="padding: 20px; text-align: center;">Loading...</th></tr></thead><tbody>`;
    for (let i = 0; i < 5; i++) {
        html += `<tr><td colspan="8"><div style="display: flex; gap: 12px; padding: 12px;"><div class="skeleton" style="width: 40px; height: 20px;"></div><div class="skeleton" style="flex: 1; height: 20px;"></div></div></td></tr>`;
    }
    html += `</tbody></table></div>`;
    return html;
}

function getEmptyStateHTML(title, message, icon = '📭') {
    return `
        <div class="empty-state">
            <div class="empty-state-icon">${icon}</div>
            <div class="empty-state-title">${title}</div>
            <div class="empty-state-desc">${message}</div>
        </div>
    `;
}

// --- STATE ---
let currentView = 'dashboard';
let isSidebarCollapsed = false;
let ordersFilter = { search: '', status: '', city: '' };
let clientsFilter = { search: '' };
let ordersViewMode = 'table'; // 'table' | 'kanban'
let selectedOrderIds = [];
const THEME_STORAGE_KEY = 'wecraft-theme';

function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateThemeToggleIcon(theme);
}

function updateThemeToggleIcon(theme) {
    const icon = document.getElementById('icon-theme');
    const btn = document.getElementById('theme-toggle');
    if (!icon || !btn) return;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    icon.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
    btn.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
}

// --- UTILS ---
const uid = () => Math.random().toString(36).slice(2, 9);
const formatCurrency = (val) => Number(val).toLocaleString() + ' MAD';

const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    } catch (e) {
        return dateString;
    }
};

const formatPhone = (phone) => {
    if (!phone) return '';
    let p = String(phone).trim();
    // If it's 9 digits starting with 5, 6, or 7, add the missing leading zero
    if (p.length === 9 && /^[567]/.test(p)) return '0' + p;
    return p;
};

const getWhatsAppLink = (phone) => {
    let p = formatPhone(phone);
    if (p.startsWith('0')) p = p.slice(1);
    return `https://wa.me/212${p}`;
};

const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

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

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let icon = '';
    if (type === 'success') icon = '✓';
    else if (type === 'error') icon = '✕';
    else icon = 'ℹ';

    toast.innerHTML = `
        <div style="width: 24px; height: 24px; border-radius: 50%; background: ${type === 'success' ? '#ecfdf5' : type === 'error' ? '#fee2e2' : '#eff6ff'}; color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'}; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">${icon}</div>
        <div style="font-size: 14px; font-weight: 500;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 5000);
}

function showConfirm({ title, text, confirmText = 'Delete', cancelText = 'Cancel', onConfirm }) {
    const body = `
        <div class="confirm-modal-body">
            <div class="confirm-icon-wrap">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <h3 class="confirm-title">${title}</h3>
            <p class="confirm-text">${text}</p>
        </div>
    `;
    const footer = `
        <div style="display: flex; gap: 12px; width: 100%; padding: 0 10px;">
            <button class="btn btn-secondary" onclick="closeModal()" style="flex: 1; justify-content: center; height: 48px;">${cancelText}</button>
            <button class="btn btn-danger" id="confirm-action-btn" style="flex: 1; justify-content: center; height: 48px; background: var(--primary); color: white;">${confirmText}</button>
        </div>
    `;

    openModal('', body, footer, '420px');

    document.getElementById('confirm-action-btn').onclick = () => {
        onConfirm();
    };
}

// --- CORE LOGIC ---
async function init() {
    applyTheme(getInitialTheme());

    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: EMAILJS_PUBLIC_KEY,
        });
        console.log("EmailJS Initialized");
    } else {
        console.error("EmailJS SDK not found!");
    }

    // Inject Icons
    document.querySelectorAll('[id^="icon-"], [id^="tab-icon-"]').forEach(el => {
        if (el.id === 'icon-theme') return;
        const name = el.id.replace('icon-', '').replace('tab-icon-', '');
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
    // Navigation (Sidebar & Tab Bar)
    document.querySelectorAll('.nav-link[data-view], .tab-item[data-view]').forEach(link => {
        link.addEventListener('click', (e) => {
            currentView = link.dataset.view;
            selectedOrderIds = []; // Clear selections on view switch
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

    // Close Sidebar (Mobile)
    document.getElementById('close-sidebar-mobile')?.addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('mobile-open');
        document.getElementById('sidebar-overlay')?.classList.remove('active');
    });

    // Theme Toggle
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        renderView();
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

    // Update active states in navigation
    document.querySelectorAll('.nav-link[data-view], .tab-item[data-view]').forEach(el => {
        if (el.dataset.view === currentView) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    content.innerHTML = '';
    content.className = 'content-area fade-in';

    switch (currentView) {
        case 'dashboard':
            renderDashboard(content);
            break;
        case 'orders':
            renderOrders(content);
            break;
        case 'inventory':
        case 'tasks':
            renderInventory(content);
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
        { label: 'Orders Today', value: orders.filter(o => o.date === today).length, icon: 'bag', delta: '+12%', dir: 'up' },
        { label: 'Active To Do', value: orders.filter(o => o.status === 'To Do').length, icon: 'orders', delta: '-3%', dir: 'down' },
        { label: 'In Production', value: orders.filter(o => o.status === 'Doing').length, icon: 'trend', delta: '+8%', dir: 'up' },
        { label: 'Revenue Growth', value: '24%', icon: 'trend', delta: '+2%', dir: 'up' },
    ];

    let html = `<div class="kpi-grid">`;
    stats.forEach(s => {
        html += `
            <div class="kpi-tile">
                <div class="kpi-header">
                    <div class="kpi-icon">${ICONS[s.icon]}</div>
                    <div class="kpi-delta ${s.dir}">${s.delta}</div>
                </div>
                <div class="kpi-value">${s.value}</div>
                <div class="kpi-label">${s.label}</div>
            </div>
        `;
    });
    html += `</div>`;

    html += `
        <div class="dashboard-grid">
            <div class="card" style="padding: 24px;">
                <h3 class="headline mb-6" style="display: flex; align-items: center; gap: 10px;">
                    <span style="color: var(--primary);">${ICONS.trend}</span>
                    Performance Index
                </h3>
                <div class="progress-container">
                    ${STATUSES.map(s => {
                        const count = orders.filter(o => o.status === s).length;
                        const pct = orders.length ? Math.round((count / orders.length) * 100) : 0;
                        return `
                            <div class="progress-bar-group" style="margin-bottom: 20px;">
                                <div class="progress-info" style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                                    <span class="label-caps" style="color: var(--text-muted); font-size: 9px;">${s}</span>
                                    <span class="title" style="color: var(--text-main); font-size: 13px;">${count} <small style="opacity: 0.5; font-weight: 500;">(${pct}%)</small></span>
                                </div>
                                <div class="progress-track" style="background: var(--bg-main); height: 6px; border-radius: 99px;">
                                    <div class="progress-fill" style="width: ${pct}%; background: ${STATUS_COLORS[s]?.dot || 'var(--primary)'}; height: 100%; border-radius: 99px;"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <div class="card" style="padding: 0; overflow: hidden;">
                <div style="padding: 24px 24px 12px; display: flex; justify-content: space-between; align-items: center;">
                    <h3 class="headline" style="font-size: 16px;">Command List</h3>
                    <button class="btn btn-icon" style="background: var(--bg-main); border-radius: 50%;" title="View all orders" onclick="document.querySelector('[data-view=orders]').click()">
                        ${ICONS.eye}
                    </button>
                </div>
                <div class="command-list">
                    ${orders.filter(o => o.status === 'To Do').slice(0, 5).map(o => `
                        <div class="command-item">
                            <div style="width: 40px; height: 40px; border-radius: 12px; background: var(--bg-main); display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid var(--border);">
                                <span style="font-size: 10px; font-weight: 800; color: var(--primary);">#${o.id.slice(-2).toUpperCase()}</span>
                            </div>
                            <div class="command-info">
                                <div class="command-title">${o.client}</div>
                                <div class="command-meta">${o.article} • ${o.ville}</div>
                            </div>
                            <div class="flex items-center gap-3">
                                <a href="${getWhatsAppLink(o.phone)}" target="_blank" class="btn-icon" style="padding: 4px 12px; color: #10b981; background: transparent;" title="Chat on WhatsApp">
                                    ${ICONS.whatsapp}
                                </a>
                                <div class="command-actions">
                                    <button class="btn-icon view-order" data-id="${o.id}" style="padding: 4px;">${ICONS.eye}</button>
                                </div>
                            </div>
                        </div>
                    `).join('') || '<p style="padding: 24px; text-align: center; color: var(--text-light);">System idle. No "To Do" orders.</p>'}
                </div>
                <div style="padding: 16px; background: var(--bg-main); border-top: 1px solid var(--border); text-align: center;">
                    <button class="btn" style="font-size: 12px; color: var(--text-muted); background: none;" onclick="document.querySelector('[data-view=orders]').click()">See Entire Ledger →</button>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;

    // Re-attach listeners
    container.querySelectorAll('.view-order').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const order = orders.find(o => o.id === id);
            if (order) showOrderDetailsModal(order);
        });
    });
}

function renderOrders(container) {
    const filtered = orders.filter(o => {
        const q = ordersFilter.search.toLowerCase();
        return (!q || o.client.toLowerCase().includes(q) || (o.article && o.article.toLowerCase().includes(q)) || (o.ville && o.ville.toLowerCase().includes(q))) &&
            (!ordersFilter.status || o.status === ordersFilter.status);
    });

    let html = `
        <div class="flex justify-between items-center" style="margin-bottom: var(--space-lg);">
            <div class="flex items-center gap-4">
                <h1 class="headline" style="font-size: 22px;">Orders</h1>
                <span class="badge hide-mobile" style="background: var(--surface-muted); color: var(--text-muted);">${filtered.length} Total</span>
            </div>
            <div class="flex gap-4">
                <div class="segmented-control">
                    <button class="segmented-btn ${ordersViewMode === 'table' ? 'active' : ''}" id="view-table" title="Table View">
                        <span class="icon">${ICONS.table_view}</span>
                        <span>Table</span>
                    </button>
                    <button class="segmented-btn ${ordersViewMode === 'kanban' ? 'active' : ''}" id="view-kanban" title="Kanban View">
                        <span class="icon">${ICONS.kanban_view}</span>
                        <span>Kanban</span>
                    </button>
                </div>
                <button class="btn btn-primary" id="add-order-btn" style="padding: 10px 20px;">
                    <span class="icon">${ICONS.plus}</span>
                    <span>New Order</span>
                </button>
            </div>
        </div>

        <div class="flex gap-3" style="margin-bottom: var(--space-lg);">
            <div style="position: relative; flex: 1;">
                <span style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text-light); pointer-events: none;">${ICONS.search}</span>
                <input type="text" id="order-search" placeholder="Search orders..." value="${ordersFilter.search}" style="padding-left: 40px; height: 42px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md);">
            </div>
            <select id="order-status-filter" style="width: auto; min-width: 160px; height: 42px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md); font-weight: 700;">
                <option value="">All Statuses</option>
                ${STATUSES.map(s => `<option value="${s}" ${ordersFilter.status === s ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
        </div>
    `;

    if (ordersViewMode === 'table') {
        html += `
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th style="padding: 14px 20px; width: 40px;">
                                <input type="checkbox" id="select-all-orders" ${selectedOrderIds.length > 0 && selectedOrderIds.length === filtered.length ? 'checked' : ''} style="cursor: pointer; width: 16px; height: 16px;">
                            </th>
                            <th class="label-caps">Client</th>
                            <th class="label-caps hide-mobile">Article</th>
                            <th class="label-caps hide-mobile">Details</th>
                            <th class="label-caps hide-mobile">Ville</th>
                            <th class="label-caps" style="text-align: center;">Contact</th>
                            <th class="label-caps" style="text-align: center;">Status</th>
                            <th class="label-caps" style="text-align: center;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filtered.map(o => `
                            <tr style="background: ${selectedOrderIds.includes(o.id) ? 'var(--primary-tint)' : 'transparent'}">
                                <td style="padding: 18px 20px; text-align: center;">
                                    <input type="checkbox" class="order-checkbox" data-id="${o.id}" ${selectedOrderIds.includes(o.id) ? 'checked' : ''} style="cursor: pointer; width: 16px; height: 16px;">
                                </td>
                                <td class="title">
                                    ${o.client}
                                    <div class="show-mobile label-caps" style="color: var(--text-light); margin-top: 4px; font-size: 10px;">${o.article} • ${o.ville}</div>
                                </td>
                                <td class="body hide-mobile">${o.article}</td>
                                <td class="hide-mobile">
                                    <div class="body" style="font-weight: 600;">${o.colors}</div>
                                    <div class="label-caps" style="color: var(--text-light); font-size: 10px; margin-top: 2px;">${o.quantities}</div>
                                </td>
                                <td class="body hide-mobile" style="font-weight: 700; color: var(--text-muted);">${o.ville}</td>
                                <td>
                                    <div class="flex items-center justify-center gap-4">
                                        <a href="${getWhatsAppLink(o.phone)}" target="_blank" style="color: #10b981; display: flex;">${ICONS.whatsapp}</a>
                                        <a href="tel:${formatPhone(o.phone)}" class="hide-mobile" style="color: var(--text-muted); display: flex;">${ICONS.phone}</a>
                                    </div>
                                </td>
                                <td style="text-align: center;">${renderStatusDropdown(o)}</td>
                                <td>
                                    <div class="flex items-center justify-center gap-2">
                                        <button class="btn-icon view-order" data-id="${o.id}" title="View Details">${ICONS.eye}</button>
                                        <button class="btn-icon edit-order hide-mobile" data-id="${o.id}" title="Edit Order">${ICONS.edit}</button>
                                        <button class="btn-icon delete-order hide-mobile" data-id="${o.id}" title="Delete Order" style="color: var(--primary);">${ICONS.trash}</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                        ${filtered.length === 0 ? '<tr><td colspan="8" style="text-align: center; padding: 40px; color: var(--text-light)">No orders found</td></tr>' : ''}
                    </tbody>
                </table>
            </div>
        `;
    } else {
        html += `
            <div class="kanban-board" style="display: flex; gap: var(--space-md); overflow-x: auto; padding-bottom: var(--space-md);">
                ${STATUSES.map(s => {
            const colOrders = filtered.filter(o => o.status === s);
            return `
                        <div class="kanban-column" data-status="${s}" style="min-width: 300px; flex: 1; background: var(--surface-muted); border-radius: var(--radius-lg); padding: var(--space-sm);">
                            <div class="flex justify-between items-center mb-4" style="padding: 0 var(--space-xs);">
                                ${renderBadge(s)}
                                <span class="label-caps" style="color: var(--text-muted)">${colOrders.length}</span>
                            </div>
                            <div class="kanban-cards-area" style="min-height: 200px; display: flex; flex-direction: column; gap: var(--space-sm);">
                                ${colOrders.map(o => `
                                    <div class="card kanban-card" draggable="true" data-id="${o.id}" style="padding: var(--space-md); margin-bottom: 0; cursor: grab; transition: var(--transition);">
                                        ${o.design ? `<img src="${o.design}" style="width: 100%; height: 120px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: var(--space-sm); border: 1px solid var(--border);">` : ''}
                                        <h4 class="title" style="margin-bottom: var(--space-xs);">${o.client}</h4>
                                        <p class="body" style="color: var(--text-muted); font-size: 13px; margin-bottom: var(--space-sm);">${o.article}</p>
                                        <div class="flex justify-between items-center">
                                            <span class="label-caps" style="color: var(--text-main)">${o.ville}</span>
                                            <div class="flex gap-2">
                                                <button class="btn-icon view-order" data-id="${o.id}" style="padding: 4px;">${ICONS.eye}</button>
                                                <button class="btn-icon delete-order" data-id="${o.id}" style="padding: 4px; color: var(--primary);">${ICONS.trash}</button>
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

    // Bulk Action Listeners
    const selectAll = document.getElementById('select-all-orders');
    if (selectAll) {
        selectAll.addEventListener('change', (e) => {
            if (e.target.checked) selectedOrderIds = filtered.map(o => o.id);
            else selectedOrderIds = [];
            renderView();
        });
    }

    container.querySelectorAll('.order-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const id = cb.dataset.id;
            if (e.target.checked) selectedOrderIds.push(id);
            else selectedOrderIds = selectedOrderIds.filter(sid => sid !== id);
            renderView();
        });
    });

    document.getElementById('clear-selection')?.addEventListener('click', () => {
        selectedOrderIds = [];
        renderView();
    });

    document.querySelectorAll('.bulk-status-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const newStatus = btn.dataset.status;
            showLoading(true);
            try {
                for (const id of selectedOrderIds) {
                    const order = orders.find(o => o.id === id);
                    if (order) {
                        const updatedOrder = { ...order, status: newStatus };
                        await callSheets({ action: 'updateOrder', order: updatedOrder });
                        orders = orders.map(o => o.id === id ? updatedOrder : o);
                    }
                }
                showToast(`Updated ${selectedOrderIds.length} orders to ${newStatus}`, 'success');
                selectedOrderIds = [];
                renderView();
            } catch (e) {
                showToast('Error updating multiple orders', 'error');
            } finally {
                showLoading(false);
            }
        });
    });

    document.getElementById('bulk-delete')?.addEventListener('click', () => {
        showConfirm({
            title: `Delete ${selectedOrderIds.length} Orders`,
            text: `Are you sure you want to delete ${selectedOrderIds.length} selected orders? This action cannot be undone.`,
            confirmText: 'Delete All Selected',
            onConfirm: async () => {
                showLoading(true);
                try {
                    for (const id of selectedOrderIds) {
                        await callSheets({ action: 'deleteOrder', id: id });
                        orders = orders.filter(o => o.id !== id);
                    }
                    showToast(`Deleted ${selectedOrderIds.length} orders`, 'success');
                    selectedOrderIds = [];
                    renderView();
                } catch (e) {
                    showToast('Error deleting multiple orders', 'error');
                } finally {
                    showLoading(false);
                }
            }
        });
    });

    container.querySelectorAll('.edit-order').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const order = orders.find(o => o.id === id);
            showOrderModal(order);
        });
    });

    container.querySelectorAll('.view-order').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const order = orders.find(o => o.id === id);
            if (order) showOrderDetailsModal(order);
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

                orders = orders.map(o => o.id === id ? updatedOrder : o);
                renderView();

                const result = await callSheets({ action: 'updateOrder', order: updatedOrder });
                if (!result || !result.success) {
                    alert("Failed to update status in the database.");
                    orders = orders.map(o => o.id === id ? { ...order, status: originalStatus } : o);
                    renderView();
                }
            }
        });
    });

    if (ordersViewMode === 'kanban') setupKanbanListeners();
}

function renderInventory(container) {
    const activeOrders = orders.filter(o => ['To Do', 'Doing'].includes(o.status));

    // Aggregate inventory
    const inventory = {}; 

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
                        const match = String(c.qty).match(/\d+/);
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
                    const match = String(sd.qty || order.quantities).match(/\d+/);
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
        <div class="flex justify-between items-center" style="margin-bottom: var(--space-lg);">
            <div>
                <h2 class="display-stat" style="font-size: 24px; margin-bottom: var(--space-xs);">Inventory</h2>
                <p class="body" style="color: var(--text-muted)">Material requirements for active orders</p>
            </div>
            <div class="badge" style="background: var(--primary-soft); color: var(--primary); padding: 8px 16px;">
                ${activeOrders.length} Active Orders
            </div>
        </div>

        <div class="card" style="margin-bottom: var(--space-xl);">
            <h3 class="headline mb-4">Quick Stock Update</h3>
            <div class="flex gap-3 items-center" style="background: var(--surface-muted); padding: var(--space-md); border-radius: var(--radius-md); border: 1px solid var(--border);">
                <div style="flex: 1; display: flex; align-items: center; gap: var(--space-sm);">
                    <span class="label-caps" style="color: var(--text-muted);">Stock:</span>
                    <input type="number" id="stock-qty-input" placeholder="0" style="width: 80px; text-align: center; font-weight: 800;">
                    <span class="label-caps" style="color: var(--text-muted);">of</span>
                    <select id="stock-product-select" style="flex: 1; font-weight: 700;">
                        <option value="Ruban">Ruban</option>
                        <option value="Sachet sylable">Sachet sylable</option>
                        <option value="Sachet non tissé">Sachet non tissé</option>
                    </select>
                    <button class="btn btn-primary" id="update-stock-btn">Update</button>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md); margin-top: var(--space-lg);">
                ${Object.entries(stocks).map(([prod, qty]) => `
                    <div style="background: var(--bg-main); padding: var(--space-md); border-radius: var(--radius-md); border: 1px solid var(--border); text-align: center;">
                        <div class="label-caps" style="color: var(--text-muted); margin-bottom: var(--space-xs);">${prod}</div>
                        <div class="title" style="font-size: 24px; font-weight: 800;">${qty.toLocaleString()}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-lg);">
    `;

    if (Object.keys(inventory).length === 0) {
        html += `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted); background: var(--surface); border-radius: var(--radius-lg); border: 1px solid var(--border);">No items in active orders.</div>`;
    } else {
        for (const [article, itemsObj] of Object.entries(inventory)) {
            const isRibbon = article === 'Ruban';
            const itemsList = Object.values(itemsObj).sort((a, b) => b.qty - a.qty);

            const listHtml = itemsList.map(it => {
                if (isRibbon) {
                    return `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-sm) 0; border-bottom: 1px solid var(--border);">
                            <div style="display: flex; align-items: center; gap: var(--space-sm);">
                                <div style="width: 24px; height: 24px; border-radius: 50%; background: ${it.hex}; border: 1px solid var(--border);"></div>
                                <div class="body" style="font-weight: 700;">${it.name}</div>
                            </div>
                            <div class="title" style="background: var(--surface-muted); padding: 4px 10px; border-radius: 6px; border: 1px solid var(--border);">
                                ${it.qty}
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-sm) 0; border-bottom: 1px solid var(--border);">
                            <div>
                                <div class="body" style="font-weight: 700;">${it.color} | ${it.size}</div>
                                <div class="label-caps" style="color: var(--primary); margin-top: 2px;">Print: ${it.print}</div>
                            </div>
                            <div class="title" style="background: var(--surface-muted); padding: 4px 10px; border-radius: 6px; border: 1px solid var(--border);">
                                ${it.qty}
                            </div>
                        </div>
                    `;
                }
            }).join('');

            html += `
                <div class="card" style="margin-bottom: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-md);">
                        <h3 class="headline" style="color: var(--primary);">${article}</h3>
                        <span class="label-caps" style="color: var(--text-muted);">${itemsList.length} Types</span>
                    </div>
                    <div class="inventory-scroll" style="max-height: 400px; overflow-y: auto;">
                        ${listHtml}
                    </div>
                </div>
            `;
        }
    }

    html += `</div>`;
    container.innerHTML = html;

    // Stock Management Logic
    document.getElementById('update-stock-btn')?.addEventListener('click', () => {
        const qty = parseInt(document.getElementById('stock-qty-input').value, 10);
        const prod = document.getElementById('stock-product-select').value;
        if (isNaN(qty)) return;
        stocks[prod] = qty;
        saveStocks();
        renderView();
    });
}

function renderClients(container) {
    const getRowsHtml = (data) => data.map(c => {
        const oCount = orders.filter(o => o.client === c.name).length;
        const totalSpent = orders.filter(o => o.client === c.name).reduce((s, o) => s + o.price, 0);
        const initials = c.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
        return `
            <tr>
                <td>
                    <div class="flex gap-3 items-center">
                        <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--primary-soft); color: var(--primary); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; flex-shrink: 0;">
                            ${initials}
                        </div>
                        <div>
                            <div class="title" style="font-size: 14px;">${c.name}</div>
                            <div class="show-mobile label-caps" style="color: var(--text-light); margin-top: 4px; font-size: 10px;">${c.city}</div>
                        </div>
                    </div>
                </td>
                <td class="body hide-mobile" style="font-weight: 600; color: var(--text-muted);">${c.city}</td>
                <td>
                    <div class="flex items-center justify-center gap-4">
                        <a href="${getWhatsAppLink(c.phone)}" target="_blank" style="color: #10b981; display: flex;">${ICONS.whatsapp}</a>
                        <a href="tel:${formatPhone(c.phone)}" class="hide-mobile" style="color: var(--text-muted); display: flex;">${ICONS.phone}</a>
                    </div>
                </td>
                <td style="text-align: center;">
                    <span class="badge" style="background: var(--bg-main); color: var(--text-main); font-weight: 800; padding: 4px 10px; border-radius: 8px;">${oCount}</span>
                </td>
                <td style="text-align: center;">
                    <div class="title" style="font-size: 14px;">${totalSpent} MAD</div>
                </td>
                <td class="body hide-mobile" style="color: var(--text-muted); font-size: 12px; max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${c.notes || '-'}
                </td>
                <td>
                    <div class="flex justify-center gap-2">
                        <button class="btn btn-icon edit-client" data-id="${c.id}" title="Edit Client">${ICONS.edit}</button>
                        <button class="btn btn-icon delete-client" data-id="${c.id}" style="color: var(--primary);" title="Delete Client">${ICONS.trash}</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('') || `<tr><td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">${clientsFilter.search ? 'No clients match your search.' : 'No clients registered yet.'}</td></tr>`;

    const filtered = clients.filter(c => {
        const q = clientsFilter.search.toLowerCase();
        return !q || c.name.toLowerCase().includes(q) || c.phone.toLowerCase().includes(q) || c.city.toLowerCase().includes(q);
    });

    let html = `
        <div class="flex justify-between items-center" style="margin-bottom: var(--space-lg);">
            <div>
                <h2 class="display-stat" style="font-size: 24px; margin-bottom: var(--space-xs);">Clients</h2>
                <p class="body" style="color: var(--text-muted)" id="client-count-label">${filtered.length} registered clients</p>
            </div>
            <button class="btn btn-primary" id="add-client-btn">${ICONS.plus} New Client</button>
        </div>

        <div class="flex gap-3" style="margin-bottom: var(--space-lg);">
            <div style="position: relative; flex: 1;">
                <span style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text-light); pointer-events: none;">${ICONS.search}</span>
                <input type="text" id="client-search" placeholder="Search by name, phone or city..." value="${clientsFilter.search}" style="padding-left: 40px; height: 42px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md);">
            </div>
        </div>

        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th class="label-caps">Client</th>
                        <th class="label-caps">City</th>
                        <th class="label-caps" style="text-align: center;">Contact</th>
                        <th class="label-caps" style="text-align: center;">Orders</th>
                        <th class="label-caps" style="text-align: center;">Spent</th>
                        <th class="label-caps hide-mobile">Notes</th>
                        <th class="label-caps" style="text-align: center;">Actions</th>
                    </tr>
                </thead>
                <tbody id="clients-table-body">
                    ${getRowsHtml(filtered)}
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;

    const attachActions = () => {
        container.querySelectorAll('.edit-client').forEach(btn => {
            btn.onclick = () => {
                const client = clients.find(c => c.id === btn.dataset.id);
                showClientModal(client);
            };
        });
        container.querySelectorAll('.delete-client').forEach(btn => {
            btn.onclick = () => {
                showConfirm({
                    title: 'Delete Client',
                    text: 'Are you sure you want to remove this client? This will not delete their orders.',
                    onConfirm: () => {
                        clients = clients.filter(c => c.id !== btn.dataset.id);
                        saveClients();
                        renderView();
                        closeModal();
                    }
                });
            };
        });
    };

    attachActions();

    document.getElementById('client-search').addEventListener('input', (e) => {
        clientsFilter.search = e.target.value;
        const newFiltered = clients.filter(c => {
            const q = clientsFilter.search.toLowerCase();
            return !q || c.name.toLowerCase().includes(q) || c.phone.toLowerCase().includes(q) || c.city.toLowerCase().includes(q);
        });
        
        // Update only the body and count to preserve input focus
        document.getElementById('clients-table-body').innerHTML = getRowsHtml(newFiltered);
        document.getElementById('client-count-label').textContent = `${newFiltered.length} registered clients`;
        attachActions();
    });

    document.getElementById('add-client-btn').addEventListener('click', () => showClientModal());
}

function renderBadge(status) {
    return getStatusBadgeHTML(status);
}

function renderStatusDropdown(order) {
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    const base = STATUS_COLORS[order.status] || { bg: "#F3F4F6", text: "#374151", dot: "#9CA3AF" };
    const c = isDarkMode ? { bg: "rgba(217, 15, 15, 0.22)", text: "#ffdede", dot: "#f98080" } : base;

    return `
        <div style="position: relative; display: inline-block;">
            <select class="status-dropdown" data-id="${order.id}" style="
                appearance: none;
                background: ${c.bg};
                color: ${c.text};
                border: 1px solid transparent;
                padding: 6px 28px 6px 24px;
                border-radius: 99px;
                font-size: 12px;
                font-weight: 700;
                cursor: pointer;
                outline: none;
                font-family: inherit;
                transition: var(--transition);
            ">
                ${STATUSES.map(s => `<option value="${s}" ${s === order.status ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
            <span style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); width: 6px; height: 6px; border-radius: 50%; background: ${c.dot}; pointer-events: none;"></span>
            <svg style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none;" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${c.text}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
    `;
}

// --- MODALS ---

function showOrderModal(order = null) {
    const title = order ? 'Edit Order' : 'New Order';
    const headerActions = order ? `<button class="header-action-btn danger" onclick="deleteOrder('${order.id}')" title="Delete Order">${ICONS.trash}</button>` : '';

    const STEPS = [
        { label: 'Client' },
        { label: 'Products' },
        { label: 'Design' },
        { label: 'Delivery' },
    ];
    let currentStep = 0;

    const orderItems = order?.items || [
        { id: uid(), article: 'Ruban', colorsData: [], sachetData: {}, collapsed: false }
    ];

    // ---- Render helpers ----
    const renderItemsList = () => {
        const container = document.getElementById('items-container');
        if (!container) return;
        let html = orderItems.map((item, idx) => {
            const isRibbon = !['Sachet sylable', 'Sachet non tissé (avec poignet)', 'Sachet non tissé (sans poignet)'].includes(item.article);
            const isCollapsed = item.collapsed;

            return `
                <div class="product-card-wizard ${isCollapsed ? '' : 'expanded'}" id="item-card-${idx}">
                    <div class="product-card-header" onclick="expandItem(${idx})">
                        <div class="flex items-center gap-4">
                            <span class="product-idx-badge">#${idx+1}</span>
                            <div>
                                <div class="product-title">${item.article}</div>
                                ${isCollapsed ? `<div class="body" style="color: var(--text-muted); font-size: 12px; margin-top: 2px;">${isRibbon ? (item.colorsData?.length || 0) + ' colors' : (item.sachetData?.qty || 0) + ' units'}</div>` : ''}
                            </div>
                        </div>
                        <div style="color: var(--text-light);">${isCollapsed ? ICONS.edit : ''}</div>
                    </div>
                    
                    ${!isCollapsed ? `
                    <div style="margin-top: 24px; border-top: 1px solid var(--border); padding-top: 24px;">
                        <div class="wizard-field-group">
                            <label class="wizard-label">Category</label>
                            <select onchange="updateItemArticle(${idx}, this.value)" class="wizard-input wizard-select">
                                <option value="Ruban" ${item.article === 'Ruban' ? 'selected' : ''}>Ruban (Premium Ribbon)</option>
                                <option value="Sachet sylable" ${item.article === 'Sachet sylable' ? 'selected' : ''}>Sachet sylable</option>
                                <option value="Sachet non tissé (avec poignet)" ${item.article === 'Sachet non tissé (avec poignet)' ? 'selected' : ''}>Sachet non tissé (avec poignet)</option>
                                <option value="Sachet non tissé (sans poignet)" ${item.article === 'Sachet non tissé (sans poignet)' ? 'selected' : ''}>Sachet non tissé (sans poignet)</option>
                            </select>
                        </div>
                        
                        <div id="item-fields-${idx}">
                        ${isRibbon ? `
                            <div class="flex justify-between items-center mb-4">
                                <label class="wizard-label">Color Specifications</label>
                                <button type="button" class="btn btn-secondary" style="padding: 6px 14px; font-size: 12px;" onclick="openRibbonPicker(${idx})">${ICONS.plus} Add Color</button>
                            </div>
                            <div id="ribbon-list-${idx}"></div>
                        ` : `
                            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                                <div class="wizard-field-group"><label class="wizard-label">Material Color</label><input type="text" value="${item.sachetData?.color || ''}" placeholder="e.g. Matte White" onchange="updateSachetData(${idx},'color',this.value)" class="wizard-input"></div>
                                <div class="wizard-field-group"><label class="wizard-label">Print Finish</label><input type="text" value="${item.sachetData?.print || ''}" placeholder="e.g. Glossy Gold" onchange="updateSachetData(${idx},'print',this.value)" class="wizard-input"></div>
                                <div class="wizard-field-group"><label class="wizard-label">Total Qty</label><input type="number" value="${item.sachetData?.qty || ''}" placeholder="0" onchange="updateSachetData(${idx},'qty',this.value)" class="wizard-input" style="font-weight: 800;"></div>
                                <div class="wizard-field-group"><label class="wizard-label">Dimensions</label><input type="text" value="${item.sachetData?.size || ''}" placeholder="e.g. 30x40 cm" onchange="updateSachetData(${idx},'size',this.value)" class="wizard-input"></div>
                            </div>
                        `}
                        </div>
                        
                        <div class="flex justify-between items-center mt-8 pt-4" style="border-top: 1px solid var(--border);">
                            <button type="button" class="btn" style="color: var(--primary); background: none; padding: 0; font-size: 13px; font-weight: 700;" onclick="removeItem(${idx})">Delete Item</button>
                            <button type="button" class="btn btn-primary" style="padding: 10px 28px;" onclick="collapseItem(${idx})">Confirm Selection</button>
                        </div>
                    </div>
                    ` : ''}
                </div>
            `;
        }).join('');

        html += `
            <button type="button" class="btn btn-secondary w-full" style="justify-content: center; border: 2px dashed var(--border); background: var(--bg-main); padding: 18px; margin-top: 8px; color: var(--text-muted);" onclick="addItem()">
                ${ICONS.plus} Add Another Product Configuration
            </button>
        `;

        container.innerHTML = html;

        orderItems.forEach((item, idx) => {
            if (item.collapsed) return;
            const lc = document.getElementById(`ribbon-list-${idx}`);
            if (!lc) return;
            if (!item.colorsData?.length) {
                lc.innerHTML = '<div style="background: var(--bg-main); border-radius: 12px; border: 1px solid var(--border); padding: 30px; text-align: center; color: var(--text-light); font-style: italic; font-size: 14px;">No colors added yet. Click "Add Color" to start.</div>';
            } else {
                lc.innerHTML = `
                <div class="ribbon-table">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr>
                                <th class="label-caps">Color</th>
                                <th class="label-caps" style="text-align: center;">Qty</th>
                                <th class="label-caps">Print</th>
                                <th style="width: 50px;"></th>
                            </tr>
                        </thead>
                        <tbody>${item.colorsData.map((c, cIdx) => `
                            <tr>
                                <td>
                                    <div class="flex items-center gap-3">
                                        <div style="width: 18px; height: 18px; border-radius: 50%; background: ${c.hex}; border: 1px solid var(--border); box-shadow: 0 1px 3px rgba(0,0,0,0.1);"></div>
                                        <span style="font-size: 13px; font-weight: 700; color: var(--text-main);">${c.name}</span>
                                    </div>
                                </td>
                                <td style="text-align: center;">
                                    <input type="number" value="${c.qty}" class="wizard-input" style="width: 70px; height: 38px; text-align: center; font-weight: 800; padding: 0 8px;" onchange="updateRibbonProp(${idx},${cIdx},'qty',this.value)">
                                </td>
                                <td>
                                    <select class="wizard-input wizard-select" style="height: 38px; font-size: 12px; font-weight: 700; padding: 0 12px; padding-right: 30px;" onchange="updateRibbonProp(${idx},${cIdx},'printColor',this.value)">
                                        ${PRINT_COLORS.map(pc => `<option value="${pc}" ${c.printColor === pc ? 'selected' : ''}>${pc}</option>`).join('')}
                                    </select>
                                </td>
                                <td style="text-align: right;">
                                    <button type="button" onclick="removeRibbon(${idx},${cIdx})" style="color: var(--primary); background: none; border: none; cursor: pointer; padding: 8px;">${ICONS.trash}</button>
                                </td>
                            </tr>
                        `).join('')}</tbody>
                    </table>
                </div>`;
            }
        });
    };

    window.updateItemArticle = (idx, val) => { orderItems[idx].article = val; renderItemsList(); };
    window.removeItem = (idx) => { if (orderItems.length > 1) { orderItems.splice(idx, 1); renderItemsList(); } };
    window.addItem = () => { orderItems.forEach(it => it.collapsed = true); orderItems.push({ id: uid(), article: 'Ruban', colorsData: [], sachetData: {}, collapsed: false }); renderItemsList(); };
    window.collapseItem = (idx) => { orderItems[idx].collapsed = true; renderItemsList(); };
    window.expandItem = (idx) => { orderItems.forEach((it, i) => it.collapsed = (i !== idx)); renderItemsList(); };
    window.updateSachetData = (idx, field, val) => { orderItems[idx].sachetData = orderItems[idx].sachetData || {}; orderItems[idx].sachetData[field] = val; };
    window.openRibbonPicker = (idx) => {
        const currentNames = (orderItems[idx].colorsData || []).map(c => c.name);
        showColorPicker((color, isAdded) => {
            orderItems[idx].colorsData = orderItems[idx].colorsData || [];
            if (isAdded) { if (!orderItems[idx].colorsData.find(c => c.name === color.name)) orderItems[idx].colorsData.push({ ...color, qty: 1, printColor: 'White' }); }
            else { orderItems[idx].colorsData = orderItems[idx].colorsData.filter(c => c.name !== color.name); }
            renderItemsList();
        }, currentNames);
    };
    window.updateRibbonProp = (iIdx, rIdx, prop, val) => { orderItems[iIdx].colorsData[rIdx][prop] = val; renderItemsList(); };
    window.removeRibbon = (iIdx, rIdx) => { orderItems[iIdx].colorsData.splice(rIdx, 1); renderItemsList(); };

    const stepPanels = [
        `<div class="wizard-container">
            <h3 class="wizard-section-title">Client Details</h3>
            <p class="wizard-section-desc">Who are we crafting this for? Select an existing client or enter new details.</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                <div class="wizard-field-group" style="grid-column: span 2;">
                    <label class="wizard-label">Customer Name</label>
                    <input type="text" id="form-client" value="${order?.client || ''}" list="clients-datalist" placeholder="Full name" class="wizard-input" style="font-size: 17px; font-weight: 700; height: 56px;">
                    <datalist id="clients-datalist">${clients.map(c => `<option value="${c.name}">`).join('')}</datalist>
                </div>
                <div class="wizard-field-group">
                    <label class="wizard-label">Phone</label>
                    <input type="text" id="form-phone" value="${order?.phone || ''}" placeholder="06XXXXXXXX" class="wizard-input">
                </div>
                <div class="wizard-field-group">
                    <label class="wizard-label">Process Stage</label>
                    <select id="form-status" class="wizard-input wizard-select" style="color: var(--primary); font-weight: 800;">
                        ${STATUSES.map(s => `<option value="${s}" ${(order?.status || 'To Do') === s ? 'selected' : ''}>${s}</option>`).join('')}
                    </select>
                </div>
                <div class="wizard-field-group" style="grid-column: span 2;">
                    <label class="wizard-label">Total Order Value</label>
                    <div style="position: relative;">
                        <input type="number" id="form-price" value="${order?.price || ''}" placeholder="0.00" class="wizard-input wizard-input-large" style="padding-left: 24px;">
                        <span class="label-caps" style="position: absolute; right: 24px; top: 50%; transform: translateY(-50%); color: var(--text-light); font-weight: 800;">MAD</span>
                    </div>
                </div>
            </div>
        </div>`,
        
        `<div class="wizard-container" style="max-width: 750px;">
            <h3 class="wizard-section-title">Product Stack</h3>
            <p class="wizard-section-desc">Build the production requirement by adding items and specifying their finishes.</p>
            <div id="items-container"></div>
        </div>`,
        
        `<div class="wizard-container">
            <h3 class="wizard-section-title">Design Artwork</h3>
            <p class="wizard-section-desc">Upload the final design or a workshop reference image for this order.</p>
            <div id="image-upload-zone" class="premium-upload-zone">
                ${order?.design ? `<img src="${order.design}" style="max-height: 280px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">` : `
                    <div>
                        <div class="premium-upload-icon">${ICONS.upload}</div>
                        <p class="headline" style="color: var(--text-main); margin-bottom: 6px;">Drop Design File Here</p>
                        <p class="body" style="font-size: 13px; color: var(--text-muted);">or click to browse from your device</p>
                    </div>
                `}
                <input type="file" id="form-design" class="hidden" accept="image/*">
            </div>
            ${order?.design ? `<div class="flex justify-center mt-6"><button type="button" class="btn btn-secondary" style="padding: 10px 24px;" onclick="document.getElementById('form-design').click()">Replace Image</button></div>` : ''}
        </div>`,
        
        `<div class="wizard-container">
            <h3 class="wizard-section-title">Logistics</h3>
            <p class="wizard-section-desc">Confirm the final destination for shipping and delivery.</p>
            <div class="wizard-field-group">
                <label class="wizard-label">Delivery Address</label>
                <textarea id="form-address" placeholder="Full street address, building info..." class="wizard-input wizard-textarea">${order?.address || ''}</textarea>
            </div>
            <div class="wizard-field-group">
                <label class="wizard-label">Destination City</label>
                <input type="text" id="form-ville" value="${order?.ville || ''}" placeholder="e.g. Casablanca" class="wizard-input" style="font-weight: 700;">
            </div>
        </div>`,
    ];

    const body = `
        <div class="wizard-stepper-wrap" style="background: var(--bg-main); padding: 40px 40px 32px; border-bottom: 1px solid var(--border);">
            <div class="premium-stepper">
                <div id="wdot-0" class="step-item" onclick="wizNav(0 - currentStep)"><div class="step-circle">1</div><span class="step-label">Client</span></div>
                <div id="wdot-1" class="step-item" onclick="wizNav(1 - currentStep)"><div class="step-circle">2</div><span class="step-label">Products</span></div>
                <div id="wdot-2" class="step-item" onclick="wizNav(2 - currentStep)"><div class="step-circle">3</div><span class="step-label">Design</span></div>
                <div id="wdot-3" class="step-item" onclick="wizNav(3 - currentStep)"><div class="step-circle">4</div><span class="step-label">Delivery</span></div>
            </div>
        </div>
        <div id="order-form-container" style="padding: 40px 20px; min-height: 520px; background: var(--surface);">
            <form id="order-form">
                ${stepPanels.map((html, i) => `<div class="wizard-panel${i === 0 ? ' active' : ''}" id="wstep-${i}" style="display: ${i === 0 ? 'block' : 'none'}; opacity: ${i === 0 ? '1' : '0'}; transition: all 0.3s ease;">${html}</div>`).join('')}
            </form>
        </div>
    `;

    const footer = `
        <div class="flex justify-between w-full" style="padding: 0 10px;">
            <button class="btn btn-secondary" style="padding: 12px 28px; background: transparent; border: none; font-weight: 600;" onclick="closeModal()">Dismiss</button>
            <div class="flex gap-4">
                <button class="btn btn-secondary" id="wiz-back" style="display: none; padding: 12px 28px; border-radius: 12px;" onclick="wizNav(-1)">Previous</button>
                <button class="btn btn-primary" id="wiz-next" style="padding: 12px 40px; border-radius: 12px; min-width: 160px; box-shadow: 0 4px 12px rgba(217, 15, 15, 0.2);" onclick="wizNav(1)">Next Step</button>
                <button class="btn btn-primary" id="wiz-save" style="display: none; background: #10b981; border-color: #10b981; padding: 12px 40px; border-radius: 12px; min-width: 180px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);">Complete Order</button>
            </div>
        </div>
    `;

    openModal(title, body, footer, '860px', headerActions);

    const updateWizard = () => {
        const stepNumbers = ["1", "2", "3", "4"];
        STEPS.forEach((_, i) => {
            const dot = document.getElementById(`wdot-${i}`);
            const circle = dot.querySelector('.step-circle');
            if (i < currentStep) { 
                dot.className = 'step-item completed'; 
                circle.textContent = '✓';
            }
            else if (i === currentStep) { 
                dot.className = 'step-item active'; 
                circle.textContent = stepNumbers[i];
            }
            else { 
                dot.className = 'step-item'; 
                circle.textContent = stepNumbers[i];
            }
        });
        
        document.querySelectorAll('.wizard-panel').forEach((p, i) => {
            if (i === currentStep) {
                p.style.display = 'block';
                setTimeout(() => p.style.opacity = '1', 50);
            } else {
                p.style.display = 'none';
                p.style.opacity = '0';
            }
        });

        document.getElementById('wiz-back').style.display = currentStep > 0 ? 'flex' : 'none';
        document.getElementById('wiz-next').style.display = currentStep < STEPS.length - 1 ? 'flex' : 'none';
        document.getElementById('wiz-save').style.display = currentStep === STEPS.length - 1 ? 'flex' : 'none';
        
        if (currentStep === 1) renderItemsList();
        if (currentStep === 2) {
            const uploadZone = document.getElementById('image-upload-zone');
            uploadZone.onclick = () => document.getElementById('form-design').click();
            document.getElementById('form-design').onchange = (e) => {
                const file = e.target.files[0]; if (!file) return;
                const reader = new FileReader(); reader.onload = (ev) => {
                    uploadZone.innerHTML = `<img src="${ev.target.result}" style="max-height: 280px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">`;
                    window.tempImage = ev.target.result;
                }; reader.readAsDataURL(file);
            };
        }
    };

    window.wizNav = (dir) => { 
        currentStep = Math.max(0, Math.min(STEPS.length - 1, currentStep + dir)); 
        updateWizard(); 
        const modal = document.querySelector('.modal');
        if (modal) modal.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.getElementById('wiz-save').onclick = async () => {
        const clientName = document.getElementById('form-client').value.trim();
        const clientPhone = document.getElementById('form-phone').value.trim();
        const clientCity = capitalize(document.getElementById('form-ville').value.trim());

        const colorsStr = orderItems.map(it => (!['Sachet sylable', 'Sachet non tissé (avec poignet)', 'Sachet non tissé (sans poignet)'].includes(it.article)) ? (it.colorsData || []).map(c => c.name).join(', ') : (it.sachetData?.color || '')).filter(s => s).join(' | ');
        const quantitiesStr = orderItems.map(it => (!['Sachet sylable', 'Sachet non tissé (avec poignet)', 'Sachet non tissé (sans poignet)'].includes(it.article)) ? (it.colorsData || []).map(c => `${c.name}: ${c.qty}`).join(', ') : `${it.article}: ${it.sachetData?.qty || 0} pcs`).join(' | ');
        
        const newOrder = { 
            id: order?.id || uid(), 
            client: clientName, 
            phone: clientPhone, 
            price: parseFloat(document.getElementById('form-price').value) || 0, 
            address: document.getElementById('form-address').value, 
            ville: clientCity, 
            items: orderItems, 
            article: orderItems.length > 1 ? `${orderItems.length} Products` : orderItems[0].article, 
            colors: colorsStr, 
            quantities: quantitiesStr, 
            design: window.tempImage || order?.design || null, 
            status: document.getElementById('form-status').value || 'To Do', 
            date: order?.date || new Date().toISOString().slice(0, 10) 
        };

        const result = await callSheets({ action: order ? 'updateOrder' : 'addOrder', order: newOrder });
        if (result && result.success) {
            // Automatic Client Creation/Update
            if (clientName) {
                const existingClient = clients.find(c => c.name.toLowerCase() === clientName.toLowerCase() || (clientPhone && c.phone === clientPhone));
                if (!existingClient) {
                    clients.unshift({ id: uid(), name: clientName, phone: clientPhone, city: clientCity, notes: 'Added via Order' });
                    saveClients();
                } else {
                    // Update city/phone if missing
                    let updated = false;
                    if (!existingClient.phone && clientPhone) { existingClient.phone = clientPhone; updated = true; }
                    if (!existingClient.city && clientCity) { existingClient.city = clientCity; updated = true; }
                    if (updated) saveClients();
                }
            }

            if (order) orders = orders.map(o => o.id === order.id ? newOrder : o); 
            else {
                orders.unshift(newOrder);
                window.sendEmailRecap(newOrder.id, true);
            }
            showToast('Order and client info saved', 'success'); 
            renderView(); 
            closeModal();
        }
    };
    
    updateWizard();
}



window.sendEmailRecap = async function (id, isAuto = false) {
    const order = orders.find(o => o.id === id);
    if (!order) return;

    if (!isAuto) showLoading(true);

    try {
        if (typeof emailjs === 'undefined') {
            throw new Error("EmailJS not loaded");
        }

        const templateParams = {
            order_id: order.id,
            client_name: order.client,
            phone: formatPhone(order.phone),
            address: order.address,
            city: order.ville,
            article: order.article,
            price: order.price,
            colors: order.colors,
            quantities: order.quantities,
            status: order.status,
            date: order.date,
            to_email: RECAP_EMAIL
        };

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );

        console.log("EmailJS Success:", response.status, response.text);
        if (!isAuto) alert("Recap sent to " + RECAP_EMAIL);
        else {
            console.log("Automatic recap sent successfully.");
            // We don't alert for auto-send to avoid multiple popups, 
            // but we could show a small toast if needed.
        }
    } catch (error) {
        console.error("EmailJS Error:", error);
        if (!isAuto) alert("Failed to send recap: " + (error.text || error.message || "Unknown error"));
    } finally {
        if (!isAuto) showLoading(false);
    }
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

window.showInvoice = function (id) {
    const order = orders.find(o => o.id === id);
    if (!order) return;
    
    const body = `
        <div id="invoice-capture-area" style="padding: var(--space-lg); background: white; color: #111; border-radius: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; border-bottom: 3px solid #111; padding-bottom: 16px;">
                <img src="img/Wecraft Final Logos.png" style="width: 140px;">
                <div style="text-align: right;">
                    <h2 class="display-stat" style="font-size: 22px; color: #111;">INVOICE</h2>
                    <p class="label-caps" style="color: #777; margin-top: 4px;">#${order.id.toUpperCase()}</p>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 32px;">
                <div>
                    <p class="label-caps" style="color: #777; margin-bottom: 8px; font-size: 10px; font-weight: 800;">BILL TO</p>
                    <h4 class="headline" style="font-size: 20px; color: #111; margin-bottom: 6px;">${order.client}</h4>
                    <div style="font-size: 14px; color: #444; line-height: 1.6;">
                        <div style="font-weight: 700; color: #111;">${formatPhone(order.phone)}</div>
                        <div>${order.address || ''}</div>
                        <div style="text-transform: uppercase; font-size: 12px; font-weight: 700; color: #777; margin-top: 4px;">${order.ville}</div>
                    </div>
                </div>
                <div style="text-align: right;">
                    <p class="label-caps" style="color: #777; margin-bottom: 8px; font-size: 10px; font-weight: 800;">ISSUE DATE</p>
                    <div style="font-size: 16px; font-weight: 700; color: #111;">${formatDate(order.date)}</div>
                </div>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
                <thead>
                    <tr style="border-bottom: 2px solid #111;">
                        <th class="label-caps" style="padding: 12px 0; text-align: left; color: #777; font-size: 9px; background: none; border: none;">Description</th>
                        <th class="label-caps" style="padding: 12px 0; text-align: right; color: #777; font-size: 9px; background: none; border: none;">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 16px 0; border-bottom: 1px solid #eee;">
                            <div class="title" style="font-size: 14px; color: #111; margin-bottom: 4px;">${order.article}</div>
                            <div class="body" style="font-size: 12px; color: #666;">${order.colors || 'Standard Production'}</div>
                        </td>
                        <td class="title" style="padding: 16px 0; text-align: right; font-size: 15px; color: #111; border-bottom: 1px solid #eee;">
                            ${formatCurrency(order.price)}
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td class="headline" style="padding: 20px 0; font-size: 16px; color: #111;">Total Amount</td>
                        <td class="display-stat" style="text-align: right; font-size: 26px; color: #d90f0f; padding: 20px 0;">
                            ${formatCurrency(order.price)}
                        </td>
                    </tr>
                </tfoot>
            </table>

            <div style="background: #fafafa; padding: 16px; border-radius: 8px; text-align: center; border: 1px solid #eee;">
                <p class="label-caps" style="color: #999; font-size: 9px;">Thank you for your business with Wecraft Artisans</p>
            </div>
        </div>
    `;

    const footer = `
        <div style="display: flex; justify-content: flex-end; width: 100%; gap: 10px; padding: 0 10px;">
            <button class="btn btn-secondary" onclick="closeModal()">Close</button>
            <button class="btn btn-primary" style="background: #25d366; color: white; border: none; font-weight: 700;" onclick="window.shareInvoiceAsImage('${order.id}')">
                ${ICONS.whatsapp} Share as Image
            </button>
            <button class="btn btn-primary" style="background: var(--text-main); color: var(--bg-main); border: none;" onclick="window.print()">
                Print PDF
            </button>
        </div>
    `;

    openModal('Invoice Preview', body, footer, '700px');
};

function showClientModal(client = null) {
    const title = client ? 'Edit Client' : 'New Client';
    const body = `
        <div class="form-group"><label>Full Name</label><input type="text" id="client-name" value="${client?.name || ''}" placeholder="e.g. Oussama Madrari"></div>
        <div class="form-group"><label>Phone</label><input type="text" id="client-phone" value="${client?.phone || ''}" placeholder="06XXXXXXXX"></div>
        <div class="form-group"><label>City</label><input type="text" id="client-city" value="${client?.city || ''}" placeholder="e.g. Casablanca"></div>
        <div class="form-group"><label>Notes</label><textarea id="client-notes" placeholder="Any specific details about this client...">${client?.notes || ''}</textarea></div>
    `;
    const footer = `<button class="btn btn-secondary" onclick="closeModal()">Cancel</button><button class="btn btn-primary" id="save-client-btn">Save Client</button>`;

    openModal(title, body, footer);

    document.getElementById('save-client-btn').addEventListener('click', () => {
        const nc = {
            id: client?.id || uid(),
            name: document.getElementById('client-name').value.trim(),
            phone: document.getElementById('client-phone').value.trim(),
            city: document.getElementById('client-city').value.trim(),
            notes: document.getElementById('client-notes').value.trim()
        };
        if (!nc.name) {
            showToast('Client name is required', 'error');
            return;
        }
        if (client) clients = clients.map(c => c.id === client.id ? nc : c);
        else clients.unshift(nc);
        saveClients();
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
                        <input type="text" id="color-search" placeholder="Search for a color..." style="padding-left: 44px; height: 50px; font-size: 16px; background: var(--bg-main); color: var(--text-main); border: 1.5px solid var(--border-color);">
                    </div>
                    <div id="color-grid" class="color-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px; max-height: 550px; overflow-y: auto; padding: 4px;">
                        ${RUBANS_COULEURS.map(c => `
                            <div class="color-option" data-name="${c.name}" style="cursor: pointer; padding: 16px; border-radius: 16px; border: 1px solid var(--border-color); display: flex; flex-direction: column; align-items: center; gap: 12px; transition: all 0.2s; background: var(--bg-card); position: relative;">
                                <div style="width: 48px; height: 48px; border-radius: 50%; background: ${c.hex}; border: 1px solid var(--border-color); flex-shrink: 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"></div>
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
            opt.style.background = isSelected ? 'var(--stat-green-bg)' : 'var(--bg-card)';
            opt.style.borderColor = isSelected ? 'var(--stat-green-text)' : 'var(--border-color)';
            opt.querySelector('.check-mark').style.display = isSelected ? 'flex' : 'none';
        });
    };
    updateUI();

    const close = () => pickerOverlay.classList.remove('active');
    pickerOverlay.querySelector('#close-picker').onclick = close;
    pickerOverlay.querySelector('#done-picker').onclick = close;
    pickerOverlay.onclick = (e) => { if (e.target === pickerOverlay) close(); };

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

function openModal(title, body, footer, maxWidth = '500px', headerActions = '') {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = body;
    document.getElementById('modal-footer').innerHTML = footer;
    document.getElementById('modal-footer').style.display = footer ? 'flex' : 'none';

    const actionContainer = document.getElementById('modal-header-actions');
    if (actionContainer) {
        actionContainer.innerHTML = headerActions;
    }

    document.querySelector('#modal-overlay .modal').style.maxWidth = maxWidth;
    document.getElementById('modal-overlay').classList.add('active');
    window.tempImage = null;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
}

// Global scope delete helper
window.deleteOrder = (id) => {
    const order = orders.find(o => o.id === id);
    showConfirm({
        title: 'Delete Order',
        text: `Are you sure you want to delete the order for <strong>${order?.client || 'this client'}</strong>? This action cannot be undone.`,
        confirmText: 'Delete Order',
        onConfirm: async () => {
            const result = await callSheets({ action: 'deleteOrder', id: id });
            if (result && result.success) {
                orders = orders.filter(o => o.id !== id);
                renderView();
                closeModal();
                showToast('Order deleted successfully', 'success');
            } else {
                showToast('Error deleting from Sheets', 'error');
            }
        }
    });
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

window.downloadOrderImage = function (url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

function openPremiumModal(content) {
    const overlay = document.getElementById('e-modal-overlay');
    const container = document.getElementById('e-modal-content');
    container.innerHTML = content;
    overlay.classList.add('active');

    // Close logic
    const closeBtn = container.querySelector('#e-close-modal');
    if (closeBtn) closeBtn.onclick = () => overlay.classList.remove('active');
    overlay.onclick = (e) => { if (e.target === overlay) overlay.classList.remove('active'); };
}

function showOrderDetailsModal(order) {
    const items = order.items && order.items.length > 0 ? order.items : [{
        article: order.article,
        colorsData: order.colorsData || [],
        sachetData: order.sachetData || {}
    }];

    const productCardsHtml = items.map((item, idx) => {
        const isRibbon = item.article === 'Ruban';
        let detailsHtml = '';
        let totalQty = 0;

        if (isRibbon) {
            const colorsData = item.colorsData?.length ? item.colorsData : [{ name: order.colors || 'Unknown', qty: order.quantities || '-', printColor: 'Std', hex: '#ccc' }];
            totalQty = colorsData.reduce((sum, c) => sum + (parseInt(c.qty) || 0), 0);
            detailsHtml = `
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    ${colorsData.map(c => `
                        <div class="flex items-center gap-3">
                            <div style="width: 20px; height: 20px; border-radius: 50%; background: ${c.hex || '#ccc'}; border: 1px solid var(--border); flex-shrink: 0;"></div>
                            <span style="font-size: 13px; font-weight: 600; flex: 1; color: var(--text-main);">${c.name}</span>
                            <span style="font-size: 12px; color: var(--text-muted); font-weight: 700;">×${c.qty}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            const sd = item.sachetData || {};
            totalQty = parseInt(sd.qty) || 0;
            const specs = [
                { label: 'Color', value: sd.color || '-' },
                { label: 'Size', value: sd.size || '-' },
                { label: 'Quantity', value: sd.qty || order.quantities || '-' },
                { label: 'Print', value: sd.print || '-' }
            ];
            detailsHtml = `
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                    ${specs.map(s => `
                        <div>
                            <div style="font-size: 9px; color: var(--text-light); text-transform: uppercase; font-weight: 700; margin-bottom: 2px;">${s.label}</div>
                            <div style="font-size: 13px; font-weight: 700; color: var(--text-main);">${s.value}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="dossier-product-card" data-card-index="${idx}">
                <div class="dossier-product-header" onclick="toggleProductCard(${idx})">
                    <div class="flex items-center gap-12" style="flex: 1; align-items: center;">
                        <span class="dossier-idx-badge">#${String(idx + 1).padStart(2, '0')}</span>
                        <div>
                            <h4 style="font-size: 15px; font-weight: 700; color: var(--text-main); margin: 0;">${item.article}</h4>
                            <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Qty: <strong>${totalQty}</strong></div>
                        </div>
                    </div>
                    <div class="product-card-toggle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>
                <div class="dossier-product-details" style="display: none; margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--border);">
                    ${detailsHtml}
                </div>
            </div>
        `;
    }).join('');

    const content = `
        <div class="dossier-modal">
            <!-- Header -->
            <div class="dossier-header">
                <div>
                    <h2 style="font-size: 28px; font-weight: 800; color: var(--text-main); margin: 0;">${order.client}</h2>
                    <div class="flex items-center gap-3 mt-3" style="align-items: center;">
                        ${getStatusBadgeHTML(order.status)}
                        <span style="font-size: 11px; color: var(--text-light); font-family: monospace;">REF: ${order.id.toUpperCase()}</span>
                    </div>
                </div>
                <button id="e-close-modal" class="dossier-close-btn">×</button>
            </div>

            <!-- Body: Two Columns -->
            <div class="dossier-body">
                <!-- Left Column: Production Requirements -->
                <div class="dossier-left">
                    <div class="dossier-section-label">Production Requirements</div>
                    <div class="dossier-products">
                        ${productCardsHtml}
                    </div>
                </div>

                <!-- Right Column: Totals & Shipment -->
                <div class="dossier-right">
                    <!-- Total Value Block -->
                    <div class="dossier-value-block">
                        <div style="font-size: 9px; color: var(--primary); text-transform: uppercase; font-weight: 800; margin-bottom: 8px;">Total Value</div>
                        <div style="font-size: 32px; font-weight: 800; color: var(--primary); letter-spacing: -1px;">${formatCurrency(order.price)}</div>
                    </div>

                    <!-- Reference Image (Fixed Height) -->
                    <div class="dossier-image-block">
                        ${order.design ? `
                            <img src="${order.design}" style="width: 100%; height: 130px; object-fit: contain; object-position: center; display: block;">
                        ` : `
                            <div style="height: 130px; display: flex; align-items: center; justify-content: center; color: var(--text-light);">
                                ${ICONS.upload}
                            </div>
                        `}
                    </div>

                    <!-- Shipment Block -->
                    <div class="dossier-shipment-block">
                        <div class="dossier-shipment-row">
                            <div style="flex-shrink: 0;">${ICONS.phone}</div>
                            <div>
                                <div style="font-size: 9px; color: var(--text-light); text-transform: uppercase; font-weight: 700;">Direct Line</div>
                                <div style="font-size: 13px; font-weight: 700; color: var(--text-main); margin-top: 2px;">${formatPhone(order.phone)}</div>
                            </div>
                        </div>
                        <div style="height: 1px; background: var(--border); margin: 12px 0;"></div>
                        <div class="dossier-shipment-row">
                            <div style="flex-shrink: 0;">${ICONS.bag}</div>
                            <div>
                                <div style="font-size: 9px; color: var(--text-light); text-transform: uppercase; font-weight: 700;">Address</div>
                                <div style="font-size: 13px; font-weight: 700; color: var(--text-main); margin-top: 2px;">${order.ville}${order.address ? ', ' + order.address : ''}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="dossier-footer">
                <button class="dossier-btn dossier-btn-invoice" onclick="window.showInvoice('${order.id}')">${ICONS.invoice} Invoice</button>
                <button class="dossier-btn dossier-btn-whatsapp" onclick="window.shareInvoiceAsImage('${order.id}')">${ICONS.whatsapp} WhatsApp</button>
                <button class="dossier-btn dossier-btn-email" onclick="window.sendEmailRecap('${order.id}')">${ICONS.mail} Email</button>
            </div>
        </div>
    `;
    openPremiumModal(content);
}

window.shareInvoiceAsImage = async function(id) {
    const order = orders.find(o => o.id === id);
    if (!order) return;
    
    showLoading(true);
    
    // Create a hidden container for the invoice to capture
    const captureContainer = document.createElement('div');
    captureContainer.style.position = 'fixed';
    captureContainer.style.left = '-9999px';
    captureContainer.style.top = '0';
    captureContainer.style.width = '600px';
    captureContainer.style.background = 'white';
    captureContainer.style.color = '#111';
    captureContainer.style.padding = '40px';
    captureContainer.style.fontFamily = "'DM Sans', sans-serif";
    
    const itemsMessage = (order.items || [{ article: order.article, colors: order.colors, quantities: order.quantities, colorsData: order.colorsData, sachetData: order.sachetData }]).map(item => {
        const isRibbon = item.article === 'Ruban';
        let detailHtml = '';
        
        if (isRibbon) {
            const colors = item.colorsData?.length ? item.colorsData : [];
            detailHtml = colors.map(c => `
                <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
                    <div style="width: 14px; height: 14px; border-radius: 50%; background: ${c.hex || '#ccc'}; border: 1px solid #eee;"></div>
                    <span style="font-size: 14px; font-weight: 700; color: #111;">${c.name}</span>
                    <span style="font-size: 13px; color: #777;">× ${c.qty}</span>
                </div>
            `).join('') || `<div style="font-size: 13px; color: #444;">${item.colors || ''}</div><div style="font-weight: 700; font-size: 14px; margin-top: 4px;">${item.quantities || ''}</div>`;
        } else {
            const qty = item.sachetData?.qty || item.quantities || '0';
            const color = item.sachetData?.color || item.colors || '';
            detailHtml = `
                <div style="font-size: 14px; color: #444; margin-top: 4px;">
                    <span style="font-weight: 700; color: #111;">${color}</span>
                    ${item.sachetData?.size ? ` | <span style="color: #777;">${item.sachetData.size}</span>` : ''}
                </div>
                <div style="font-size: 16px; font-weight: 800; color: #111; margin-top: 4px;">Qty: ${qty} pcs</div>
            `;
        }

        return `<div style="padding: 16px 0; border-bottom: 1px solid #eee;">
            <div style="font-weight: 800; font-size: 14px; color: #777; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">${item.article}</div>
            ${detailHtml}
        </div>`;
    }).join('');

    captureContainer.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; border-bottom: 3px solid #111; padding-bottom: 20px;">
            <img src="img/Wecraft Final Logos.png" style="width: 160px;">
            <div style="text-align: right;">
                <div style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #777;">Order Confirmation</div>
                <div style="font-size: 24px; font-weight: 800; margin-top: 4px;">#${order.id.toUpperCase()}</div>
            </div>
        </div>
        <div style="margin-bottom: 30px;">
            <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #777; margin-bottom: 12px; letter-spacing: 0.05em;">BILL TO</div>
            <div style="font-size: 28px; font-weight: 800; margin-bottom: 6px; color: #111;">${order.client}</div>
            <div style="font-size: 16px; color: #444; font-weight: 500;">
                <span style="font-weight: 700;">${formatPhone(order.phone)}</span> | ${order.ville}
            </div>
        </div>
        <div style="margin-bottom: 40px;">
            ${itemsMessage}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; background: #fafafa; padding: 24px; border-radius: 16px; border: 1px solid #eee;">
            <div>
                <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #777; letter-spacing: 0.05em;">Total Production Value</div>
                <div style="font-size: 15px; color: #555; margin-top: 4px; font-weight: 600;">${formatDate(order.date)}</div>
            </div>
            <div style="font-size: 36px; font-weight: 800; color: #d90f0f;">${formatCurrency(order.price)}</div>
        </div>
        <div style="margin-top: 40px; text-align: center; font-size: 12px; color: #999; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">
            Thank you for choosing Wecraft Artisans
        </div>
    `;
    
    document.body.appendChild(captureContainer);
    
    try {
        const canvas = await html2canvas(captureContainer, {
            scale: 2, // High res
            useCORS: true,
            backgroundColor: '#ffffff'
        });
        
        document.body.removeChild(captureContainer);
        
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        const file = new File([blob], `Wecraft_Invoice_${order.id}.png`, { type: 'image/png' });
        
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: 'Wecraft Order Invoice',
                text: `Invoice for order #${order.id.toUpperCase()}`
            });
        } else {
            // Fallback: Download the image
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Wecraft_Invoice_${order.id}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            showToast('Invoice image downloaded. You can now share it manually.', 'info');
        }
    } catch (e) {
        console.error("Capture Error:", e);
        showToast('Failed to generate invoice image', 'error');
    } finally {
        showLoading(false);
    }
};

// Toggle Product Card Expand/Collapse
window.toggleProductCard = function(index) {
    const card = document.querySelector(`[data-card-index="${index}"]`);
    if (!card) return;
    
    const details = card.querySelector('.dossier-product-details');
    const toggle = card.querySelector('.product-card-toggle');
    
    if (details.style.display === 'none') {
        details.style.display = 'block';
        toggle.style.transform = 'rotate(180deg)';
    } else {
        details.style.display = 'none';
        toggle.style.transform = 'rotate(0deg)';
    }
};

// Initialize App
init();

