import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/BrandFooter/Footer';
import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from '@/components/BrandNav/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yamisagi MileStone',
  description: 'Yamisagi MileStone',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
