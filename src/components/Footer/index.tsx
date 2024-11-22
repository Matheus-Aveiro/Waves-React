import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar roupas de rpg"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar roupas de rpg"
              to="/categories#action"
            >
              action
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar roupas de rpg"
              to="/categories#sports"
            >
              sports
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar roupas de rpg"
              to="/categories#simulation"
            >
              simulation
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar roupas de rpg"
              to="/categories#fight"
            >
              fight
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Lançamentos
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; WAVES Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
