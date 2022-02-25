import React, { FC } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CompanyAddressForm } from "./components/CompanyAddressForm";
import { CompanyLoginInfo } from "./components/CompanyLoginInfo";
import { partnerUserState } from "../../recoilAtoms/atoms";
import { useRecoilValue } from "recoil";

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
      return <CompanyAddressForm />;
    case 1:
      return <CompanyLoginInfo />;
    // case 2:
    //   return <Review />;
    default:
      throw new Error("Unknown step");
  }
};

const theme = createTheme();

export const PartnerSignUp: FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const partnerInfo = useRecoilValue(partnerUserState);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = async () => {
    const db = getFirestore();
    const {
      CEP,
      telefone,
      cidade,
      email,
      estado,
      login,
      nome_empresa,
      logradouro,
      senha,
      bairro,
      cnpj,
      complemento,
      horario_funcionamento,
      nome_resp,
      numero,
      servicos,
    } = partnerInfo;
    if (Boolean(email) && Boolean(senha)) {
      try {
        const docRef = await addDoc(collection(db, "Pre_Approve_Partner"), {
          CEP,
          telefone,
          cidade,
          email,
          estado,
          login,
          nome_empresa,
          logradouro,
          senha,
          bairro,
          cnpj,
          complemento,
          horario_funcionamento,
          nome_resp,
          numero,
          servicos,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (err) {
        console.error("Error adding document: ", err);
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
            Cadastro de parceiro
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
                  Solicitação de criação de conta enviado
                </Typography>
                <Typography variant="subtitle1">
                  Sua solicitação de criação de conta está sendo processada, em
                  breve você receberá um e-mail com mais informações
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
