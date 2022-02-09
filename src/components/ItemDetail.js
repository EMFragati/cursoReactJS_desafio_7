import ItemCount from './ItemCount';
import { React, useState } from "react";
import { Link } from 'react-router-dom';

const ItemDetail = ( { item } ) => {
    const [ numberOfItemsAdded , setNumberOfItemsAdded ] = useState(0);
    const onAdd = ( event , number ) => {
        event.stopPropagation();        
        if ( number > 0 ){            
            alert(`Se agregaran ${number} productos al carrito` );
            setNumberOfItemsAdded( number );
        }
    };

    /*Renderizado Condicional. Parte del renderizado que se muestra bajo condiciones particulares*/
    let conditionalContent;
    
    if ( numberOfItemsAdded > 0 ) {
        conditionalContent =
            <Link to={`/cart`}>
                <button type="button" className="btn btn-success">Terminar mi compra</button>
            </Link>             
    } else {
        conditionalContent = <div className="row"><ItemCount stockLimit='5'onAdd={onAdd}/></div>;
    };   

    /*Renderizado*/;
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <img src={item.cover} alt='img'/>
                    </div>
                    <div className="col-4">                        
                        <div className="row"><p className="h1">{item.name}</p></div>
                        <div className="row">{item.description}</div>
                        <div className="row mt-4"><strong>Precio: {item.price}</strong></div>
                        {conditionalContent}
                    </div>
                </div>
            </div>
        </>
    )
  };
  
  export default ItemDetail;