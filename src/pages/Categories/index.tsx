import ProductsList from '../../components/ProductsList'

import {
  useGetActionClothesQuery,
  useGetFightClothesQuery,
  useGetRpgClothesQuery,
  useGetSimulationClothesQuery,
  useGetSportClothesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionClothes, isLoading: isLoadingAction } =
    useGetActionClothesQuery()
  const { data: fightClothes, isLoading: isLoadingFight } =
    useGetFightClothesQuery()
  const { data: rpgClothes, isLoading: isLoadingRpg } = useGetRpgClothesQuery()
  const { data: simulationClothes, isLoading: isLoadingSimulation } =
    useGetSimulationClothesQuery()
  const { data: sportsClothes, isLoading: isLoadingSports } =
    useGetSportClothesQuery()

  return (
    <>
      <ProductsList
        clothes={actionClothes}
        title="Promoções"
        background="cor2"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        clothes={sportsClothes}
        title="Lançamentos"
        background="cor3"
        id="sports"
        isLoading={isLoadingFight}
      />
      <ProductsList
        clothes={simulationClothes}
        title="Promoções"
        background="cor2"
        id="simulation"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        clothes={fightClothes}
        title="Lançamentos"
        background="cor3"
        id="fight"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        clothes={rpgClothes}
        title="Lançamentos"
        background="cor3"
        id="rpg"
        isLoading={isLoadingSports}
      />
    </>
  )
}

export default Categories
