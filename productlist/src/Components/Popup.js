import React, { useState } from 'react';
import Popup from "reactjs-popup";
import Comparison from './Comparison';


export default function PopUp() {
    
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
    return (
        <div>
            <button type="button" className="button ml-8 p-16 border-2 border-gray-200 bg-gray-200" onClick={(e) => { e.preventDefault(); setOpen(o => !o) }}>
                      </button>
                      <div className="pop "> 
                  <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                 
                    <Comparison/>
                    
                  </Popup>
                  </div>
        </div>
    )
}
