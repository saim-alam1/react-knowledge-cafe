import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookMarked, setBookMarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) => {
    setBookMarked([...bookMarked, blog]);
  }



  const handleMarkedAsRead = (time, id) => {
    // setReadingCount(readingCount + time);
    const newTime = readingCount + time;
    setReadingCount(newTime);

    // removeFromBookMark(id);
  }

  // console.log(readingCount);

  // const removeFromBookMark = (id) => {
  //   const remainingBookMark = bookMarked.filter(mark => mark.id !== id);
  //   console.log(remainingBookMark);
  // }


  return (
    <>

      <Navbar></Navbar>



      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookMark={handleBookMark} handleMarkedAsRead={handleMarkedAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%] border-2">
          <h1>Reading Time : {readingCount}</h1>
          <h1>Bookmark Count : {bookMarked.length}</h1>

          {
            bookMarked.map(marked => <p className='bg-amber-700 p-2 m-2 rounded-2xl text-white shadow-2xl'>{marked.title}</p>)
          }

        </div>
      </div>

    </>
  )
}

export default App
