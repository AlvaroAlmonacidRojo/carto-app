import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import BuilderContainer from '../../../features/builder/ui/components/BuilderContainer'
import theme from '../theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     <BuilderContainer />
    </ThemeProvider>
  )
}

export default App
