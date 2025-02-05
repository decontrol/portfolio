import { useEffect, useState } from 'react';
const useDate = () => {
	const [dateObject, setDateObject] = useState(new Date());
	const locale = 'en';

	useEffect(() => {
		const timerId = setInterval(() => setDateObject(new Date()), 60 * 1000);
		return () => clearInterval(timerId);
	}, []);

	const day = dateObject.toLocaleDateString(locale, { weekday: 'long' });
	const formattedDate = `${day}, ${dateObject.getDate()} ${dateObject.toLocaleDateString(locale, {
		month: 'long',
	})}`;

	const formattedYear = dateObject.getFullYear();

	const hour = dateObject.getHours();

	const greeting = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

	const formattedTime = dateObject.toLocaleTimeString(locale, {
		hour: 'numeric',
		hour12: true,
		minute: 'numeric',
	});

	return {
		formattedDate,
		formattedTime,
		formattedYear,
		greeting,
	};
};

export default useDate;
