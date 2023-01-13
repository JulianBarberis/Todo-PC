import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "curso-react-7fbc3.firebaseapp.com",
  projectId: "curso-react-7fbc3",
  storageBucket: "curso-react-7fbc3.appspot.com",
  messagingSenderId: "110862537377",
  appId: "1:110862537377:web:741a1b3eedabc4960c56e0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

/*

C CREATE
R READ
U UPDATE
D DELETE

*/

const cargarBDD = async () => { //CREATE
    const promise = await fetch("./json/productos.json")
    const productos = await promise.json() 
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"),{//collecition si existe consulta y sino crea
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })


    });


} 


const getProductos = async() => { //READ
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod =>{
        return {...prod.data(), id: prod.id}
    })
    return items
}

const getProducto = async (id) => { //READ
    const producto = await getDoc(doc(db,"productos",id))
    const item = {...producto.data(), id: producto.id}
    return item

}

const updateProducto= async(id, info) => { //UPDATE
    const estado = await updateDoc(doc(db, "productos", id), info)
    return estado
}

const deleteProducto= async(id) => { //DELETE
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
}


//CREATE Y READ ORDENES DE COMPRA

const createOrdenCompra = async(cliente, preTotal, fecha ) => {
    const ordenCompra = await addDoc (collection(db, "ordenCompra"),{
        nombreCompleto: cliente.nombre,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        celular: cliente.celular,
        fecha: fecha,
        preTotal: preTotal
    })
    return ordenCompra
}

const getOrdenCompra =  async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}

export {cargarBDD, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}