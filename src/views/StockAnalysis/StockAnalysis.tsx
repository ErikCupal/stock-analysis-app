import { memo, useState } from 'react'
import styled from 'styled-components'

import DefaultScreenContainer from '../../components/DefaultScreenContainer'
import Span from '../../components/Span'
import { useStockData } from '../../data/queries'
import { StockAnalysisVariablesType } from '../../types'
import StockAnalysisChart from './StockAnalysisChart'
import StockAnalysisForm from './StockAnalysisForm'
import StockAnalysisStats from './StockAnalysisStats'

const StyledStockAnalysisContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px 20px;
`

const StyledLoaderContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

const StyledLoaderText = styled(Span)`
  cursor: default;
  font-size: ${({ theme }) => theme.font.size.bigger};
  color: ${({ theme }) => theme.color.text.lightSecondary};
`

const StyledErrorContainer = styled(StyledLoaderContainer)``
const StyledErrorText = styled(StyledLoaderText)``

const StockAnalysis = memo(() => {
  const [variables, setVariables] = useState<StockAnalysisVariablesType | null>(
    null,
  )
  const { data, isLoading, error } = useStockData(variables)

  const { ticker, periodDateFrom, periodDateTo } = variables || {}

  return (
    <DefaultScreenContainer>
      <StyledStockAnalysisContainer>
        <StockAnalysisForm onSubmit={setVariables} />
        {(() => {
          if (isLoading) {
            return (
              <StyledLoaderContainer>
                <StyledLoaderText>Loading…</StyledLoaderText>
              </StyledLoaderContainer>
            )
          }

          if (error) {
            return (
              <StyledErrorContainer>
                <StyledErrorText>
                  Couldn't load the data. Try reloading the page.
                </StyledErrorText>
              </StyledErrorContainer>
            )
          }

          if (!data) {
            return (
              <StyledErrorContainer>
                <StyledErrorText>
                  Enter a stock ticker and a time period to show stock analysis.
                </StyledErrorText>
              </StyledErrorContainer>
            )
          }

          if (!data.rows.length) {
            return (
              <StyledErrorContainer>
                <StyledErrorText>
                  No data found for ticker {ticker} and time period{' '}
                  {periodDateFrom} - {periodDateTo}.
                </StyledErrorText>
              </StyledErrorContainer>
            )
          }

          return (
            <>
              <StockAnalysisStats data={data} />
              <StockAnalysisChart data={data} />
            </>
          )
        })()}
      </StyledStockAnalysisContainer>
    </DefaultScreenContainer>
  )
})

export default StockAnalysis
