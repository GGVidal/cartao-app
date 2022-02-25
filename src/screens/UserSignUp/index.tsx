import React, { FC } from "react";
import { v4 } from "uuid";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AddressForm } from "./components/AddressForm";
import { LoginInfo } from "./components/LoginInfo";

import { userState } from "../../recoilAtoms/atoms";
import { useRecoilValue } from "recoil";
import { api } from "../../server";

const Copyright: FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const steps = [
  "Informações",
  "Informações de Login",
  "Finalização do cadastro",
];

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <LoginInfo />;
    // case 2:
    //   return <Review />;
    default:
      throw new Error("Unknown step");
  }
};

const theme = createTheme();

export const UserSignUp: FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const userInfo = useRecoilValue(userState);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = async () => {
    const auth = getAuth();
    console.log("GG AUTH", auth);
    const {
      email,
      senha,
      CEP,
      cidade,
      complemento,
      estado,
      numero,
      bairro,
      cpf,
      firstName,
      lastName,
      login,
      logradouro,
      telefone,
    } = userInfo;
    if (Boolean(email) && Boolean(senha)) {
      try {
        const authUser = await createUserWithEmailAndPassword(
          auth,
          email,
          senha
        );
        const { user } = authUser;
        if (user) {
          const res = await api.post("/endereco", {
            logradouro,
            bairro,
            numero,
            CEP,
            cidade,
            estado,
            complemento,
          });
          if (res.status === 200) {
            const { data } = res;
            const uuid = v4();
            const userRes = await api.post("/usuario", {
              nome: `${firstName} ${lastName}`,
              email,
              senha,
              login,
              cpf,
              tipo_usuario_id: 2,
              uuid,
              endereco_id: data.id,
              telefone,
            });
            if (userRes.status === 200) {
              console.log("Usuário cadastrado com sucesso");
            }
          }
        }
      } catch (err) {
        console.log("ERROR", err);
      }
    }
  };

  const handleClick = () => {
    if (activeStep === steps.length - 2) {
      handleNext();
      handleSubmit();
      return;
    }
    handleNext();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Cadastro
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length - 1 ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Conta criada com sucesso
                </Typography>
                <Typography variant="subtitle1">
                  Será enviado um e-mail para confirmar sua conta
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Voltar
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 2
                      ? "Finalizar cadastro"
                      : "Próximo"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};
