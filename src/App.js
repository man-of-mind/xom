import "./index.css"
import { Routes, Route, HashRouter as Router} from 'react-router-dom';
import LandingPage from "./pages/landing-page";
import { MantineProvider } from '@mantine/core';
import SubmitFlwhm from "./pages/flwhm-form";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload-report" element={<SubmitFlwhm />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App;