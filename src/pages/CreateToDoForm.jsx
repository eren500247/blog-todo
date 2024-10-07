import { addDoc, collection } from "firebase/firestore";
import Modal from "../components/Modal";
import React, { useState } from "react";
import { db } from "../utils/firebase";

const CreateToDoForm = ({ show, handleShow }) => {
  const [inputList,setInputList] = useState({
    content : "",
    date: "",
    checkStatus : false
  })

  const handleSubmit = async(e)=>{
    e.preventDefault()
    await addDoc(collection(db,"todos"),inputList)
    handleShow()
  }
  const handleChange = (e)=>{
    setInputList({...inputList,[e.target.name] : e.target.value})
  }
  return (
    <div>
      <Modal showCategory={show} handleClose={handleShow}>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <label className="font-bold text-2xl w-full">Create Task</label>
          <input type="text" name="content" onChange={(e)=>handleChange(e)} className="form-input" placeholder="Enter Content"/>
          <input type="date" name="date" onChange={(e)=>handleChange(e)} className="border w-full py-2 px-2 mt-2"/>
          <button type="submit" className="form-btn hover:cursor-pointer">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default CreateToDoForm;
