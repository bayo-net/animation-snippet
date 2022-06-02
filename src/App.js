import './App.scss';
import vector from './vector.svg';
import box from './Box.svg';

function App() {
  return (
    <div>
      <div className="animation-container">
        <div>
          <img
            className="animation-container--bg"
            src={vector}
          />
          <img
            className="animation-container--box"
            src= {box}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
