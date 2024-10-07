import React from "react";

const Modal = ({children,showCategory,handleClose}) => {
  if(!showCategory){
    return;
  }
  return (
    <div onClick={handleClose} className="absolute bg-[#00000066] opacity-0.5 w-screen h-screen z-10 top-0 flex justify-center align-middle">
      <div onClick={(e)=>e.stopPropagation()} className="bg-white shadow-lg rounded-2xl max-w-md m-auto py-5 px-5 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default Modal;
