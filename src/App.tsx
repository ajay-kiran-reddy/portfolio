import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Button, Divider, Grid, Tooltip } from "@mui/material";
import { FaMedium } from "react-icons/fa6";
import Contact from "./components/Contact";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const dividerStyle = {
  width: "100%",
  backgroundColor: "#292c2e",
  margin: "5rem 0",
};
export default function PrimarySearchAppBar() {
  const onButtonClick = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/17CbL820-gIjUBon2EGoP7deHT2_Oyivr/view";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(pdfUrl);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "transparent", maxWidth: "inherit" }}
      >
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography
                variant="h5"
                style={{ cursor: "pointer" }}
                noWrap
                color="primary"
                component="div"
              >
                <IconButton>
                  <CodeIcon color="secondary" fontSize="large" />
                </IconButton>
                AJAY KIRAN REDDY
              </Typography>
            </Grid>

            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Box>
                <Tooltip title="Download Resume">
                  <Button
                    // onClick={onButtonClick}
                    startIcon={<FileDownloadIcon />}
                    href="https://drive.google.com/file/d/17CbL820-gIjUBon2EGoP7deHT2_Oyivr/view"
                    target="_blank"
                  >
                    Resume
                  </Button>
                </Tooltip>

                <IconButton
                  size="large"
                  color="inherit"
                  href="https://www.linkedin.com/in/ajay-kiran-reddy-thalla-73985393/"
                  target="_blank"
                >
                  <LinkedInIcon color="primary" />
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  href="https://github.com/ajay-kiran-reddy"
                  target="_blank"
                >
                  <GitHubIcon color="primary" />
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  href="https://medium.com/@ajaykiranreddy999"
                  target="_blank"
                >
                  <FaMedium style={{ color: "#fff" }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <div style={{ padding: "0 0 0 2rem", marginTop: "8rem" }}>
        <Hero />

        <Divider component="div" style={dividerStyle} />
        <About />

        <Divider component="div" style={dividerStyle} />

        <Technologies />

        <Divider component="div" style={dividerStyle} />

        <Experience />

        <Divider component="div" style={dividerStyle} />
        <Projects />

        <Divider component="div" style={dividerStyle} />
        <Contact />
      </div>
    </>
  );
}
