import axios from 'axios'
import { split, map } from 'ramda'
import { useQuery } from 'react-query'

import { StockAnalysisVariablesType, StockDataType } from '../types'

const nasdaqApiKey = process.env.REACT_APP_NASDAQ_API_KEY

export const useStockData = (variables: StockAnalysisVariablesType | null) => {
  return useQuery<StockDataType | null>(
    ['stockData', variables],
    async () => {
      if (!variables) {
        return null
      }

      const { ticker, periodDateFrom, periodDateTo } = variables

      const res = await axios.get<string>(
        `https://data.nasdaq.com/api/v3/datasets/WIKI/${ticker}.csv?${
          nasdaqApiKey ? `api_key=${nasdaqApiKey}&` : ''
        }start_date=${periodDateFrom}&end_date=${periodDateTo}&column_index=11&order=asc`,
      )

      const [header, ...rowsWithEmptyRow] = split('\n', res.data)
      const rows = rowsWithEmptyRow.slice(0, rowsWithEmptyRow.length - 1)

      const stockData: StockDataType = {
        ticker,
        rows:
          header !== 'Date,Adj. Close'
            ? []
            : map((row) => {
                const [date, adjustedClosePrice] = split(',', row)

                return { date, adjustedClosePrice: Number(adjustedClosePrice) }
              }, rows),
      }

      return stockData
    },
    { retry: false },
  )
}
