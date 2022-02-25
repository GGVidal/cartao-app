import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { partnerUserState } from "../../../recoilAtoms/atoms";
import { useRecoilState } from "recoil";

export const CompanyLoginInfo: FC = () => {
  const [partnerInfo, setPartnerInfo] = useRecoilState(partnerUserState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPartnerInfo({ ...partnerInfo, [name]: value });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados para Login
      </Typography>
      {console.log(partnerInfo)}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            onChange={onChange}
            label="E-mail"
            fullWidth
            autoComplete="login email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="login"
            name="login"
            onChange={onChange}
            label="Usuário"
            fullWidth
            autoComplete="login user"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="senha"
            name="senha"
            onChange={onChange}
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
