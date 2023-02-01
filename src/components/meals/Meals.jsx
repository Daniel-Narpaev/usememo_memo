import { useEffect, useState } from "react"
import styled from "styled-components"
import { fetchApi } from "../lib/fetchApi"
import MealItem from "./meal-item/MealItem"

const Meals = () => {
  const [meals, setMeal]= useState([]);
  const [error, setError]=useState("")
  const [isLoading, setLoading] = useState(true)

  const getMeals = async ()=>{
    try {
      setLoading(true)
      const response = await fetchApi("foods")

      setMeal(response.data)
      setLoading(false)

    } catch (error) {
      setError("Failed to load meals")
    }
  }
  useEffect(()=>{
   getMeals()
  },[])
  return (
      <Card>
        {isLoading && !error && <p>loading....</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {meals.map((meal)=>{
        return (
        <MealItem 
          key={meal._id}
          meal={meal}
           />)
      })}
      </Card>  
  )
}

export default Meals

const Card = styled.div`
  width: 75%;
  background: #FFFFFF;
  border-radius: 16px;
  margin: 60px auto;
  padding: 40px 40px 16px 40px;
`