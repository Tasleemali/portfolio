/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {

		animation: {
		  shake: 'shake 0.5s ease-in-out',
		  shakeup :"shakeup  0.5s ease-in-out"
		},
		keyframes: {
		  shake: {
			'0%, 100%': { transform: 'translateX(0)' },
			'25%': { transform: 'translateX(-10px)' },
			'50%': { transform: 'translateX(10px)' },
			'75%': { transform: 'translateX(-10px)' },
		  },
		  shakeup: {
			'0%, 100%': { transform: 'translateY(0)' },
			'25%': { transform: 'translateY(-10px)' },
			'50%': { transform: 'translateY(10px)' },
			'75%': { transform: 'translateY(-10px)' },
		  },
		},

		
		boxShadow: {
		  'custom-shadow': '1px 1px 25px blue',
		  'customs-shadow': '1px 1px 25px',
		  'insta-shadow': '1px 1px 25px',
		},
		colors: {
			
		dark: "",
			
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [
	  require("tailwindcss-animate"),
	  // 👇 Add custom plugin for red glow text
	  function ({ addUtilities }) {
		addUtilities({
		  '.text-glow-red': {
			textShadow: '0 0 6px rgba(248, 113, 113, 0.7), 0 0 12px rgba(248, 113, 113, 0.6)',
		  },
		});
	  },
	],
  };
  