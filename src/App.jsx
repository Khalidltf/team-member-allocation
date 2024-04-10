import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Employees from "./components/Employees";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import GroupedTeamMembers from "./components/GroupedTeamMembers";

import { DataProvider } from "./context/DataContext";

// Import our custom CSS
import "./scss/styles.scss";

// import * as bootstrap from "bootstrap";
// import Alert from "bootstrap/js/dist/alert";

// import { Tooltip, Toast, Popover } from "bootstrap";

function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Employees />}></Route>
          <Route
            path="/GroupedTeamMembers"
            element={<GroupedTeamMembers />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
