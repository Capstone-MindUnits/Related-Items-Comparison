import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cards from './Components/Cards';
import AddProCard from './Components/AddProCard';
import OutfitCards from './Components/OutfitCards';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  
  render(){
    
    return (
      
      <div className="grid grid-cols-8 grid-rows-2 gap-4 min-h-screen m-3">

          <div className="col-start-3 col-end-7 flex justify-center gap-x-10 ml-16">
            <div className="row-start-1 row-end-2 text-gray-500 ">RELATED PRODUCT<Cards/> </div>           
            <div className="row-start-1 row-end-2 mt-6"><Cards/></div>
            <div className="row-start-1 row-end-2 mt-6"><Cards/></div>
            <div className="row-start-1 row-end-2 mt-6"><Cards/></div>
          </div>

          <div className="col-start-3 col-end-7 flex justify-center gap-x-10 ml-16">
            <div className="row-start-1 row-end-2 text-gray-500">YOUR OUTFIT<AddProCard/></div>           
            <div className="row-start-1 row-end-2 mt-6"><OutfitCards/></div>
            <div className="row-start-1 row-end-2 mt-6"><OutfitCards/></div>
            <div className="row-start-1 row-end-2 mt-6"><OutfitCards/></div>
          </div>
      </div>
    );
  }
 
}

export default App;

