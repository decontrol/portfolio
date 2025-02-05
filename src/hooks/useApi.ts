import { useQuery } from '@tanstack/react-query';
import APIClient from '@/service/api-client';
import ms from 'ms';
import Job from '@/models/Job';

const apiClient = new APIClient<Job>('/jobs');
const useApi = () =>
	useQuery({
		queryKey: ['jobs'],
		queryFn: apiClient.getAll,
		staleTime: ms('1d'), // 24 hrs
	});

export default useApi;
