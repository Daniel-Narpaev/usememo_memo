import { createContext, useEffect, useState } from "react";
import { fetchApi } from "../components/lib/fetchApi";

export const BasketContext = createContext({ 
    items:[],
 });


 export const BasketProvider = ({children})=>{
   const [items, setItems] = useState([])
   //////////////////////
   const updateBasketItem = async({id, amount})=>{
    console.log(id)
     try {
        const { data } = await fetchApi(`basketItem/${id}/update`, {
            method: "PUT",
            body: {amount},
    }) 
    
    setItems(data.items)
     } catch (error) {
        
     }
   }
/////////////////////////
const deleteBasketItem = async(id)=>{
    console.log(id)
    try {
       const { data } = await fetchApi(`basketItem/${id}/delete`, {
           method: "DELETE",
   }) 
   
   setItems(data.items)
    } catch (error) {
       
    }
  }
/////////////////////////
   const getBasket = async () => {
    try {
        const { data } = await fetchApi("basket");

        setItems(data.items)
    } catch (error) {
        console.log(error);
    }
   }

   useEffect(()=>{
      getBasket()
    }, []);

///////////////////////////
   const addToBasket = async (newItem) => {
    try {
        const response = await fetchApi(`foods/${newItem.id}/addToBasket`,{
            method:"POST",
            body:{amount: newItem.amount}
    });
    setItems(response.data.items)

    } catch (error) {
      console.log(error);
    }
   }
///////////////////////
   const state = {
       items,
       addToBasket,
       updateBasketItem,
       deleteBasketItem,
   }

    return <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // setItems((prevState) =>{
    //     if (!prevState.length) {
    //         return [newItem]
    //     }

    //     const doesItemExist = prevState.find(
    //         (oldItem)=>oldItem.id === newItem.id
    //     )


    //     if (!doesItemExist) {
    //         return [...prevState, newItem]
    //     }
    //     const updatedItems = prevState.map((oldItem)=>{
    //         // const increment=() => oldItem.amount += 1;
              
    //         //   const decrement=() => oldItem.amount -= 1
    //         if (oldItem.id === newItem.id) {
    //             oldItem.amount = oldItem.amount + newItem.amount
    //         }
    //         return oldItem;
    //     })
    //     return updatedItems
    //  })