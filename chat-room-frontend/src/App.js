import React from "react";
import { AuthProvider } from "./components/AuthContext";
//additional imports

function App() {
  return (
      // Wrapping the AppContent component with AuthProvider to provide authentication context
      <AuthProvider>
        <AppContent /> {/* Main content of the app rendered here */}
      </AuthProvider>
  );
}

export default App;
