import { Container } from "@mui/system";
import { Button, FormControl, Input, InputLabel } from "@mui/material";

export default function UserForm() {
  return (
    <Container maxWidth="lg" sx={{ marginRight: 5 }}>
      <FormControl onSubmit>
        <FormControl fullWidth={true} sx>
          <InputLabel htmlFor="firstname">First name</InputLabel>
          <Input id="firstname" />
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="lastname">Last name</InputLabel>
          <Input id="lastname" />
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="age">Age</InputLabel>
          <Input id="age" />
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input id="email" />
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="phoneNumber">Phone number</InputLabel>
          <Input id="phoneNumber" />
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="role">Role</InputLabel>
          <Input id="role" />
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="gender">Gender</InputLabel>
          <Input id="gender" />
        </FormControl>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" />
        </FormControl>
        <Button>Submit</Button>
      </FormControl>
    </Container>
  );
}
