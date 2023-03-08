import { Grid, Paper } from "@material-ui/core";
import { bgcolor } from "@mui/system";

export default function TesteGrid() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Paper style={{height:"100vh", backgroundColor:"red"}}/>
          <p>First Grid</p>
        </Grid>
        
        <Grid item container direction="column" spacing={2} xs={12} sm={4}>
          <Grid item>
            <Paper style={{height:"49vh",backgroundColor:"yellowgreen"}}>
              Grid
            </Paper>
          </Grid>
        
          <Grid item>
            <Paper style={{height:"49vh",backgroundColor:"orange"}}/>
          <Paper />

          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
