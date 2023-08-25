import Footer from './Footer';
import Navbar from './Navbar';
import './style.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body><Navbar />
        {children}</body>
      <Footer />
    </html>
  )
}
