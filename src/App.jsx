import './App.css';
import ComponentUI from './ComponentUI';
import OrderForm from './OrderForm';
import OpenData from './OpenData';  

function App() {
    return (
        <>
            <ComponentUI image="/Car.jpg" title="Welcome to product page!" />
            <OrderForm />
            <OpenData /> {}
        </>
    );
}

export default App;
