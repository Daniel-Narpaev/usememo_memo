import styled from 'styled-components'
import Button from '../UI/Button'
import {ReactComponent as IncrimentIcon} from "../../assets/icons/incriment-icons.svg"
import {ReactComponent as DicrimentIcon} from "../../assets/icons/dicriment-icons.svg"


const BasketItem = ({ title, price, amount }) => {
  return (
    <Container>
        <Title>{title}</Title>
        <Content>
            <PriceAndAmountContainer>
              <Price>${price}</Price>
              <Amount>x{amount}</Amount>
            </PriceAndAmountContainer>
            <CounterContainer>
               <Button borderRadius='squared' variant='outlined'>-</Button>
               <Button borderRadius='squared' variant='outlined'>+</Button>
            </CounterContainer>
        </Content>
    </Container>
  )
}

export default BasketItem

const Container = styled.div`
    padding: 24px 0;
    width: 100%;
`
const Title = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    /* text-align: center; */
    color: #222222;
    margin: 0px 0px 12px 0px;

`
const Price = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #AD5502;
    margin: 0;
`

const Amount = styled.span`
    border: 1px solid #D6D6D6;
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color:#222222;
    padding: 6px 14px;
    display:block;
`
const PriceAndAmountContainer = styled.div`
    width: 153px;
    display: flex;
    align-items:center;
    justify-content: space-between;

`
const  CounterContainer = styled.div`
display: flex;
gap: 14px;
Button{
    :nth-child(2){
        font-size:1.6rem
    }
}
`
const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`