import styled from "styled-components"
import {ReactComponent as BasketIcon} from "../../assets/icons/Basket-icon.svg"


const BasketButton = ({count, ...restProps}) => {
  return (
    <StyledBasketButton {...restProps}>
        <BasketIcon/>
        <StyledTitle>Your Cart</StyledTitle>
        <StyledCounter id="counter">{count || 0}</StyledCounter>
    </StyledBasketButton>
  )
}

export default BasketButton

const StyledBasketButton = styled.button`
    background: #9c3c16;
    border-radius: 50px;
    padding: 12px 32px;
    font-weight:600;
    font-size: 16px;
    line-height: 24px;
    color: white;
    border:none;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color:#5a1f08;
    }
    &:hover > #counter{
        background-color:#c44715;
    }

    &.bump {
      animation: bump 300ms ease-out;
    }

    @keyframes bump {
      0% {
        transform: scale(1);
      }
      10% {
        transform: scale(0.9);
      }
      30% {
        transform: scale(1.1);
      }
      50% {
        transform: scale(1.15);
      }
      100% {
        transform: scale(1);
      }
    }    
`
const StyledTitle = styled.span`
    margin-left: 12px;
    margin-right: 24px;
`
const StyledCounter = styled.span`
    background: #c44715;
    border-radius: 30px;
    padding: 12px 32px;
    font-weight:600;
    font-size: 20px;
    line-height: 24px;
    color: white;
`