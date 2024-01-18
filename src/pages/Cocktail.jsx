import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage'

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const loader = async ({ params }) => {
  const { id } = params
  const response = await axios.get(`${cocktailSearchUrl}${id}`)
  const singleCocktail = response.data.drinks[0]
  return { singleCocktail, id }
}

const Cocktail = () => {
  const { singleCocktail, id } = useLoaderData()
  const {
    strDrink: name,
    strDrinkThumb: img,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleCocktail
  console.log(singleCocktail)
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back to home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={img} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Cocktail
