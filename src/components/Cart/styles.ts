import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import closeIcon from '../../assets/images/fechar.png'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.color3};
  z-index: 1;
  padding: 104px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  position: relative;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    color: ${colors.color3};
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.color1};
    text-align: center;
  }

  .close-btn {
    position: absolute;
    top: 80px;
    right: 8px;
    width: 20px;
    height: 20px;
    background: url(${closeIcon}) no-repeat center center;
    background-size: contain;
    border: none;
    background-color: transparent;
    cursor: pointer;
    z-index: 2;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.color1};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${colors.color1};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.color1};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 2px solid ${colors.color2};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${colors.color1};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${colors.color1};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    color: ${colors.color3};
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${lixeira});
    width: 20px; /* Aumente o tamanho para garantir que o ícone seja visível */
    height: 20px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 10px;
    right: 8px; /* Ajuste o espaçamento para garantir que o ícone esteja visível */
    background-size: contain;
    background-repeat: no-repeat;
  }
`
