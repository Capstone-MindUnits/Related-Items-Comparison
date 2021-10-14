import React from 'react'

export default function AddProCard() {
    return (
        <div>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-20 mt-14 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    </div>
                    </a>
                    <div className="text-gray-500 text-xs tracking-widest title-font mr-40">CATEGORY</div>
                    <h4 className="text-gray-900 title-font text-sm font-medium">Expanded Product Name With Extra Text</h4>
                    <p className="mb-1 ml-1">$123</p>
                    
                    <ul class="flex pl-1">
                        <li>
                            <i class="fas fa-star fa-xs text-black mb-2"></i>
                        </li>
                        <li>
                            <i class="fas fa-star fa-xs text-black mb-3 mr-1"></i>
                        </li>
                        <li>
                            <i class="fas fa-star fa-xs text-black mb-3 mr-1"></i>
                        </li>
                        <li>
                            <i class="far fa-star fa-xs text-black mb-3 mr-1"></i>
                        </li>
                        <li>
                            <i class="far fa-star fa-xs text-black mb-3 mr-1"></i>
                        </li>
                        </ul>

                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />              
                    <div className="mt-4">
                    </div>
                </div>
                </div>
            </div>
            </section>    
        </div>
    )
}
