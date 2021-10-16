
import CardInfo from './CardInfo';
import PopUp from './PopUp';


export default function Cards(props) {
  {props.results&&console.log(props.results[0].photos[0].url)}

  return (
    <div className="Cards">
      <section className="text-gray-600 body-font">
        <div className="container px-20 py-8 mx-auto">
          <div className="flex flex-wrap -m-8">
            <div className=" w-11/12  mt-8 h-80 border-2 border-gray-400 focus:border-blue-500">

              <a href="" className="block relative overflow-hidden">
                <div alt="ecommerce" className="object-cover object-center w-full h-52 block bg-gray-200">
                  <ul>
                    <li>
                      <i className="far fa-star fa-sm text-black ml-36 mt-3"></i>
                    </li>
                  </ul>

                  <div><img  className="-mx-6 w-10" src=""/></div>

                  <div> <PopUp/></div>    
                   
                </div>
              </a>

             <div><CardInfo/></div>

              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
              <div className="mt-4"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


