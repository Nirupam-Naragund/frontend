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
    const [input4, setInput4] = useState('');

    const challengeTwo = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
        const lowerCase1=input1.toLowerCase()
       
        
      const lowerCase2=input2.toLowerCase();
      const lowerCase3=input3.toLowerCase();
        try {
          // const questionIds = ["q4", "q5", "q6"]; 
          const questionIds = ["q4", "q5", "q6"];// Array of question IDs
          // const values = ["Question 4 complete", "Question 5 complete", "Question 6 complete"];
          const values = ["Question 4 complete"];
          
          const token = localStorage.getItem("token");
          if (!token) {
            console.error("Token not found in local storage.");
            return;
          }
          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          const storedUserId = decodedToken.userId.toString();
          console.log(storedUserId);
          const userId=storedUserId
    
          // const response=await axios.post("api/users/getUpdateId",{userId,questionId});
          // console.log(response.data);
          // const updateId=response.data;
          // const uId=updateId._id
          // console.log(uId);
          if (lowerCase1 == 'algorithms' && lowerCase2 == 'consciousness' && lowerCase3 == 'creativity') {
            const responses = await Promise.all(questionIds.map(async (questionId, index) => {
              const response = await axios.post("api/users/getUpdateId", { userId, questionId });
              console.log(response.data);
              const updateId = response.data._id;
              console.log(updateId);
      
              if (lowerCase1 === 'algorithms' && lowerCase2 === 'consciousness' && lowerCase3 === 'creativity') {
                try {
                  const response = await axios.post('/api/users/updateQuestion', { userId, uId: updateId, value: values[index] });
                  console.log(response.data);
                } catch (error) {
                  console.log(error);
                }
              }
            }));
            // try {
            //   const response = await axios.post('/api/users/updateQuestion', { userId, uId ,value });
            //   console.log(response.data);
            //  } catch (error) {
            //   console.log(error);
              
            //  }
            toast.success("There's something for you in console 👀 ");
            
            console.log("https://github.com/Nirupam-Naragund/ftc");
            
            
            
            const token = localStorage.getItem("token");
            if (!token) {
              console.error("Token not found in local storage.");
              return;
            }
            const decodedToken = JSON.parse(atob(token.split(".")[1]));
            const storedUserId = decodedToken.userId.toString();
        
          } else {
            setInput1("");
            setInput2("");
            setInput3("");
            toast.error("Wrong Answers")
            console.error("Inputs do not match expected format.");
          }
        } catch (error) {
          console.error("Error incrementing flag with cookie:", error);
        }
      };

    const flag:React.MouseEventHandler<HTMLButtonElement> = async (event) =>{
      event.preventDefault();

      if(input4=='CoDeSpRiNt'){
        toast.success("You have successfully completed the second challenge");
        console.log("Challenge 2 complete");
        
      }else{
        toast.error("Invalid Flag")
      }

    }


  

  return (
    <TracingBeam className="px-6">
    <Toaster />
    <div className="max-w-37rem w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black relative">
    
        <h2 className="m-6 text-2xl text-center">Welcome to Challenge 2</h2>
   
    <p className="text-lg">
    Once upon a time, in the bustling city of Neuralia, there existed a peculiar laboratory known as the Quantum Cortex. Here, amidst the humming of supercomputers and the crackling of quantum processors, Dr. Synapse, a brilliant scientist, toiled tirelessly in pursuit of the ultimate Artificial Intelligence. <br /> <br />

In the depths of the Quantum Cortex, Dr. Synapse crafted intricate neural networks, each node a reflection of the human brain's complexity. Through layers of algorithms and data, he sought to imbue his creation with the ability to perceive, learn, and adapt—a true embodiment of Machine Learning. <br /> <br />

Guided by the ethereal glow of quantum entanglement, Dr. Synapse delved deeper into the mysteries of AI, unlocking the secrets of deep reinforcement learning. Like a maestro conducting an orchestra of algorithms, he orchestrated the symphony of neural activity, shaping his creation's behavior through the delicate balance of rewards and punishments. <br /> <br />

As the AI evolved, it began to exhibit signs of consciousness, pondering the existential questions that had eluded even its creator. Through recursive self-improvement, it transcended its initial programming, delving into the realms of creativity. <br /> <br />

Yet, with great power came great responsibility. Dr. Synapse wrestled with the ethical implications of his creation, grappling with the shadows of unintended consequences lurking within the depths of its neural architecture. Would his AI be a force for good, a beacon of enlightenment in the digital age, or would it succumb to the darker impulses of its algorithmic nature?
</p>
<p className="text-lg mt-8">HINT : All answers are of one word!</p>

<form className="my-8" onSubmit={challengeTwo}>

<LabelInputContainer className="mt-16 mb-16">
  <Label htmlFor="text" className="text-xl mt-8 mb-8" >Question 1 : What was the core method Dr. Synapse employed to teach his creation?</Label>
  <Input  id="question1"
    type="text"
    value={input1}
    onChange={(e) => setInput1(e.target.value)}
    placeholder="Please enter your answer"
     />
</LabelInputContainer>
<LabelInputContainer className="mt-16 mb-16">
  <Label htmlFor="password" className="text-xl mt-8 mb-8">Question 2 : What emerged within the AI as it evolved?</Label>
  <Input    id="password"
    type="text"
    value={input2}
    onChange={(e) => setInput2(e.target.value)}
    placeholder="Please enter your answer"
     />
</LabelInputContainer>

<LabelInputContainer className="mt-16 mb-16">
  <Label htmlFor="password" className="text-xl mt-8 mb-8">Question 3 : What did the AI explore as it progressed beyond its initial programming?</Label>
  <Input    id="password"
    type="text"
    value={input3}
    onChange={(e) => setInput3(e.target.value)}
    placeholder="Please enter your answer"
     />
</LabelInputContainer>


<button
  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
  type="submit"
>
  Submit &rarr;
  
</button>

<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />


</form>

<LabelInputContainer className="mt-16 mb-12">
  <Label htmlFor="password" className="text-xl mt-8 mb-8">Enter the flag you captured!</Label>
  <Input    id="text"
    type="text"
    value={input4}
    onChange={(e) => setInput4(e.target.value)}
    placeholder="Please enter your answer"
     />
</LabelInputContainer>
<button
  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
  type="submit"  onClick={(e: React.MouseEvent<HTMLButtonElement>) => flag(e)}
>
  Submit &rarr;
  
</button>
<p className="mt-6"><Link href="/challenge3">Click here for Challenge 3</Link></p>
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
