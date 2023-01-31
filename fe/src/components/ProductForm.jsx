import { Container } from "@mui/system";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";

export default function ProductForm() {
  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        NEW PRODUCT
      </Typography>
      <Box maxWidth="md" sx={{ margin: "0 auto" }}>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          fullWidth={true}
          onSubmit
        >
          <TextField
            type={"image"}
            label={"Upload image"}
            variant={"outlined"}
            fullWidth={"true"}
          />
          <TextField
            type={"text"}
            label={"Product name"}
            variant={"outlined"}
            fullWidth={"true"}
          />
          <TextField
            type={"text"}
            label={"Price"}
            variant={"outlined"}
            fullWidth={"true"}
          />
          <TextField
            type={"number"}
            label={"Stock"}
            variant={"outlined"}
            fullWidth={"true"}
          />
          <TextField
            type={"text"}
            label={"Color"}
            variant={"outlined"}
            fullWidth={"true"}
          />
          <TextField
            type={"text"}
            label={"Category"}
            variant={"outlined"}
            fullWidth={"true"}
          />
          <TextField
            type={"text"}
            label={"Description"}
            variant={"outlined"}
            fullWidth={"true"}
          />

          <Button variant={"outlined"} color={"primary"}>
            Add
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
