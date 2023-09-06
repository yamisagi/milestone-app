import Navbar from '@/components/Nav/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yamisagi MileStone',
  description: 'Yamisagi MileStone',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
