import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { BRAZIL_UF } from "../../../constants/brazilUF";
import { partnerUserState } from "../../../recoilAtoms/atoms";
import { useRecoilState } from "recoil";

export const CompanyAddressForm: FC = () => {
  const [partnerInfo, setPartnerInfo] = useRecoilState(partnerUserState);

  const onChangeSelect = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setPartnerInfo({ ...partnerInfo, [name]: value });
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPartnerInfo({ ...partnerInfo, [name]: value });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações da empresa
      </Typography>
      {console.log(partnerInfo)}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
            name="telefone"
            label="Telefone"
            fullWidth
            autoComplete="phone"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cnpj"
            name="cnpj"
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            defaultValue=""
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
            id="CEP"
            name="CEP"
            label="CEP"
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
            fullWidth
            autoComplete="address complemento"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
