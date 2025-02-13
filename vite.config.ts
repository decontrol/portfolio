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
						src: './fonts/Lora/Lora-Italic-VariableFont_wght.ttf',
					},
					{
						name: 'Assistant',
						local: 'Assistant',
						src: './fonts/Assistant/Assistant-VariableFont_wght.ttf',
					},
					{
						name: 'Poppins',
						local: 'Poppins',
						src: './fonts/Poppins/Poppins-SemiBold.ttf',
					},
					{
						name: 'Lato',
						local: 'Lato',
						src: './fonts/Lato/Lato-Regular.ttf',
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
