import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import AddRecipesForm from './AddRecipesForm'

const AddRecipesPage = () => {
  useProtectedPage()

  return (
    <div>
      <AddRecipesForm />
    </div>
  )
}
export default AddRecipesPage