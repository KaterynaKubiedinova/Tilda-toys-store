import { getAllCategories } from "@/app/tools/apiService";
import { RootState } from "@/lib/store";
import { CategoryState } from "@/types/categoryTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CategoryState = {
	allCategories: []
}

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAllCategories.fulfilled, (state, {payload}) => {
				state.allCategories = payload;
			})
	},
})

export const selectAllCategories = (state: RootState) => state.categories.allCategories;

export default categoriesSlice.reducer;