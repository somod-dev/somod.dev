import { Box, Container, Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Extend } from "./graphics/Extend";
import { Compose } from "./graphics/Compose";
import { Reuse } from "./graphics/Reuse";
import { AnimatedImageL, AnimatedImageR, AnimatedImageM } from "./Animations";
import ScrollAnimation from "./Animations/ScrollAn";


export const Slide3: FunctionComponent = () => {
  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box px={10} py={2}>
          <ScrollAnimation>
          <AnimatedImageL>
          <Extend />
          </AnimatedImageL>
          </ScrollAnimation>
          </Box>
          <Typography variant="h4" textAlign="center">
            Extend
          </Typography>
          <Typography variant="subtitle1" textAlign="center" px={2}>
            Add more resources to existing existing module without updating it
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box px={10} py={2}>
          <ScrollAnimation>
          <AnimatedImageM>
          <Compose />
          </AnimatedImageM>
          </ScrollAnimation>
             </Box>
          <Typography variant="h4" textAlign="center">
            Compose
          </Typography>
          <Typography variant="subtitle1" textAlign="center" px={2}>
            Combine modules at multiple levels without duplication
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box px={10} py={2}>
          <ScrollAnimation>
          <AnimatedImageR>
          <Reuse />
          </AnimatedImageR>
          </ScrollAnimation>
          </Box>
          <Typography variant="h4" textAlign="center">
            Reuse
          </Typography>
          <Typography variant="subtitle1" textAlign="center" px={2}>
            Reuse modules to save time and avoid redundancy
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
