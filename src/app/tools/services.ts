import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import api from "./api";
import { ApiEndpoinst } from "@/constants/apiEndpoinst";
import { ProductDTO } from "@/types/productTypes";

export const getAllProducts = createAsyncThunk(
  'products/allProducts',
  async () => {
    try {
			const response = await api.get(ApiEndpoinst.Products);
      const { data } = response;

      return data;
    } catch (e) {
      return e as AxiosError;
    }
  }
);

export const getProductByID = createAsyncThunk(
  'products/productByID',
  async (id: string) => {
		try {
			const response = await api.get(ApiEndpoinst.Products + `/${id}`);
      const { data } = response;
			
      return data.product;
    } catch (e) {
      return e as AxiosError;
    }
  }
);


export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (dto: ProductDTO) => {
		try {
			const response = await api.post(ApiEndpoinst.Products, dto);
      const { data } = response;
      return data.product;
    } catch (e) {
      return e as AxiosError;
    }
  }
);

export const getAllCategories = createAsyncThunk(
  'categories/allCategories',
  async () => {
    try {
			const response = await api.get(ApiEndpoinst.Categories);
      const { data } = response;
			
      return data;
    } catch (e) {
      return e as AxiosError;
    }
  }
);