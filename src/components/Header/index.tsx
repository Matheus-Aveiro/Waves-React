import { Link, useLocation } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const openCart = () => {
    dispatch(open())
  }

  // Function to determine if a link is active
  const isActive = (path: string) => {
    const currentHash = location.hash
    const currentPath = location.pathname

    // Check if path is hash
    if (path.startsWith('#')) {
      return currentHash === path
    }

    // For the root path, check if pathname is `/` and hash is empty
    if (path === '/') {
      return currentPath === path && currentHash === ''
    }

    // For other paths, check if pathname matches and hash is empty
    return currentPath === path && currentHash === ''
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <Link to="/">
            <h1>
              <S.Logo src={logo} alt="Waves" />
            </h1>
          </Link>
          <S.Right>
            <S.CartButton role="button" onClick={openCart}>
              {items.length > 0 && (
                <>
                  {items.length} <span> - produto(s) </span>
                </>
              )}
              <img src={cartIcon} alt="carrinho" />
            </S.CartButton>
            <S.Nav>
              <S.Links>
                <S.LinkItem className={isActive('/') ? 'active' : ''}>
                  <Link
                    title="Clique aqui para acessar a página inicial"
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </S.LinkItem>
                <S.LinkItem className={isActive('/categories') ? 'active' : ''}>
                  <Link
                    title="Clique aqui para acessar a página de categorias"
                    to="/categories"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Categorias
                  </Link>
                </S.LinkItem>
                <S.LinkItem
                  className={isActive('#coming-soon') ? 'active' : ''}
                >
                  <HashLink
                    title="Clique aqui para acessar a seção de em breve"
                    to="/#coming-soon"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Em breve
                  </HashLink>
                </S.LinkItem>
                <S.LinkItem className={isActive('#on-sale') ? 'active' : ''}>
                  <HashLink
                    title="Clique aqui para acessar a seção de promoções"
                    to="/#on-sale"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Promoções
                  </HashLink>
                </S.LinkItem>
              </S.Links>
              <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span />
                <span />
                <span />
              </S.Hamburguer>
            </S.Nav>
          </S.Right>
        </div>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem className={isActive('/') ? 'active' : ''}>
            <Link title="Clique aqui para acessar a página inicial" to="/">
              Home
            </Link>
          </S.LinkItem>
          <S.LinkItem className={isActive('/categories') ? 'active' : ''}>
            <Link
              title="Clique aqui para acessar a página de categorias"
              to="/categories"
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem className={isActive('#coming-soon') ? 'active' : ''}>
            <HashLink
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem className={isActive('#on-sale') ? 'active' : ''}>
            <HashLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
