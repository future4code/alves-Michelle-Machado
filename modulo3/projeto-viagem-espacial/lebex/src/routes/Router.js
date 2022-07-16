import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../page/HomePage/HomePage'
import { AboutPage } from '../page/AboutPage/AboutPage'
import { AdminPage } from '../page/AdminPage/AdminPage'
import { ErrorPage } from '../page/ErrorPage/ErrorPage';
import { Login } from '../page/Login/Login'
import { CreateNewTrip } from '../page/CreateNewTrip/CreateNewTrip';
import { TripDetail } from "../page/TripDetail/TripDetail"

export const Router = () => {
  return (
    <div>

      <BrowserRouter>
        {/* BrowserRouter: Ele que vai dar o plano de fundo para todos os componentes. Ele abriga todos os 
        outros componentes. Ele é o componente pai*/}
        

        <Routes>
          {/* Routes: O componente responsavel por renderizar uma rota por vez. Todas as rotas ficam dentro 
          desse componente */}

          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<Login />} />
          <Route path='admin' element={<AdminPage />} />
          <Route path="newTrip" element={<CreateNewTrip />} />
          <Route path='tripDetail/:id' element={<TripDetail />} />
          <Route path="*" element={<ErrorPage />} />

          {/* Route: Deve estar dentro de Routes. Componente resposavel por definir uma rota. Recebe uma 
            prop 'path', que tem a URL a qual aquela rota correspondente. O componente é renderizado quando 
            o path coincidir com a URL */}

        </Routes>
      </BrowserRouter>


    </div>
  )
}
