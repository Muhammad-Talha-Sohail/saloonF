import React, { useState } from "react";
import axios from 'axios'
const App = () => {
  const [worker, setWorker] = useState("");
  const [workId, setWorkId] = useState("");
  const [Image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const changeImg = (e) =>{
    const crtImg = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(crtImg)
    reader.onloadend = function(){
      console.log(reader.result)
      setImage(reader.result)
      
    }
  }


  
  const handleSubmit=async ()=>{
    const response = await axios.post(
      "http://localhost:5000/api/createWorker",{worker,workId,Image,price}


    );

    if(response)
    {
      console.log(response.data)
    }

  }



  return (
    <div style={{display:'block'}}>
    
      <input type="text" value={worker} onChange={(e)=>{setWorker(e.target.value)}}/>
      <input type="text" value={workId} onChange={(e)=>{setWorkId(e.target.value)}}/>
      <input type="file" onChange={changeImg}/>
      <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>

      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>

  );
};

export default App;
