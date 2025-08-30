import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/organisms/Header/Header";
import { HomeGrid } from "./features/home/components/organisms/HomeGrid";
import { MainNavigation } from "./components/organisms/Navigation/MainNavigation";
import { registerModals } from "./modals/modalRegistry";
import { PageTemplate } from "./layouts/PageTemplate";

function App() {
  const [count, setCount] = useState(0);
  registerModals();

  return (
    <div className="h-dvh w-dvw flex flex-col">
      <header className="w-full">
        <Header />
      </header>

      <div className="w-full h-full flex">
        <div className="h-full w-1/4">
          <div className="hidden h-full lg:block">
            <MainNavigation />
          </div>
        </div>
        <div className="w-full">
          <PageTemplate />
        </div>
      </div>
    </div>
  );
}

export default App;
