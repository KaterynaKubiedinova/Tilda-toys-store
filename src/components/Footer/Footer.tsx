import React from 'react';
import styles from './Footer.module.scss';
import { FaFacebookSquare, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import { Routes } from '@/constants/routes';


const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerLinks}>
				<div className={styles.footerLinksChild}>
					<div><h3>Ordering</h3></div>
					<div><a href={Routes.All}>Shop all</a></div>
					<div><a>Shipping</a></div>
					<div><a>Returns</a></div>
				</div>
				<div className={styles.footerLinksChild}>
					<div><h4>Resources</h4></div>
					<div><a>FAQ</a></div>
					<div><a>Marketing resources</a></div>
					<div><a>Become a wholesale partner</a></div>
				</div>
				<div className={styles.footerLinksChild}>
					<div><h4>About</h4></div>
					<div><a>About us</a></div>
					<div><a>Contact</a></div>
				</div>
			</div>
			<div className={styles.footerSocial}>
				<Link href='#'>
					<FaYoutube />
				</Link>
				<Link href='#'>
					<FaInstagram />
				</Link>
				<Link href='#'>
					<FaFacebookSquare />
				</Link>
				<Link href='#'>
					<FaTiktok />
				</Link>
				
				

			</div>
			<div className={styles.footerText}>© 2024</div>
		</footer>
	);
}

export default Footer;