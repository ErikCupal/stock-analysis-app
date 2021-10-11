import { memo } from 'react'
import styled from 'styled-components'

import logo from '../images/logo.svg'

const StyledAppLogo = styled.div`
  width: 260px;
  height: 45px;
  background: url('${logo}');
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
`

const AppLogo = memo(() => {
  return <StyledAppLogo />
})

export default AppLogo
