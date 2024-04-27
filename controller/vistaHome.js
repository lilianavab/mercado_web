export const vistaHome = (req, res) => {
   
    const  productos = [
        {nombre: 'banana', imagen:'/img/banana.png'},
            {nombre: 'cebollas', imagen:'/img/cebollas.png'},
            {nombre: 'pimenton', imagen:'/img/pimenton.png'},
            {nombre: 'papas', imagen:'/img/papas.png'},
            {nombre: 'lechuga', imagen:'/img/lechuga.png'},
            {nombre: 'tomate', imagen:'/img/tomate.png'},
    ];

    res.render("home", { 
        layout: "main",
        titulo: "Bienvenido al mercado WEB, seleccione sus productos",
        productos: productos

    });
    
}; 




    
