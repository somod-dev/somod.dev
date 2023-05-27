import {
  Container,
  Grid,
  Typography,
  Stack,
  Tooltip,
  Link,
  Divider,
  Box
} from "@mui/material";
import { SomodTitle, SodaruTitle } from "@solib/media-kit";
import { CookiePreference } from "mui-extended";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ForumIcon from "@mui/icons-material/Forum";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { NpmIcon } from "./graphics/NpmIcon";

export const Footer = () => {
  return (
    <Box mt={6}>
      <Divider />
      <Container maxWidth="lg">
        <Grid container spacing={2} py={3}>
          <Grid item xs={12} md={4}>
            <Stack>
              <Typography variant="subtitle2" pb={1}>
                This documentation is built using
              </Typography>
              <Link href="/">
                <SomodTitle />
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack>
              <Typography variant="subtitle2" pb={1}>
                Links
              </Typography>
              <Link href="https://docs.somod.dev/gettting-started">
                <LocalLibraryIcon /> Learn
              </Link>
              <Link href="https://docs.somod.dev/reference">
                <MenuBookIcon /> Reference
              </Link>
              <Link href="https://dev.to/t/somod/latest">
                <ForumIcon /> Blog
              </Link>
              <Link href="https://github.com/somod-dev">
                <GitHubIcon /> Source Code
              </Link>
              <Link href="https://www.npmjs.com/package/somod">
                <NpmIcon /> NPM Package
              </Link>
              <Link href="https://twitter.com/somoddev">
                <TwitterIcon /> Twitter
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" pb={1}>
              Developed and Maintained By
            </Typography>
            <SodaruTitle width="8rem" />
            <Typography variant="subtitle2">Sodaru Technologies</Typography>
            <Link href="https://sodaru.com">https://sodaru.com</Link>
            <Typography variant="subtitle1">
              &copy; {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
        <Tooltip title="Cookie Preferences">
          <CookiePreference sx={{ position: "fixed", bottom: 25, right: 25 }} />
        </Tooltip>
      </Container>
    </Box>
  );
};
