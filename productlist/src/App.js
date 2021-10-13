import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cards from './Components/Cards';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  render(){
    return (
      <div className="App">
        <Cards/>
      </div>
    );
  }
 
}

export default App;
