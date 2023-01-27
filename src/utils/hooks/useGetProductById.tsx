import React from 'react';
import { Context } from '../../context/context';
import { ProductsProps } from '../../types';
import { axiosGet } from '../api';
import { UseContextProps } from './useInitialState';

interface useGetProductByIdStates {
   product: ProductsProps | null
   loading: boolean
}

const useGetProductById = (id: number) => {
   const [product, setProduct] = React.useState<useGetProductByIdStates['product']>(null); //MAIN STATE WILL BE EXPORTED AS DATA
   const [loading, setLoading] = React.useState<useGetProductByIdStates['loading']>(true); //LOADER
   const { addError } = React.useContext(Context) as UseContextProps;
   React.useEffect(() => {
      const getProduct = async () => { //AXIOS GET REQUEST: GET A PRODUCT BY HIS ID
         try {
            const {data, status} = await axiosGet(`/products/${id}`);

            if(status === 200) {
               setProduct(data); //MAIN DATA
               setLoading(false); //LOADER
            }

         } catch (e: any) {
            if(e.message === 'Request failed with status code 400') {
               addError('XL8');
            }
            setLoading(false); //LOADER
         }
      };
      getProduct();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return { product, loading };
};

export { useGetProductById };