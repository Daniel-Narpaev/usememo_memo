import styled from "styled-components"
import BasketButton from "./BasketButton"


const Header = () => {
  return (
    <Container>
        <Logo>ReactMeals</Logo>
      <BasketButton count="7"/>
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
