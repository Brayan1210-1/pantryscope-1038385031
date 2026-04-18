import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { useState } from "react";

export const LoginForm = () => {
    /* mocks de la api*/
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const token = () => {
        localStorage.setItem("pantryscope_token", "autenticado");
    }

    return (
        <div className="bg-blue-200 ">

            <Input label="email" type={"email"} value={email} placeHolder={"ingrese email"} onChange={(e) => setEmail(e.target.value)} />
            <Input type={"password"} label={"contraseña"} value={password} placeHolder={"Ingrese contraseña"} onChange={(e) => setPassword(e.target.value)} />

            <Button name={"Iniciar sesión"} onClick={token} />
        </div>
    );
};