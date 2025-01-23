const productsData = [
    {
      id: 1,
      name: "Vivir adentro",
      bid: 8500,
      writer: "Arnau Vendrell",
      category: "autoayuda",
      cardImg: "./assets/img/products/vivir-adentro.jpg" ,
    },
    {
      id: 2,
      name: "Templo del cielo",
      bid: 9000,
      writer: "Enrique Joven",
      category: "ficción",
      cardImg: "./assets/img/products/el-templo-del-cielo.jpg",
    },
    {
      id: 3,
      name: "Los jardines de la luna",
      bid: 9500,
      writer: "Steven Erikson",
      category: "fantasía",
      cardImg: "./assets/img/products/los-jardines-de-la-luna.jpg",
    },
    {
      id: 4,
      name: "Sinceramente",
      bid: 7500,
      writer: "Cristina Fernandez Kirchner",
      category: "política",
      cardImg: "./assets/img/products/sinceramente.jpg",
    },
    {
      id: 5,
      name: "Antes de Ti",
      bid: 10000,
      writer: "Jojo Moyes",
      category: "novelas",
      cardImg: "./assets/img/products/antes-de-ti.jpg",
    },
    {
      id: 6,
      name: "Doce hombres",
      bid: 8500,
      writer: "Jhon MacArthur",
      category: "espiritualidad",
      cardImg: "./assets/img/products/doce-hombres-comunes-y-corrientes.jpg",
    },
    {
      id: 7,
      name: "El principito",
      bid: 6000,
      writer: "Antoine de Saint-Exupéry",
      category: "infantiles",
      cardImg: "./assets/img/products/el-principito.jpg",
    },
    {
      id: 8,
      name: "El poder del ahora",
      bid: 6500,
      writer: "Eckhart Tolle",
      category: "autoayuda",
      cardImg: "./assets/img/products/el-poder-del-ahora.jpg",
    },
    {
      id: 9,
      name: "Viajeros de la noche",
      bid: 7000,
      writer: "George R. R. Martin",
      category: "ficción",
      cardImg: "./assets/img/products/viajeros-de-la-noche.jpg",
    },
    {
      id: 10,
      name: "La senda oscura",
      bid: 9500,
      writer: "Ana Peris de Elena",
      category: "fantasía",
      cardImg: "./assets/img/products/la-senda-oscura.jpg",
    },
    {
      id: 11,
      name: "El fin de la inflación",
      bid: 7500,
      writer: "Javier Milei",
      category: "política",
      cardImg: "./assets/img/products/el-fin-de-la-inflacion.jpg",
    },
    {
      id: 12,
      name: "After",
      bid: 9000,
      writer: "Anna Todd",
      category: "novelas",
      cardImg: "./assets/img/products/after.jpg",
    },
    {
      id: 13,
      name: "Caminar con Dios",
      bid: 7500,
      writer: "Pedro Fuentes",
      category: "espiritualidad",
      cardImg: "./assets/img/products/caminar-con-dios.png",
    },
    {
      id: 14,
      name: "Fabulas",
      bid: 6000,
      writer: "Rosa Navarro Durán",
      category: "infantiles",
      cardImg: "./assets/img/products/fabulas.jpg",
    },
    {
      id: 15,
      name: "Creer en ti",
      bid: 9500,
      writer: "Daniel J. Martin",
      category: "autoayuda",
      cardImg: "./assets/img/products/creer-en-ti.jpg",
    },
    {
      id: 16,
      name: "Prueba de fuego",
      bid: 10500,
      writer: "James Dashner",
      category: "ficción",
      cardImg: "./assets/img/products/prueba-de-fuego.jpg",
    },
    {
      id: 17,
      name: "Las crónicas de Narnia",
      bid: 9000,
      writer: "C. S. Lewis",
      category: "fantasía",
      cardImg: "./assets/img/products/las-cronicas-de-narnia.jpg",
    },
    {
      id: 18,
      name: "Primer Tiempo",
      bid: 7500,
      writer: "Mauricio Macri",
      category: "política",
      cardImg: "./assets/img/products/primer-tiempo.jpg",
    },
   {
      id: 19,
      name: "Para mi otro amor",
      bid: 6500,
      writer: "Angie Figueroa",
      category: "novelas",
      cardImg: "./assets/img/products/para-mi-otro-amor.jpg",
    },
    {
      id: 20,
      name: "Las Arenas del alma",
      bid: 9000,
      writer: "Dante Gebel",
      category: "espiritualidad",
      cardImg: "./assets/img/products/las-arenas-del-alma.jpg",
    },
    {
      id: 21,
      name: "Caperucita Roja",
      bid: 6000,
      writer: "Charles Perrault",
      category: "infantiles",
      cardImg: "./assets/img/products/caperucita-roja.jpg",
    },
    {
      id: 22,
      name: "El fin de la ansiedad",
      bid: 7500,
      writer: "Gio Zararri",
      category: "autoayuda",
      cardImg: "./assets/img/products/el-fin-de-la-ansiedad.jpg",
    },
    {
      id: 23,
      name: "Sueños de robot",
      bid: 8000,
      writer: "Isaac Asimov",
      category: "ficción",
      cardImg: "./assets/img/products/sueños-de-robot.jpg",
    },
    {
      id: 24,
      name: "Todas las hadas",
      bid: 9000,
      writer: "Laura Gallego",
      category: "fantasía",
      cardImg: "./assets/img/products/todas-las-hadas-del-reino.jpg",
    },
    {
      id: 25,
      name: "Los partidos políticos",
      bid: 7500,
      writer: "Maurice Duverger",
      category: "política",
      cardImg: "./assets/img/products/los-partidos-politicos.jpg",
    },
    {
      id: 26,
      name: "A dos metros de ti",
      bid: 8500,
      writer: "Rachael Lippincott",
      category: "novelas",
      cardImg: "./assets/img/products/a-dos-metros-de-ti.jpg",
    },
    {
      id: 27,
      name: "Los peligros del deleite",
      bid: 8000,
      writer: "John Piper",
      category: "espiritualidad",
      cardImg: "./assets/img/products/los-peligros-del-deleite.jpg",
    },
    {
      id: 28,
      name: "Rapunzel con piojos",
      bid: 6500,
      writer: "El Hematocrítico",
      category: "infantiles",
      cardImg: "./assets/img/products/rapunzel-con-piojos.jpg",
    },
  ];

  const divideProductsInParts = (size) => {
    let productsList = [];
    for (let i = 0; i < productsData.length; i += size) {
      productsList.push(productsData.slice(i, i + size));
    }
    return productsList
  }

  const appState = {
    products: divideProductsInParts(6),
    productLimit: divideProductsInParts(6).length,
    currentProductsIndex: 0,
    activeFilter: null,
  }

