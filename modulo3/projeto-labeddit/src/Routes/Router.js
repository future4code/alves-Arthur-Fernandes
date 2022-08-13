import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "../Pages/FeedPage/Feed";
import Login from "../Pages/LoginPage/Login";
import Cadastro from "../Pages/CadastroPage/Cadastro"
import Post from "../Pages/PostPage/Post";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Cadastro/>}/>
            <Route path="/" element={<Feed/>}/>
            <Route path="/post/:id" element={<Post/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router