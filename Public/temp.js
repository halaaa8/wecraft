        const API_URL = "https://script.google.com/macros/s/AKfycbxpjR4S7PXwxTo81GfMZofKQ2HrnqAM65-3ESSa5FVB4BeZ574ifLPzaZn1rjJe8es/exec";

        document.addEventListener('DOMContentLoaded', async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const orderId = urlParams.get('id');
            const container = document.getElementById('order-container');

            if (!orderId) {
                container.innerHTML = '<div style="padding: 3rem; text-align: center; color: #ef4444;">Error: No order ID provided in URL.</div>';
                return;
            }

            container.innerHTML = '<div style="padding: 3rem; text-align: center; color: #4338ca;"><div class="loader" style="width: 24px; height: 24px; border: 3px solid #e0e7ff; border-top-color: #4338ca; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 1rem;"></div>Loading order details from database...</div>';

            // Add keyframes for loader
            if (!document.getElementById('loader-style')) {
                const style = document.createElement('style');
                style.id = 'loader-style';
                style.innerHTML = '@keyframes spin { to { transform: rotate(360deg); } }';
                document.head.appendChild(style);
            }

            try {
                const response = await fetch(API_URL);
                const result = await response.json();

                if (result && result.success && result.orders) {
                    const order = result.orders.find(o => o.id === orderId);
                    if (order) {
                        renderOrderDetails(order);
                    } else {
                        container.innerHTML = `<div style="padding: 3rem; text-align: center; color: #ef4444;">Error: Order with ID "${orderId}" not found.</div>`;
                    }
                } else {
                    container.innerHTML = '<div style="padding: 3rem; text-align: center; color: #ef4444;">Error: Failed to load orders from the database.</div>';
                }
            } catch (e) {
                console.error("Fetch Error:", e);
                container.innerHTML = '<div style="padding: 3rem; text-align: center; color: #ef4444;">Error connecting to the database. Check your internet connection.</div>';
            }
        });

        function renderOrderDetails(order) {
            const container = document.getElementById('order-container');
            
            // Map status to color
            const STATUS_COLORS = {
                "New": { bg: "#EEF2FF", text: "#4338CA", dot: "#6366F1" },
                "Design Ready": { bg: "#FFF7ED", text: "#C2410C", dot: "#F97316" },
                "In Production": { bg: "#FEF3C7", text: "#92400E", dot: "#F59E0B" },
                "Ready": { bg: "#ECFDF5", text: "#065F46", dot: "#10B981" },
                "Delivered": { bg: "#EFF6FF", text: "#1D4ED8", dot: "#3B82F6" },
                "Cancelled": { bg: "#FFF1F2", text: "#BE123C", dot: "#F43F5E" },
            };
            const sc = STATUS_COLORS[order.status] || { bg: "#F3F4F6", text: "#374151", dot: "#9CA3AF" };

            // Determine if items exist or fall back to old format
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
                            <div class="detail-row">
                                <div class="detail-label" style="display: flex; align-items: center; gap: 8px;">
                                    <div style="width: 16px; height: 16px; border-radius: 50%; background: ${c.hex || '#ccc'}; border: 1px solid #cbd5e1;"></div>
                                    ${c.name}
                                </div>
                                <div class="detail-value">
                                    Qty: ${c.qty} <span style="color: #cbd5e1; margin: 0 6px; font-weight: 400;">|</span> <span style="font-weight: 500; color: #64748b; font-size: 0.8rem;">PRINT:</span> <span style="color: #4338ca;">${c.printColor || 'Standard'}</span>
                                </div>
                            </div>
                        `).join('');
                    } else {
                        // Fallback to simple colors string if colorsData is missing
                        detailsHtml = `<div class="detail-row"><span class="detail-label">Colors</span><span class="detail-value">${order.colors || '-'}</span></div>`;
                    }
                } else {
                    const sd = item.sachetData || {};
                    detailsHtml = `
                        <div class="detail-row"><span class="detail-label">Color</span><span class="detail-value">${sd.color || '-'}</span></div>
                        <div class="detail-row"><span class="detail-label">Size</span><span class="detail-value">${sd.size || '-'}</span></div>
                        <div class="detail-row"><span class="detail-label">Quantity</span><span class="detail-value">${sd.qty || order.quantities || '-'} pcs</span></div>
                        <div class="detail-row"><span class="detail-label">Print</span><span class="detail-value" style="color: #4338ca;">${sd.print || '-'}</span></div>
                    `;
                }

                return `
                    <div class="item-card">
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
                designHtml = `
                    <div class="design-img-container">
                        <img src="${order.design}" class="design-img" alt="Order Design" id="design-image">
                        <button class="btn-download" onclick="downloadImage()">
                            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            Download Design
                        </button>
                    </div>
                `;
            } else {
                designHtml = `
                    <div class="design-img-container" style="padding: 4rem 2rem; display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 64px; height: 64px; background: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <svg width="32" height="32" fill="none" stroke="#94a3b8" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                        </div>
                        <div style="color: #64748b; font-weight: 600; font-size: 1.1rem;">No Design Attached</div>
                        <div style="color: #94a3b8; font-size: 0.9rem; margin-top: 0.25rem;">This order doesn't have an image file.</div>
                    </div>
                `;
            }

            container.innerHTML = `
                <div class="order-header">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <div style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.8; margin-bottom: 0.5rem; font-weight: 700;">Order ID: ${order.id || 'N/A'}</div>
                            <h1>${order.client || 'Unknown Client'}</h1>
                            <div style="opacity: 0.9; font-size: 0.95rem; display: flex; align-items: center; gap: 8px;">
                                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                Created on ${order.date || new Date().toLocaleDateString()}
                            </div>
                        </div>
                        <div class="badge" style="background: ${sc.bg}; color: ${sc.text}; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                            <span style="width: 8px; height: 8px; border-radius: 50%; background: ${sc.dot};"></span>
                            ${order.status || 'New'}
                        </div>
                    </div>
                </div>
                
                <div class="order-content">
                    <div>
                        <div class="section-title">Order Items</div>
                        ${itemsHtml}
                        
                        <div class="section-title" style="margin-top: 2.5rem;">Client Details</div>
                        <div class="client-info">
                            <div class="client-info-item">
                                <div class="icon-box">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div>
                                    <div style="font-size: 0.8rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Phone Number</div>
                                    <div style="font-weight: 700; color: #0f172a; margin-top: 2px;">
                                        ${order.phone ? `<a href="https://wa.me/212${String(order.phone).startsWith('0') ? String(order.phone).slice(1) : order.phone}" target="_blank" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 6px;">${order.phone} <svg width="14" height="14" viewBox="0 0 24 24" fill="#10b981"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>` : '-'}
                                    </div>
                                </div>
                            </div>
                            <div class="client-info-item">
                                <div class="icon-box">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
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
                        <div class="section-title">Design Preview</div>
                        ${designHtml}
                    </div>
                </div>
            `;
            
            // Set up download function
            window.downloadImage = function() {
                if(!order.design) return;
                
                // For base64 images this works directly
                const a = document.createElement('a');
                a.href = order.design;
                a.download = `Design_${(order.client || 'Client').replace(/\\s+/g, '_')}_${order.id || 'Order'}.png`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };
        }
