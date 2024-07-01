import { createProduct, getAllProducts, getProductByID } from "@/app/tools/apiService";
import { RootState } from "@/lib/store";
import { ProductsState } from "@/types/productTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductsState = {
	allProducts: [],
	productDescription: undefined,
	newProductId: null,
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		refreshNewUserID: (state) => {
			state.newProductId = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.fulfilled, (state, {payload}) => {
				state.allProducts = payload;
			})
			.addCase(getProductByID.fulfilled, (state, { payload }) => {
				state.productDescription = payload;
			})
			.addCase(createProduct.fulfilled, (state, { payload }) => {
				state.newProductId = payload.id;
			})
	},
});
	
export const { refreshNewUserID } = productsSlice.actions;
				
export const selectAllProducts = (state: RootState) => state.products.allProducts;
export const selectProductByID = (state: RootState) => state.products.productDescription;
export const selectNewProductId = (state: RootState) => state.products.newProductId;

export default productsSlice.reducer;