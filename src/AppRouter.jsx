import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OpenData from "./OpenData";
import Home from "./Home";
import ComponentUI from './ComponentUI';
import OrderForm from './OrderForm';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={
                    <>
                        <ComponentUI image="/Car.jpg" title="Welcome to product page!" />
                        <OrderForm />
                    </>
                } />
                <Route path="/opendata" element={<OpenData />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;