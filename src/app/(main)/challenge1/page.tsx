"use client";
import React, { useState, useEffect } from "react";
import { HeroHighlight,Highlight  } from "@/components/ui/hero-highlight";
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
      // console.log("failed", error.message);
      
      toast.error("User ID did not match");
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

    // <HeroHighlight>
    
    <TracingBeam className="px-6">
      
   
    
    <div className="max-w-37.5 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black relative">
    {/* <HeroHighlight> */}
    <Toaster />
    <h2 className="font-bold pb-4  text-xl text-neutral-800 dark:text-neutral-200">
      
Local Storage: A Valuable Asset in Development
    </h2>
    <p className=" text-lg">
    Local storage is a vital feature in development that allows applications to store data locally within the user's environment. <br /> <br /> Here's why local storage is essential: <br /><br />

1)Persistent Storage: Local storage provides a means to store data persistently on the client-side. Even after the application is closed or refreshed, the stored data remains accessible, ensuring continuity across sessions.<br /><br />
2)Enhanced User Experience: By utilizing local storage, developers can enhance user experience by storing preferences, settings, and other relevant data. This allows for a more personalized and seamless interaction with the application.<br /><br />
Accessing Local Storage in Browsers: <br /><br />

Accessing local storage in browsers can be done through the browser's developer tools. Here's how to access it:<br /><br />

1)Google Chrome: Open Developer Tools (Ctrl + Shift + I or Cmd + Opt + I), navigate to the "Application" tab, and select "Local Storage" from the sidebar.<br /><br />
2)Mozilla Firefox: Open Developer Tools (Ctrl + Shift + I or Cmd + Opt + I), navigate to the "Storage" tab, and select "Local Storage" from the sidebar.<br /><br />
3)Microsoft Edge: Open Developer Tools (Ctrl + Shift + I or Cmd + Opt + I), navigate to the "Storage" tab, and select "Local Storage" from the sidebar.<br /><br />
Token Generation and Usage: <br /><br />

Upon login, a token is generated and stored locally. To retrieve the user ID associated with this token, follow these steps:<br /><br />

1)Copy the generated token from local storage.<br /><br />
2)Navigate to a JWT decoding tool.<br /><br />
3)Paste the token into the provided field on the website. <br /><br />
4)Click on the "Decode JWT" button to decode the token and retrieve the user ID.<br /><br />
5)Paste the user ID into the designated input field on the application.<br /><br />
By following these steps, users can retrieve their user ID associated with the generated token, facilitating further interaction with the application.<br /><br />
    </p>
      {/* <h2 className="font-bold p-4 text-xl text-neutral-800 dark:text-neutral-200">
      <span className="absolute top-0 left-0 bg-white dark:bg-black text-black dark:text-white p-1 rounded-md"></span>
        Questions
      </h2> */}


      <LabelInputContainer className="mb-6">
        <h1 className="  text-red-600 mt-8 mb-8">
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


      <h2 className="font-bold pb-4  text-xl text-neutral-800 dark:text-neutral-200">
      Cookies: Enhancing Web Interactions
          </h2>
      <p className=" text-lg">
      Cookies are small pieces of data stored in the user's browser by websites. They serve various purposes in web development, making them a valuable asset for developers. <br /><br /> Here's why cookies are useful: <br /><br />

1)Session Management: Cookies are commonly used for session management, allowing websites to recognize users and maintain their login state across multiple page views or visits. This ensures a seamless and personalized browsing experience.<br /><br />
2)Personalization and Tracking: Cookies enable websites to personalize content and track user behavior. They can store user preferences, shopping cart items, and browsing history, enabling targeted advertising and content recommendations. <br /><br />
Accessing Cookies in Web Browsers: <br /><br />

Accessing cookies in web browsers can be done through the browser's developer tools. Here's how to access them: <br /><br />

1)Google Chrome: Open Developer Tools (Ctrl + Shift + I or Cmd + Opt + I), navigate to the "Application" tab, and select "Cookies" from the sidebar.<br /><br />
2)Mozilla Firefox: Open Developer Tools (Ctrl + Shift + I or Cmd + Opt + I), navigate to the "Storage" tab, and select "Cookies" from the sidebar. <br /><br />
3)Microsoft Edge: Open Developer Tools (Ctrl + Shift + I or Cmd + Opt + I), navigate to the "Storage" tab, and select "Cookies" from the sidebar. <br /><br />
Cookie Generation and Usage: <br /><br />

By following these steps, users can provide the necessary cookie information for authentication and further interaction with the website/application.
      </p>
      <LabelInputContainer className="mb-6">
        <h1 className="mt-8 mb-8">
          <Label className="text-lg  " htmlFor="firstname">
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
   
     
      <h2 className="font-bold pb-4  text-xl text-neutral-800 dark:text-neutral-200"> 
Conditional Rendering: A Dynamic Approach to Display
          </h2>
          <p className=" text-lg">
          Conditional rendering in programming refers to the technique of displaying different content or components based on certain conditions. It allows developers to control what is rendered on the user interface based on specific criteria. <br /><br /> Here's why conditional rendering is useful: <br /><br />

1)Dynamic User Experience: Conditional rendering enables developers to create dynamic user interfaces that respond to user actions or changing data. By showing or hiding elements based on conditions, developers can provide users with a tailored and interactive experience.<br /><br />
2)Optimized Performance: Conditional rendering helps optimize performance by rendering only the necessary components or content. Unnecessary elements can be skipped, reducing the amount of DOM manipulation and improving the overall efficiency of the application. <br /><br />

Conditional Rendering : A Simple Example <br /><br />

Conditional rendering in React allows developers to display different content based on specific conditions. Here's a basic example demonstrating conditional rendering in a React component:<br /><br />

 <img src="/condRendexamp.png"></img> <br /><br />

Explanation:<br /><br />

1)We have a Greeting component that utilizes the useState hook to manage the state of isLoggedIn, representing the user's login status. <br /><br />
2)The toggleLogin function is responsible for toggling the value of isLoggedIn between true and false each time the button is clicked. <br /><br />
3)Inside the return statement, we use a ternary operator to conditionally render different content based on the value of isLoggedIn. If isLoggedIn is true, we display the welcome message; otherwise, we display the login prompt. <br /><br />
4)Similarly, the text on the button is also conditionally rendered based on the value of isLoggedIn. If isLoggedIn is true, the button text is 'Logout'; otherwise, it's 'Login'. <br /><br />
This example illustrates how conditional rendering in React allows developers to create dynamic user interfaces that respond to user interactions, providing a more personalized experience for users.

          </p>

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
      
      {/* </HeroHighlight> */}

    </div>
    
</TracingBeam>
// </HeroHighlight>
    
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
