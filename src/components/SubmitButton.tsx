import styled, { DefaultTheme, StyledComponent } from 'styled-components'

import Button from './Button'

const SubmitButton = styled(
  Button as StyledComponent<'button', DefaultTheme>,
).attrs({ type: 'submit' })`
  font-weight: 800;
  padding: 13px 27px;
`

export default SubmitButton
