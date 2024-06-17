
import ProductPage from '@/components/Pages/ProductPage/ProductPage';
import React, { FC } from 'react';


const Page = ({ params }: { params: { productId: string } }) => {
    
	return (
		<>
			<ProductPage id={params.productId} />
		</>
	)
}

export default Page;