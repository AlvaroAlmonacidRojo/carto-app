import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import BuilderMap from "../BuilderMap";

const BuilderContainer = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar component="nav">Carto Builder</AppBar>
      <Grid container display={"flex"} marginTop="2em" height="100%" minHeight="700px">
        <Grid item xs={2} borderRight="1px solid grey">
          Layers
        </Grid>
        <Grid item xs={10} position="relative">
          <BuilderMap />
        </Grid>
      </Grid>
    </div>
  );
};

export default BuilderContainer;
