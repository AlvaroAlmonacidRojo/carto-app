import { ThemeProvider } from '@emotion/react';

import BuilderContainer from '../../../features/builder/ui/components/BuilderContainer'
import theme from '../theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
     <BuilderContainer />
    </ThemeProvider>
  )
}

export default App