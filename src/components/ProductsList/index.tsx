import { parseToBrl } from '../../utils'
import Loader from '../Loader'
import Product from '../Product'

import * as S from './styles'

export type Props = {
  title: string
  background: 'cor3' | 'cor2'
  clothes?: Clothing[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ background, title, clothes, id, isLoading }: Props) => {
  const getClothingTags = (clothing: Clothing) => {
    const tags = []

    if (clothing.release_date) {
      tags.push(clothing.release_date)
    }

    if (clothing.prices.discount) {
      tags.push(`${clothing.prices.discount}%`)
    }

    if (clothing.prices.current) {
      tags.push(parseToBrl(clothing.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {clothes &&
            clothes.map((clothing) => (
              <li key={clothing.id}>
                <Product
                  id={clothing.id}
                  category={clothing.details.category}
                  description={clothing.description}
                  image={clothing.media.thumbnail}
                  infos={getClothingTags(clothing)}
                  type={clothing.details.system}
                  title={clothing.name}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
