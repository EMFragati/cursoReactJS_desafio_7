const products = [];

/*Armo la informacion en este formato para simplificar lineas de codigo, hacer mas entendible que numeros hay para una franquicia y su categoria.
La descripcion y el precio es el mismo para todos los numeros de esa franquicia.
*/
let franchisesPerCategory = [
    { 
      category: "shonen",
      franchises: [
        { 
            name: "Bleach",
            numbers: [ 
              "01", "06" , "08" , "12" , "20" , "31" , "35" , "43" , "55" , "64"
            ],
            price: "500",
            editorial: "Ivrea",
            editorialCoverURL: "https://ivrea.com.ar/bleach/bleach_",
            description: "Lo que Ichigo Kurosaki menos hubiera deseado tener, era la habilidad de poder ver fantasmas. Él pensaba que no le iba a servir para nada útil hasta el día que se vio envuelto en una situación de peligro cuando su familia sufrió el ataque de un Hollow, una malévola alma perdida. Una serie de sucesos lo convierten en un Shinigami, dedicando su vida a proteger a los inocentes y ayudando a que los espíritus atormentados encuentren la paz en la Sociedad de Almas. Lo ayudan varios de sus amigos que cuentan con capacidades espirituales. También Urahara y Rukia, la shinigami que le cedió sus poderes."            
        },
      ],
    },
    
    {
      category: "shojo",
      franchises: [
        { 
            name: "Sakura Card Captor",
            numbers: [ "1", "2" , "3", "4" , "5" , "6" , "7" , "8" , "9" ],
            price: "500",
            editorial: "Ivrea",
            editorialCoverURL: "https://ivrea.com.ar/cardcaptorsakura/cardcaptorsakura",
            description: "Cardcaptor Sakura cuenta la historia de Sakura Kinomoto, una nena de 4º grado muy inteligente, alegre y... común. Su vida, sin embargo, pega un giro radical el día que encuentra un libro sellado en la biblioteca de su casa, lo abre, y sin querer libera las cartas Clow: un mazo mágico de increíbles poderes pero imprevisibles consecuencias. Con la ayuda de Kerberos, la bestia guardiana (reconvertida en el adorable Kero, su leoncito de peluche) Sakura deberá ir recolectando las cartas a la vez que aprende a dominarlas."
        },
      ],
    },

    {
      category: "seinen",
      franchises: [
        { 
            name: "Hellsing",
            numbers: [ "1", "2", "3" , "4" , "5" , "6" , "7" , "8"],
            price: "500",
            editorial: "Ivrea",
            editorialCoverURL: "https://ivrea.com.ar/hellsing/hellsingne",
            description: "Llega uno de los mayores éxitos de los últimos años! Hellsing, una organización auspiciada por el gobierno británico, controlada por la implacable Integra, busca exterminar a los despiadados vampiros, cuya actividad va en aumento y causa pánico en la población. Su principal arma es Alucard, un sádico vampiro liberado por Integra después de años de reclusión. Junto a él, Victoria Seras, una chica policía ahora mitad vampiro. El peligro? Una posible guerra mundial."
        },
      ],
    }
];

/*Combierto el array productsPerCategory en varios objetos "producto", cada uno con su respectiva informacion. Para que al momento de trabajar con ellos pueda pedirles esta informacion directamente*/
for ( let categoryDetail of franchisesPerCategory ) {
    for ( let franchise of categoryDetail.franchises ) {
        for ( let number of franchise.numbers ) {
            let newProductDetail = {
                id: `${franchise.name.toLowerCase()}_${number}`,
                name: franchise.name,                
                price: franchise.price,
                editorial: franchise.editorial,                
                description: franchise.description,
                cover: `${franchise.editorialCoverURL}${number}.jpg`,
                category: categoryDetail.category,
                number: number,
            };
            products.push( newProductDetail );
        };
    };    
};

export default products;