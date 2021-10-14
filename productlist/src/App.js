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
          
            <div className="row-start-1 row-end-2"><Cards/></div>           
            <div className="row-start-1 row-end-2"><Cards/></div>
            <div className="row-start-1 row-end-2"><Cards/></div>
            <div className="row-start-1 row-end-2"><Cards/></div></div>

          <div className="col-start-3 col-end-7 flex justify-center gap-x-10 ml-16">
            <div className="row-start-1 row-end-2 "><AddProCard/></div>           
            <div className="row-start-1 row-end-2"><OutfitCards/></div>
            <div className="row-start-1 row-end-2"><OutfitCards/></div>
            <div className="row-start-1 row-end-2"><OutfitCards/></div>
          </div>
      </div>
    );
  }
 
}
{/* <p>Related Product</p> */}
export default App;

{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg> */}

{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
</svg> */}