import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import GithubProvider from "./contexts/github/githubContext";
import AlertProvider from "./contexts/alert/alertContext";
import Alert from "./components/layout/Alert";
import UserPage from "./pages/UserPage";
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <Alert />
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/user/:login" element={<UserPage />} />
                <Route path="/NotFound" element={<NotFoundPage />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
