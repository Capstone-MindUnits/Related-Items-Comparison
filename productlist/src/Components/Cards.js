import PopUp from './PopUp';


export default function Cards(props) {
  {props.results&&console.log(props.results[0].photos[0].url)}

  return (
    <div className="wrapper">
             {props.results&&props.results.map((e,key)=>{
  return(
<div key={key}>
          <section className="text-gray-600 body-font ml-1">
 
          <div className="container px-20 mx-auto">
         
            <div className="flex flex-wrap -m-4">
 
              <div className=" w-11/12  mt-8 h-80 border-2 border-gray-400 focus:border-blue-500">
 
                <a href="" className="block relative overflow-hidden">

                  <div alt="ecommerce" className="object-cover object-center w-full h-52 block bg-gray-200">
                    
                    <ul>                    
                      <li>
                        <i className="far fa-star fa-sm text-black ml-36 mt-3"></i>
                      </li>
                    </ul>
                    <div> <PopUp/></div> 
                    <div><img  className="-my-36" src={e.photos[0].url}/></div>  
                  </div>
                </a>

                <div className="text-gray-500 text-xs title-font mr-40">
                CATEGORY
              </div>
              <h4 className="text-gray-900 title-font text-sm font-medium">
                {e.name}
              </h4>
              <p className="mb-1 ml-1">{e.original_price}</p>
              <ul className="flex pl-1">
                <li>
                  <i className="fas fa-star fa-xs text-black mb-2"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-xs text-black mb-3 mr-1"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-xs text-black mb-3 mr-1"></i>
                </li>
                <li>
                  <i className="far fa-star fa-xs text-black mb-3 mr-1"></i>
                </li>
                <li>
                  <i className="far fa-star fa-xs text-black mb-3 mr-1"></i>
                </li>
              </ul>

               </div>
               </div>

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
                <div className="mt-4"></div>         
          </div>
        </section>
        </div>
        )
      })}
    </div>
  );
}




