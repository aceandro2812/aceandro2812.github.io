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
				sans: ['Inter', 'sans-serif'],
				display: ['Exo 2', 'sans-serif'],
				sanskrit: ['Sanskrit Text', 'serif'],
				serif: ['Playfair Display', 'serif'],
			},
			colors: {
				'book-bg': '#2a241e',
				'book-text': '#d4c8b0',
				'book-muted': '#b8a890',
				'book-accent': '#e6b800',
				'book-card': '#3a3530',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
