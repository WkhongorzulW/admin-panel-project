import { Container, Grid, TextField, Typography } from "@mui/material";

export default function LoginForm() {
  return (
    <Container>
      <Typography variant="h3" sx={{ marginBottom: 3, marginTop: 10 }}>
        Login Page
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            type="email"
            variant="filled"
            size="small"
            label="E-mail"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            name="password"
            type="password"
            variant="filled"
            size="small"
            label="Password"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
