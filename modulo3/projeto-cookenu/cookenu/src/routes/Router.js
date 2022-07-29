import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from '../pages/login-page/LoginPage'
import ListRecipes from '../pages/list-recipes-page/ListRecipesPage'
import ListDetail from '../pages/list-detail-page/ListDetailPage'
import AddRecipes from '../pages/add-recipes-page/AddRecipesPage'
import { ErrorPage } from '../pages/error-page/ErrorPage'


const Router = ({rightButtonText, setRightButtonText}) => {
    return (
        
            <Routes>
                <Route index element={<ListRecipes />} />
                <Route path="add-recipes" element={<AddRecipes />} />
                <Route path="list-detail/:id" element={<ListDetail />} />
                <Route path="login" element={<LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
       
    )
}

export default Router