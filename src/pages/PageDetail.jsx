import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../services/DataProvider";

const PageDetail = () => {
  const {id} = useParams();
  const { allposts, categories } = useData();
  const detailData = allposts.length > 0 && allposts.find(e => e.id === id)
  const navigate = useNavigate()
  return (
    <div className="mt-10">
      <button onClick={()=>navigate('/')} className="create-btn text-white mb-5 mx-2">Back</button>
      <div className="w-screen border h-80 mx-auto">
        <img
          className="w-full h-full object-contain"
          src={detailData.image}
          alt="kmd image"
        />
      </div>
      <h1 className="font-bold text-2xl mx-10 my-4">{detailData.title}</h1>
      <p className="text-xl mx-10 my-4">
        {detailData.content}
      </p>
    </div>
  );
};

export default PageDetail;
