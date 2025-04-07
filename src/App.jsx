import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookMarked, setBookMarked] = useState([]);

  const handleBookMark = (blog) => {
    setBookMarked([...bookMarked, blog]);
  }

  console.log(bookMarked);

  return (
    <>

      <Navbar></Navbar>



      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>
        <div className="right-container w-[30%] border-2">
          <h1>Reading Time : 0</h1>
          <h1>Bookmark Count : 0</h1>

          {
            bookMarked.map(marked => <p>{marked.title}</p>)
          }

        </div>
      </div>

    </>
  )
}

export default App
