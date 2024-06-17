import React from 'react';
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import Image from 'next/image';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import Link from 'next/link';
import { Routes } from '@/constants/routes';

const Header = () => {
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
				</div>
			</div>
		</header>
	);
}

export default Header;
