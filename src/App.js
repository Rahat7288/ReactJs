import Navebar from './nevbar';
import Home from './home';

function App() {
  return (
    <div className="App">
      <Navebar/>
      <div className='content'>
        <Home/>

      </div>
    </div>
  );
}

export default App;
