import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const AddressForm: FC = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Primeiro nome"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Ultimo nome"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Logradouro"
            fullWidth
            autoComplete="address address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Cidade"
            fullWidth
            autoComplete="address city"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Estado"
            fullWidth
            variant="standard"
            autoComplete="address state"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="CEP"
            fullWidth
            autoComplete="address cep"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="País"
            fullWidth
            autoComplete="address pais"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="complemento"
            name="complemento"
            label="Complemento"
            fullWidth
            autoComplete="address complemento"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
