import { useContext } from "react"
import styled from "styled-components"
import { BasketContext, } from "../../store/BasketContext"
import Modal from "../UI/Modal"
import BasketItem from "./BasketItem"
import TotalAmount from "./TotalAmount"

const Basket = ({onClose}) => {
  const { items, updateBasketItem, deleteBasketItem } = useContext(BasketContext)

  const getTotalPrice = ()=>{
    return items.reduce((sum, {price, amount}) => sum + price * amount, 0)
  }
  const incrimentAmount = ( id, amount )=>{
    updateBasketItem({amount: amount + 1, id: id})
  }
 const dicrimentAmount = ( id, amount )=>{
  if (amount > 1) {
    updateBasketItem({amount: amount - 1, id: id})
   }else{
    deleteBasketItem(id)
   }
 }
  return (
    <Modal onClose={()=>{}}>
      <Content>
        {items.length ? (
          <FixedHeightContainer>
          {items.map((item)=>{
          return (
          <BasketItem 
               key={item._id}
               title={item.title} 
               price={item.price} 
               amount={item.amount}
               incrimentAmount={() => incrimentAmount(item._id, item.amount)}
               dicrimentAmount={() => dicrimentAmount(item._id, item.amount)}
          />
        )})}
        </FixedHeightContainer>
        ):null}
        
        <TotalAmount price={getTotalPrice()} onClose={onClose} onOrder={()=>{} }/>
      </Content>
    </Modal>
  )
}

export default Basket

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem 0;
`
const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y:scroll;
`