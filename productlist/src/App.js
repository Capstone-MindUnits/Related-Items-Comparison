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
      <div className="grid grid-cols-8 grid-rows-2 gap-4 min-h-screen m-3">
       
          <div className="col-start-3 col-end-7 bg-grey-500 flex justify-center">
          
            <div className="row-start-1 row-end-2 ml-16"><Cards/></div>
            
            <div className="row-start-1 row-end-2"><Cards/></div>
            <div className="row-start-1 row-end-2"><Cards/></div>
            <div className="row-start-1 row-end-2"><Cards/></div></div>

          <div className="col-start-3 col-end-7 bg-blue-500 flex justify-center"></div>
      </div>
    );
  }
 
}
{/* <p>Related Product</p> */}
export default App;
