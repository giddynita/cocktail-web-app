import { useLoaderData, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage'
import { useQuery } from '@tanstack/react-query'

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${id}`)
      const singleCocktail = response.data.drinks[0]
      return singleCocktail
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params
    await queryClient.ensureQueryData(singleCocktailQuery(id))
    console.log(id)
    return { id }
  }

const Cocktail = () => {
  const { id } = useLoaderData()
  const { data } = useQuery(singleCocktailQuery(id))
  const singleCocktail = data
  if (!singleCocktail) {
    return <Navigate to="/" />
  }

  const {
    strDrink: name,
    strDrinkThumb: img,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleCocktail
  const validIngredients = Object.keys(singleCocktail)
    .filter(
      (key) => key.startsWith('strIngredient') && singleCocktail[key] !== null
    )
    .map((ingredients) => singleCocktail[ingredients])

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back to home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={img} alt={name} className="img" />
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
            <span className="drink-data">ingredients:</span>
            {validIngredients.map((ingredient, index) => {
              return (
                <span className="ing" key={ingredient}>
                  {ingredient}
                  {index < validIngredients.length - 1 ? ',' : ''}
                </span>
              )
            })}
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
