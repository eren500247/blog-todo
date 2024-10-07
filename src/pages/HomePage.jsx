import {
  Dialog,
  DialogActions,
  DialogTitle,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DropDownCategory from "../components/DropDownCategory";
import { useData } from "../services/DataProvider";
import CreatePost from "./CreatePost";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { Link, Outlet, useNavigate } from "react-router-dom";

const HomePage = () => {
  const { allposts, categories } = useData();
  const [allDatas, setAllDatas] = useState(allposts);
  const [postData, setPostData] = useState("");
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    const userDoc = doc(db, "posts", id);
    await deleteDoc(userDoc);
  };
  useEffect(() => {
    setAllDatas(allposts);
  }, [allposts]);
  const filterChange = (value) => {
    setAllDatas(allposts.filter((c) => c.category === value));
  };
  return (
    <div>
      <DropDownCategory filterClick={(e) => filterChange(e)} />
      <h1
        onClick={() => console.log(allDatas.length)}
        className="font-bold text-2xl"
      >
        All Posts
      </h1>
      <div className="w-screen px-3 grid md:grid-cols-3 sm:grid-cols-2 justify-center">
        {allDatas?.length > 0 &&
          allDatas?.map((post) => (
            <div
              key={post.id}
              className="border max-w-md p-2 shadow-lg rounded-lg mt-4"
            >
              <img className="w-full h-80 object-contain" src={post.image} />
              <hr />
              {/* <Link to={'/pageDetail'}>Testing</Link> */}
              <h1
                onClick={()=>navigate(`/pageDetail/${post.id}`)}
                className="hover:underline hover:cursor-pointer mt-2 mb-2 mx-2"
              >
                {post.title}
              </h1>
              <h1 className="hover:cursor-pointer mt-2 mb-2 mx-2">
                {categories.find((c) => c.id === post.category).categoryTitle}
              </h1>
              <div className="flex float-right mb-2">
                <button className="py-1 bg-slate-400 hover:bg-slate-500 text-white w-24 rounded mx-3">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="py-1 bg-red-400 hover:bg-red-500 text-white w-24 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default HomePage;
