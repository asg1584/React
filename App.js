import logo from './logo.svg';
import './App.css';

function App() {
  const test = 34;
  const first = 24;
  const second = 14;
  const last = 12;

  const isAuth = false;
  return (
    <div className="App">
     <h1>It takes approximately 3 hours to say, but Hello React</h1>
     <h4>{1 + 1} </h4>
     <h4>{"murat".toUpperCase()}</h4>
     <h4>{test}</h4>
     <div>
      {
        isAuth ? <p>User is registered</p>
        : null

      }

     </div>
    </div>
  );
}

export default App;
