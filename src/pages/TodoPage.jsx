import React, { useState } from "react";
import CreateToDoForm from "./CreateToDoForm";
import { useData } from "../services/DataProvider";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

const TodoPage = () => {
  const [show, setShow] = useState(false);
  const { allTodos } = useData();
  const [finalData, setFinalData] = useState([]);
  const [checkData, setCheckData] = useState(false);
  const completedTask = allTodos.filter((i) => i.checkStatus === true);
  const handleShow = () => {
    setShow(!show);
  };
  const handleChange = async (id, checkStatus) => {
    const userDb = doc(db, "todos", id);
    const newField = { checkStatus: !checkStatus };
    await updateDoc(userDb, newField);
  };

  // const handleUp = (index)=>{
  //   if(index < allTodos.length + 1){
  //     const rangeList = allTodos
  //     [rangeList[index],rangeList[index-1]] = [rangeList[index-1],rangeList[index]]

  //     console.log("RangeList",index)
  //   }

  // }

  // useEffect(() => {
  //   if (allTodos) {
  //     set(allTodos);
  //   }
  // }, []);

  return (
    <div>
      <button
        onClick={() => handleShow()}
        className="float-right create-btn text-white mx-2"
      >
        Add
      </button>
      <div className="clear-both py-5">
        <h1 className="text-center text-lg font-bold mb-3">
          Total Task : {allTodos.length}
        </h1>
        <h1 className="text-center text-md text-green-500 mb-5">
          Completed Task : {completedTask.length}
        </h1>
        <ul>
          {allTodos.length > 0 ? (
            allTodos.map((data, index) => (
              <li key={data.id}>
                <div className="flex justify-between px-3 py-4 bg-slate-500 text-white rounded mx-auto max-w-xl shadow-lg mb-3">
                  <h1 className="text-md font-bold">{data.content}</h1>
                  <div className="flex gap-3 items-center">
                    <p className="text-md text-gray-200">{data.date}</p>
                    <input
                      type="checkbox"
                      value={data.checkStatus}
                      checked={data.checkStatus}
                      onChange={() => handleChange(data.id, data.checkStatus)}
                      className="form-checkbox h-5 w-5 text-blue-600 rounded-md transition duration-200 ease-in-out shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    />
                    <button>Down</button>
                    <button onClick={() => handleUp(index)}>Up</button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <p>There is no todo data currently</p>
          )}
        </ul>
      </div>
      <CreateToDoForm show={show} handleShow={() => handleShow()} />
    </div>
  );
};

export default TodoPage;
