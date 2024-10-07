import React, { useEffect, useState } from "react";

const MotiQuotesPage = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // useEffect(() => {
  //   const startUp = async () => {
  //     try {
  //       const response = await fetch("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random");



  //       if (response.ok) {
  //         console.log("OK");
  //       } else {
  //         throw new Error();
  //       }
  //     } catch (e) {
  //       console.log("Fetching Error >>", e);
  //     }
  //   };
  //   startUp();
  // }, []);
  return (
    <div className="bg-slate-500 rounded overflow-auto px-4 py-2 shadow-2xl">
      <div>
        <h1 className="text-white">
          <q>Moti Quote</q>
        </h1>
        <p className="text-white float-right">By Author</p>
      </div>
    </div>
  );
};

export default MotiQuotesPage;
