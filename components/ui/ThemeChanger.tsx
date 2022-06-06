import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {/* The current theme is: {theme} */}
      <button onClick={() => setTheme("winter")}>🔆</button>
      {" / "}
      <button onClick={() => setTheme("night")}>🌙</button>
    </div>
  );
};
