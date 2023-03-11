import { Container } from "@mui/system";
import {
  Box,
  Button,
  FormControl,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addUsers } from "../../services/UsersServices";
import { UFBreadCrumbs } from "../../components/UBreadCrumbs";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function UserForm() {
  const { users, setUsers, URL } = useContext(UserContext);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    addUsers(e, users, setUsers, URL);
    navigate("/user/list");
  }

  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <UFBreadCrumbs />
      <Typography variant="h3" sx={{ mb: 2, mt: 10 }}>
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
              name={"firstName"}
              type={"text"}
              label={"First name"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"lastName"}
              type={"text"}
              label={"Last name"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name="birthDate"
              type="date"
              label="Birth Date"
              variant="filled"
            />
            <TextField
              name={"email"}
              type={"email"}
              label={"Email"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"phoneNumber"}
              type={"text"}
              label={"Phone number"}
              variant={"filled"}
              fullWidth={true}
            />
            <label>
              Gender
              <Select name="gender">
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="o">Others</option>
              </Select>
            </label>
            <TextField
              name="roleId"
              type="number"
              variant="filled"
              label="Role Id"
            />
            <TextField
              name="address"
              type="text"
              variant="filled"
              label="Address"
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
