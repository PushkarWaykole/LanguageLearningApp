import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import profile from '../images/profile.png'
import LeaderBoard from './LeaderBoard';

const ProfilePage = () => {
    const navigate = useNavigate();
    const email = localStorage.getItem("email")
    const [userScore, setuserScore] = useState(0);
    const [selectedLanguage, setselectedLanguage] = useState('')
 
    const [languageUsers, setlanguageUsers] = useState([])
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const getUserData = async () => {
        try {

            const response = await fetch(`http://localhost:8000/${email}/getUserData`);

            if (response.ok) {
                const result = await response.json();
                setuserScore(result.score);
                setselectedLanguage(result.selected_language)

            }


        }
        catch (err) {
            console.log("error in get,", err);
        }
    }


    const getUserForLang = async () => {
        try {

            const response = await fetch(`http://localhost:8000/getAllUsers`);

            if (response.ok) {
                const result = await response.json();
                // console.log("response of users is :", result)
                setlanguageUsers(result);
            }


        }
        catch (err) {
            console.log("error in get,", err);
        }
    }


    useEffect(() => {
        getUserData();
        getUserForLang();

    }, [])
    // console.log("selected users", languageUsers)

    let leaderBoardData = []
    for (let obj of languageUsers) {
        leaderBoardData.push({
            email: obj.email,
            selected_language: obj.selected_language,
            score: obj.score
        })
    }
    // console.log("leaderboard data", leaderBoardData)
    leaderBoardData = leaderBoardData.sort((a, b) => b.score - a.score);

    const english=leaderBoardData.filter(entry => entry.selected_language === "English");
    const spanish=leaderBoardData.filter(entry => entry.selected_language === "Spanish");
    const french=leaderBoardData.filter(entry => entry.selected_language === "French");




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
            <h1 className="text-center font-bold text-5xl mt-10 mb-10">Welcome to profile page</h1>

            <div className="flex justify-center">
                <div className="border-solid border-2 border-black p-3 rounded-lg m-10">
                    <img src={profile} alt="profile img" width="200" height="200" style={{
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        borderBottomLeftRadius: '10px',
                        borderBottomRightRadius: '10px',
                    }} />
                </div>

                <div className="border-solid border-2 border-black p-4 m-10 flex flex-col gap-10">
                    <h1 className="text-3xl font-bold">Email:{email}</h1>
                    <h1 className="text-3xl font-bold">Score:{userScore}</h1>
                    <h1 className="text-3xl font-bold"> Selected Language: {selectedLanguage}</h1>
                </div>
            </div>


            <h1 className="text-center font-bold text-5xl mt-10 mb-10">Leaderboard</h1>


            <div className="flex flex-col justify-center items-center border-solid border-3 border-black">


                < LeaderBoard leaderBoardData={english} label={"English"} color={"aqua"}/>
                < LeaderBoard leaderBoardData={spanish} label={"Spanish"} color={"pink"}/>
                < LeaderBoard leaderBoardData={french} label={"French"} color={"orange"}/>

            </div>

        </>
    )
}

export default ProfilePage