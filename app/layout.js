import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'TCenDral',
  description: 'Creative team portfolio for TCenDral',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
