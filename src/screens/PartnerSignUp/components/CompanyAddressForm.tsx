import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const CompanyAddressForm: FC = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações da empresa
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="companyName"
            name="companyName"
            label="Nome da Empresa"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="managerName"
            name="managerName"
            label="Nome do responsável"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="services"
            name="services"
            label="Serviços oferecidos"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cnpj"
            name="cnpj"
            label="CNPJ"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="openingHours"
            name="openingHours"
            label="Horário de funcionamento"
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
