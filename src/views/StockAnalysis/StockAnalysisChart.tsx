import { memo } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { StockDataType } from '../../types'

const CHART_MARGINS = {
  top: 10,
  right: 30,
  left: 0,
  bottom: 0,
}

const xAxisTickFormatter = (value: number) => `$${value}`
const tooltipLabelFormatter = (date: string) => `Date: ${date}`
const tooltipFormatter = (value: number) => [
  `$${value}`,
  'Adjusted Close Price',
]

interface StockAnalysisChartProps {
  data: StockDataType
}

const StockAnalysisChart = memo(({ data }: StockAnalysisChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data.rows}
        margin={CHART_MARGINS}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={xAxisTickFormatter} />
        <Tooltip
          labelFormatter={tooltipLabelFormatter}
          formatter={tooltipFormatter}
        />
        <Area
          type="linear"
          dataKey="adjustedClosePrice"
          stroke="#1B9DA8"
          fill="#48b1ba"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
})

export default StockAnalysisChart
