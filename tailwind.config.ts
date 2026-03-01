
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Space Grotesk', 'sans-serif'],
				display: ['Orbitron', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				sanskrit: ['Tiro Devanagari Sanskrit', 'serif'],
			},
			colors: {
				'base-bg': '#030305',
				surface: '#0F111A',
				'primary-green': '#00FF41',
				'cyber-blue': '#0DF0E3',
				'funky-accent': '#FF003C',
				'text-base': '#E0E6ED',
				'text-muted': '#6B7280',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: '#00FF41',
				background: '#030305',
				foreground: '#E0E6ED',
				primary: {
					DEFAULT: '#00FF41',
					foreground: '#030305'
				},
				secondary: {
					DEFAULT: '#0DF0E3',
					foreground: '#030305'
				},
				destructive: {
					DEFAULT: '#FF003C',
					foreground: '#E0E6ED'
				},
				muted: {
					DEFAULT: '#0F111A',
					foreground: '#6B7280'
				},
				accent: {
					DEFAULT: '#FF003C',
					foreground: '#E0E6ED'
				},
				popover: {
					DEFAULT: '#0F111A',
					foreground: '#E0E6ED'
				},
				card: {
					DEFAULT: '#0F111A',
					foreground: '#E0E6ED'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'glow': {
          '0%, 100%': { 'text-shadow': '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary))' },
          '50%': { 'text-shadow': '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary))' },
        },
        'slide-in-from-top': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-out-to-top': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-30px)' },
        },
        'flip-out-left': {
          'from': { transform: 'rotateY(0deg)' },
          'to': { transform: 'rotateY(-90deg)' }
        },
        'flip-in-left': {
            'from': { transform: 'rotateY(90deg)' },
            'to': { transform: 'rotateY(0deg)' }
        },
        'flip-out-right': {
            'from': { transform: 'rotateY(0deg)' },
            'to': { transform: 'rotateY(90deg)' }
        },
        'flip-in-right': {
            'from': { transform: 'rotateY(-90deg)' },
            'to': { transform: 'rotateY(0deg)' }
        },
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-up': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        'floating': {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.5' },
          '90%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-10vh) rotate(360deg)', opacity: '0' },
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.3s ease-in-out forwards',
        'fade-out': 'fade-out 0.3s ease-in-out forwards',
        'glow': 'glow 3s ease-in-out infinite',
        'slide-in-from-top': 'slide-in-from-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-out-to-top': 'slide-out-to-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'flip-out-left': 'flip-out-left 0.5s ease-in-out forwards',
        'flip-in-left': 'flip-in-left 0.5s ease-in-out forwards',
        'flip-out-right': 'flip-out-right 0.5s ease-in-out forwards',
        'flip-in-right': 'flip-in-right 0.5s ease-in-out forwards',
        'marquee-left': 'marquee-left var(--duration, 40s) linear infinite',
        'marquee-up': 'marquee-up var(--duration, 40s) linear infinite',
        'floating': 'floating var(--duration, 20s) linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
