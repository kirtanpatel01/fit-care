import { useEffect, useState } from "react";
import {
  Dashboard,
  Login,
  Register,
  NotFound,
  CollectInfo,
  Meals,
  Exercise,
} from "./pages";
import { Layout } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="bg-baseLight dark:bg-baseDark min-h-screen text-baseDark dark:text-baseLight tracking-wider text-lg">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/collect-info" element={<CollectInfo />} />

            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="meals" element={<Meals />} />
              <Route path="exercise" element={<Exercise />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
