import { memo } from 'react'
import { Form } from 'react-final-form'
import styled from 'styled-components'

import SubmitButton from '../../components/SubmitButton'
import { StockAnalysisVariablesType } from '../../types'
import { mediaQuery } from '../../ui/AppThemeProvider'
import StockAnalysisFormFieldsPeriod from './StockAnalysisFormFieldsPeriod'
import StockAnalysisFormFieldTicker from './StockAnalysisFormFieldTicker'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: 0 5px;

  ${mediaQuery.large} {
    flex-direction: row;
    align-items: flex-end;
    padding: 0;
    width: auto;
  }
`

const StyledSubmitButton = styled(SubmitButton)`
  height: 46px;
  width: 100%;

  ${mediaQuery.large} {
    margin-left: 20px;
    margin-bottom: 10px;
    width: 150px;
  }
`

const FORM_INITIAL_VALUES: StockAnalysisVariablesType = {
  ticker: '',
  periodDateFrom: '',
  periodDateTo: '',
}

const canSubmitForm = (values: StockAnalysisVariablesType) => {
  const { ticker, periodDateFrom, periodDateTo } = values

  return !!ticker && !!periodDateFrom && !!periodDateTo
}

interface Props {
  onSubmit: (values: StockAnalysisVariablesType) => void
}

const StockAnalysisForm = memo(({ onSubmit }: Props) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={FORM_INITIAL_VALUES}
      render={({ handleSubmit, submitting, values }) => {
        const canSubmit = canSubmitForm(values)

        return (
          <StyledForm onSubmit={handleSubmit}>
            <StockAnalysisFormFieldTicker />
            <StockAnalysisFormFieldsPeriod />
            <StyledSubmitButton disabled={submitting || !canSubmit}>
              {submitting ? 'Analyzing...' : 'Analyze'}
            </StyledSubmitButton>
          </StyledForm>
        )
      }}
    />
  )
})

export default StockAnalysisForm
