export interface ProductsProps {
   id: number
   title: string
   price: number
   description: string
   category: {
      id: number
      name: string
      image: string
   };
   images: Array<string>
}

export interface User {
   email: string
	password: string
	name: string
	avatar: string | null
   role: 'customer' | 'admin'
	id: number
}

export type UserTokens = {
   access_token: string
   refresh_token: string
} | null


