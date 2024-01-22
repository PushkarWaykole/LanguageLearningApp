import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserDashboard = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const [currentLanguage, setCurrentLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
  };

  const startQuiz=()=>{
    handleUpdateUserLanguage();
    navigate("/quiz");
  }

  const handleUpdateUserLanguage = async () => {
    const email=localStorage.getItem("email");
    try {
      await axios.put(`http://localhost:8000/${email}/${currentLanguage}/updateLanguage`);
      console.log('User language updated  successfully');
    } catch (error) {
      console.error('Error updating user language:', error);
    }
  };


  return (
    <>
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">LanguageApp</div>
          <ul className="flex space-x-4">
            <li><Link to="/dashboard" className="hover:text-gray-300 text-lg">Home</Link></li>
            <li><Link to="/profile" className="hover:text-gray-300 text-lg">Profile</Link></li>
            <li><button onClick={logout} className="hover:text-gray-300 text-lg">Logout</button></li>
          </ul>
        </div>
      </nav>

    <div className="flex flex-col justify-around items-center">

    
      <div className="text-6xl font-bold text-center mt-10">
        Welcome to LanguageApp
      </div>
      <div className="flex flex-col items-center justify-center text-4xl mt-10">
        <h1>Select a language which you want to learn</h1>


        <div className="flex items-center justify-around m-5 text-5xl font-bold">
          <label className="mr-4 border-solid border-2 border-black p-4 m-5 rounded-lg ">
            <input
              type="radio"
              value="English"
              checked={currentLanguage === 'English'}
              onChange={handleLanguageChange}
              className="mr-2"
            />
            English
          </label>
          <label className="mr-4 border-solid border-2 border-black p-4 m-5 rounded-lg">
            <input
              type="radio"
              value="Spanish"
              checked={currentLanguage === 'Spanish'}
              onChange={handleLanguageChange}
              className="mr-2 ml-2 "
            />
            Spanish
          </label>
          <label className="mr-4 border-solid border-2 border-black p-4 m-5 rounded-lg">
            <input
              type="radio"
              value="French"
              checked={currentLanguage === 'French'}
              onChange={handleLanguageChange}
              className="mr-2"
            />
            French
          </label>
        </div>

        <h1 className="text-md font-bold">
          Selected language is: {currentLanguage}
        </h1>

        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-6" onClick={startQuiz}>Start learning</button>
      </div>
      </div>
    </>
  )
}

export default UserDashboard