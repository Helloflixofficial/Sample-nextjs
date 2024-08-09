import { ClerkProvider } from "@clerk/nextjs";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <title>My Next.js App</title>
        </head>
        <body>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              MyApp
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/routes/sign-in">
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/routes/sign-up">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main className="h-full flex justify-center items-center my-40">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
};
export default AuthLayout;
