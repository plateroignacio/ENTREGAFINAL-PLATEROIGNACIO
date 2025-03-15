const products = [
  { id: "1", name: "Play Station 5", price: 1000, category: "ps5", image: "PS5.jpg", description: "LO MAS MODERNOS EN TECNOLOGIA" },
  { id: "2", name: "XBOX SERIES X", price: 900, category: "xbox", image: "XBOX_SERIES_X.jpg", description: "LA MEJOR CONSOLA DE MICROSOFT" },
  { id: "3", name: "DUALSENSE", price: 150, category: "ps5", image: "DUALSENSE.jpg", description: "EL MANDO MAS COMODO DEL MUNDO" },
  { id: "4", name: "SET COMPUTADORA GAMER", price: 1500, category: "pc", image: "compugamer.jpeg", description: "LA MEJOR MAQUINA ACTUAL" },
];

export const getProducts = (categoryId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(categoryId ? products.filter(p => p.category === categoryId) : products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id));
    }, 1000);
  });
};

export default products;
