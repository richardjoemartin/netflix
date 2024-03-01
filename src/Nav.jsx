import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
  const [show,setShow]=useState(false)
  
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
    if(window.scrollY>380){
      setShow(true)
    }
    else{
      setShow(false)
    }
   
  })
})
 // console.log(show)
  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img width={'150px'} src="https://pngimg.com/uploads/netflix/netflix_PNG12.png" />
    </div>
  )
}

export default Nav