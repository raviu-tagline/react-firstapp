import './App.css';
import './tic_tac_toe.css';
import Hook_examples from './Hook_examples';
import Tic_tac_toe from './Tic_tac_toe';
import Clock from './Clock';
import UseEffect from './UseEffect';
import { BrowserRouter as BR, Route, Link } from 'react-router-dom';
import Context from './Context';
import Higher from './Higher';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* <Tic_tac_toe /> */}

      <BR>
        <Link to="" className="btn btn-primary mx-2">Home</Link>
        <Link to="hook" className="btn btn-primary mx-2">Hook Example </Link>
        <Link to="clock" className="btn btn-primary mx-2">Clock example </Link>
        <Link to="useEffect" className="btn btn-primary mx-2">useEffect() example</Link>
        <Link to="hoc" className="btn btn-primary mx-2">HOC example</Link>
        <Link to="context" className="btn btn-primary mx-2">Context API example</Link>
        <Link to="tic_tac_toe" className="btn btn-primary mx-2">Tic Tac Toe example</Link>
<hr/>
        <Route exact path="/" component={Home}></Route>
        <Route path="/hook" component={Hook_examples}></Route>
        <Route path="/clock" component={Clock}></Route>
        <Route path="/useEffect" component={UseEffect}></Route>
        <Route path="/hoc" component={Higher}></Route>
        <Route path="/context" component={Context}></Route>
        <Route path="/tic_tac_toe" component={Tic_tac_toe}></Route>        
      </BR>
    </div>
  );
}
export default App;
