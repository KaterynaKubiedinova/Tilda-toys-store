"use client"

import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './AddProduct.module.scss';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectAllCategories } from '@/lib/Features/categories/categoriesSlice';
import { createProduct, getAllCategories } from '@/app/tools/services';
import { ProductDTO } from '@/types/productTypes';
import { useRouter } from 'next/navigation';
import { Routes } from '@/constants/routes';
import { selectNewProductId, refreshNewUserID } from '@/lib/Features/products/productsSlice';

const AddProductPage = () => {
	const [file, setFile] = useState('');
	const { register, handleSubmit, watch, formState: { errors } } = useForm<ProductDTO>();
	const allCategories = useAppSelector(selectAllCategories);
	const newProductID = useAppSelector(selectNewProductId);
	const dispatch = useAppDispatch();
	const router = useRouter();

	useEffect(() => {
		dispatch(getAllCategories());
	}, [])

	useEffect(() => {
		if (newProductID) {
			router.push(`${Routes.Marketplace}/${newProductID}`);
			dispatch(refreshNewUserID());
		}
	}, [newProductID])
	
	const onSubmit = (data: ProductDTO) => {
		dispatch(createProduct(data));
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.target.files && setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<>
			<div className={styles.formPage}>
				<div className={styles.formBlock}>
					<h1>
							CREATE NEW TOY
					</h1>
					<form onSubmit={handleSubmit(onSubmit)
					}>
							<div className="mb-2">
									<label htmlFor="title">
											Name for new toy
									</label>
							<input		
								{...register('title', { required: true, minLength: 3 })}
								type="text"
								placeholder='Enter toy name'
								autoFocus />
							</div>
							<div className="mb-2">
									<label htmlFor="description" >
										Description for toy
									</label>
							<input {...register('description', { required: true, minLength: 6 })} type="text" placeholder='Enter toy description'/>
						</div>
						<div className="mb-2">
							<label htmlFor="category_id" >
								Toy category
							</label>
							<select {...register('category_id', { required: true })}>
								<option value="">-Choose category-</option>
								{allCategories &&
									allCategories.map((category) => (
										<option key={category.id} value={category.id}>{category.title}</option>
									))}
							</select>
						</div>
							<div className="mb-2">
									<label htmlFor="price" >
										Toy price
									</label>
									<input {...register('price', {required: true, min: 1})} type="text" placeholder='Enter toy price'/>
						</div>
						<div className="mb-2">
									<label htmlFor="image" >
										Toy image
									</label>
									<input {...register('image', {required: true, onChange: handleChange})} type="file" placeholder='Enter toy image' />
									{file && <Image src={file} width={250} height={350} alt={''} />}
						</div>
							<div className="mt-6">
									<button type='submit'>
											Create
									</button>
							</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default AddProductPage;



		