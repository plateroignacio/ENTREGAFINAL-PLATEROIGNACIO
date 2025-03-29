import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getProducts = async (categoryId) => {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);
  const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return categoryId
    ? products.filter((product) => product.category === categoryId)
    : products;
};

export const getProductById = async (id) => {
  const productDoc = doc(db, "products", id);
  const snapshot = await getDoc(productDoc);

  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  } else {
    throw new Error("Producto no encontrado");
  }
};
