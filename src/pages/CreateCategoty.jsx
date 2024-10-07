import React, { useState } from "react";
import Modal from "../components/Modal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { Alert } from "@mui/material";

const CreateCategoty = ({ showCategory, handleClose }) => {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [alterStatus, setAlertStatus] = useState(false);
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (categoryTitle.trim() !== "") {
        console.log(categoryTitle);
      } else {
        console.log("No Category Enter");
      }
      await addDoc(collection(db, "categories"), { categoryTitle });
      setAlertStatus(true);
    } catch (err) {
      console.log("Error", err);
    } finally {
      setTimeout(() => setAlertStatus(false), [2000]);
      handleClose();
      setCategoryTitle("");
    }
  };
  return (
    <div>
      <Modal showCategory={showCategory} handleClose={handleClose}>
        <form onSubmit={onSubmit} className="py-2">
          <label className="font-bold text-2xl w-full">Create Category</label>
          <input
            value={categoryTitle}
            onChange={(e) => setCategoryTitle(e.target.value)}
            className="form-input"
            placeholder="Enter Category Title"
          />
          <button className="form-btn">
            Submit
          </button>
        </form>
      </Modal>
      {alterStatus && (
        <Alert severity="success">Successfuly created category.</Alert>
      )}
    </div>
  );
};

export default CreateCategoty;
