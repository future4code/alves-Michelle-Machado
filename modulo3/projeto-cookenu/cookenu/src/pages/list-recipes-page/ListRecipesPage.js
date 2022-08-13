import React from 'react'
import { Add } from '@mui/icons-material'
import { BASE_URL } from '../../constants/url'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import RecipeCard from './RecipeCard'
import * as C from "./styled"
import { goToAddRecipes, goToDetailRecipes} from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const ListRecipesPage = () => {
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
  const navigate = useNavigate()

  const onClickCard = (id) => {
    goToDetailRecipes(navigate, id)
  }

  const recipesCards = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    )
  })

  useProtectedPage()
  return (
    <div>

      <h1> Lista recipes </h1>
      <C.RecipeListContainer>
        {recipesCards}
        <C.AddRecipeButton
          color={"primary"}
          onClick={() => goToAddRecipes(navigate)}
        >

          <Add />
        </C.AddRecipeButton>
      </C.RecipeListContainer>
    </div>
  )
}

export default ListRecipesPage