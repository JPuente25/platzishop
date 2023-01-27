import React from 'react';
import { ProductsProps } from '../../types';
import { axiosGet } from '../api';

interface useGetCategoryProductsStates {
   categoryProducts: Array<ProductsProps> | null;
   loading: boolean;
}

const useGetCategoryProducts = (id: number) => {
   const cleanId = (id: number) => {
      if (id >= 1 && id <= 5) {
         return id;
      } else if (id < 1) {
         return 1;
      }
      return 5;
   }

   const [categoryProducts, setCategoryProducts] =
      React.useState<useGetCategoryProductsStates['categoryProducts']>(null); //MAIN STATE WILL BE EXPORTED AS DATA
   const [loading, setLoading] = React.useState<useGetCategoryProductsStates['loading']>(true); //LOADER

   React.useEffect(() => {
      const getProducts = async () => {
         //AXIOS GET REQUEST: GETS ALL PRODUCTS BY CATEGORY
         try {
            const { data, status } = await axiosGet<Array<ProductsProps>>(
               `/categories/${cleanId(id)}/products`
            );
            if (status >= 200 && status < 300) {
               setCategoryProducts(data); //MAIN DATA
               setLoading(false); //LOADER
            }
         } catch (error) {
            console.log(error)
            // setCategoryProducts(error); //MANAGE ERRORS
            setLoading(false); //LOADER
         }
      };
      getProducts();
   }, [id]);

   return { categoryProducts, loading };
};

export { useGetCategoryProducts };
