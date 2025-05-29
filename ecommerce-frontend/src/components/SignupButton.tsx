"use client";

export function SignupButton({ provider }: { provider: string }) {
    
  const handleSignUp = async () => {
    console.log("Signing up with", provider);
  };

  return (
    <button onClick={handleSignUp}>Sign up with {provider}</button>
  );
}
