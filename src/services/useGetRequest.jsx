import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../utils/firebase";

function useGetRequest(dbName) {
  const [datas, setDatas] = useState([]);
//   const [theme, setTheme] = useState("light");
//   const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onStartUp = async () => {
    //   setLoading(true);
      try {
        const dataQuery = query(collection(db, dbName));
        const unsubscribe = onSnapshot(dataQuery, (querySnapShot) => {
          const data = querySnapShot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setDatas(data);
        });
        return () => unsubscribe();
      } catch (err) {
        console.log("Fetching Error! ", err);
      } finally {
        // setLoading(false);
        console.log("Complete Data Fetch")
      }
    };
    onStartUp();
  }, []);
  return datas
}
export default useGetRequest;
