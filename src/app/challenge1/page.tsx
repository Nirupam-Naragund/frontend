"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";


export default function Questions1() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [user, setUser] = React.useState({
    userId: "",
    fieldName: "",
    value: "",
})
  const [flag, setFlag] = useState(0); // State to store the flag value
  const [userCookie , setCookie]=useState("");
  const [userId, setUserId] = React.useState(""); // State to store the user ID input
  const [questionId,setQuestionId]=React.useState("");
  const [value,setValue]=React.useState("");
  const [buttonDisabled1, setButtonDisabled1] = useState(false);
  const [buttonDisabled2, setButtonDisabled2] = useState(false);
  const [buttonDisabled3, setButtonDisabled3] = useState(false); // State to control button functionality
  const router = useRouter();
 
  const handleInput1Change = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput2(e.target.value);
  };

  const handleInput3Change = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput3(e.target.value);
  };

  const incrementFlagWithConditional = async () => {
 
          
    try {
      const questionId = "q3"; // Set questionId here
      const value = "Question 3 complete"; // Set value here
      
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found in local storage.");
        return;
      }
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const storedUserId = decodedToken.userId.toString();
      console.log(storedUserId);
      const userId=storedUserId

      const response=await axios.post("api/users/getUpdateId",{userId,questionId});
      console.log(response.data);
      const updateId=response.data;
      const uId=updateId._id
      console.log(uId);

      if (input1 == 'hasSubscription?' && input2 == '<p>Welcome back! Your subscription is active.</p>' && input3 == '<p>Please subscribe to access premium features.</p>') {
        try {
   
        
          const response = await axios.post('/api/users/updateQuestion', { userId, uId ,value });
          console.log(response.data);
         } catch (error) {
          console.log(error);
          
         }
        toast.success("Question 3 is correct");
        console.log("Question 3 is done");
        
     

        
    
      } else {
        setInput1("");
        setInput2("");
        setInput3("");
        toast.error("Inputs do not match expected format.")
        console.error("Inputs do not match expected format.");
      }
    } catch (error) {
      console.error("Error incrementing flag with cookie:", error);
    }
  };
 


  const incrementFlag = async () => {
    
    try {

      // await Promise.all([setValue("Question 1 complete"), setQuestionId("q1")]);
      // console.log(questionId);
      const questionId = "q1"; // Set questionId here
      const value = "Question 1 complete"; // Set value here
      
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found in local storage.");
        return;
      }
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const storedUserId = decodedToken.userId.toString();
      console.log(storedUserId);

      const response=await axios.post("api/users/getUpdateId",{userId,questionId});
      console.log(response.data);
      const updateId=response.data;
      const uId=updateId._id
      console.log(uId);

      

     

      

      if (userId === storedUserId) {

   

       try {
   
        
        const response = await axios.post('/api/users/updateQuestion', { userId, uId ,value });
        console.log(response.data);
       } catch (error) {
        console.log(error);
        
       }

        
        toast.success("Question 1 answered correctly");
        console.log("Question 1 is done");

        
       

      } else {
        toast.error("User ID did not match");
        setUserId("");
      }
    } catch (error:any) {
      console.log("failed", error.message);
      
      toast.error(error.message);
  }
  };

  const incrementFlagWithCookie = async () => {
    try {
      const token = localStorage.getItem("token");
      let storedUserId = "";
      if (token) {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        storedUserId = decodedToken.userId.toString();
    }
    const userId=storedUserId;
      const questionId = "q2"; // Set questionId here
      const value = "Question 2 complete";
      const response=await axios.post("api/users/getUpdateId",{userId,questionId});
      console.log(response.data);
      const updateId=response.data;
      const uId=updateId._id
      console.log(uId); // Set value here
      const randomCookieValue =document.cookie.split('; ').find(row => row.startsWith('randomCookie='))?.split('=')[1];
      console.log(randomCookieValue);
      
      if (!randomCookieValue) {
        console.error("Cookie not found.");
        return;
      }
  
      if (userCookie == randomCookieValue) {
        
    

      try {
   
        
        const response = await axios.post('/api/users/updateQuestion', { userId, uId ,value });
        console.log(response.data);
       } catch (error) {
        console.log(error);
        
       }
              toast.success("Question 2 answered correctly");
              console.log("Question 2 is done");
      } else {
        setCookie("");
        console.error("User input does not match randomCookie.");
        toast.error("User input does not match randomCookie.")
      }
    } catch (error) {
      console.error("Error incrementing flag with cookie:", error);
    }
  };
   



  return (
    <TracingBeam className="px-6">
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black relative">
    <Toaster />
      <h2 className="font-bold p-4 text-xl text-neutral-800 dark:text-neutral-200">
      <span className="absolute top-0 left-0 bg-white dark:bg-black text-black dark:text-white p-1 rounded-md"></span>
        Questions
      </h2>


      <LabelInputContainer className="mb-6">
        <h1 className="mt-8 mb-8">
          <Label className="text-lg " htmlFor="firstname">
            What is your user Id?
          </Label>
        </h1>
        <p>HINT: Go through the documentation to find how to get it!</p>
        <Input
          className="mt-8 mb-8"
          id="firstname"
          placeholder="....."
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </LabelInputContainer>

      <button
        className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
        onClick={incrementFlag}
        disabled={buttonDisabled2}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
          <span>Submit</span>
          <svg
            fill="none"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      <LabelInputContainer className="mb-6">
        <h1 className="mt-8 mb-8">
          <Label className="text-lg " htmlFor="firstname">
            Please input the cookie you got!!
          </Label>
        </h1>
        <Input className="mt-4 mb-4" id="cookie" placeholder="....." type="text" onChange={(e) => setCookie(e.target.value)} />
      </LabelInputContainer>

      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
       onClick={incrementFlagWithCookie}
       disabled={buttonDisabled3}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
          <span>
            Submit
          </span>
          <svg
            fill="none"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
   
     

      <LabelInputContainer className="mb-6">
        <h1 className="mt-8 mb-8">
          <Label className="text-lg " htmlFor="firstname">
            Solve the following Conditional Rendering Question
          </Label>
        </h1>
      </LabelInputContainer>
      <img src="/Codesnippet.png" alt="Code Snippet" />

      <LabelInputContainer className="mb-6">
        <h1 className="mt-8 mb-8">
          <Label className="text-lg " htmlFor="firstname">
            Solve the following Conditional Rendering Question
          </Label>
        </h1>
        <h1 className="mt-8 mb-8">
          <Label className="text-lg " htmlFor="firstname">
            You have the following tags to be placed correctly
          </Label>
        </h1>
        <br />
        <h1 className="mt-8 mb-8">
          <Label className="text-lg " htmlFor="firstname">
            1)  {`<p>Welcome back! Your subscription is active.</p>`}
          </Label>
        </h1>
        <br />
        <h1 className="mt-8 mb-8">
          <Label className="text-lg " htmlFor="firstname">
            2)  {`hasSubscription?`}
          </Label>
        </h1>
        <br />
        <h1 className="mt-8 mb-8">
          <Label className="text-lg " htmlFor="firstname">
            3)  {`<p>Please subscribe to access premium features.</p>`}
          </Label>
        </h1>
      </LabelInputContainer>

      <LabelInputContainer className="mb-6">
        <h1 className="mt-8 mb-8">
          <Label className="text-lg " htmlFor="firstname">
            1)
          </Label>
        </h1>
        <Input id="firstname" placeholder="first code here" type="text"  value={input1} onChange={handleInput1Change} />
      </LabelInputContainer>

      <LabelInputContainer className="mb-6">
        <h1 className="mt-8 mb-8">
          <Label className="text-lg " htmlFor="firstname">
            2)
          </Label>
        </h1>
        <Input id="firstname" placeholder="second code here" type="text" value={input2} onChange={handleInput2Change} />
      </LabelInputContainer>

      <LabelInputContainer className="mb-6">
        <h1 className="mt-8 mb-8">
          <Label className="text-lg " htmlFor="firstname">
            3)
          </Label>
        </h1>
        <Input id="firstname" placeholder="third code here" type="text" value={input3} onChange={handleInput3Change} />
      </LabelInputContainer>
      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
       onClick={incrementFlagWithConditional}
       disabled={buttonDisabled1}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
          <span>
            Submit
          </span>
          <svg
            fill="none"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
      <p className="mt-6"><Link href="/challenge2">Click here for Challenge 2</Link></p>
    </div>
</TracingBeam>
    
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
