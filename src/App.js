import './App.css';
import HigherOne from './higherExample/One';
import HigherTwo from './higherExample/Two';
import Hook_examples from './Hook_examples';
// import './tic_tac_toe.css';
// import Tic_tac_toe from './Tic_tac_toe';
import Clock from './Clock';
import UseEffect from './UseEffect';

function App() {
  return (
    <div className="App">
      {/* <Tic_tac_toe /> */}

      <Hook_examples title="Hook example component"/>
      <br />
      <hr/>
      <Clock title="Clock example component"/>
      <br />
      <hr />
      <UseEffect title="Use Effect example component"/>
      <br />
      <hr />
      <div>
        <h1>HOC example component</h1>
        <hr/>
        <HigherOne compName="First Component" />
        <HigherTwo compName="Second Component" />
      </div>
      <br />
    </div>
  );
}
export default App;
