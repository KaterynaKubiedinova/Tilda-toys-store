'use client'

import React, { FC } from 'react';
import styles from "./ProductItem.module.scss";
import Image from 'next/image';
import { Product } from '@/types/productTypes';
import { useRouter } from 'next/navigation';
import { Routes } from '@/constants/routes';

const ProductItem: FC<{ product: Product }> = ({ product }) => {
	const router = useRouter()
	
	const openProduct = () => {
		router.push(`${Routes.Marketplace}/${product.id}`);
	}
	return (
		<div className={styles.itemCard}>
			<Image src={product.image} alt='product' width={250} height={350} onClick={openProduct}/>
			<p>{product.title}</p>
			<p>${product.price} USD</p>
			<button>Add to cart</button>
		</div>
	);
}

export default ProductItem;
