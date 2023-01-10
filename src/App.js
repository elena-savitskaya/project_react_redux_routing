import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { AppsPage } from "./pages/AppsPage"
import { Tasks } from './pages/Tasks';
import { LeadTable } from './pages/LeadTable';
import { Discovery } from './pages/Discovery';
import { Analizer } from './pages/Analizer';
import { NofoundPage } from "./pages/NofoundPage";
import { CreateLead } from "./pages/CreateLead";
import { CreateScript } from "./pages/CreateScrpt";
import { AuthProvider } from "./hoc/AuthProvider";
import { RequireAuth } from "./hoc/RequireAuth";
import { ChangeTasks } from "./pages/ChangeTasks";

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Routes>
          <Route path="/project_react_redux_routing" element={<LoginPage />} />
          <Route path="/project_react_redux_routing/AppsPage" element={
            <RequireAuth>
              <AppsPage />
            </RequireAuth>
          } />
          <Route path="/project_react_redux_routing/Tasks" element={<Tasks />} />
          <Route path="/project_react_redux_routing/LeadTable" element={<LeadTable />} />
          <Route path="/project_react_redux_routing/CreateLead" element={<CreateLead />} />
          <Route path="/project_react_redux_routing/Discovery" element={<Discovery />} />
          <Route path="/project_react_redux_routing/CreateScript" element={<CreateScript />} />
          <Route path="/project_react_redux_routing/Analizer" element={<Analizer />} />
          <Route path="/project_react_redux_routing/ChangeTasks" element={<ChangeTasks />} />
          <Route path="*" element={<NofoundPage />} />
        </Routes>
      </AuthProvider>
    );
  }
}
export { App }; 
