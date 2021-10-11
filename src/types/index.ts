export interface StockAnalysisVariablesType {
  ticker: string
  periodDateFrom: string
  periodDateTo: string
}

export interface StockDataRowType {
  date: string
  adjustedClosePrice: number
}

export interface StockDataType {
  ticker: string
  rows: StockDataRowType[]
}
