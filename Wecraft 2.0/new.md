{
  "meta": {
    "name": "TRK Analytics Dashboard UI",
    "type": "Analytics / Creator Insights Dashboard",
    "style": "Minimal, editorial, high whitespace, data-focused",
    "density": "airy",
    "borderRadius": "lg (12px–16px)",
    "shadow": "almost flat, very subtle elevation"
  },

  "layout": {
    "structure": {
      "sidebar": "fixed left",
      "header": "top bar minimal",
      "content": "stacked sections with centered max-width",
      "padding": "32px outer, 24px inner"
    },
    "grid": {
      "desktop": "12 columns",
      "tablet": "8 columns",
      "mobile": "4 columns",
      "gutter": "24px"
    },
    "contentWidth": {
      "max": "1100px centered",
      "behavior": "fluid until xl, then centered"
    }
  },

  "responsive": {
    "breakpoints": {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    "behavior": {
      "sidebar": {
        "lg_up": "expanded with labels",
        "md_down": "collapsed to icons",
        "sm": "hidden behind drawer"
      },
      "stats": {
        "lg": "4 columns",
        "md": "2 columns",
        "sm": "stacked"
      },
      "chart": {
        "lg": "full width",
        "sm": "reduced height, simplified axis labels"
      },
      "table": {
        "md_down": "horizontal scroll",
        "sm": "card-based rows"
      }
    }
  },

  "sidebar": {
    "width": "240px expanded / 72px collapsed",
    "sections": [
      "logo",
      "discover",
      "tools",
      "finance"
    ],
    "groups": {
      "discover": ["Featured", "Most popular", "Categories", "Shuffle"],
      "tools": ["Analytics", "Create campaign", "Messages"],
      "finance": ["Income", "Expenses", "Invoices", "Wallet"]
    },
    "states": {
      "active": "primary accent (red text + subtle bg tint)",
      "hover": "light gray highlight",
      "default": "muted gray text"
    }
  },

  "header": {
    "elements": [
      "logo (TRK pill badge)",
      "search bar centered",
      "notification icon",
      "user avatar"
    ],
    "search": {
      "style": "minimal underline or soft input",
      "placeholder": "Search anything",
      "icon": "right-aligned"
    },
    "alignment": "balanced with strong center emphasis"
  },

  "profile_section": {
    "title": "Zara official",
    "actions": [
      "more options icon",
      "Follow / Following button"
    ],
    "button": {
      "style": "pill",
      "state": "filled primary when active"
    }
  },

  "stats": {
    "items": [
      "Followers",
      "Views",
      "Likes",
      "Comments"
    ],
    "layout": "inline grid separated by vertical dividers",
    "style": {
      "label": "small uppercase muted",
      "value": "large bold number",
      "alignment": "centered"
    }
  },

  "chart": {
    "type": "smooth area line chart",
    "style": {
      "line": "thin, smooth curve",
      "fill": "soft gradient fade to transparent",
      "grid": "very subtle vertical guides",
      "points": "hidden or minimal"
    },
    "color": "primary red",
    "height": "260–320px",
    "x_axis": "dates spaced evenly",
    "y_axis": "hidden or minimal ticks"
  },

  "table": {
    "columns": [
      "Post name",
      "Views",
      "Likes",
      "Comments",
      "Clicks"
    ],
    "row": {
      "elements": [
        "avatar",
        "post title",
        "metrics"
      ],
      "style": "clean rows, no heavy borders",
      "hover": "light gray background"
    }
  },

  "components": {
    "buttons": {
      "primary": {
        "bg": "primary-500",
        "text": "white",
        "radius": "full",
        "hover": "primary-600"
      },
      "ghost": {
        "text": "secondary-600",
        "hover": "secondary-100"
      }
    },

    "badges": {
      "pill": "rounded-full small padding"
    },

    "avatars": {
      "shape": "circle",
      "size": "28–36px"
    },

    "dividers": {
      "vertical": "thin gray line between stats",
      "horizontal": "very subtle separators"
    }
  },

  "typography": {
    "font": "Inter / Helvetica Neue style",
    "scale": {
      "page_title": "20–24px",
      "section_title": "16–18px",
      "body": "14px",
      "caption": "12px"
    },
    "weight": {
      "bold": 600,
      "medium": 500,
      "regular": 400
    },
    "letterSpacing": "slightly increased for labels"
  },

  "colors": {
    "primary": {
      "50": "#ffe5e5",
      "100": "#fcb3b3",
      "200": "#f98080",
      "300": "#f54d4d",
      "400": "#f21a1a",
      "500": "#d90f0f",
      "600": "#b30c0c",
      "700": "#8c0909",
      "800": "#660606",
      "900": "#400303"
    },

    "secondary": {
      "50": "#f7f7f7",
      "100": "#eeeeee",
      "200": "#e0e0e0",
      "300": "#cfcfcf",
      "400": "#b1b1b1",
      "500": "#9e9e9e",
      "600": "#7e7e7e",
      "700": "#626262",
      "800": "#3b3b3b",
      "900": "#1f1f1f"
    },

    "grays": {
      "bg": "#fafafa",
      "card": "#ffffff",
      "border": "#eaeaea",
      "text_primary": "#111111",
      "text_secondary": "#777777"
    },

    "accents": {
      "red_soft": "#f87171",
      "gradient_chart": "linear-gradient(180deg, rgba(217,15,15,0.25), rgba(217,15,15,0))"
    }
  },

  "dark_mode": {
    "background": "#121212",
    "card": "#1a1a1a",
    "text_primary": "#f5f5f5",
    "text_secondary": "#a3a3a3",
    "border": "#2a2a2a",
    "sidebar": "#161616",
    "hover": "#222222",
    "primary": "slightly desaturated red",
    "chart_fill": "rgba(255,80,80,0.2)"
  },

  "interactions": {
    "hover": "subtle color shift only (no heavy shadows)",
    "click": "opacity reduction",
    "transition": "150ms ease",
    "focus": "thin outline primary",
    "chart": "smooth draw animation"
  },

  "spacing": {
    "base": "4px",
    "section_gap": "32px",
    "element_gap": "16px",
    "tight_gap": "8px"
  },

  "final_prompt": "Design a minimal, clean analytics dashboard with strong emphasis on whitespace and data clarity. Use a red primary palette sparingly to highlight key actions and data visualizations, while keeping the rest of the interface neutral and calm. Structure the layout with a slim sidebar, a centered content area, and clear sections for profile, stats, charts, and tables. Ensure typography is lightweight and readable, with clear hierarchy. Keep interactions subtle and refined. Maintain consistency across light and dark modes by preserving layout and spacing while adjusting contrast and background tones. Use primary color only for emphasis, and rely on neutral tones for most UI elements."
}