import { FunctionComponent } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
export const Slide2: FunctionComponent = () => {
  return (
    <Container maxWidth="lg">
      <Box py={3}>
        <Grid container>
          <Grid item xs={12} sm={6} p={8}>
            <Typography variant="h4" textAlign="center" color="primary">
              Going Serverless saves the Server Maintenance Cost
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} p={8}>
            <Typography variant="h4" textAlign="center">
              SOMOD Organizes your Serverless Code
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
