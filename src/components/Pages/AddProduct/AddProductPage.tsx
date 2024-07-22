"use client"

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './AddProduct.module.scss';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectAllCategories } from '@/lib/Features/categories/categoriesSlice';
import { addImage, createProduct, getAllCategories } from '@/app/tools/apiService';
import { ProductDTO } from '@/types/productTypes';
import { useRouter } from 'next/navigation';
import { Routes } from '@/constants/routes';
import { CustomButton } from '@/components/Button/Button';

const AddProductPage = () => {
	const [fileURL, setFileURL] = useState('');
	const { register, handleSubmit } = useForm<ProductDTO>();
	const allCategories = useAppSelector(selectAllCategories);
	const dispatch = useAppDispatch();
	const router = useRouter();
	const formData = useRef(new FormData())

	useEffect(() => {
		dispatch(getAllCategories());
	}, [])
	
	const onSubmit = (data: ProductDTO) => {
		dispatch(addImage(formData.current)).then(image => {

			const newProduct = {
				title: data.title,
				price: data.price,
				imageId: image.payload.id,
				imageUrl: image.payload.url,
				description: data.description,
				category_id: data.category_id,
			}
			dispatch(createProduct(newProduct)).then(data => router.push(`${Routes.Marketplace}/${data.payload.id}`));
		});
		
		
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFileURL(URL.createObjectURL(e.target.files[0]));
			const image = e.target.files[0];
			const newFormData = new FormData();

			newFormData.append("file", image)
			formData.current = newFormData;
		}

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
									<input {...register('imageUrl', {required: true, onChange: handleChange})} type="file" placeholder='Enter toy image' />
									{fileURL && <Image src={fileURL} width={250} height={350} alt={''} />}
						</div>
						<CustomButton type='submit' text='Create' />
					</form>
				</div>
			</div>
		</>
	);
}

export default AddProductPage;



		