import { useState } from 'react'


function App() {
  const [color, setColor] = useState("red")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-72 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center h-[90px] gap-5 shadow-2xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("green")}
          className="bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:text-black hover:bg-green-800"
          style={{backgroundColor: ""}}
          >Green</button>

<button
          onClick={() => setColor("red")}
          className="bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:text-black hover:bg-red-500"
          style={{backgroundColor: ""}}
          >Red</button>

<button
          onClick={() => setColor("purple")}
          className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:text-black hover:bg-purple-600"
          style={{backgroundColor: ""}}
          >purple</button>

<button
          onClick={() => setColor("yellow")}
          className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:text-black hover:bg-yellow-200"
          style={{backgroundColor: ""}}
          >Yellow</button>

<button
          onClick={() => setColor("black")}
          className="bg-black text-white font-semibold py-2 px-4 rounded-full shadow-lg"
          style={{backgroundColor: ""}}
          >Black</button>


<button
          onClick={() => setColor("gray")}
          className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:text-black hover:bg-gray-500"
          style={{backgroundColor: ""}}
          >Gray</button>



<button
          onClick={() => setColor("pink")}
          className="bg-pink-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:text-black hover:bg-pink-300"
          style={{backgroundColor: ""}}
          >Pink</button>

<button
          onClick={() => setColor("blue")}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:text-black hover:bg-blue-600"
          style={{backgroundColor: ""}}
          >Blue</button>

<button
          onClick={() => setColor("cyan")}
          className="bg-cyan-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:text-black hover:bg-cyan-400"
          style={{backgroundColor: ""}}
          >Cyan</button>



          
        </div>
      </div>
    </div>
  )
}

export default App
