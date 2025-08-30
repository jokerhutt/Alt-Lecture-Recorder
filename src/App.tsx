import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/organisms/Header/Header";
import { MainNavigation } from "./components/organisms/Navigation/MainNavigation";
import { registerModals } from "./modals/modalRegistry";
import { PageTemplate } from "./layouts/PageTemplate";

function App() {
  registerModals();

  return (
    <Router>
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
            <Routes>
              <Route path="/" element={<PageTemplate />} />
              <Route path="/recordings" element={<PageTemplate />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
