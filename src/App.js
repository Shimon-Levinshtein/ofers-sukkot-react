import './App.css';
import SukkahOrderPage from './components/SukkahOrderPage/SukkahOrderPage.js';
import {isMobile} from 'react-device-detect';

console.log(isMobile);

function App() {
  return (
    <div className="App">
      <SukkahOrderPage />
    </div>
  );
}

export default App;
