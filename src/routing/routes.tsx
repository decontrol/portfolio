import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/Layout';
import HomePage from '@/pages/HomePage';
import ErrorPage from '@/pages/ErrorPage';
import ExperiencePage from '@/pages/ExperiencePage';
import TechStack from '@/pages/TechStack';

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> }, // "path: ''" is the default path so we can just replace it with "index: true"
			{ path: 'experience', element: <ExperiencePage /> },
			{ path: 'techs', element: <TechStack /> },
		],
	},
]);

export default router;
