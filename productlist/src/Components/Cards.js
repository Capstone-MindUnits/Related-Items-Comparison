import React from "react";
import Popup from "reactjs-popup";


export default function Cards() {
  return (
    <div className="Cards">
      <section className="text-gray-600 body-font">
        <div className="container px-20 py-8 mx-auto">
          <div className="flex flex-wrap -m-8">
            <div className=" w-11/12  mt-8 h-80 border-2 border-gray-400 focus:border-blue-500">
              <a href="" className="block relative overflow-hidden">
                <div
                  alt="ecommerce"
                  className="object-cover object-center w-full h-52 block bg-gray-200"
                >
                  <ul>
                    <li>
                      <i className="far fa-star fa-sm text-black ml-36 mt-3"></i>
                    </li>
                  </ul>

                  <div className="pop"> 
                  <Popup
                    trigger={
                      <div className="box-border mt-3 ml-6 h-32 w-40 p-4 border-2 border-gray-200 bg-gray-200" ></div>
                    }
                    modal
                    onClick={(e)=>e.preventDefault()}
                  >
                      
                    <div className="box-border mt-24  w-max h-80 ml-60 border-2 border-gray-400 bg-white">
                      <div className="compare">COMPARING</div>
                      <div className="names flex gap-36  mt-3">
                      <div className="name1">Product Short Name</div>
                      <div className="name2">Product Short Name</div>
                      </div>
                      
                        <div className="gmo flex gap-24 mb-1  text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>GMO and Pecticide-Free</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        </div>

                        <div className="genetic flex gap-16 mb-1  text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>Made with 100% genetic modificat</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        </div>

                        <div className="madeup flex gap-24 mb-1  text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>This is made up products</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        </div>
                        
                        <div className="matter flex gap-28 mb-1  text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>It doesn't matters w</div>
                        </div>
                        
                        <div className="feature flex gap-28 mb-1 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>Features description</div>
                        </div>

                        <div className="redux flex gap-28 ml-28 mb-1 text-sm">
                        <div>React hooks and redux</div>                      
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        </div>

                        <div className="tailwind flex gap-28 ml-36 text-sm">
                        <div>react tailwind styl</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        </div>
                       
                    </div>
                  </Popup>
                  </div> 

                </div>
              </a>
              <div className="text-gray-500 text-xs title-font mr-40">
                CATEGORY
              </div>
              <h4 className="text-gray-900 title-font text-sm font-medium">
                Expanded Product Name With Extra Text
              </h4>
              <p className="mb-1 ml-1">$123</p>

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

              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
              />
              <div className="mt-4"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// {/* <section class="text-gray-600 body-font">
// <div class="container px-5 py-24 mx-auto max-w-7x1">
//   <div class="flex flex-wrap -m-4">
//     <div class="xl:w-1/3 md:w-1/2 p-4">
//       <div class="bg-current p-6 rounded-none...">
//         <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://wisatamuda.com/wp-content/uploads/2019/02/1-Golden-Gate-Bridge-Gambar-dan-Foto-Tempat-Wisata-Terbaik-di-San-Fransisco-USA.jpg" alt="Image Size 720x400"/>
//         <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//         <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
//         <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//       </div>
//     </div>
//   </div>
// </div>
// </section>  */}
