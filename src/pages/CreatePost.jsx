import React, { useState } from "react";
import Modal from "../components/Modal";
import { useData } from "../services/DataProvider";
import img from "../assets/default-image.jpg";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../utils/firebase";
import { addDoc, collection } from "firebase/firestore";

const initialValues = {
  title: "",
  content: "",
  category: "",
  image: "",
};
const CreatePost = ({ showCategory, handleClose, postData }) => {
  const { categories } = useData();
  const defaultImg = img;
  if (postData) {
    console.log("data have");
  } else {
    console.log("No Data Here ");
  }
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    try {
      const imageRef = ref(storage, `blog/${file.name + Date.now()}`);
      uploadBytes(imageRef, file).then((snapShot) => {
        getDownloadURL(snapShot.ref).then((url) => {
          setValues({ ...values, image: url });
        });
      });
    } catch (err) {
      console.log("Image Upload Error!", err);
    } finally {
      console.log("Upload Image Finished");
    }
  };
  const formSubmitChange = async (e) => {
    e.preventDefault();
    if (values.title !== "" && values.content !== "") {
      await addDoc(collection(db, "posts"), values);
    }
    setValues(initialValues);
    handleClose();
  };
  return (
    <div>
      <Modal showCategory={showCategory} handleClose={handleClose}>
        <form onSubmit={formSubmitChange}>
          <label htmlFor="imageId">
            <div className="w-full border h-48 rounded">
              <img
                className="w-full object-contain h-full"
                src={values.image === "" ? defaultImg : values.image}
                alt="default-image"
              />
            </div>
          </label>
          <input
            id="imageId"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => handleUploadImage(e)}
          />

          <input
            name="title"
            className="form-input"
            placeholder="Title"
            onChange={handleChange}
          />
          <select
            name="category"
            className="w-full border py-2 rounded text-gray-400 mt-3"
            onChange={handleChange}
          >
            <option value={""}>Choose Category</option>
            {categories?.length > 0 &&
              categories?.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.categoryTitle}
                </option>
              ))}
          </select>
          <textarea
            name="content"
            rows="5"
            className="outline-none border rounded w-full px-3 py-2 mt-3"
            placeholder={"Content"}
            onChange={handleChange}
          />

          <button type="submit" className="form-btn">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default CreatePost;
