import { memo } from 'react'
import { useField } from 'react-final-form'
import styled from 'styled-components'

import Input from '../../components/Input'
import LabeledField from '../../components/LabeledField'
import { mediaQuery } from '../../ui/AppThemeProvider'

const StyledTickerInputContainer = styled.div`
  display: flex;

  ${mediaQuery.large} {
    padding-right: 20px;
  }
`

const StyledInput = styled(Input)`
  width: 100%;
`

const StockAnalysisFormFieldTicker = memo(() => {
  const { input } = useField('ticker')

  return (
    <LabeledField label="Stock">
      <StyledTickerInputContainer>
        <StyledInput {...input} placeholder="Enter ticker (e.g. AAPL)" />
      </StyledTickerInputContainer>
    </LabeledField>
  )
})

export default StockAnalysisFormFieldTicker
