
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import ScrollToTop from "./Components/Common/ScrollToTop";

import AppRoutes from "./Routes/AppRoutes";
import IntroLoader from "./Components/Common/IntroLoader";

import AuthProvider from "./Context/AuthContext";
import OrderProvider from "./Context/OrderContext";
import CartProvider from "./Context/CartContext";
import WishlistProvider from "./Context/WishlistContext";
import SidebarProvider from "./Context/SidebarContext";

function App() {
  return (
    <BrowserRouter basename="/restaurant-application">
      <ScrollToTop />

      <AuthProvider>
        <OrderProvider>
          <CartProvider>
            <WishlistProvider>
              <SidebarProvider>
                <Navbar />
                <IntroLoader />

                <main>
                  <AppRoutes />
                </main>

                <Footer />
              </SidebarProvider>
            </WishlistProvider>
          </CartProvider>
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
