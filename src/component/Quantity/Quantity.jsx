import React from "react";
import { useState } from "react";


const Quantity = () => {

    const [quantity,setQuantity] = useState({
        Pizza : 0,
        Burger : 0,
        Juice : 0,
    }) 

    const handleQuantity = (item,action) =>{
        console.log("item",item,"action" , action)
      setQuantity((prevState) =>{
        return {
            ...prevState,
            [item] : action == "up" ? quantity[item] +  1 : quantity[item] -  1
        }
      })
    }
  return (
    <div>
     
      <div >
      <h2 style={{color:"gold"}}>Quantity System</h2>
        <div  style={{display:"flex",fontSize:"bold"}}>
        
            <span style={{fontSize:"bold"}}>Pizza</span>
            <button disabled={quantity.Pizza<= 0}  onClick={()=>handleQuantity("Pizza","down")}>-</button>
            <span>{quantity.Pizza}</span>
            <button onClick={()=>handleQuantity("Pizza","up")}>+</button>
        </div>
            <div  style={{alignItems:"center",display:"flex"}}>

            <span>Burger</span>
            <button disabled={quantity.Burger<= 0} onClick={()=>handleQuantity("Burger","down")}>-</button >
            <span>{quantity.Burger}</span>
            <button onClick={()=>handleQuantity("Burger","up")}>+</button >
            </div>


            <div  style={{alignItems:"center",display:"flex"}}>

            <span>Juice</span>
            <button disabled={quantity.Juice<= 0}  onClick={()=>handleQuantity("Juice","down")}>-</button>
            <span>{quantity.Burger}</span>
            <button onClick={()=>handleQuantity("Juice","up")}>+</button>
            </div>
            

        </div>
      </div>

  );
};

export default Quantity;
