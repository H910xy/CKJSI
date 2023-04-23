import React, { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(60)
  const [inputVal, setInputVal] = useState('')


  return (
    <div className="h-full w-full bg-blue-200">
      <div className="flex flex-1 flex-col justify-center items-center gap-y-4">
        <h1 className="text-[48px] text-black">{count}</h1>
        <input 
          type="text" 
          placeholder="Type here" 
          className="input input-bordered w-full max-w-xs"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          
          />
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
        <button
            onClick={()=> setCount((prev) => prev - +inputVal)} 
            className="btn ">Giảm đi input</button>
          <button
            onClick={()=> setCount((prev) => prev -1)} 
            className="btn ">Giảm đi 1</button>
          <button
            onClick={() => setCount(60)} 
            className="btn">Reset</button>
          <button 
            onClick={() => setCount((prev) => prev +1)}
            className="btn">Tăng thêm 1</button>
            <button
            onClick={()=> setCount((prev) => prev + +inputVal)} 
            className="btn ">Tăng thêm input</button>
        </div>
      </div>
    </div>
  )
}

export default Home
