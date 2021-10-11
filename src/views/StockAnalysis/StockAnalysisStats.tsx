import { memo, useMemo } from 'react'
import styled from 'styled-components'

import Span from '../../components/Span'
import { StockDataType } from '../../types'
import { mediaQuery } from '../../ui/AppThemeProvider'
import { getMaximumDrawdown, getSimpleReturn } from '../../utils/stockAnalysis'

const StyledStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
`

const StyledStat = styled.div`
  display: flex;

  ${mediaQuery.large} {
    padding: 5px 0;
  }
`

const StyledSimpleReturnLabel = styled(Span)`
  font-size: ${({ theme }) => theme.font.size.normal};
  color: ${({ theme }) => theme.color.text.darkSecondary};

  ${mediaQuery.large} {
    font-size: ${({ theme }) => theme.font.size.big};
  }
`

const StyledSimpleReturnValue = styled(Span)<{ isPositive: boolean }>`
  font-size: ${({ theme }) => theme.font.size.normal};
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.color.byId.GREEN : theme.color.byId.RED};
  padding-left: 10px;

  ${mediaQuery.large} {
    font-size: ${({ theme }) => theme.font.size.big};
  }
`

const StyledMaximumDrawdownLabel = styled(StyledSimpleReturnLabel)``

const StyledMaximumDrawdownValue = styled(StyledSimpleReturnValue)``

const useStats = (data: StockDataType) => {
  return useMemo(() => {
    const prices = data.rows.map(({ adjustedClosePrice }) => adjustedClosePrice)
    const simpleReturn = Math.round(getSimpleReturn(prices) * 100) / 100
    const maximumDrawdown = Math.round(getMaximumDrawdown(prices) * 100) / 100

    return { simpleReturn, maximumDrawdown }
  }, [data])
}

interface StockAnalysisChartProps {
  data: StockDataType
}

const StockAnalysisStats = memo(({ data }: StockAnalysisChartProps) => {
  const { simpleReturn, maximumDrawdown } = useStats(data)

  return (
    <StyledStatsContainer>
      <StyledStat>
        <StyledSimpleReturnLabel>
          Simple Rate of Return:
        </StyledSimpleReturnLabel>
        <StyledSimpleReturnValue isPositive={simpleReturn > 0}>
          {simpleReturn}%
        </StyledSimpleReturnValue>
      </StyledStat>
      <StyledStat>
        <StyledMaximumDrawdownLabel>
          Maximum Drawdown:
        </StyledMaximumDrawdownLabel>
        <StyledMaximumDrawdownValue isPositive={false}>
          {maximumDrawdown}%
        </StyledMaximumDrawdownValue>
      </StyledStat>
    </StyledStatsContainer>
  )
})

export default StockAnalysisStats
