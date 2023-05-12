
import MyLayout from "./component/layout"
import Footer from "./component/footer"
import Image from 'next/image'

export default function Home() {

  return (
    <>
    
    <MyLayout title="HOME" />

<div className="container mx-auto py-8">
<h1 className="text-4xl font-bold mb-4">HOME</h1>

  
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center">
            <Image src="/ico1.png" alt="me" width="64" height="64" />
              <span className="text-xl font-bold">University </span>
            </a>
            <nav>
              <ul className="flex">
              
                <li className="ml-6">
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Academics</a>
                </li>
                <li className="ml-6">
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Admissions</a>
                </li>
                <li className="ml-6">
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Student Life</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to University Management System</h1>
          <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at ultricies nisi. Nullam vestibulum, libero eget consequat eleifend, nulla dolor malesuada est, a consectetur urna augue nec nisi.</p>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply now</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <p className="text-gray-600 text-center">Best Of Luck</p>
        </div>
      </footer>
    </div>

    <Footer />
    </>
  )
}
