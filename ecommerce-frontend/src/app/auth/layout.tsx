export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen h-screen bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="flex-1 w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome to Our Platform
            </h1>
            <p className="text-lg text-base-content/80 mb-8">
              Join our community and experience seamless shopping with secure authentication.
              Your journey to amazing products starts here.
            </p>
            <div className="hidden lg:block">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Secure Authentication</h3>
                  <p className="text-sm text-base-content/70">Your data is always protected</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Fast & Easy</h3>
                  <p className="text-sm text-base-content/70">Quick access to your account</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-1/2">
            <div className="bg-base-100  p-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
