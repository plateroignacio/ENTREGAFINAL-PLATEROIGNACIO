const products = [
  { id: "1", name: "The Last of Us Part II", price: 60, category: "ps5", image: "tlou2.jpg", description: "Juego de acción y aventura." },
  { id: "2", name: "Halo Infinite", price: 55, category: "xbox", image: "halo.jpg", description: "Shooter en primera persona." },
  { id: "3", name: "Cyberpunk 2077", price: 50, category: "pc", image: "cyberpunk.jpg", description: "RPG de mundo abierto." },
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
