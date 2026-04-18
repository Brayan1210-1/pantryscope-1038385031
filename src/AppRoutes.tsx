import { BrowserRouter, Routes, Route } from "react-router";
import { LoginForm } from "./components/LoginForm";

export const AppRoutes = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route index element={< LoginForm />} />

                <Route path="*" element={<h1>pagina no encontrada</h1>} />

            </Routes>


        </BrowserRouter>
    );
}