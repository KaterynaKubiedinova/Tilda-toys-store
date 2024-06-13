
import ProductPage from '@/components/Pages/ProductPage/ProductPage';
import React, { FC } from 'react';


const Page = ({ params }: { params: { productId: string } }) => {
	const id = params.productId;
    
	return (
		<>
			<ProductPage id={params.productId} />
		</>
	)
}

export default Page;