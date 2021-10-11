// styled.d.ts
import 'styled-components'
import { AppTheme } from './ui/AppThemeProvider'

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
