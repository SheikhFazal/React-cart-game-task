import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import useLogin from "./use-login";

const Login = () => {
  const {
    credentials,
    isLoading,
    handleChangeCredentials,
    handleLogin,
    ToastContainer,
  } = useLogin();

  return (
    <Grid container justifyContent="center" alignItems="center" height="80vh">
      <Box position="absolute">
        {" "}
        <ToastContainer />{" "}
      </Box>
      <Grid item md={5}>
        <form onSubmit={handleLogin}>
          <Grid
            container
            direction="column"
            p={5}
            gap={3}
            bgcolor="#E8E8E8	"
            border="1px solid grey"
            borderRadius={1}
          >
            <Typography align="center" variant="h4" mb={2}>
              Login
            </Typography>
            <TextField
              label="Enter Email"
              name="email"
              variant="outlined"
              type="email"
              value={credentials.email}
              onChange={handleChangeCredentials}
            />

            <TextField
              label="Enter Password"
              name="password"
              variant="outlined"
              type="password"
              value={credentials.password}
              onChange={handleChangeCredentials}
            />

            <Button type="submit" variant="contained" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
