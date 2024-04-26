'use client'
import React, { useEffect, useState } from 'react'
import logo from "@/assets/logo.webp"
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

const Navbar = () => {

    const [ count, setCount ] = useState<number>(0);
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleFlagCount = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
              console.error("Token not found in local storage.");
              return;
            }
            const decodedToken = JSON.parse(atob(token.split(".")[1]));
            const storedUserId = decodedToken.userId.toString();
            const userId=storedUserId;
            // console.log(userId)

            const response = await axios.post(`/api/users/countFlag`, {userId});
            setCount(response.data.count);
            setButtonClicked(true);
            // console.log("count - ", count);
        } catch (error:any) {
            console.error('error in updating count')
        }
        
    }

  return (
    <nav className="bg-black p-4 flex justify-between items-center sticky top-0 z-10">
        
        <div className="flex items-center">
            <Link href="/">
                <Image 
                    src={logo}
                    width={65} 
                    height={65}
                    alt='GDSC NMIT'
                />
            </Link>
        </div>

        <div>
            <ul className='flex gap-x-8'>
                <Link href="/challenges"><li className='text-blue-500'>Challenges</li></Link>
                <Link href="/challenge1"><li className='text-blue-500'>Challenge 1</li></Link>
                <Link href="/challenge2"><li className='text-blue-500'>Challenge 2</li></Link>
                <Link href="/challenge3"><li className='text-blue-500'>Challenge 3</li></Link>
            </ul>
        </div>

        <div className="flex items-center">
            <div className="relative">
                <button onClick={handleFlagCount}>
                    Click here to check total flags captured
                </button>
                {buttonClicked && count !== null && ( 
                    <p>Total flags: {count}</p>
                )}
            </div>
        </div>
    </nav>

  )
}

export default Navbar
