import { ReactNode } from 'react'
import styled from 'styled-components'

const StyledLayoutContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

interface Props {
  children: ReactNode
}

const AppLayout = ({ children }: Props) => {
  return <StyledLayoutContainer>{children}</StyledLayoutContainer>
}

export default AppLayout
