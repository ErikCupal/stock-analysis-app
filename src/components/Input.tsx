import styled from 'styled-components'

const Input = styled.input`
  background-color: ${({ theme }) => theme.color.background.lightTertiary};
  padding: 14px 18px;
  outline: none;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.text.darkPrimary};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.smaller};

  &::placeholder {
    color: ${({ theme }) => theme.color.text.lightSecondary};
  }
`

export default Input
