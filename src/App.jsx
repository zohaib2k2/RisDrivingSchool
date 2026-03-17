import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LessonLocationsPage from "./pages/LessonLocationsPage";
import AboutPage from "./pages/AboutPage";
import DrivingPackagesPage from "./pages/DrivingPackagesPage";
import EmergencyCoursePage from "./pages/EmergencyCoursePage";
import LessonCalculatorPage from "./pages/LessonCalculatorPage";

export default function App() {
  const [lang, setLang] = useState("en");
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/RisDrivingSchool" element={<HomePage lang={lang} onLangChange={setLang} />} />
        <Route path="/RisDrivingSchool/locations" element={<LessonLocationsPage lang={lang} onLangChange={setLang} />} />
        <Route path="/RisDrivingSchool/about" element={<AboutPage lang={lang} onLangChange={setLang} />} />
        <Route path="/RisDrivingSchool/packages" element={<DrivingPackagesPage lang={lang} onLangChange={setLang} />} />
        <Route path="/RisDrivingSchool/emergency" element={<EmergencyCoursePage lang={lang} onLangChange={setLang} />} />
        <Route path="/RisDrivingSchool/calculator" element={<LessonCalculatorPage lang={lang} onLangChange={setLang} />} />
      </Routes>
    </BrowserRouter>
  );
}
 