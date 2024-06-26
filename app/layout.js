import "./globals.css"
import UserProvider from './context/user'
import CartProvider from './context/cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'WebATLAS',
  description: 'WebATLAS',
}
 
export default function RootLayout({ children }) {

 return (
    <html lang="en">
      <body>
        <div>
          <ToastContainer />

          <UserProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </UserProvider>
        </div>
      </body>
    </html>
  )
}
