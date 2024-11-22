import Tag from '../Tag'

import * as S from './styles'

type Props = {
  title: string
  category: string
  type: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  type,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <S.Image src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{type}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}

export default Product