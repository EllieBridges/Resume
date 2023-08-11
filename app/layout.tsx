import Navbar from './Navbar';
import './style.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body><Navbar/>
      {children}</body>
    </html>
  )
}
