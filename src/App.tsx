import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/router";

const App = () => (
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
);

export default App;
