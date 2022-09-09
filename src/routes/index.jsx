import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "../page/Home";


const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );

};


export default AppRoute;