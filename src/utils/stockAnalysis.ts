import { head, last, max, scan, tail, zipWith } from 'ramda'

export const getSimpleReturn = (prices: number[]): number => {
  return (last(prices)! / head(prices)! - 1) * 100
}

const argmax = (arr: number[]): number => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [i] = arr.reduce(
    ([maxIndex, maxValue], value, index) =>
      value > maxValue ? [index, value] : [maxIndex, maxValue],
    [0, arr[0]],
  )

  return i
}

export const getMaximumDrawdown = (prices: number[]): number => {
  const accumulatedMaximumPrices: number[] = tail(scan(max, 0, prices))
  const endOfDrawdownIndex: number = argmax(
    zipWith((a, b) => a - b, accumulatedMaximumPrices, prices),
  )
  const startOfDrawdownIndex = argmax(prices.slice(0, endOfDrawdownIndex))

  const peakValue = prices[startOfDrawdownIndex]
  const troughValue = prices[endOfDrawdownIndex]

  return (troughValue / peakValue - 1) * 100
}
