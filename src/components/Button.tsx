import { darken, rgba } from 'polished'
import styled from 'styled-components'

const Button = styled.button.attrs({ type: 'button' })`
  color: ${({ theme }) => theme.color.text.lightPrimary};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.normal};
  line-height: 1.25;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.darkPrimary};
  padding: 8px 12px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  transition: 0.1s background-color ease-out;

  &:hover {
    background-color: ${({ theme }) =>
      darken(0.1, theme.color.background.darkPrimary)};
  }

  &:disabled {
    cursor: default;
    background-color: ${({ theme }) =>
      rgba(theme.color.background.darkPrimary, 0.6)};

    &:hover {
      background-color: ${({ theme }) =>
        rgba(theme.color.background.darkPrimary, 0.6)};
    }
  }
`

export default Button
