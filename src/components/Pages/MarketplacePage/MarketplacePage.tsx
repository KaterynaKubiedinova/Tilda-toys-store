'use client'

import ProductItem from '@/components/Products/Item/ProductItem';
import React, { useEffect } from 'react';
import styles from "./MarketplacePage.module.scss";
import { Product } from '@/types/productTypes';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectAllProducts } from '@/lib/Features/products/productsSlice';
import { getAllProducts } from '@/app/tools/services';

const MarketplacePage = () => {
	const allProducts = useAppSelector(selectAllProducts);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, [])
	
	return (
		<div className={styles.marketplaceBlock}>
			{allProducts && allProducts.map((product: Product) => (
				<ProductItem key={product.id} product={product} />
		))}
		</div>
	);
}

export default MarketplacePage;
