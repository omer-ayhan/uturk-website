import { Box, Button, Card } from "@material-ui/core";
import React from "react";
import { useAuth } from "./ChannelContext";
import { useHistory } from "react-router-dom";
import { images } from "./MainStyle";

function SignIn() {
  document.body.style.cssText = `
        overflow: hidden;`;
  const { login } = useAuth();
  const { signIn } = login;
  const history = useHistory();

  const signUser = async () => {
    await signIn();
    history.push("/");
  };
  return (
    <form onSubmit={signUser}>
      <Box
        display="flex"
        p="0"
        width="100vw"
        height="100%"
        justifyContent="center"
        alignItems="center">
        <Card style={{ width: "300px", height: "350px", padding: "15px" }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <img src={images.logo} id="logo-img" alt="uturk logo" />
            <Button variant="contained" color="primary" type="submit">
              Login Button
            </Button>
          </Box>
        </Card>
      </Box>
    </form>
  );
}

export default SignIn;
