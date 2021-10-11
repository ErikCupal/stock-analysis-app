import { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import AppLayout from './components/AppLayout'
import AppThemeProvider from './ui/AppThemeProvider'
import StockAnalysis from './views/StockAnalysis/StockAnalysis'

const queryClient = new QueryClient()

const App = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <AppLayout>
          <StockAnalysis />
        </AppLayout>
      </AppThemeProvider>
    </QueryClientProvider>
  )
}

export default App
