import Header from '../components/Header'
import './api.css'
import List from './pantallas/List'
const api = ()=>{
    return(

       
       <div className='api'>
           <Header/>
         <div></div>

         <div class="container1">
    
    <div class="pelicula-principal">
         <div class="contenedor">
             <h3 class="titulo">TUS ALBUNES</h3>
             <p id='descripcion' class="descripcion">
             Hace muchos años todos los místicos y filósofos sabían el poder de la música, sabían que tiene la capacidad de alterar o de tranquilizar. Parece ser que la música de rock crea intranquilidad mientras que la mayoría de la música clásica crea estados de animo mucho mas armoniosos. 
             </p>
             
             
         </div>
     </div>
     </div>
           <div>
            <List/>
            </div>
       </div>
      
       
    
    )
}
export default api