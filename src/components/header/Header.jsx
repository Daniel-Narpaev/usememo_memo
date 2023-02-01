import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { BasketContext } from "../../store/BasketContext"
import BasketButton from "./BasketButton"


const Header = ({ onShowBasket }) => {
  const { items } = useContext(BasketContext)
  const [animationClass, setAnimationClass] = useState("")

  const calculateTotalAmount = ()=>{
   const sum = items.reduce((s, item)=>{
    return s + item.amount
   },0)
   return sum
  }

   useEffect(()=>{
   setAnimationClass("bump")

   const id = setTimeout(()=>{
     setAnimationClass('')
   },300)
   return ()=>{
    clearTimeout(id)
   }
   }, [items])
  return (
    <Container>
        <Logo>ReactMeals</Logo>
      <BasketButton
      className={animationClass}
      onClick={onShowBasket}  
      count={calculateTotalAmount()}
      />
    </Container>
  )
}

export default Header

const Container = styled.header`
    position:fixed;
    top: 0;
    width: 100%;
    height: 101px;
    background-color:  #8A2B06;;
    display: flex;
    justify-content:space-between;
    padding-left:120px;
    padding-right:120px;
    align-items:center;
    z-index: 1;
`
const Logo = styled.p`
font-weight: 600;
font-size: 38px;
color: white;
margin: 0;
`
