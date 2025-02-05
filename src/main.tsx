import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import router from './routing/routes';
import { AnimatePresence } from 'motion/react';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AnimatePresence>
				<RouterProvider router={router} />
			</AnimatePresence>
		</QueryClientProvider>
	</StrictMode>
);
