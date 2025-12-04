import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Brayden | Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies and creating exceptional digital experiences',
  keywords: 'web developer, portfolio, full stack, Next.js, React, JavaScript',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-[#0a0a0a] text-gray-100 antialiased">
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}