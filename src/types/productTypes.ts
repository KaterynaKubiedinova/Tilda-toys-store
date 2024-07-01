export interface Product {
	title: string;
	price: string;
	imageId: string;
	imageUrl: string;
	id: number;
}

export interface ProductDescription extends Product {
	description: string,
	createdAt: string,
}

export interface ProductDTO {
	title: string,
	price: string,
	imageId: string,
	imageUrl: string,
	description: string,
	category_id: string,
}

export interface UpdateProductDTO {
	title?: string,
	price?: string,
	imageId?: string,
	imageUrl?: string,
	description?: string,
	category_id?: string,
}

export type ProductsState = {
	allProducts: Product[],
	productDescription: ProductDescription | undefined,
	newProductId: number | null
}
