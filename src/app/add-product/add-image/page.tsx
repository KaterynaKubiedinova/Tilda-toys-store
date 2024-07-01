'use client'

import { addImage } from '@/app/tools/services';
import { useAppDispatch } from '@/lib/hooks';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';


const Page = () => {
	const [fileURL, setFileURL] = useState('');
	const dispatch = useAppDispatch();

	const handleSubmission = async (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFileURL(URL.createObjectURL(e.target.files[0]));
			const file = e.target.files[0];
			const formData = new FormData();
			formData.append("file", file!)
			console.log('segsljf;FHVS;GJNAD;U', formData.get('file'))
			// dispatch(addImage(formData));FVA
		}
	};
	
	return (
		<form >
			<input  type="file" name='file' onChange={handleSubmission} placeholder='Enter toy image' accept='image/*'/>
				{fileURL && <Image src={fileURL} width={250} height={350} alt={''} />}
		</form>
	);
}

export default Page;

