import { React, useEffect , useState } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import products from '../database/products';
import customFetch from '../utils/customFetch';
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  /*Estados de la componente*/
    const [ item , setItem ] = useState();
    const [ allProducts , setAllProducts ] = useState(products);   
    const urlParams = useParams();

  /*Fases de vida: montage y actualizacion*/;
    useEffect(() => {    
      
        /*Funciones basicas*/
        const getItem = () =>{            
          return allProducts.find( product => product.id === urlParams.id )    
        };    

        /*A los 2 segundos del renderizado inicial se ejecutara esta promesa*/  
            customFetch ( 2000, getItem())
                .then( response => setItem( response ) )
                .catch( error => console.log( error ));
    },);

  /*Renderizado Condicional*/
    /*Si tengo un item lo muestro, si no, significo que el customFetch no termino. En ese caso, visualizo un spinner con el mensaje "Cargando..."*/
    
    let content = <><Spinner/></>;   
    if ( item !== undefined ) { 
        content = <><ItemDetail item={item}/></> 
    };

  /*Renderizado*/;
     return( 
        <>   
          <div className="my-5">     
           { content }         
           </div> 
        </> 
    )
};

export default ItemDetailContainer;