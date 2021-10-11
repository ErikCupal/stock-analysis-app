import React, { memo, ReactNode } from 'react'
import styled from 'styled-components'

import Span from './Span'

export const StyledField = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10px;
`

const StyledLabel = styled(Span)`
  color: ${({ theme }) => theme.color.text.lightSecondary};
  padding-bottom: 5px;
  padding-left: 5px;
`

interface Props {
  label: string
  children: ReactNode
}

const LabeledField = memo(({ label, children }: Props) => {
  return (
    <StyledField>
      <StyledLabel>{label}</StyledLabel>
      {children}
    </StyledField>
  )
})

export default LabeledField
