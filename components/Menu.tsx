import { FunctionComponent, ReactElement, useState, Fragment } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Link,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  Divider
} from "@mui/material";
import { SomodTitle } from "@solib/media-kit";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menu: { link: string; label?: string; icon?: ReactElement }[] = [
  {
    link: "https://docs.somod.dev/getting-started",
    label: "Learn"
  },
  {
    link: "https://docs.somod.dev",
    label: "Docs"
  },
  {
    link: "https://dev.to/t/somod",
    label: "Blog"
  },
  {
    link: "https://docs.somod.dev/catalog",
    label: "Modules"
  },
  {
    link: "https://github.com/somod-dev/somod",
    icon: <GitHubIcon fontSize="medium" />
  }
];

const MobileMenu: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display={{ md: "none", xs: "flex" }}>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
        size="large"
      >
        <MenuIcon fontSize="inherit" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1} display="flex">
              <SomodTitle width="10rem" />
            </Box>
            <IconButton onClick={handleClose} size="large">
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <List>
            {menu.map(menuItem => (
              <Fragment key={menuItem.link}>
                <Link
                  href={menuItem.link}
                  underline="hover"
                  color="inherit"
                  fontSize={24}
                  fontWeight={300}
                >
                  <ListItem>{menuItem.label || menuItem.icon}</ListItem>
                </Link>
                <Divider />
              </Fragment>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const DesktopMenu: FunctionComponent = () => {
  return (
    <Box display={{ md: "flex", xs: "none" }}>
      {menu.map(menuItem => (
        <Link
          key={menuItem.link}
          href={menuItem.link}
          underline="hover"
          color="inherit"
          fontSize={24}
          fontWeight={300}
          mx={2}
          display="flex"
          alignItems="center"
        >
          {menuItem.label || menuItem.icon}
        </Link>
      ))}
    </Box>
  );
};

export const Menu: FunctionComponent = () => {
  return (
    <AppBar elevation={0} color="transparent" position="sticky">
      <Toolbar>
        <Container maxWidth="lg" disableGutters>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1} display="flex">
              <SomodTitle width="10rem" />
            </Box>
            <DesktopMenu />
            <MobileMenu />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
