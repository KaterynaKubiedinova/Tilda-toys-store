import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsSlice from './Features/products/productsSlice'
import categoriesSlice from './Features/categories/categoriesSlice'

const rootReducer = combineReducers({
  products: productsSlice,
  categories: categoriesSlice
})

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']