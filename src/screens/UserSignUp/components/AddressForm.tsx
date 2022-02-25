import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { userState } from "../../../recoilAtoms/atoms";
import { useRecoilState } from "recoil";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { BRAZIL_UF } from "../../../constants/brazilUF";

export const AddressForm: FC = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onChangeSelect = (event: SelectChangeEvent<string>) => {
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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cpf"
            name="cpf"
            onChange={onChange}
            label="CPF"
            fullWidth
            autoComplete="address address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="telefone"
            name="telefone"
            onChange={onChange}
            label="Telefone"
            fullWidth
            autoComplete="phone"
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
        <FormControl variant="standard" sx={{ mt: 3, ml: 3, minWidth: 120 }}>
          <InputLabel id="UF">UF</InputLabel>
          <Select
            labelId="UF"
            id="estado"
            name="estado"
            onChange={onChangeSelect}
          >
            {BRAZIL_UF.map((value, index) => {
              return (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
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
