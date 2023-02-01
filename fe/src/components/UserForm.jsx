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

export default function UserForm() {
  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        ADD USER
      </Typography>
      <Box maxWidth="md" sx={{ margin: "0 auto" }}>
        <form onSubmit>
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
              type={"text"}
              label={"First name"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              type={"text"}
              label={"Last name"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              type={"email"}
              label={"Email"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              type={"number"}
              label={"Age"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
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
              type={"text"}
              label={"Role"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              type={"file"}
              label={"Upload image"}
              variant={"outlined"}
              fullWidth={true}
            />

            <TextField
              type={"password"}
              label={"Password"}
              variant={"outlined"}
              fullWidth={true}
            />
          </FormControl>

          <Button variant={"outlined"} type={"submit"} color={"primary"}>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
