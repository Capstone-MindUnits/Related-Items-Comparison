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
                    
                    <div>                    
                        <svg className="absolute top-0 right-0 h-7 w-7 pt-2 ml-44" width="25" height="30" fill="currentColor">
                          <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                        </svg>
                    </div>
                    <div> <PopUp/></div> 
                    <div><img  className="-my-36 bg-local" src={e.photos[0].url}/></div>  
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




