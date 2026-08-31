import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
			screens: { '2xl': '1400px' }
		},
		extend: {
			screens: {
				xs: '400px',
			},
			fontFamily: {
				sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['Orbitron', 'ui-sans-serif', 'sans-serif'],
				mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
				sanskrit: ['Tiro Devanagari Sanskrit', 'serif'],
			},
			fontSize: {
				// Fluid type scale — sizes track the viewport so nothing overflows
				// on a 320px phone or looks lost on a 27" display.
				'fluid-xs': 'clamp(0.7rem, 0.68rem + 0.1vw, 0.78rem)',
				'fluid-sm': 'clamp(0.8rem, 0.76rem + 0.2vw, 0.9rem)',
				'fluid-base': 'clamp(0.9rem, 0.85rem + 0.25vw, 1rem)',
				'fluid-lg': 'clamp(1.05rem, 0.98rem + 0.35vw, 1.25rem)',
				'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.7vw, 1.6rem)',
				'fluid-2xl': 'clamp(1.5rem, 1.25rem + 1.2vw, 2.25rem)',
				'fluid-3xl': 'clamp(1.9rem, 1.4rem + 2.2vw, 3.25rem)',
				'fluid-4xl': 'clamp(2.3rem, 1.5rem + 3.6vw, 4.75rem)',
			},
			colors: {
				'base-bg': 'hsl(var(--base-bg))',
				surface: 'hsl(var(--surface))',
				'surface-2': 'hsl(var(--surface-2))',
				'primary-green': 'hsl(var(--brand))',
				'cyber-blue': 'hsl(var(--brand-2))',
				'funky-accent': 'hsl(var(--brand-3))',
				'text-base': 'hsl(var(--text-base))',
				'text-muted': 'hsl(var(--text-muted))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--brand))',
				background: 'hsl(var(--base-bg))',
				foreground: 'hsl(var(--text-base))',
				primary: {
					DEFAULT: 'hsl(var(--brand))',
					foreground: 'hsl(var(--base-bg))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--brand-2))',
					foreground: 'hsl(var(--base-bg))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--brand-3))',
					foreground: 'hsl(var(--text-base))'
				},
				muted: {
					DEFAULT: 'hsl(var(--surface))',
					foreground: 'hsl(var(--text-muted))'
				},
				accent: {
					DEFAULT: 'hsl(var(--brand-3))',
					foreground: 'hsl(var(--text-base))'
				},
				popover: {
					DEFAULT: 'hsl(var(--surface))',
					foreground: 'hsl(var(--text-base))'
				},
				card: {
					DEFAULT: 'hsl(var(--surface))',
					foreground: 'hsl(var(--text-base))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'glow-sm': '0 0 12px hsl(var(--brand) / 0.35)',
				'glow': '0 0 24px hsl(var(--brand) / 0.28)',
				'glow-lg': '0 0 48px hsl(var(--brand) / 0.30)',
				'glow-blue': '0 0 24px hsl(var(--brand-2) / 0.35)',
				'glow-accent': '0 0 24px hsl(var(--brand-3) / 0.35)',
				'panel': '0 1px 0 0 hsl(var(--brand) / 0.08) inset, 0 18px 40px -24px rgba(0,0,0,0.9)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(16px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'glow': {
					'0%, 100%': { opacity: '0.75' },
					'50%': { opacity: '1' },
				},
				'marquee-left': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-50% - var(--gap, 1rem)))' },
				},
				'shimmer': {
					'100%': { transform: 'translateX(200%)' },
				},
				'sweep': {
					'0%': { transform: 'translateY(-120%)' },
					'100%': { transform: 'translateY(520%)' },
				},
				'blink': {
					'0%, 49%': { opacity: '1' },
					'50%, 100%': { opacity: '0' },
				},
				'pop-in': {
					'0%': { opacity: '0', transform: 'scale(0.94) translateY(8px)' },
					'100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
				'fade-in': 'fade-in 0.4s ease-out forwards',
				'glow': 'glow 3s ease-in-out infinite',
				'marquee-left': 'marquee-left var(--duration, 40s) linear infinite',
				'shimmer': 'shimmer 1.4s ease-in-out infinite',
				'sweep': 'sweep 3.5s linear infinite',
				'blink': 'blink 1.05s step-end infinite',
				'pop-in': 'pop-in 0.35s cubic-bezier(0.22,1,0.36,1) forwards',
			}
		}
	},
	plugins: [tailwindcssAnimate, typography],
} satisfies Config;
