import { useQuery } from '@tanstack/react-query';
import APIClient from '@/service/api-client';
import Job from '@/models/Job';

const apiClient = new APIClient<Job>('/jobs');
const useApi = () =>
	useQuery({
		queryKey: ['jobs'],
		queryFn: apiClient.getAll,
		staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
		gcTime: 10 * 60 * 1000, //24 hrs
	});

export default useApi;
