import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const CompanyLoginInfo: FC = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados para Login
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            autoComplete="login email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="user"
            name="user"
            label="Usuário"
            fullWidth
            autoComplete="login user"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="password"
            name="password"
            label="Senha"
            fullWidth
            variant="standard"
            type="password"
            autoComplete="current-password"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
