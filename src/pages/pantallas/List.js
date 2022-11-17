import React, {useState} from "react";
import "./List.css"

export default function List(){
    
    var url = 'https://api2002.herokuapp.com/api/list/'
    const [data, setData] = useState([]);
    
    fetch(url)
    
    .then((res)=>res.json()).then((resJson)=>setData(resJson));

 

    return(
        
        <div>

            {
                data.map((album)=>(
              
            <div id="musica">

             <div id="texto">   
            <p class = "parrafo" style={{fontSize:10, }}>Album</p>
            <p class = "parrafo"style={{fontSize:30, }}>{album.name}</p>
            <p class = "parrafo"style={{fontSize:20, }}>{album.album}</p>
            <p class = "parrafo"style={{fontSize:20, }}>{album.year}</p>
            </div>
            <div id="imagen2">
             <img  src={album.imagen}/>
            </div>
            </div>
             ))
            
            }

            <button id="boton2" onClick={()=>{
            
            
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                  {
                    imagen: "https://th.bing.com/th/id/OIP.HOflC3bxM2npVIxQu28EdQHaE5?pid=ImgDet&rs=1",
                    name: "Bad Bonny",
                    album: "La despedida",
                    year: "2022",
              }  )
            }).then((res)=>res.json()).then((resJson)=>alert(resJson.message));

            }}>Añadir album</button>
            
        </div>
    )
}