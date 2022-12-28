import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Statistic from './pages/Statistic';
import Tables from './pages/Tables';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex sm:flex-col">
        <Sidebar />
        <div className="py-8 px-8 w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/statistic" element={<Statistic />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
