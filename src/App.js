import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateLogPage from "./screens/CreateLogPage";
import EmailConfirm from "./screens/EmailConfirm";
import FoodLog from "./screens/FoodLog";
import Home from "./screens/Home";
import NewDailyLog from "./screens/NewDailyLog";
import PreviewPage from "./screens/PreviewPage";
import Profile from "./screens/Profile";
import ProgressCheck from "./screens/ProgressCheck";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Testimonial from "./screens/Testimonial";

function App() {
  return (
    <div className="all">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/emailconfirm" element={<EmailConfirm />} />
          <Route path="/newdailylog" element={<NewDailyLog />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/progress" element={<ProgressCheck />} />
          <Route path="/createlog" element={<CreateLogPage />} />
          <Route path="/foodLog" element={<FoodLog />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
