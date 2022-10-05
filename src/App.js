import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menupage from "./pages/Menupage";
import Login from "./pages/Login";
import Pizza from "./pages/Pizza";
import Burger from "./pages/Burger";
import Salad from "./pages/Salad";

function App() {
  return (
    <div className=" font-Poppins bg-gray-900">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menupage />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/salad" element={<Salad />} />
          <Route
            path="*"
            element={
              <div className="flex items-center">
                <p className="text-4xl text-center pt-36 text-white font-bold h-screen w-screen">
                  Could not find your page
                </p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
