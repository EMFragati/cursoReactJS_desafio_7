import { React, useEffect , useState } from "react";
import customFetch from '../utils/customFetch';
import { useParams } from 'react-router-dom';
import products from '../database/products';
import ItemList from './ItemList';

const ItemListContainer = () => {
    /*Estados de la componente*/      
      const [ productsToShow , setProductsToShow ] = useState();      
      const urlParams = useParams();
      
    /*Fases de vida: montage y actualizacion*/;
      useEffect(() => {         
       
          /*Funciones basicas*/   
          const getProducts = () => {             
            if ( urlParams.categoryId) { return products.filter( product => product.category === urlParams.categoryId ) }
            return products;              
          };        
  
          /*A los 2 segundos del renderizado inicial se ejecutara esta promesa*/  
              customFetch ( 2000, getProducts())
                  .then( response => setProductsToShow( response ) )
                  .catch( error => console.log( error ));
      
      },);    
  
    /*Renderizado*/;
       return( 
          <>          
              <div className="elementsContainer">
                <ItemList items={productsToShow}/>
              </div>
          </> 
      )
  };
  
  export default ItemListContainer;