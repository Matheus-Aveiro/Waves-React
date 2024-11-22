import Tag from '../Tag'
import Button from '../Button'

import { parseToBrl } from '../../utils'
import { useGetFeaturedClothesQuery } from '../../services/api'
import Loader from '../Loader'

import * as S from './styles'

const Banner = () => {
  const { data: clothing } = useGetFeaturedClothesQuery()

  if (!clothing) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${clothing.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{clothing.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(clothing.prices.old)}</span> <br />
            por apenas {parseToBrl(clothing.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${clothing.id}`}
          title="Clique Aqui para aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
