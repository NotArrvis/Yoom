'use client';
import { useGetUpcomingCalls } from '@/hooks/useGetUpcomingCall';

function UpcomingMeeting() {
	const { upcomingCalls, isLoading } = useGetUpcomingCalls();
	if (isLoading)
		return (
			<h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal animate-bounce duration-300 ease-in-out">
				Fetching your meetings
			</h2>
		);
	if (!upcomingCalls)
		return (
			<h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
				No upcoming meetings
			</h2>
		);

	const upcomingDate = upcomingCalls[0]?.state.startsAt;
	return (
		<h2 className="glassmorphism max-w-[400px] rounded py-2 text-center text-base font-normal">
			Upcoming Metting at:{' '}
			{upcomingDate?.toLocaleTimeString('pt-br', {
				timeStyle: 'short',
				localeMatcher: 'best fit',
				hourCycle: 'h24',
			})}{' '}
			of{' '}
			{upcomingDate?.toLocaleDateString('pt-br', {
				dateStyle: 'short',
			})}
		</h2>
	);
}

export default UpcomingMeeting;
