import { memo } from 'react'
import { useField } from 'react-final-form'
import styled from 'styled-components'

import Input from '../../components/Input'
import LabeledField from '../../components/LabeledField'
import { mediaQuery } from '../../ui/AppThemeProvider'

const StyledDateInputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuery.large} {
    flex-direction: row;
    align-items: center;
  }
`

const StyledDateInputsDivider = styled.div`
  width: 100%;
  height: 10px;

  ${mediaQuery.large} {
    width: 18px;
    height: 2px;
    border-radius: 1px;
    margin: 0 10px;
    background: ${({ theme }) => theme.color.background.lightTertiary};
  }
`

const StockAnalysisFormFieldsPeriod = memo(() => {
  const { input: fromFieldInput } = useField('periodDateFrom')
  const { input: toFieldInput } = useField('periodDateTo')

  return (
    <LabeledField label="Period">
      <StyledDateInputsContainer>
        <Input {...fromFieldInput} placeholder="From (YYYY-MM-DD)" />
        <StyledDateInputsDivider />
        <Input {...toFieldInput} placeholder="End (YYYY-MM-DD)" />
      </StyledDateInputsContainer>
    </LabeledField>
  )
})

export default StockAnalysisFormFieldsPeriod
