import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

type Props = {
  clothing: Clothing
}

const Hero = ({ clothing }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(clothing))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${clothing.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{clothing.details.category}</Tag>
          <Tag>{clothing.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{clothing.name}</h2>
          <p>
            {clothing.prices.discount && (
              <span>{parseToBrl(clothing.prices.old)}</span>
            )}

            {clothing.prices.current && (
              <>Por {parseToBrl(clothing.prices.current)}</>
            )}
          </p>
          {clothing.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar este produto ao carrinho"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
