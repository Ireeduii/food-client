"use client";
import { NextPage } from "@/components/auth/NextPage";
import { SignUpEmail } from "@/components/auth/SignUpEmail";
import { SignUpPassword } from "@/components/auth/SignUpPassword";

import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const StepComponents = [SignUpEmail, SignUpPassword, NextPage][step];

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <main className="flex gap-20">
      <div className="border justify-center items-center w-[416px]  ml-[100px] mt-[300px] border-none">
        <StepComponents
          email={email}
          setEmail={setEmail}
          password={password}
          handleNextStep={handleNextStep}
        />
      </div>
      <div className="w-[1000px]">
        <img className="rounded-md w-[900px] p-5" src="first.png" />
      </div>
    </main>
  );
}
