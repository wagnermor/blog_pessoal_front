import { Grid, Box, Paper } from "@material-ui/core";
import { bgcolor } from "@mui/system";

export default function TesteFwlexBox() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          {/* <Box></Box> */}
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
    </>
  )
}
