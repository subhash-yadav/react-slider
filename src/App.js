
import { useState } from 'react';
import './App.css';
const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];
function App() {
  
  const [current, setCurrent] = useState(0);
  console.log(current,"left click")
const leftClick = () =>{
  setCurrent(current === 0 ? images.length - 1 : current - 1 )

};
const rightClick = () =>{
  setCurrent(current === images.length - 1 ? 0 : current + 1)

};
  return (
    <div style={{background:"teal",height:"1000px", position:"relative", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <p onClick={leftClick} style={{color:"white", fontSize:"30px", position:"absolute", left:"10px", border:"1px solid black", borderRadius:"50%",padding:"0px 7px", background:"black", cursor:"pointer"}}>&larr;</p>
      <p onClick={rightClick} style={{color:"white", fontSize:"30px", position:"absolute", right:"10px", border:"1px solid black", borderRadius:"50%",padding:"0px 7px", background:"black", cursor:"pointer"}}>&rarr;</p>
      <div style={{display:"flex", height:"500px", width:"800px", overflow:"hidden"}}>
      {
        images.map((image, index)=> current === index && (
          <div key={index}>
        <img style={{height:"500px", width:"800px"}} src={image} alt="" />
      </div>
        ))
      
      }
      </div>
    </div>
  );
}

export default App;
