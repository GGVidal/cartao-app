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
            id="nome_empresa"
            name="nome_empresa"
            label="Nome da Empresa"
            fullWidth
            autoComplete="company-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="nome_resp"
            name="nome_resp"
            label="Nome do responsável"
            fullWidth
            autoComplete="resp-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="servicos"
            name="servicos"
            label="Serviços oferecidos"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="telefone"
            name="telefone"
            label="Telefone"
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
            id="horario_funcionamento"
            name="horario_funcionamento"
            label="Horário de funcionamento"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="logradouro"
            name="logradouro"
            label="Logradouro"
            fullWidth
            autoComplete="address address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bairro"
            name="bairro"
            label="Bairro"
            fullWidth
            autoComplete="address city"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numero"
            name="numero"
            label="Numero"
            fullWidth
            autoComplete="address city"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cidade"
            name="cidade"
            label="Cidade"
            fullWidth
            autoComplete="address city"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="estado"
            name="estado"
            label="Estado"
            fullWidth
            variant="standard"
            autoComplete="address state"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="CEP"
            name="CEP"
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
