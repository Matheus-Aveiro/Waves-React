import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleClothes, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonClothes, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        clothes={onSaleClothes}
        title="Promoções"
        background="cor2"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        clothes={soonClothes}
        title="Lançamentos"
        background="cor3"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
