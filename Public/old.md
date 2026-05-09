import { useState, useEffect, useRef } from "react";

// ─── MOCK DATA ───────────────────────────────────────────────────────────────
const STATUSES = ["New","Design Ready","In Production","Ready","Delivered","Cancelled"];
const STATUS_COLORS = {
  "New": { bg: "#EEF2FF", text: "#4338CA", dot: "#6366F1" },
  "Design Ready": { bg: "#FFF7ED", text: "#C2410C", dot: "#F97316" },
  "In Production": { bg: "#FEF3C7", text: "#92400E", dot: "#F59E0B" },
  "Ready": { bg: "#ECFDF5", text: "#065F46", dot: "#10B981" },
  "Delivered": { bg: "#EFF6FF", text: "#1D4ED8", dot: "#3B82F6" },
  "Cancelled": { bg: "#FFF1F2", text: "#BE123C", dot: "#F43F5E" },
};
const PRODUCTS = ["T-Shirt","Hoodie","Polo","Sweatshirt","Tank Top","Long Sleeve","Cap"];
const CITIES = ["Casablanca","Rabat","Marrakech","Fes","Tangier","Agadir","Meknes","Oujda"];

function uid() { return Math.random().toString(36).slice(2,9); }

const INIT_ORDERS = [
  { id: uid(), client: "Youssef Benali", phone: "0661234567", product: "T-Shirt", size: "L", color: "Black", city: "Casablanca", price: 120, status: "New", date: "2025-04-25", design: null, notes: "" },
  { id: uid(), client: "Salma Oukili", phone: "0669876543", product: "Hoodie", size: "M", color: "Navy", city: "Rabat", price: 250, status: "In Production", date: "2025-04-24", design: null, notes: "" },
  { id: uid(), client: "Amine Chraibi", phone: "0655112233", product: "Polo", size: "XL", color: "White", city: "Marrakech", price: 180, status: "Design Ready", date: "2025-04-24", design: null, notes: "" },
  { id: uid(), client: "Nadia Fassi", phone: "0612345678", product: "Cap", size: "One Size", color: "Red", city: "Casablanca", price: 90, status: "Ready", date: "2025-04-23", design: null, notes: "" },
  { id: uid(), client: "Omar Tazi", phone: "0698765432", product: "T-Shirt", size: "S", color: "Grey", city: "Fes", price: 110, status: "Delivered", date: "2025-04-22", design: null, notes: "" },
  { id: uid(), client: "Khadija Moussaoui", phone: "0677889900", product: "Sweatshirt", size: "L", color: "Green", city: "Tangier", price: 200, status: "Cancelled", date: "2025-04-21", design: null, notes: "" },
];

const INIT_TASKS = [
  { id: uid(), title: "Design hoodie mockup for Salma", status: "Doing", deadline: "2025-04-26", orderId: null },
  { id: uid(), title: "Print batch of 10 t-shirts", status: "To Do", deadline: "2025-04-27", orderId: null },
  { id: uid(), title: "Package ready orders", status: "Done", deadline: "2025-04-25", orderId: null },
  { id: uid(), title: "Order blank stock", status: "To Do", deadline: "2025-04-28", orderId: null },
];

const INIT_CLIENTS = [
  { id: uid(), name: "Youssef Benali", phone: "0661234567", city: "Casablanca", notes: "VIP client" },
  { id: uid(), name: "Salma Oukili", phone: "0669876543", city: "Rabat", notes: "" },
  { id: uid(), name: "Amine Chraibi", phone: "0655112233", city: "Marrakech", notes: "Bulk orders" },
  { id: uid(), name: "Nadia Fassi", phone: "0612345678", city: "Casablanca", notes: "" },
  { id: uid(), name: "Omar Tazi", phone: "0698765432", city: "Fes", notes: "Referred by Nadia" },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Icon = ({ name, size = 16 }) => {
  const icons = {
    dashboard: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
    orders: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>,
    tasks: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
    clients: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    plus: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>,
    search: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
    filter: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>,
    table: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 10h18M3 14h18M10 3v18M3 3h18v18H3z"/></svg>,
    kanban: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="5" height="18" rx="1"/><rect x="10" y="3" width="5" height="11" rx="1"/><rect x="17" y="3" width="5" height="15" rx="1"/></svg>,
    whatsapp: <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
    edit: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
    trash: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>,
    close: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    upload: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>,
    invoice: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    menu: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    logout: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
    trend: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    bag: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
    money: <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  };
  return icons[name] || null;
};

// ─── STYLES ──────────────────────────────────────────────────────────────────
const S = {
  // Layout
  app: { display:"flex", height:"100vh", fontFamily:"'DM Sans', sans-serif", background:"#F8F7F5", color:"#1a1a1a", overflow:"hidden" },
  sidebar: { width:220, background:"#fff", borderRight:"1px solid #EBEBEB", display:"flex", flexDirection:"column", padding:"24px 0", transition:"width 0.2s", flexShrink:0 },
  sidebarCollapsed: { width:64, overflowX:"hidden" },
  logo: { padding:"0 20px 24px", borderBottom:"1px solid #F0F0F0", marginBottom:8, display:"flex", alignItems:"center", gap:10 },
  logoMark: { width:32, height:32, background:"#18181B", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:14, fontWeight:700, flexShrink:0 },
  logoText: { fontSize:15, fontWeight:600, letterSpacing:"-0.3px", whiteSpace:"nowrap" },
  navItem: { display:"flex", alignItems:"center", gap:10, padding:"9px 20px", cursor:"pointer", borderRadius:0, fontSize:13.5, fontWeight:500, color:"#6B7280", transition:"all 0.15s", whiteSpace:"nowrap" },
  navItemActive: { color:"#18181B", background:"#F5F5F5" },
  main: { flex:1, display:"flex", flexDirection:"column", overflow:"hidden" },
  topbar: { background:"#fff", borderBottom:"1px solid #EBEBEB", padding:"0 24px", height:58, display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 },
  content: { flex:1, overflowY:"auto", padding:"24px" },
  // Cards
  card: { background:"#fff", borderRadius:12, border:"1px solid #EBEBEB", padding:"20px", marginBottom:16 },
  statCard: { background:"#fff", borderRadius:12, border:"1px solid #EBEBEB", padding:"20px 24px", flex:1, minWidth:140 },
  // Forms
  label: { display:"block", fontSize:12, fontWeight:600, color:"#6B7280", marginBottom:5, textTransform:"uppercase", letterSpacing:"0.5px" },
  input: { width:"100%", padding:"9px 12px", border:"1px solid #E5E7EB", borderRadius:8, fontSize:13.5, outline:"none", background:"#fff", color:"#1a1a1a", boxSizing:"border-box" },
  select: { width:"100%", padding:"9px 12px", border:"1px solid #E5E7EB", borderRadius:8, fontSize:13.5, outline:"none", background:"#fff", color:"#1a1a1a", boxSizing:"border-box" },
  btn: { padding:"9px 18px", borderRadius:8, fontSize:13.5, fontWeight:600, cursor:"pointer", border:"none", display:"inline-flex", alignItems:"center", gap:6, transition:"all 0.15s" },
  btnPrimary: { background:"#18181B", color:"#fff" },
  btnSecondary: { background:"#F5F5F5", color:"#374151", border:"1px solid #E5E7EB" },
  btnDanger: { background:"#FFF1F2", color:"#BE123C", border:"1px solid #FECDD3" },
  btnGreen: { background:"#ECFDF5", color:"#065F46", border:"1px solid #A7F3D0" },
  // Table
  table: { width:"100%", borderCollapse:"collapse" },
  th: { padding:"10px 14px", background:"#F9F9F9", fontSize:11.5, fontWeight:700, color:"#9CA3AF", textTransform:"uppercase", letterSpacing:"0.5px", textAlign:"left", borderBottom:"1px solid #EBEBEB" },
  td: { padding:"12px 14px", fontSize:13.5, borderBottom:"1px solid #F3F4F6", verticalAlign:"middle" },
  // Status badge
  badge: { display:"inline-flex", alignItems:"center", gap:5, padding:"3px 10px", borderRadius:999, fontSize:12, fontWeight:600 },
  // Modal
  overlay: { position:"fixed", inset:0, background:"rgba(0,0,0,0.35)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:1000, padding:16 },
  modal: { background:"#fff", borderRadius:16, width:"100%", maxWidth:560, maxHeight:"90vh", overflowY:"auto", boxShadow:"0 20px 60px rgba(0,0,0,0.15)" },
  modalHeader: { padding:"20px 24px 0", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid #F0F0F0", paddingBottom:16, marginBottom:0 },
  // Kanban
  kanbanCol: { background:"#F8F7F5", borderRadius:12, padding:12, minWidth:200, flex:1 },
  kanbanCard: { background:"#fff", borderRadius:10, border:"1px solid #EBEBEB", padding:12, marginBottom:8, cursor:"grab", fontSize:13 },
};

// ─── STATUS BADGE ─────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const c = STATUS_COLORS[status] || { bg:"#F3F4F6", text:"#374151", dot:"#9CA3AF" };
  return (
    <span style={{...S.badge, background:c.bg, color:c.text}}>
      <span style={{width:6,height:6,borderRadius:"50%",background:c.dot,display:"inline-block"}}/>
      {status}
    </span>
  );
}

// ─── MODAL ───────────────────────────────────────────────────────────────────
function Modal({ open, onClose, title, children, width=560 }) {
  if (!open) return null;
  return (
    <div style={S.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{...S.modal, maxWidth:width}}>
        <div style={S.modalHeader}>
          <span style={{fontSize:16, fontWeight:700}}>{title}</span>
          <button onClick={onClose} style={{...S.btn, padding:"4px 8px", background:"transparent", border:"none", color:"#9CA3AF"}}><Icon name="close" size={18}/></button>
        </div>
        <div style={{padding:"20px 24px"}}>{children}</div>
      </div>
    </div>
  );
}

// ─── FIELD ────────────────────────────────────────────────────────────────────
function Field({ label, children }) {
  return <div style={{marginBottom:14}}><label style={S.label}>{label}</label>{children}</div>;
}

// ─── LOGIN PAGE ──────────────────────────────────────────────────────────────
function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("admin@pod.ma");
  const [pass, setPass] = useState("password");
  const [err, setErr] = useState("");
  function handleLogin() {
    if (email === "admin@pod.ma" && pass === "password") { onLogin(); }
    else setErr("Invalid credentials. Try admin@pod.ma / password");
  }
  return (
    <div style={{minHeight:"100vh", background:"#F8F7F5", display:"flex", alignItems:"center", justifyContent:"center", padding:16, fontFamily:"'DM Sans', sans-serif"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <div style={{background:"#fff", borderRadius:20, border:"1px solid #EBEBEB", padding:"40px 36px", width:"100%", maxWidth:400, boxShadow:"0 4px 24px rgba(0,0,0,0.06)"}}>
        <div style={{textAlign:"center", marginBottom:32}}>
          <div style={{width:48,height:48,background:"#18181B",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:20,fontWeight:700,margin:"0 auto 16px"}}>P</div>
          <h1 style={{margin:0, fontSize:22, fontWeight:700, letterSpacing:"-0.5px"}}>PODflow</h1>
          <p style={{margin:"6px 0 0", color:"#9CA3AF", fontSize:13.5}}>Print On Demand Management</p>
        </div>
        <Field label="Email"><input style={S.input} value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="admin@pod.ma"/></Field>
        <Field label="Password"><input style={S.input} value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="••••••••"/></Field>
        {err && <p style={{color:"#BE123C", fontSize:13, margin:"0 0 12px", padding:"10px 12px", background:"#FFF1F2", borderRadius:8}}>{err}</p>}
        <button onClick={handleLogin} style={{...S.btn,...S.btnPrimary, width:"100%", justifyContent:"center", padding:"12px"}}>Sign In</button>
        <p style={{textAlign:"center", marginTop:16, fontSize:12, color:"#9CA3AF"}}>Demo: admin@pod.ma / password</p>
      </div>
    </div>
  );
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function Dashboard({ orders, tasks }) {
  const today = new Date().toISOString().slice(0,10);
  const todayOrders = orders.filter(o => o.date === today);
  const inProd = orders.filter(o => o.status === "In Production");
  const delivered = orders.filter(o => o.status === "Delivered");
  const revenue = delivered.reduce((s,o)=>s+o.price,0);
  const recentOrders = [...orders].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,5);

  const statusCounts = STATUSES.reduce((acc,s)=>{acc[s]=orders.filter(o=>o.status===s).length;return acc;},{});

  return (
    <div>
      <h2 style={{margin:"0 0 4px",fontSize:20,fontWeight:700}}>Dashboard</h2>
      <p style={{margin:"0 0 24px",color:"#9CA3AF",fontSize:13.5}}>Welcome back — here's your business overview.</p>

      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:24}}>
        {[
          { label:"Orders Today", value: todayOrders.length, icon:"bag", color:"#EEF2FF", iconColor:"#6366F1" },
          { label:"In Production", value: inProd.length, icon:"orders", color:"#FEF3C7", iconColor:"#F59E0B" },
          { label:"Delivered", value: delivered.length, icon:"trend", color:"#ECFDF5", iconColor:"#10B981" },
          { label:"Revenue (MAD)", value: revenue.toLocaleString(), icon:"money", color:"#F0FDF4", iconColor:"#16A34A" },
        ].map(s=>(
          <div key={s.label} style={{...S.statCard, display:"flex", flexDirection:"column", gap:4}}>
            <div style={{width:36,height:36,borderRadius:9,background:s.color,display:"flex",alignItems:"center",justifyContent:"center",color:s.iconColor,marginBottom:8}}>
              <Icon name={s.icon} size={18}/>
            </div>
            <span style={{fontSize:24,fontWeight:700,letterSpacing:"-0.5px"}}>{s.value}</span>
            <span style={{fontSize:12.5,color:"#9CA3AF",fontWeight:500}}>{s.label}</span>
          </div>
        ))}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16,marginBottom:24}}>
        <div style={S.card}>
          <h3 style={{margin:"0 0 14px",fontSize:14,fontWeight:700}}>Orders by Status</h3>
          {STATUSES.map(s=>{
            const c = STATUS_COLORS[s];
            const count = statusCounts[s] || 0;
            const pct = orders.length ? Math.round(count/orders.length*100) : 0;
            return (
              <div key={s} style={{marginBottom:10}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:4,fontSize:13}}>
                  <span style={{fontWeight:500}}>{s}</span>
                  <span style={{color:"#9CA3AF"}}>{count}</span>
                </div>
                <div style={{height:5,background:"#F3F4F6",borderRadius:99}}>
                  <div style={{height:"100%",width:`${pct}%`,background:c.dot,borderRadius:99}}/>
                </div>
              </div>
            );
          })}
        </div>

        <div style={S.card}>
          <h3 style={{margin:"0 0 14px",fontSize:14,fontWeight:700}}>Pending Tasks</h3>
          {tasks.filter(t=>t.status!=="Done").slice(0,5).map(t=>(
            <div key={t.id} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid #F3F4F6"}}>
              <div style={{width:7,height:7,borderRadius:"50%",background: t.status==="Doing"?"#F59E0B":"#6366F1",flexShrink:0}}/>
              <span style={{fontSize:13,flex:1}}>{t.title}</span>
              <span style={{fontSize:11.5,color:"#9CA3AF"}}>{t.deadline}</span>
            </div>
          ))}
          {tasks.filter(t=>t.status!=="Done").length===0 && <p style={{color:"#9CA3AF",fontSize:13}}>All caught up!</p>}
        </div>
      </div>

      <div style={S.card}>
        <h3 style={{margin:"0 0 14px",fontSize:14,fontWeight:700}}>Recent Orders</h3>
        <div style={{overflowX:"auto"}}>
          <table style={S.table}>
            <thead>
              <tr>
                {["Client","Product","City","Price","Status","Date"].map(h=><th key={h} style={S.th}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(o=>(
                <tr key={o.id}>
                  <td style={S.td}><span style={{fontWeight:600}}>{o.client}</span></td>
                  <td style={S.td}>{o.product}</td>
                  <td style={S.td}>{o.city}</td>
                  <td style={S.td}><span style={{fontWeight:600}}>{o.price} MAD</span></td>
                  <td style={S.td}><StatusBadge status={o.status}/></td>
                  <td style={{...S.td, color:"#9CA3AF"}}>{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── ORDER FORM ───────────────────────────────────────────────────────────────
function OrderForm({ initial, onSave, onClose, clients }) {
  const [form, setForm] = useState(initial || {
    client:"", phone:"", product:"T-Shirt", size:"M", color:"", city:"", price:"", status:"New", date: new Date().toISOString().slice(0,10), design:null, notes:""
  });
  const [preview, setPreview] = useState(initial?.design || null);
  const fileRef = useRef();

  function set(k,v){ setForm(f=>({...f,[k]:v})); }

  function handleFile(e){
    const f = e.target.files[0];
    if(!f) return;
    const url = URL.createObjectURL(f);
    setPreview(url);
    set("design", url);
  }

  function handleClientChange(name){
    set("client", name);
    const c = clients.find(c=>c.name===name);
    if(c){ set("phone", c.phone); set("city", c.city); }
  }

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <Field label="Client Name">
          <input style={S.input} list="client-list" value={form.client} onChange={e=>handleClientChange(e.target.value)} placeholder="Client name"/>
          <datalist id="client-list">{clients.map(c=><option key={c.id} value={c.name}/>)}</datalist>
        </Field>
        <Field label="Phone">
          <input style={S.input} value={form.phone} onChange={e=>set("phone",e.target.value)} placeholder="06xxxxxxxx"/>
        </Field>
        <Field label="Product">
          <select style={S.select} value={form.product} onChange={e=>set("product",e.target.value)}>
            {PRODUCTS.map(p=><option key={p}>{p}</option>)}
          </select>
        </Field>
        <Field label="Status">
          <select style={S.select} value={form.status} onChange={e=>set("status",e.target.value)}>
            {STATUSES.map(s=><option key={s}>{s}</option>)}
          </select>
        </Field>
        <Field label="Size">
          <select style={S.select} value={form.size} onChange={e=>set("size",e.target.value)}>
            {["XS","S","M","L","XL","XXL","One Size"].map(s=><option key={s}>{s}</option>)}
          </select>
        </Field>
        <Field label="Color">
          <input style={S.input} value={form.color} onChange={e=>set("color",e.target.value)} placeholder="e.g. Black, White"/>
        </Field>
        <Field label="City">
          <select style={S.select} value={form.city} onChange={e=>set("city",e.target.value)}>
            <option value="">Select city</option>
            {CITIES.map(c=><option key={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Price (MAD)">
          <input style={S.input} type="number" value={form.price} onChange={e=>set("price",Number(e.target.value))} placeholder="0"/>
        </Field>
        <Field label="Date">
          <input style={S.input} type="date" value={form.date} onChange={e=>set("date",e.target.value)}/>
        </Field>
      </div>
      <Field label="Notes">
        <textarea style={{...S.input, resize:"vertical", minHeight:60}} value={form.notes} onChange={e=>set("notes",e.target.value)} placeholder="Any extra notes..."/>
      </Field>
      <Field label="Design Image">
        <div style={{border:"2px dashed #E5E7EB",borderRadius:10,padding:16,textAlign:"center",cursor:"pointer",background:"#FAFAFA"}} onClick={()=>fileRef.current.click()}>
          {preview ? <img src={preview} alt="design" style={{maxHeight:120, borderRadius:8, maxWidth:"100%"}}/> :
            <div style={{color:"#9CA3AF"}}><Icon name="upload" size={24}/><p style={{margin:"8px 0 0",fontSize:13}}>Click to upload design</p></div>
          }
          <input ref={fileRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleFile}/>
        </div>
      </Field>
      <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:8}}>
        <button onClick={onClose} style={{...S.btn,...S.btnSecondary}}>Cancel</button>
        <button onClick={()=>onSave({...form, id:initial?.id||uid()})} style={{...S.btn,...S.btnPrimary}}>Save Order</button>
      </div>
    </div>
  );
}

// ─── ORDERS PAGE ─────────────────────────────────────────────────────────────
function OrdersPage({ orders, setOrders, clients }) {
  const [view, setView] = useState("table");
  const [modal, setModal] = useState(false);
  const [editOrder, setEditOrder] = useState(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [invoiceOrder, setInvoiceOrder] = useState(null);
  const [dragItem, setDragItem] = useState(null);

  function saveOrder(o){
    setOrders(prev => prev.find(x=>x.id===o.id) ? prev.map(x=>x.id===o.id?o:x) : [...prev,o]);
    setModal(false); setEditOrder(null);
  }
  function deleteOrder(id){ setOrders(prev=>prev.filter(o=>o.id!==id)); }

  const filtered = orders.filter(o=>{
    const q = search.toLowerCase();
    return (!q || o.client.toLowerCase().includes(q) || o.product.toLowerCase().includes(q) || o.city.toLowerCase().includes(q))
      && (!filterStatus || o.status===filterStatus)
      && (!filterCity || o.city===filterCity);
  });

  // Kanban drag-drop
  function onDragStart(e, order){ setDragItem(order); e.dataTransfer.effectAllowed="move"; }
  function onDrop(e, status){
    e.preventDefault();
    if(dragItem && dragItem.status!==status){
      setOrders(prev=>prev.map(o=>o.id===dragItem.id?{...o,status}:o));
    }
    setDragItem(null);
  }
  function onDragOver(e){ e.preventDefault(); e.dataTransfer.dropEffect="move"; }

  return (
    <div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20,flexWrap:"wrap",gap:10}}>
        <div>
          <h2 style={{margin:0,fontSize:20,fontWeight:700}}>Orders</h2>
          <p style={{margin:"2px 0 0",color:"#9CA3AF",fontSize:13}}>{filtered.length} orders</p>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
          <div style={{display:"flex",border:"1px solid #E5E7EB",borderRadius:8,overflow:"hidden"}}>
            {[["table","Table"],["kanban","Kanban"]].map(([v,l])=>(
              <button key={v} onClick={()=>setView(v)} style={{...S.btn, borderRadius:0, padding:"7px 14px", border:"none", background:view===v?"#18181B":"transparent", color:view===v?"#fff":"#6B7280"}}>
                <Icon name={v} size={14}/><span style={{fontSize:13}}>{l}</span>
              </button>
            ))}
          </div>
          <button onClick={()=>{setEditOrder(null);setModal(true);}} style={{...S.btn,...S.btnPrimary}}><Icon name="plus" size={15}/>New Order</button>
        </div>
      </div>

      {/* Filters */}
      <div style={{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"}}>
        <div style={{position:"relative",flex:"1",minWidth:180}}>
          <span style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF"}}><Icon name="search" size={15}/></span>
          <input style={{...S.input,paddingLeft:32}} placeholder="Search orders…" value={search} onChange={e=>setSearch(e.target.value)}/>
        </div>
        <select style={{...S.select,width:"auto",minWidth:140}} value={filterStatus} onChange={e=>setFilterStatus(e.target.value)}>
          <option value="">All Statuses</option>
          {STATUSES.map(s=><option key={s}>{s}</option>)}
        </select>
        <select style={{...S.select,width:"auto",minWidth:130}} value={filterCity} onChange={e=>setFilterCity(e.target.value)}>
          <option value="">All Cities</option>
          {CITIES.map(c=><option key={c}>{c}</option>)}
        </select>
      </div>

      {view === "table" && (
        <div style={S.card}>
          <div style={{overflowX:"auto"}}>
            <table style={S.table}>
              <thead>
                <tr>
                  {["Client","Phone","Product","Size/Color","City","Price","Status","Date","Actions"].map(h=><th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {filtered.map(o=>(
                  <tr key={o.id} style={{transition:"background 0.1s"}} onMouseEnter={e=>e.currentTarget.style.background="#FAFAFA"} onMouseLeave={e=>e.currentTarget.style.background=""}>
                    <td style={S.td}>
                      <div style={{display:"flex",alignItems:"center",gap:8}}>
                        {o.design && <img src={o.design} alt="" style={{width:28,height:28,borderRadius:6,objectFit:"cover",border:"1px solid #EBEBEB"}}/>}
                        <span style={{fontWeight:600}}>{o.client}</span>
                      </div>
                    </td>
                    <td style={S.td}>
                      <div style={{display:"flex",alignItems:"center",gap:6}}>
                        <a href={`https://wa.me/212${o.phone.slice(1)}`} target="_blank" rel="noreferrer" style={{color:"#25D366",display:"flex"}}><Icon name="whatsapp" size={15}/></a>
                        <span style={{fontSize:12.5,color:"#6B7280"}}>{o.phone}</span>
                      </div>
                    </td>
                    <td style={S.td}>{o.product}</td>
                    <td style={{...S.td,color:"#6B7280"}}>{o.size} / {o.color}</td>
                    <td style={S.td}>{o.city}</td>
                    <td style={S.td}><span style={{fontWeight:700}}>{o.price} MAD</span></td>
                    <td style={S.td}><StatusBadge status={o.status}/></td>
                    <td style={{...S.td,color:"#9CA3AF",fontSize:12.5}}>{o.date}</td>
                    <td style={S.td}>
                      <div style={{display:"flex",gap:4}}>
                        <button onClick={()=>{setEditOrder(o);setModal(true);}} style={{...S.btn,padding:"5px 8px",background:"transparent",border:"1px solid #E5E7EB",color:"#6B7280"}}><Icon name="edit" size={13}/></button>
                        <button onClick={()=>setInvoiceOrder(o)} style={{...S.btn,padding:"5px 8px",background:"transparent",border:"1px solid #E5E7EB",color:"#6B7280"}}><Icon name="invoice" size={13}/></button>
                        <button onClick={()=>deleteOrder(o.id)} style={{...S.btn,padding:"5px 8px",background:"transparent",border:"1px solid #FECDD3",color:"#BE123C"}}><Icon name="trash" size={13}/></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length===0 && (
                  <tr><td colSpan={9} style={{...S.td,textAlign:"center",color:"#9CA3AF",padding:32}}>No orders found</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {view === "kanban" && (
        <div style={{display:"flex",gap:12,overflowX:"auto",paddingBottom:8}}>
          {STATUSES.map(status=>{
            const colOrders = filtered.filter(o=>o.status===status);
            const c = STATUS_COLORS[status];
            return (
              <div key={status} style={{...S.kanbanCol, minWidth:220}}
                onDrop={e=>onDrop(e,status)} onDragOver={onDragOver}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
                  <span style={{...S.badge,background:c.bg,color:c.text,fontSize:11.5}}>{status}</span>
                  <span style={{fontSize:12,color:"#9CA3AF",fontWeight:600}}>{colOrders.length}</span>
                </div>
                {colOrders.map(o=>(
                  <div key={o.id} style={S.kanbanCard} draggable onDragStart={e=>onDragStart(e,o)}>
                    {o.design && <img src={o.design} alt="" style={{width:"100%",height:80,objectFit:"cover",borderRadius:6,marginBottom:8}}/>}
                    <p style={{margin:"0 0 4px",fontWeight:700,fontSize:13}}>{o.client}</p>
                    <p style={{margin:"0 0 6px",color:"#9CA3AF",fontSize:12}}>{o.product} · {o.size} · {o.color}</p>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <span style={{fontWeight:700,fontSize:13,color:"#18181B"}}>{o.price} MAD</span>
                      <a href={`https://wa.me/212${o.phone.slice(1)}`} target="_blank" rel="noreferrer" style={{color:"#25D366",display:"flex"}}><Icon name="whatsapp" size={16}/></a>
                    </div>
                    <p style={{margin:"6px 0 0",fontSize:11.5,color:"#9CA3AF"}}>{o.city} · {o.date}</p>
                    <div style={{display:"flex",gap:4,marginTop:8}}>
                      <button onClick={()=>{setEditOrder(o);setModal(true);}} style={{...S.btn,padding:"4px 8px",flex:1,justifyContent:"center",background:"#F5F5F5",border:"none",color:"#374151",fontSize:12}}>Edit</button>
                      <button onClick={()=>deleteOrder(o.id)} style={{...S.btn,padding:"4px 8px",background:"#FFF1F2",border:"none",color:"#BE123C",fontSize:12}}>Del</button>
                    </div>
                  </div>
                ))}
                {colOrders.length===0 && <div style={{textAlign:"center",color:"#D1D5DB",padding:"20px 0",fontSize:12}}>Drop here</div>}
              </div>
            );
          })}
        </div>
      )}

      <Modal open={modal} onClose={()=>{setModal(false);setEditOrder(null);}} title={editOrder?"Edit Order":"New Order"} width={600}>
        <OrderForm initial={editOrder} onSave={saveOrder} onClose={()=>{setModal(false);setEditOrder(null);}} clients={clients}/>
      </Modal>

      <Modal open={!!invoiceOrder} onClose={()=>setInvoiceOrder(null)} title="Invoice" width={440}>
        {invoiceOrder && <InvoiceView order={invoiceOrder} onClose={()=>setInvoiceOrder(null)}/>}
      </Modal>
    </div>
  );
}

// ─── INVOICE VIEW ─────────────────────────────────────────────────────────────
function InvoiceView({ order, onClose }) {
  return (
    <div>
      <div style={{textAlign:"center",marginBottom:20,paddingBottom:20,borderBottom:"1px solid #F0F0F0"}}>
        <div style={{width:40,height:40,background:"#18181B",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:18,margin:"0 auto 8px"}}>P</div>
        <h3 style={{margin:0,fontSize:16,fontWeight:700}}>PODflow</h3>
        <p style={{margin:"2px 0 0",color:"#9CA3AF",fontSize:12}}>Invoice #{order.id.toUpperCase()}</p>
      </div>
      <table style={{width:"100%",marginBottom:16}}>
        {[
          ["Client",order.client],["Phone",order.phone],["City",order.city],
          ["Product",`${order.product} (${order.size}, ${order.color})`],
          ["Date",order.date],["Status",order.status],
        ].map(([k,v])=>(
          <tr key={k}>
            <td style={{padding:"6px 0",color:"#9CA3AF",fontSize:13,width:100}}>{k}</td>
            <td style={{padding:"6px 0",fontSize:13,fontWeight:500}}>{v}</td>
          </tr>
        ))}
      </table>
      <div style={{background:"#F8F7F5",borderRadius:10,padding:"14px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
        <span style={{fontWeight:600}}>Total</span>
        <span style={{fontSize:20,fontWeight:800}}>{order.price} MAD</span>
      </div>
      {order.notes && <p style={{fontSize:12.5,color:"#9CA3AF",margin:"0 0 12px"}}>Notes: {order.notes}</p>}
      <div style={{display:"flex",gap:8}}>
        <a href={`https://wa.me/212${order.phone.slice(1)}?text=Hello ${order.client}, your order (${order.product}) is ${order.status}. Total: ${order.price} MAD`} target="_blank" rel="noreferrer"
          style={{...S.btn,...S.btnGreen,flex:1,justifyContent:"center",textDecoration:"none"}}>
          <Icon name="whatsapp" size={15}/>Send via WhatsApp
        </a>
        <button onClick={onClose} style={{...S.btn,...S.btnSecondary}}>Close</button>
      </div>
    </div>
  );
}

// ─── TASKS PAGE ───────────────────────────────────────────────────────────────
const TASK_STATUSES = ["To Do","Doing","Done"];
const TASK_COLORS = { "To Do":{ bg:"#EEF2FF", text:"#4338CA", dot:"#6366F1" }, "Doing":{ bg:"#FEF3C7", text:"#92400E", dot:"#F59E0B" }, "Done":{ bg:"#ECFDF5", text:"#065F46", dot:"#10B981" } };

function TasksPage({ tasks, setTasks, orders }) {
  const [modal, setModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [dragTask, setDragTask] = useState(null);
  const [form, setForm] = useState({ title:"", status:"To Do", deadline:"", orderId:"" });

  function openNew(){ setForm({ title:"", status:"To Do", deadline:"", orderId:"" }); setEditTask(null); setModal(true); }
  function openEdit(t){ setForm(t); setEditTask(t); setModal(true); }

  function saveTask(){
    const t = {...form, id: editTask?.id||uid()};
    setTasks(prev=>prev.find(x=>x.id===t.id)?prev.map(x=>x.id===t.id?t:x):[...prev,t]);
    setModal(false);
  }

  function deleteTask(id){ setTasks(prev=>prev.filter(t=>t.id!==id)); }

  function onDragStart(e,task){ setDragTask(task); }
  function onDrop(e,status){ e.preventDefault(); if(dragTask && dragTask.status!==status){ setTasks(prev=>prev.map(t=>t.id===dragTask.id?{...t,status}:t)); } setDragTask(null); }
  function onDragOver(e){ e.preventDefault(); }

  return (
    <div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20}}>
        <div>
          <h2 style={{margin:0,fontSize:20,fontWeight:700}}>Tasks</h2>
          <p style={{margin:"2px 0 0",color:"#9CA3AF",fontSize:13}}>{tasks.filter(t=>t.status!=="Done").length} pending</p>
        </div>
        <button onClick={openNew} style={{...S.btn,...S.btnPrimary}}><Icon name="plus" size={15}/>New Task</button>
      </div>

      <div style={{display:"flex",gap:12}}>
        {TASK_STATUSES.map(status=>{
          const colTasks = tasks.filter(t=>t.status===status);
          const c = TASK_COLORS[status];
          return (
            <div key={status} style={{...S.kanbanCol,flex:1,minWidth:200}} onDrop={e=>onDrop(e,status)} onDragOver={onDragOver}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
                <span style={{...S.badge,background:c.bg,color:c.text,fontSize:12}}>{status}</span>
                <span style={{fontSize:12,color:"#9CA3AF",fontWeight:600}}>{colTasks.length}</span>
              </div>
              {colTasks.map(t=>{
                const linkedOrder = orders.find(o=>o.id===t.orderId);
                const overdue = t.deadline && new Date(t.deadline)<new Date() && t.status!=="Done";
                return (
                  <div key={t.id} style={{...S.kanbanCard, border:`1px solid ${overdue?"#FECDD3":"#EBEBEB"}`}}
                    draggable onDragStart={e=>onDragStart(e,t)}>
                    <p style={{margin:"0 0 6px",fontWeight:600,fontSize:13.5}}>{t.title}</p>
                    {t.deadline && <p style={{margin:"0 0 4px",fontSize:11.5,color:overdue?"#BE123C":"#9CA3AF"}}>Due: {t.deadline}</p>}
                    {linkedOrder && <p style={{margin:"0 0 8px",fontSize:11.5,color:"#6366F1"}}>→ {linkedOrder.client} ({linkedOrder.product})</p>}
                    <div style={{display:"flex",gap:4,marginTop:8}}>
                      <button onClick={()=>openEdit(t)} style={{...S.btn,padding:"4px 8px",flex:1,justifyContent:"center",background:"#F5F5F5",border:"none",color:"#374151",fontSize:12}}>Edit</button>
                      <button onClick={()=>deleteTask(t.id)} style={{...S.btn,padding:"4px 8px",background:"#FFF1F2",border:"none",color:"#BE123C",fontSize:12}}>Del</button>
                    </div>
                  </div>
                );
              })}
              {colTasks.length===0 && <div style={{textAlign:"center",color:"#D1D5DB",padding:"20px 0",fontSize:12}}>Drop here</div>}
            </div>
          );
        })}
      </div>

      <Modal open={modal} onClose={()=>setModal(false)} title={editTask?"Edit Task":"New Task"} width={440}>
        <Field label="Title">
          <input style={S.input} value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} placeholder="Task description"/>
        </Field>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <Field label="Status">
            <select style={S.select} value={form.status} onChange={e=>setForm(f=>({...f,status:e.target.value}))}>
              {TASK_STATUSES.map(s=><option key={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Deadline">
            <input style={S.input} type="date" value={form.deadline} onChange={e=>setForm(f=>({...f,deadline:e.target.value}))}/>
          </Field>
        </div>
        <Field label="Link to Order (optional)">
          <select style={S.select} value={form.orderId||""} onChange={e=>setForm(f=>({...f,orderId:e.target.value}))}>
            <option value="">No order</option>
            {orders.map(o=><option key={o.id} value={o.id}>{o.client} — {o.product}</option>)}
          </select>
        </Field>
        <div style={{display:"flex",gap:8,justifyContent:"flex-end"}}>
          <button onClick={()=>setModal(false)} style={{...S.btn,...S.btnSecondary}}>Cancel</button>
          <button onClick={saveTask} style={{...S.btn,...S.btnPrimary}}>Save Task</button>
        </div>
      </Modal>
    </div>
  );
}

// ─── CLIENTS PAGE ─────────────────────────────────────────────────────────────
function ClientsPage({ clients, setClients, orders }) {
  const [modal, setModal] = useState(false);
  const [editClient, setEditClient] = useState(null);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ name:"", phone:"", city:"", notes:"" });

  function openNew(){ setForm({ name:"", phone:"", city:"", notes:"" }); setEditClient(null); setModal(true); }
  function openEdit(c){ setForm(c); setEditClient(c); setModal(true); }

  function saveClient(){
    const c = {...form, id:editClient?.id||uid()};
    setClients(prev=>prev.find(x=>x.id===c.id)?prev.map(x=>x.id===c.id?c:x):[...prev,c]);
    setModal(false);
  }

  function deleteClient(id){ setClients(prev=>prev.filter(c=>c.id!==id)); }

  const filtered = clients.filter(c=>{
    const q = search.toLowerCase();
    return !q || c.name.toLowerCase().includes(q) || c.phone.includes(q) || c.city.toLowerCase().includes(q);
  });

  function getOrderCount(name){ return orders.filter(o=>o.client===name).length; }
  function getTotalSpent(name){ return orders.filter(o=>o.client===name).reduce((s,o)=>s+o.price,0); }

  return (
    <div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20}}>
        <div>
          <h2 style={{margin:0,fontSize:20,fontWeight:700}}>Clients</h2>
          <p style={{margin:"2px 0 0",color:"#9CA3AF",fontSize:13}}>{filtered.length} clients</p>
        </div>
        <button onClick={openNew} style={{...S.btn,...S.btnPrimary}}><Icon name="plus" size={15}/>New Client</button>
      </div>

      <div style={{position:"relative",marginBottom:16,maxWidth:360}}>
        <span style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF"}}><Icon name="search" size={15}/></span>
        <input style={{...S.input,paddingLeft:32}} placeholder="Search clients…" value={search} onChange={e=>setSearch(e.target.value)}/>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:14}}>
        {filtered.map(c=>{
          const initials = c.name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
          const oCount = getOrderCount(c.name);
          const spent = getTotalSpent(c.name);
          return (
            <div key={c.id} style={{...S.card, padding:"18px 20px"}}>
              <div style={{display:"flex",alignItems:"flex-start",gap:12,marginBottom:12}}>
                <div style={{width:40,height:40,borderRadius:"50%",background:"#EEF2FF",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:14,color:"#4338CA",flexShrink:0}}>{initials}</div>
                <div style={{flex:1,minWidth:0}}>
                  <p style={{margin:0,fontWeight:700,fontSize:14}}>{c.name}</p>
                  <p style={{margin:"2px 0 0",fontSize:12.5,color:"#9CA3AF"}}>{c.city}</p>
                </div>
                <a href={`https://wa.me/212${c.phone.slice(1)}`} target="_blank" rel="noreferrer" style={{color:"#25D366",display:"flex"}}><Icon name="whatsapp" size={18}/></a>
              </div>
              <div style={{display:"flex",gap:8,marginBottom:10}}>
                <div style={{flex:1,background:"#F8F7F5",borderRadius:8,padding:"8px 10px",textAlign:"center"}}>
                  <p style={{margin:0,fontWeight:700,fontSize:16}}>{oCount}</p>
                  <p style={{margin:"1px 0 0",fontSize:11,color:"#9CA3AF"}}>Orders</p>
                </div>
                <div style={{flex:1,background:"#F8F7F5",borderRadius:8,padding:"8px 10px",textAlign:"center"}}>
                  <p style={{margin:0,fontWeight:700,fontSize:14}}>{spent.toLocaleString()}</p>
                  <p style={{margin:"1px 0 0",fontSize:11,color:"#9CA3AF"}}>MAD Spent</p>
                </div>
              </div>
              <p style={{fontSize:12.5,color:"#6B7280",margin:"0 0 10px",fontStyle:c.notes?"normal":"italic"}}>{c.notes||"No notes"}</p>
              <div style={{display:"flex",gap:8,borderTop:"1px solid #F3F4F6",paddingTop:10}}>
                <button onClick={()=>openEdit(c)} style={{...S.btn,...S.btnSecondary,flex:1,justifyContent:"center",fontSize:12}}><Icon name="edit" size={13}/>Edit</button>
                <button onClick={()=>deleteClient(c.id)} style={{...S.btn,...S.btnDanger,fontSize:12}}><Icon name="trash" size={13}/></button>
              </div>
            </div>
          );
        })}
        {filtered.length===0 && <p style={{color:"#9CA3AF",gridColumn:"1/-1",textAlign:"center",padding:32}}>No clients found</p>}
      </div>

      <Modal open={modal} onClose={()=>setModal(false)} title={editClient?"Edit Client":"New Client"} width={420}>
        <Field label="Name"><input style={S.input} value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="Full name"/></Field>
        <Field label="Phone"><input style={S.input} value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} placeholder="06xxxxxxxx"/></Field>
        <Field label="City">
          <select style={S.select} value={form.city} onChange={e=>setForm(f=>({...f,city:e.target.value}))}>
            <option value="">Select city</option>
            {CITIES.map(c=><option key={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Notes"><textarea style={{...S.input,resize:"vertical",minHeight:60}} value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))} placeholder="Notes…"/></Field>
        <div style={{display:"flex",gap:8,justifyContent:"flex-end"}}>
          <button onClick={()=>setModal(false)} style={{...S.btn,...S.btnSecondary}}>Cancel</button>
          <button onClick={saveClient} style={{...S.btn,...S.btnPrimary}}>Save Client</button>
        </div>
      </Modal>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [authed, setAuthed] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [orders, setOrders] = useState(INIT_ORDERS);
  const [tasks, setTasks] = useState(INIT_TASKS);
  const [clients, setClients] = useState(INIT_CLIENTS);
  const [mobileNav, setMobileNav] = useState(false);

  const NAV = [
    { id:"dashboard", label:"Dashboard", icon:"dashboard" },
    { id:"orders",    label:"Orders",    icon:"orders" },
    { id:"tasks",     label:"Tasks",     icon:"tasks" },
    { id:"clients",   label:"Clients",   icon:"clients" },
  ];

  if (!authed) return <><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/><LoginPage onLogin={()=>setAuthed(true)}/></>;

  const isMobile = window.innerWidth < 640;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <div style={S.app}>
        {/* Sidebar — desktop */}
        {!isMobile && (
          <div style={{...S.sidebar, ...(sidebarOpen?{}:S.sidebarCollapsed)}}>
            <div style={S.logo}>
              <div style={S.logoMark}>P</div>
              {sidebarOpen && <span style={S.logoText}>PODflow</span>}
            </div>
            {NAV.map(n=>(
              <div key={n.id} onClick={()=>setPage(n.id)} style={{...S.navItem,...(page===n.id?S.navItemActive:{})}}>
                <span style={{display:"flex",flexShrink:0}}><Icon name={n.icon} size={17}/></span>
                {sidebarOpen && <span>{n.label}</span>}
              </div>
            ))}
            <div style={{flex:1}}/>
            <div onClick={()=>setAuthed(false)} style={{...S.navItem,color:"#9CA3AF",marginTop:"auto"}}>
              <span style={{display:"flex",flexShrink:0}}><Icon name="logout" size={17}/></span>
              {sidebarOpen && <span>Logout</span>}
            </div>
          </div>
        )}

        <div style={S.main}>
          <div style={S.topbar}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              {!isMobile && (
                <button onClick={()=>setSidebarOpen(v=>!v)} style={{...S.btn,padding:"6px 8px",background:"transparent",border:"1px solid #E5E7EB",color:"#6B7280"}}>
                  <Icon name="menu" size={16}/>
                </button>
              )}
              {isMobile && (
                <button onClick={()=>setMobileNav(v=>!v)} style={{...S.btn,padding:"6px 8px",background:"transparent",border:"1px solid #E5E7EB",color:"#6B7280"}}>
                  <Icon name="menu" size={16}/>
                </button>
              )}
              <span style={{fontWeight:700,fontSize:15,letterSpacing:"-0.3px"}}>
                {isMobile ? "PODflow" : NAV.find(n=>n.id===page)?.label}
              </span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <div style={{width:32,height:32,borderRadius:"50%",background:"#18181B",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:13}}>A</div>
            </div>
          </div>

          {/* Mobile nav drawer */}
          {isMobile && mobileNav && (
            <div style={{position:"fixed",inset:0,zIndex:500,display:"flex"}}>
              <div style={{width:220,background:"#fff",borderRight:"1px solid #EBEBEB",padding:"24px 0",display:"flex",flexDirection:"column",boxShadow:"4px 0 20px rgba(0,0,0,0.08)"}}>
                <div style={{...S.logo,marginBottom:8}}>
                  <div style={S.logoMark}>P</div>
                  <span style={S.logoText}>PODflow</span>
                </div>
                {NAV.map(n=>(
                  <div key={n.id} onClick={()=>{setPage(n.id);setMobileNav(false);}} style={{...S.navItem,...(page===n.id?S.navItemActive:{})}}>
                    <Icon name={n.icon} size={17}/><span>{n.label}</span>
                  </div>
                ))}
                <div style={{flex:1}}/>
                <div onClick={()=>setAuthed(false)} style={{...S.navItem,color:"#9CA3AF"}}>
                  <Icon name="logout" size={17}/><span>Logout</span>
                </div>
              </div>
              <div style={{flex:1,background:"rgba(0,0,0,0.3)"}} onClick={()=>setMobileNav(false)}/>
            </div>
          )}

          {/* Mobile bottom nav */}
          {isMobile && (
            <div style={{position:"fixed",bottom:0,left:0,right:0,background:"#fff",borderTop:"1px solid #EBEBEB",display:"flex",zIndex:200,padding:"8px 0 16px"}}>
              {NAV.map(n=>(
                <div key={n.id} onClick={()=>setPage(n.id)} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:3,cursor:"pointer",color:page===n.id?"#18181B":"#9CA3AF",fontSize:10,fontWeight:page===n.id?700:400}}>
                  <Icon name={n.icon} size={20}/>
                  {n.label}
                </div>
              ))}
            </div>
          )}

          <div style={{...S.content, paddingBottom: isMobile ? 80 : 24}}>
            {page==="dashboard" && <Dashboard orders={orders} tasks={tasks}/>}
            {page==="orders"    && <OrdersPage orders={orders} setOrders={setOrders} clients={clients}/>}
            {page==="tasks"     && <TasksPage tasks={tasks} setTasks={setTasks} orders={orders}/>}
            {page==="clients"   && <ClientsPage clients={clients} setClients={setClients} orders={orders}/>}
          </div>
        </div>
      </div>
    </>
  );
}