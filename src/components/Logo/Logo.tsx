import { Routes } from '@/constants/routes';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
	return (
		<div>
			<Link className="text-3xl font-bold" href={Routes.Home}>TILDA</Link>
		</div>
	);
}

export default Logo;