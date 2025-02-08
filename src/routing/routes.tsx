import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/Layout';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'));
const TechStackPage = lazy(() => import('@/pages/TechStackPage'));

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'experience', element: <ExperiencePage /> },
			{ path: 'techs', element: <TechStackPage /> },
		],
	},
]);

export default router;
