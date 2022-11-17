import Header from '../components/Header'
import './Collections.css'
import React, {useState} from 'react'

const Collections = ()=>{
   
    const [id,setID]=useState("");

    return(
       <div className='collections'>
       <Header></Header>

       <br></br>
       <div id='form'> 
    
      
        <p id='p1' style={{fontSize:50, color: "black"}}>Eliminar album</p>
      
           
          <label>
            
            <p id='p2'>Nombre del album a borrar:</p>
          <img src='https://th.bing.com/th/id/OIP.f74eWtzxbCtkpBw7mllVoAHaHa?pid=ImgDet&rs=1'/>
            <input type="text" id='id'  onChange={(e) => setID(e.target.value)}/>
          </label>
     
        <button  id='boton' onClick={()=>{
             var url='https://api2002.herokuapp.com/api/list/'+id;
             fetch(url,{
                method: 'DELETE'
            }).then((res)=>res.json()).then((resJson)=>alert(resJson.message));
             
         }}>Eliminar album</button>    
        </div>
        
       </div>
    )
}
export default Collections