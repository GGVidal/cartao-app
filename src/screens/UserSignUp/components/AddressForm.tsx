import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { userState } from "../../../recoilAtoms/atoms";
import { useRecoilState } from "recoil";

export const AddressForm: FC = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações
      </Typography>
      {console.log("GG", userInfo)}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={onChange}
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
            onChange={onChange}
            label="Ultimo nome"
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
            onChange={onChange}
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
            onChange={onChange}
            label="Bairro"
            fullWidth
            autoComplete="address address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numero"
            name="numero"
            onChange={onChange}
            label="Número"
            fullWidth
            autoComplete="address address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cidade"
            name="cidade"
            onChange={onChange}
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
            onChange={onChange}
            required
            label="Estado"
            fullWidth
            variant="standard"
            autoComplete="address state"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cep"
            name="CEP"
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
