import { Box, Grid, Typography } from "@mui/material";
import "../App.css";
import { PROJECTS } from "../constants/constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography className="experience">Projects</Typography>
      </motion.div>

      <Grid container spacing={3}>
        <Grid xs={12} item md={2}></Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={5}>
            {PROJECTS.map((item) => {
              return (
                <>
                  <Grid item xs={5} style={{ marginTop: "1rem" }}>
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <img
                        src={item.image}
                        style={{ height: "100%", width: "100%" }}
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={6} style={{ marginTop: "1rem" }}>
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <Box>
                        <Typography color="primary" style={{ fontWeight: 600 }}>
                          {item.title}
                        </Typography>

                        <Typography color="primary" className="exp-desc">
                          {item.description}
                        </Typography>

                        <Grid container>
                          {item.technologies.map((tech) => {
                            return (
                              <Grid
                                item
                                className="skill"
                                style={{ marginTop: "1rem" }}
                              >
                                <span className="skill-label">{tech}</span>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </Box>
                    </motion.div>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>

        <Grid item xs={12} md={2}></Grid>
      </Grid>
    </div>
  );
};

export default Projects;
