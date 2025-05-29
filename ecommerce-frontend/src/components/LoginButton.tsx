"use client";



export function LoginButton({ provider, icon }: { provider: string, icon: React.ReactNode }) {
  const handleSignIn = async () => {
    console.log("Signing in with", provider);
  };
  
  return ( 
      <button onClick={handleSignIn} className="btn btn-outline btn-primary">{icon}
      <span>Continue</span> {provider}</button>
  );
}

