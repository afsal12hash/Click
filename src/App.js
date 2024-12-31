import './App.css';
import Themeswitcher from './Themeswitcher';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Themeswitcher />
      </ThemeProvider>
    </div>
  );
}

export default App;
