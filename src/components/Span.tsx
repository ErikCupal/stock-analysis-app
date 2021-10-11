import styled from 'styled-components'

const Span = styled.span`
  color: ${({ theme }) => theme.color.text.darkPrimary};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.normal};
  line-height: 1.25;
  font-weight: 600;
`

export default Span
