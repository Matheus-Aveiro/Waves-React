import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.color4 : colors.color1)};
  color: ${colors.color1};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.color4 : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.color4};
  color: ${colors.color4};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
`
