
import React from 'react'

export default function CardInfo() {
    return (
        <div>
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
        </div>
    )
}
