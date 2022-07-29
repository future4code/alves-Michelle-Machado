import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import { Typography } from '@mui/material'
import * as C from './styled'


const ListDetailPage = () => {
  useProtectedPage()
  const params = useParams()
  const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]

  return (
    <C.ScreenContainer>
      {recipe &&
        <C.RecipeConteiner>
          <C.RecipeImage src={recipe.image} />
          <Typography gutterBottom color={'primary'} variant={'h5'}> {recipe && recipe.title}</Typography>
          <Typography align='center' >{recipe.description}</Typography>
        </C.RecipeConteiner>}
    </C.ScreenContainer>
  )
}

export default ListDetailPage
