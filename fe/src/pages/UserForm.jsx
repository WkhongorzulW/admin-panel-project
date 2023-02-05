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
import { addUsers } from "../services/UsersServices";
import { UFBreadCrumbs } from "../components/UBreadCrumbs";

export default function UserForm({ setUsers }) {
  const URL = "http://localhost:8080/users";
  const navigate = useNavigate();

  async function handleSubmit(e) {
    addUsers(e, setUsers, URL);
    navigate("/userlist");
  }

  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <UFBreadCrumbs />
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
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"lastname"}
              type={"text"}
              label={"Last name"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"email"}
              type={"email"}
              label={"Email"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"age"}
              type={"number"}
              label={"Age"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"phonenumber"}
              type={"tel"}
              label={"Phone number"}
              variant={"filled"}
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
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"image"}
              type={"file"}
              label={"Upload image"}
              variant={"filled"}
              fullWidth={true}
            />

            <TextField
              name={"password"}
              type={"password"}
              label={"Password"}
              variant={"filled"}
              fullWidth={true}
            />
          </FormControl>

          <Button
            variant={"contained"}
            type="submit"
            sx={{ marginTop: 2 }}
            color={"success"}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
