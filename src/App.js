// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Component } from "react";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  handleLogIn = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogOut = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    const {isLoggedIn} = this.state;
    if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />);
    return (
      <div style={{textAlign: 'center'}}>
        <div>
          <h1>Please Login</h1>
          <button onClick={this.handleLogIn}>Login</button>
        </div>
      </div>
    );
  }
}

export default App;