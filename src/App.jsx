import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";

const App = () => {
  // Initialize theme from localStorage or system preference
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);
  // Apply theme class and persist to localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <div className="bg-white dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
    </div>
  );
};

export default App;
