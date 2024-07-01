'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './ProductPage.module.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectProductByID } from '@/lib/Features/products/productsSlice';
import { getProductByID } from '@/app/tools/apiService';

type ProductPageProps = {
	id: string,
}
const ProductPage = ({ id }: ProductPageProps) => {
    const product = useAppSelector(selectProductByID);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProductByID(id));
    }, [])

	return (
		<div className={styles.itemContainer}>
            {product?.imageUrl ? <>
                <div className={styles.itemImage}>
                    <Image src={product.imageUrl} alt="Item Image" width={300} height={500} />
                </div>
                <div className={styles.itemDetails}>
                    <h2 className={styles.itemTitle}>{product.title}</h2>
                    <p className={styles.itemDescription}>{product.description}</p>
                    <p className={styles.itemPrice}>${product.price} USD</p>
                    <button className={styles.addToCart}>Add to Cart</button>
                </div>
            </> : <></>}
        </div>
	);
}

export default ProductPage;
