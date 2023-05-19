import { FunctionComponent } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  Grid,
  Button,
  styled
} from "@mui/material";
import { RocketIcon } from "./graphics/RocketIcon";
import CopyIcon from "@mui/icons-material/ContentCopy";

const CodeButton = styled(Button)({
  backgroundColor: "#2b2b2b",
  fontFamily: '"Roboto Mono", "Courier New", monospace',
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#2b2b2b"
  }
});

export const Slide1: FunctionComponent = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Box py={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3" pt={2}>
          THINK
        </Typography>
        <Typography variant="h3" textAlign="center">
          <span style={{ color: theme.palette.primary.main }}>
            <strong>OUTSIDE</strong>
          </span>{" "}
          THE <i>CONTAINER</i> <RocketIcon width={50} />
        </Typography>

        <Typography variant="h4" pt={2} textAlign="center">
          WITH
        </Typography>
        <Typography variant="h4" textAlign="center">
          <strong>S</strong>erverless <strong>O</strong>ptimized{" "}
          <strong>MOD</strong>ules
        </Typography>
        <Typography variant="h6" pt={2} textAlign="center">
          An open-source toolchain for serverless applications.
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          Develop serverless applications in modules and compose them to create
          bigger solutions
        </Typography>
        <Container maxWidth="sm">
          <Grid container py={3}>
            <Grid item xs={12} sm={5}>
              <Button
                fullWidth
                color="primary"
                variant="contained"
                size="large"
                href="https://docs.somod.dev/getting-started"
              >
                Getting Started
              </Button>
            </Grid>
            <Grid item xs={12} sm={2}>
              &nbsp;
            </Grid>
            <Grid item xs={12} sm={5}>
              <CodeButton
                fullWidth
                color="primary"
                variant="contained"
                size="large"
                endIcon={<CopyIcon />}
                onClick={() => {
                  navigator.clipboard.writeText("npx create-somod");
                }}
              >
                npx create-somod
              </CodeButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};
