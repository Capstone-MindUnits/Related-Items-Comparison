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
      <div className="grid grid-cols-8 grid-rows-2 gap-4 min-h-screen">
          {/* <div className="row-start-1 row-end-7 col-span-1 bg-blue-500">1</div>
          <div className="row-start-2 row-end-4 col-span-6  bg-red-500 grid grid-cols-4"></div>
          <div className="row-start-5 row-end-9 col-span-6  bg-red-500 grid grid-cols-4"></div>
          <div className="row-start-1 row-end-7 col-span-1 bg-green-500">3</div>     */}
          <div className="col-start-3 col-end-7 bg-blue-500">
            <div className="row-start-1 row-end-2"><Cards/></div></div>
          <div className="col-start-3 col-end-7 bg-blue-500">2</div>
      </div>
    );
  }
 
}

export default App;
