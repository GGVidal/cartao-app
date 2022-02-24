import React, { FC, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";

import { userState } from "../../../recoilAtoms/atoms";
import { useRecoilState } from "recoil";
export const LoginInfo: FC = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados para Login
      </Typography>
      {console.log(userInfo)}
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
            id="user"
            name="user"
            onChange={onChange}
            label="Usuário"
            fullWidth
            autoComplete="login user"
            variant="standard"
          />
        </Grid>
        <FormControl sx={{ mt: 3, ml: 4, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
          <Input
            id="standard-adornment-password"
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={onChange}
            fullWidth
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
          />
        </FormControl>
      </Grid>
    </React.Fragment>
  );
};
