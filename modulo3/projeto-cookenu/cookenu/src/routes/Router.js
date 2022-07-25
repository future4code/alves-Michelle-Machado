import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/login-page/LoginPage'
import SignUpPage from '../pages/signup-page/SignUpPage'
import ListRecipes from '../pages/list-recipes-page/ListRecipesPage'
import ListDetail from '../pages/list-detail-page/ListDetailPage'
import AddRecipes from '../pages/add-recipes-page/AddRecipesPage'
import { ErrorPage } from '../pages/error-page/ErrorPage'
import Header from "../components/header/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<ListRecipes />} />
                <Route path="add-recipes" element={<AddRecipes />} />
                <Route path="list-detail/:id" element={<ListDetail />} />
                <Route path="signup" element={<SignUpPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router