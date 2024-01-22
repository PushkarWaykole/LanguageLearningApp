import React from 'react';
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="bg-gray-100 font-sans">

      {/* Navigation */}
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">LanguageApp</div>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>            
            <li><Link to="/login" className="hover:text-gray-300">Sign In </Link></li>
            <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">Learn a New Language Today</h1>
          <p className="text-lg mb-8">Unlock new opportunities by expanding your language skills with our interactive courses.</p>
          
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose LanguageApp?</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="max-w-md p-6 bg-white shadow-2xl rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Interactive Courses</h3>
            <p>Engage in our interactive courses designed to make language learning enjoyable and effective.</p>
          </div>
          <div className="max-w-md p-6 bg-white shadow-2xl rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Leaderboard facility</h3>
            <p>Compete with fellow students to be on the top of the leaderboard.</p>
          </div>
          <div className="max-w-md p-6 bg-white shadow-2xl rounded-md mb-4">
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p>Study at your own pace with our flexible learning schedule and accessible course materials.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to embark on a language journey?</h2>
          <p className="text-lg mb-8">Start learning today with LanguageApp and discover a world of opportunities!</p>
          <Link to="/register" className=" text-3xl font-bold hover:text-gray-300">Sign up now!!</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2022 LanguageApp. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default LandingPage;
