import React, { FC, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRecoilState } from "recoil";
import { userLoggedState } from "../../recoilAtoms/atoms";
import { useNavigate } from "react-router-dom";
import { api } from "../../server";

const theme = createTheme();

export const SignInAdmin: FC = () => {
  const [loading, setLoading] = useState(false);
  const [userLogged, setUserLogged] = useRecoilState(userLoggedState);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const email = data.get("email");
    const senha = data.get("senha");
    if (!!email && !!senha) {
      const res = await api.post("/sessao", {
        email,
        senha,
      });
      if (res.status === 200) {
        const { data } = res;
        const { token, user } = data;
        const {
          email,
          login,
          cpf,
          telefone,
          parceiro_id,
          beneficio_id,
          tipo_usuario_id,
          nome,
          endereco_id,
          num_registro,
        } = user;
        setUserLogged({
          ...userLogged,
          token,
          email,
          login,
          cpf,
          endereco_id,
          nome,
          num_registro,
          telefone,
          parceiro_id,
          beneficio_id,
          tipo_usuario_id,
        });
        api.defaults.headers.common["authorization"] = token;
        setLoading(false);
        if (tipo_usuario_id === 1) {
          navigate("/admin_dashboard");
        }
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login Admin
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
            />
            {loading ? (
              <CircularProgress />
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
