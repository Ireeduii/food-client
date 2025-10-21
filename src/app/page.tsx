"use client";
import { SignUpEmail } from "@/components/auth/SignUpEmail";
import { SignUpPassword } from "@/components/auth/SignUpPassword";

import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const StepComponents = [SignUpEmail, SignUpPassword][step];

  const [email, setEmail] = useState("");

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <main className="flex gap-20">
      <div className="border justify-center items-center w-[416px]  ml-[100px] mt-[300px] border-none">
        <StepComponents
          email={email}
          setEmail={setEmail}
          handleNextStep={handleNextStep}
        />
      </div>
      <div className=" p-10 w-[900px]">
        <img className="rounded-md " src="first.png" />
      </div>
    </main>
  );
}
