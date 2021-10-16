import React from "react";
import "./App.css";
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css";
import Cards from "./Components/Cards";
import AddProCard from "./Components/AddProCard";
import OutfitCards from "./Components/OutfitCards";
import config from "./config/config";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[]
    };
    this.getData= this.getData.bind(this)
  }

getData(){
  axios.get( `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles`,{headers:
  {authorization: `${config.Token}`
      }})
      .then((data) =>{
        this.setState({
          products: data.data
        })
      });
}
  componentDidMount() {
    this.getData()
 }

  render() {
    console.log((this.state.products.results))
    
    return (
      <div className="grid grid-cols-8 grid-rows-2 gap-4 min-h-screen m-3">
        <div className="col-start-3 col-end-7 flex justify-center gap-x-10 ml-16">
        
        
          <div className="row-start-1 row-end-2 text-gray-500 ">
            RELATED PRODUCT
            <Cards results={this.state.products.results}/>
          </div>
          <div className="row-start-1 row-end-2 mt-6">
            <Cards />
          </div>
          <div className="row-start-1 row-end-2 mt-6">
            <Cards />
          </div>
          <div className="row-start-1 row-end-2 mt-6">
            <Cards />
          </div>
          <div className="row-start-1 row-end-2 mt-6">
            <Cards />
          </div>
          
        </div>
        
       
      </div>
    );
  }
}

export default App;


{/* <div className="col-start-3 col-end-7 flex justify-center gap-x-10 ml-16">
<div className="row-start-1 row-end-2 text-gray-500">
  YOUR OUTFIT
  <AddProCard />
</div>
<div className="row-start-1 row-end-2 mt-6">
  <OutfitCards />
</div>
<div className="row-start-1 row-end-2 mt-6">
  <OutfitCards />
</div>
<div className="row-start-1 row-end-2 mt-6">
  <OutfitCards />
</div>
</div> */}