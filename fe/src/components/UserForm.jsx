import { Container } from "@mui/system";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UserForm({ users, setUsers }) {
  const URL = "http://localhost:8080/users";
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("user");

    const postUserData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      age: e.target.age.value,
      phonenumber: e.target.phonenumber.value,
      role: e.target.role.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postUserData),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);

    navigate("/userlist");
  }
  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        ADD USER
      </Typography>
      <Box maxWidth="md" sx={{ margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            fullWidth={true}
          >
            <TextField
              name={"firstname"}
              type={"text"}
              label={"First name"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name={"lastname"}
              type={"text"}
              label={"Last name"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name={"email"}
              type={"email"}
              label={"Email"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name={"age"}
              type={"number"}
              label={"Age"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name={"phonenumber"}
              type={"tel"}
              label={"Phone number"}
              variant={"outlined"}
              fullWidth={true}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <TextField
              name={"role"}
              type={"text"}
              label={"Role"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name={"image"}
              type={"file"}
              label={"Upload image"}
              variant={"outlined"}
              fullWidth={true}
            />

            <TextField
              name={"password"}
              type={"password"}
              label={"Password"}
              variant={"outlined"}
              fullWidth={true}
            />
          </FormControl>

          <Button
            variant={"outlined"}
            type="submit"
            sx={{ marginTop: 2 }}
            color={"primary"}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
