'use client';

import React from 'react';

function HomePageDate() {
	const now = new Date();

	const time = now.toLocaleTimeString('pt-Br', {
		hour: '2-digit',
		minute: '2-digit',
		localeMatcher: 'best fit',
	});
	const date = new Intl.DateTimeFormat('pt-br', {
		dateStyle: 'full',
	}).format(now);
	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
			<p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
		</div>
	);
}

export default HomePageDate;
