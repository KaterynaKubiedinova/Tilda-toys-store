import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import api from "./api";
import { ApiEndpoinst } from "@/constants/apiEndpoinst";
import { ProductDTO, UpdateProductDTO } from "@/types/productTypes";
import { User } from "@/types/userTypes";

export const authUser = createAsyncThunk(
  'user/authUser',
  async (formData: { email: string; password: string }) => {
    try {
        sessionStorage.clear();
        const response = await api.post(ApiEndpoinst.Login, formData, {
          withCredentials: true
        });

        const { data } = response;

        if (data.accessToken) {
          sessionStorage.setItem('AccessToken', data.accessToken);
          const profile = await api.get(ApiEndpoinst.Profile)
          sessionStorage.setItem('user', JSON.stringify(profile.data));
        }
        return data.user;
    } catch (e) {
      return e as AxiosError;
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (formData: User) => {
    try {
      const response = await api.post(ApiEndpoinst.Registration, formData, {
        withCredentials: true
      });
      const { data } = response;

      if (data.accessToken) {
        sessionStorage.setItem('AccessToken', data.accessToken);
        const profile = await api.get(ApiEndpoinst.Profile)
        sessionStorage.setItem('user', JSON.stringify(profile.data));
      }
      return data;
    } catch (e) {
      return e as AxiosError;
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async () => {
    try {
      const response = await api.get(ApiEndpoinst.Logout, {
        withCredentials: true
      });

      const { data } = response;

      sessionStorage.clear();
      return data;
    } catch (e) {
      return e as AxiosError;
    }
  }
);

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

export const updateProductByID = createAsyncThunk(
  'product/updateProduct',
  async (params: {dto: UpdateProductDTO, id: number}) => {
    try {
			const response = await api.patch(ApiEndpoinst.Products + `/${params.id}`, params.dto,);
      const { data } = response;
      return data;
    } catch (e) {
      return e as AxiosError;
    }
  }
)

export const addImage = createAsyncThunk(
  'products/addImage',
  async (imageFile:  FormData) => {
    try {
      const response = await api.post(ApiEndpoinst.ImageUpload, imageFile, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }) 
      const { data } = response;
      // const updatedProduct = updateProductByID({dto: {image: data.data}, id: params.id})
      console.log('updProduct: ', data);
      return data
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