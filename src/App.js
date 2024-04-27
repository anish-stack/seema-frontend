import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import SingleProduct from './pages/SingleproductPage/SingleProduct';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Error from './pages/404/Error'
import NewArrival from './components/Collections/New Arrival/NewArrival';
import WeeksHighlight from './components/Collections/WeekHighlight/WeeksHighlight';
import Cart from './pages/Cart/Cart';
import CheckOut from './pages/CheckOut/CheckOut';
import ShippingPolicy from './pages/Terms/Shipping';
import ReturnRefundPolicy from './pages/Terms/Return';
import TermsAndConditions from './pages/Terms/TermCondition';
import PaymentPage from './pages/Payement/PayemntPage';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-product/:id/:name" element={<SingleProduct />} />
        <Route path="/Sign-In" element={<Login />} />
        <Route path="/Sign-Up" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />

        <Route path="/*" element={<Error />} />
        <Route path="/Shopping-Cart" element={<Cart />} />
        <Route path="/Check-Out/Cart" element={<CheckOut />} />
        <Route path="/Shipping-Policy" element={<ShippingPolicy />} />
        <Route path="/Return-And-Refund-Policy" element={<ReturnRefundPolicy />} />
        <Route path="/Terms-And-Conditions" element={<TermsAndConditions />} />
        <Route path="/Payment-Status/:txn" element={<PaymentPage />} />






        <Route path="/shop" element={
          <>
            <NewArrival />
            <WeeksHighlight />
          </>
        } />







      </Routes>
      <Footer />
    </>
  );
}

export default App;
