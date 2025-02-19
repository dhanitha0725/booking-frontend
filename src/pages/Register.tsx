import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { register } from "../services/authService";
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

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "", // Changed from phone to phoneNumber
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await register(form);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error: any) {
      console.error("Registration error:", error); // Add error logging
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
            Register
          </Typography>
          <form onSubmit={handleRegister}>
            <Stack spacing={2}>
              {error && (
                <Alert color="danger" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}
              <Input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                required
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
              <Input
                name="phoneNumber" // Changed from phone to phoneNumber
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                required
              />
              <Button type="submit" fullWidth>
                Register
              </Button>
            </Stack>
          </form>
          <Typography level="body-sm" sx={{ mt: 2, textAlign: "center" }}>
            Already have an account?{" "}
            <Link component={RouterLink} to="/login">
              Login
            </Link>
          </Typography>
        </Sheet>
      </Box>
    </CssVarsProvider>
  );
};

export default Register;
