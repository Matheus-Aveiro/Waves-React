import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import Loader from '../../components/Loader'

import { useGetClothingQuery } from '../../services/api'

type ClothingParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as ClothingParams
  const { data: clothing } = useGetClothingQuery(id)

  if (!clothing) {
    return <Loader />
  }

  return (
    <>
      <Hero clothing={clothing} />
      <Section title="Sobre a roupa" background="gray">
        <p>{clothing.description}</p>
      </Section>
      <Section title="Mais detalhes" background="white">
        <p>
          {clothing.details.system}
          <br />
          {clothing.details.developer}
          {clothing.details.publisher}
          {clothing.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={clothing.name}
        defaultCover={clothing.media.cover}
        items={clothing.media.gallery}
      />
    </>
  )
}

export default Product
