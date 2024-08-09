import { useEffect, useState } from "react";
import MenuItem from "../MenuItem";

export default function Menu() {
  const [loadedMenu, setLoadedMenu] = useState([]);

  useEffect(() => {
    async function fecthMenu() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //
      }

      const menu = await response.json();
      setLoadedMenu(menu);
    }
    fecthMenu();
  }, []);

  return (
    <div className="menu">
      {loadedMenu.map((meal) => (
        <MenuItem key={meal.id} meal={meal} />
      ))}
    </div>
  );
}
