import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedClothes: builder.query<Clothing, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Clothing[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Clothing[], void>({
      query: () => 'em-breve'
    }),
    getActionClothes: builder.query<Clothing[], void>({
      query: () => 'acao'
    }),
    getSportClothes: builder.query<Clothing[], void>({
      query: () => 'esportes'
    }),
    getSimulationClothes: builder.query<Clothing[], void>({
      query: () => 'simulacao'
    }),
    getFightClothes: builder.query<Clothing[], void>({
      query: () => 'luta'
    }),
    getRpgClothes: builder.query<Clothing[], void>({
      query: () => 'rpg'
    }),
    getClothing: builder.query<Clothing, string>({
      query: (id) => `jogos/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedClothesQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionClothesQuery,
  useGetFightClothesQuery,
  useGetRpgClothesQuery,
  useGetSimulationClothesQuery,
  useGetSportClothesQuery,
  useGetClothingQuery,
  usePurchaseMutation
} = api

export default api
