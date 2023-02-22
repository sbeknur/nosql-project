import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cinema from "./pages/cinema/Cinema";
import List from "./pages/list/List";
import Login from "./pages/login/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cinemas" element={<List />} />
                <Route path="/cinemas/:id" element={<Cinema />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
