import React from 'react';
import { ProductsProps } from '../../types';
import { axiosGet } from '../api';

interface useGetProductsState {
   products: ProductsProps[] | null
   loading: boolean
}

const useGetProducts = () => {
   const [products, setProducts] = React.useState<useGetProductsState['products']>(null); //MAIN STATE WILL BE IMPORTED AS DATA
   const [loading, setLoading] = React.useState<useGetProductsState['loading']>(true); // LOADER

   React.useEffect(() => {
      const getProducts = async () => {
         // AXIOS GET REQUEST: GET ALL PRODUCTS
         try {
            const { data, status } = await axiosGet<ProductsProps[]>('/products', {
               params: {
                  limit: 20, //THIS LIMIT CAN CHANGE
                  offset: 1,
               },
            });

            if (status === 200) {
               setProducts(data); //MAIN DATA
               setLoading(false); //STOP LOADING
            }
         } catch (e: any) {
            setLoading(false); //STOP LOADING
            throw e
         }
      };
      getProducts();
   }, []);

   return { products, loading };
};

export { useGetProducts };
