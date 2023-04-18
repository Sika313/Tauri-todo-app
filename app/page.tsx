'use client'
import { SetStateAction, useState } from "react";

type Data = {
  id: number;
  item: String;
}

export default function Home() {
  const [todo, setTodo] = useState([{id:2, item:""}])
  const test:Data[] = [{id:1,item:'Hello'},{id:2,item:'World'}];

function handleDelete(e: number) {
  let currentTodo = [...todo];
  const newList = currentTodo.filter((obj) => {
    return obj.id !== e;
  })
  setTodo(newList);
}

function handleSubmit() {
  const val = document.querySelector('input')!.value;
  const rand = Math.random();
  const item = {
    id: rand,
    item: val,
  }
  let newList = [...todo, item];
  
  setTodo(newList);
  document.querySelector('input')!.value = ""
  

}
let result = todo.map((obj) => {
  if(obj.item === "") {
    return <span></span>
  }
  return (
  <li key={obj.id} id={obj.id.toString()} className="flex justify-between py-4 mb-10 text-4xl items-center bg-sky-500 px-2 rounded-md">{obj.item} <button onClick={() => handleDelete(obj.id)}  className="bg-blue-900 hover:bg-blue-700 transiiton text-white text-xl px-4 py-2 rounded-md">Delete</button></li>
  )
})

  return (
    <main>
      <h1 className="text-4xl leading-10 text-center font-extrabold mt-2">TODOS APP</h1>

    <div className="flex flex-wrap justify-around pt-20 ">

      <div className="flex flex-col w-[90vw] md:w-[30vw] border-2 border-fuchsia-950 bg-purple-700 rounded-md justify-center items-center h-auto md:h-[30vh] mb-4 md:mb:0">
        <h1 className="text-2xl text-white leading-8 font-extrabold mb-10">TYPE NEW TODO</h1>
        <input type="text" id="todo" className="w-[50%] border border-gray-800 rounded-md mb-6" />
        <button className="w-[20%] bg-blue-900 hover:bg-blue-700 transition-colors text-white text-center p-2 rounded-xl" onClick={handleSubmit}>Add</button>
      </div>

      <div className="flex flex-col w-[90vw] md:w-[40vw]">
        {todo.length === 1? <h1 className="text-2xl text-white border-t-2 border-t-fuchsia-950 leading-8 font-extrabold">LIST EMPTY</h1> : <h1 className="text-2xl text-white mb-10 leading-8 font-extrabold border-t-2 border-t-fuchsia-950">LIST OF TODOS</h1> }
        <ul>
          {
            result
          }
        </ul>
      </div>

    </div>

    </main>
  )
}