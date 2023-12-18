
import { StyledEngineProvider } from '@mui/material';
import './assets/styles/main.css';
import ImageGalleryList from './components/ImageGalleryList';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ImageGalleryList />
    </StyledEngineProvider>
  );
}

export default App;
