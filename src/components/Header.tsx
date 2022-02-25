import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userLoggedState } from "../recoilAtoms/atoms";

export const Header: FC = () => {
  const userLogged = useRecoilValue(userLoggedState);
  const navigate = useNavigate();

  const logout = useResetRecoilState(userLoggedState);

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, marginRight: 120 }}
          >
            Cartão Seraphis
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Inicio
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Suporte
            </Link>
          </nav>
          {userLogged.token ? (
            <>
              <Button
                onClick={() => navigate("/login")}
                variant="contained"
                sx={{ my: 1, mx: 1.5 }}
              >
                {userLogged.login}
              </Button>
              <Button onClick={logout} variant="text" sx={{ my: 1, mx: 1.5 }}>
                Sair
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => navigate("/userSignUp")}
                variant="text"
                sx={{ my: 1, mx: 1.5 }}
              >
                Cadastre-se
              </Button>
              <Button
                onClick={() => navigate("/login")}
                variant="contained"
                sx={{ my: 1, mx: 1.5 }}
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
