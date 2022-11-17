import Header from '../components/Header'
import './Formulario.css'
import { useState } from 'react';

const Formulario = ()=>{
        
  const [Artista,SetArtista]=useState("");
  const [Album,SetAlbum]=useState("");
  const [Año,SetAño]=useState("");
  const [Imagen,SetImagen]=useState("");
        
        var url = 'https://api2002.herokuapp.com/api/list/';
        
        return (
            <div className='formulario'>
                 <Header></Header>
<br></br>
          <form >
            
            
            <h1>AGREGAR ALBUM</h1>
         
            
            <div>
              <label>Nombre del artista</label>
              <input type="text" id ="id" onChange={(e) => SetArtista(e.target.value)}/>   
            </div>

            <div>
              <label>Nombre de album</label>
              <input type="text"  id ="id" onChange={(e) => SetAlbum(e.target.value)}/>  
            </div>
            
            
            <div>
              <label>Año</label><br></br>
              <input type="text"  id ="id"onChange={(e) => SetAño(e.target.value)}/>
            </div>
            
            <div>
              <label>Imagen Link</label>
              <input type="text"  id ="id" onChange={(e) => SetImagen(e.target.value)} />    
           
            </div>
            </form>
           {/*-------------------------------------BOTON---------------------------------------------------------*/ } 
           
           <center><button id='boton3' style={{margin:20}} onClick={()=>{

fetch(url,{
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(
    {
      imagen: Imagen,
      name: Artista,
      album: Album,
      year: Año,
}  )
}).then((res)=>res.json()).then((resJson)=>alert(resJson.message));

}}>Añadir album</button></center> 

          
          </div>
        );
      };

export default Formulario