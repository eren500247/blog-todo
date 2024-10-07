import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../utils/firebase";
import useGetRequest from "./useGetRequest";

const DataContent = createContext();

const useData = () => useContext(DataContent);

const DataProvider = ({ children }) => {
  const categories = useGetRequest("categories")
  const allposts = useGetRequest("posts")
  const allTodos = useGetRequest("todos")

  return (
    <DataContent.Provider value={{ categories, allposts,allTodos }}>
      {children}
    </DataContent.Provider>
  );
};
export default DataProvider;
export { DataContent, useData };
