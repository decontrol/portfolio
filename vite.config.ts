import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import Unfonts from 'unplugin-fonts/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		Unfonts({
			custom: {
				families: [
					{
						name: 'Lora',
						local: 'Lora',
						src: './public/fonts/Lora/Lora-Italic-VariableFont_wght.ttf',
					},
					{
						name: 'Assistant',
						local: 'Assistant',
						src: './public/fonts/Assistant/Assistant-VariableFont_wght.ttf',
					},
				],
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
