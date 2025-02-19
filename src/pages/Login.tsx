import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { login } from "../services/authService";
import {
  CssVarsProvider,
  Sheet,
  Typography,
  Input,
  Button,
  Link,
  Stack,
  Box,
  Alert,
} from "@mui/joy";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login: authLogin } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const data = await login(email, password);
      authLogin(data.token);
      navigate("/home");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <CssVarsProvider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: "background.body",
        }}
      >
        <Sheet
          sx={{
            width: 300,
            py: 3,
            px: 4,
            borderRadius: "md",
            boxShadow: "sm",
          }}
        >
          <Typography
            level="h4"
            component="h2"
            sx={{ mb: 2, textAlign: "center" }}
          >
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <Stack spacing={2}>
              {error && (
                <Alert color="danger" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" fullWidth>
                Login
              </Button>
            </Stack>
          </form>
          <Typography level="body-sm" sx={{ mt: 2, textAlign: "center" }}>
            Don't have an account?{" "}
            <Link component={RouterLink} to="/register">
              Register
            </Link>
          </Typography>
        </Sheet>
      </Box>
    </CssVarsProvider>
  );
};

export default Login;
