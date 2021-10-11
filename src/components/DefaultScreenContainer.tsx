import { ReactNode } from 'react'
import styled from 'styled-components'

import { mediaQuery } from '../ui/AppThemeProvider'
import AppLogo from './AppLogo'

const StyledScreenContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1 auto;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
  height: 80px;

  ${mediaQuery.large} {
    margin: 20px 20px;
  }
`

const StyledContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
`

interface Props {
  children: ReactNode
}

const DefaultScreenContainer = ({ children }: Props) => {
  return (
    <StyledScreenContainer>
      <StyledHeader>
        <AppLogo />
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
    </StyledScreenContainer>
  )
}

export default DefaultScreenContainer
