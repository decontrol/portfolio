import { useQuery } from '@tanstack/react-query';
import APIClient from '@/service/api-client';
import ms from 'ms';
import Job from '@/models/Job';

const apiClient = new APIClient<Job>('/jobs');
const useJobsApi = () =>
	useQuery<Job[]>({
		queryKey: ['jobs'],
		queryFn: apiClient.getAll,
		staleTime: ms('1d'),
		gcTime: ms('2 days'),
	});

export default useJobsApi;
