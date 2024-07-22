"use client"

import React, { useEffect, useState } from 'react';
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import { FaSearch, FaShoppingBag, FaUserCheck } from 'react-icons/fa';
import Link from 'next/link';
import { Routes } from '@/constants/routes';
import { FaUser } from 'react-icons/fa6';
import { IoLogOut } from 'react-icons/io5';
import { useAppDispatch } from '@/lib/hooks';
import { logoutUser } from '@/app/tools/apiService';

const Header = () => {
	const [token, setToken] = useState<string | null>(null)
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		const newToken = sessionStorage.getItem('AccessToken')
		setToken(newToken)
	}, [])

	const logout = () => {
		dispatch(logoutUser())
	}
	
	return (
		<header className={styles.header}>
			<div className={styles.headerOptions}>
				<div className={styles.headerLeft}>
					<div>
						<Logo/>
					</div>
					<div>
						<Link href={Routes.All}><span>Shop</span></Link>
					</div>
					<div>
						<Link href={Routes.AddProduct} className='flex items-center gap-1'><span>Add new toy</span></Link>
					</div>
					<div>
						<Link href={Routes.Order}><span>Create order</span></Link>
					</div>
				</div>
				<div className={styles.headerRight}>
					<Link href='/'>
						<FaSearch size={20} />
					</Link>
					<Link href='/'>
						<FaShoppingBag size={20} />
					</Link>
					<Link href={Routes.Authorisation}>
						{!token ? <FaUser size={20} /> : <FaUserCheck size={20}/>}
					</Link>
				</div>
				<div>
					<Link href='/'>
						<IoLogOut size={23} onClick={logout} />
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
