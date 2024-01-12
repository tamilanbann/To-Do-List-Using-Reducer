import { useReducer, useState } from "react";
const updateToDosActionType = {
  ADD: "ADD",
  DELETE: "DELETE",
};

function reducer(toDos, action) {
  switch (action.type) {
    case updateToDosActionType.ADD:
      if (![null, "", undefined].includes(action.toDo)) {
        toDos.push(action.toDo);
        localStorage.setItem("to_do_list", JSON.stringify(toDos));
      }
      break;
    case updateToDosActionType.DELETE:
      toDos.splice(action.index, 1);
      localStorage.setItem("to_do_list", JSON.stringify(toDos));
      break;
    default:
      return toDos;
  }

  return [...toDos];
}
function getToDo() {
  const toDos = localStorage.getItem("to_do_list");
  return toDos ? JSON.parse(toDos) : [];
}

export default function ToDOList() {
  const [toDo, setToDo] = useState("");

  const [toDos, updateToDos] = useReducer(reducer, getToDo());

  const onAddToDO = () => {
    updateToDos({ type: updateToDosActionType.ADD, toDo: toDo });
    setToDo("");
  };
  const onRemoveTodo = (toDoIndex) => {
    updateToDos({ type: updateToDosActionType.DELETE, index: toDoIndex });
  };
  const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      onAddToDO();
    }
  };
  return (
    <div className="min-w-[320px]">
      <div className="flex justify-center items-center  ">
        <div className="grid grid-cols-6 gap-4  m-2 p-2 w-1/2 border-blue-100 border-4 p-8 min-w-[320px]">
          <div className="col-span-6 font-bold text-lg text-black dark:text-white ">
            To Do List
          </div>
          <input
            value={toDo}
            type="text"
            id="to_do"
            className="flex col-span-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your To Do"
            onKeyPress={handleKeyPress}
            onChange={(e) => setToDo(e.target.value)}
          />
          <button
            className="bg-blue-500 col-span-1 rounded-lg focus:ring-blue-600 focus:border-blue-500 hover:bg-blue-600 block w-3/4 p-2.5 min-w-12"
            onClick={onAddToDO}
          >
            +
          </button>
        </div>
        <br></br>
        <br></br>
      </div>
      <div className=" flex justify-center min-w-[320px]">
        <div className="w-1/2 ">
          {toDos.map((toDo, toDoIndex) => (
            <div className="grid grid-cols-6 " key={toDoIndex}>
              <p className="break-words rounded bg-blue-200 m-2 p-2 col-span-5 min-w-[20px]">
                {toDo}
              </p>
              <button
                className="flex min-w-[40px] justify-center items-center rounded bg-blue-200 m-2 p-2 col-span-1 bg-blue-500 focus:ring-blue-600 focus:border-blue-500 hover:bg-blue-600 block "
                onClick={() => onRemoveTodo(toDoIndex)}
              >
                <svg
                  className="text-gray-800 dark:text-white grid flex items-center justify-center"
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  fill="currentColor"
                >
                  <path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
