'use client'

import { TracingBeam } from '@/components/ui/tracing-beam';
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Challenge3 = () => {

  const [inputValue1, setInputValue1] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(e.target.value);
  };

  // const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue2(e.target.value);
  // };

  const onSubmit = async () => {
    
    try {
      const questionId = "q7"; 
      const value = "Question 7 complete";
      
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found in local storage.");
        return;
      }
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const storedUserId = decodedToken.userId.toString();
      // console.log(storedUserId);
      const userId=storedUserId

      const response=await axios.post("api/users/getUpdateId",{userId,questionId});
      // console.log(response.data);
      const updateId=response.data;
      const uId=updateId._id
      // console.log(uId);

      if(inputValue1 === "CodeSprint2.0"){
       
        const response = await axios.post('/api/users/updateQuestion', { userId, uId ,value });
        console.log(response.data);
        toast.success("Question 7 is correct")
        console.log('your answer is correct : ', inputValue1)
        
      }
      else {
        toast.error("Wrong answer! Try again")
        console.error('Your answer is wrong! Try again');
      }
    } catch (error:any) {
      console.error('Error incrementing flag:', error);
    }
  }

  // const onClickButton = async () => {
  //   const buttonElem = document.querySelector<HTMLInputElement>('#wrapper button');
  //   const inputElem = document.querySelector<HTMLInputElement>('#wrapper input');
  //   buttonElem.addEventListener('click', () => {
  //     const oldText = inputElem.value;
  //     return inputElem.value = oldText === "ON" ? "OFF" : "ON";
  //   });
  // }

  return (
    <TracingBeam className='px-6'>
    <Toaster/>
    <div className="max-w-xl mx-auto mt-10">
      <div className="mb-20">
        <Link href={`/question1`} className="text-blue-500 hover:underline">
          Question 1
        </Link>
        <br />
        
        <input
          type="text"
          value={inputValue1}
          onChange={handleInputChange1}
          placeholder="Enter the answer here"
          className="border border-gray-300 rounded-md p-2 mt-2 w-full text-black"
        />
        <br />
        <button onClick={onSubmit} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Submit
        </button>
      </div>


      {/* --------------- Question 2 -------------------------- */}
    
        <p className='text-blue-500'>Question 2</p>
        <br />
        <div className="max-w-xl mx-auto ">
      <div className="mb-8 bg-gray-800 p-4 rounded-lg w-fit">
        <p> Here, the existing code expects the variables 'buttonElem' and 'inputElem' to represent the button and input elements in the example UI. </p>
        <p>Assign the respective elements to the variables.</p>
        <p>In this case, the two elements do not have unique identifiers - like for example an id. Instead they are direct descendents of a div element with id 'wrapper'. Use an appropriate selector method! </p>
        <p>Click the button to verify that the code is working.  </p>

        <br />

        <pre className="bg-gray-600 p-4 rounded-lg">
          <code className='language-html'>
            &lt;div id=&quot;wrapper&quot;&gt;<br />
            &nbsp;&nbsp;&lt;input type=&quot;text&quot; value=&quot;OFF&quot; readonly/&gt;<br />
            &nbsp;&nbsp;&lt;button type=&quot;button&quot;&gt;Click Me&lt;/button&gt;<br />
            &lt;/div&gt;
          </code>
        </pre>

        <br />

  <div className="bg-gray-600 p-4 rounded-lg">
    <pre className="mb-4">
      <code>{`const buttonElem = 
const inputElem = 
buttonElem.addEventListener('click', () => {
  const oldText = inputElem.value;
  return inputElem.value = oldText === "ON" ? "OFF" : "ON";
});`}</code>
    </pre>
  </div>

          <div id="wrapper" className="flex items-center justify-center flex-col bg-gray-800 p-4 rounded-lg">
            <input type="text" value="OFF" readOnly className="px-4 py-2 mb-4 text-center border border-gray-300 rounded-lg w-48 text-black" />
            <button type="button" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Click Me</button>
          </div>

      </div>

    </div>
      </div>
      </TracingBeam>
  )
}

export default Challenge3
