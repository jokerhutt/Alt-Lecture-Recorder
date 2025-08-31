import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/organisms/Header/Header";
import { MainNavigation } from "./components/organisms/Navigation/MainNavigation";
import { registerModals } from "./modals/modalRegistry";
import { PageTemplate } from "./layouts/PageTemplate";
import { RecordingsGrid } from "./features/recordings/components/organisms/RecordingsGrid";
import { mockPresentations } from "./features/recordings/types/recording";
import { CoursesGrid } from "./features/courses/components/organisms/CoursesGrid";
import { CoursePage } from "./features/courses/components/pages/CoursePage";

function App() {
  registerModals();
  const recordings = mockPresentations;
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
              <Route
                path="/"
                element={
                  <PageTemplate>
                    <RecordingsGrid recordings={recordings} />
                  </PageTemplate>
                }
              />
              <Route
                path="/recordings"
                element={
                  <PageTemplate header="Your Presentations">
                    <RecordingsGrid recordings={recordings} />
                  </PageTemplate>
                }
              />
              <Route
                path="/courses"
                element={
                  <PageTemplate header="Your Courses">
                    <CoursesGrid />
                  </PageTemplate>
                }
              />
              <Route
                path="/courses/:courseId"
                element={
                  <CoursePage/>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
