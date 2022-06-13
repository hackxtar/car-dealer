/**
 * @format
 */
import React from "react";
import {
  Autocomplete,
  TextField,
  Grid,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material/";
import PropTypes from "prop-types";
import Car from "../../../assets/img/car.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";

import "./__style__/home.scss";
const SearchBarHome = ({ cityList }) => {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cityList}
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="City" />}
          />
        </Grid>
        <Grid item xs={2}>
          <div>
            Sort By:
            <Button className="btn-home-sortBy" onClick={handleClickOpen}>
              Best Match
            </Button>
          </div>
          <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Fill the form</DialogTitle>
            <DialogContent>
              <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
                  <Select
                    native
                    value={age}
                    onChange={handleChange}
                    input={
                      <OutlinedInput label="Age" id="demo-dialog-native" />
                    }
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    value={age}
                    onChange={handleChange}
                    input={<OutlinedInput label="Age" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Box>
  );
};

const MainGrid = ({ loading }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              alt="Cars Buy"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            "Ted"
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            "5 hours ago"
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={Car}
          alt="Nicola Sturgeon on a TED talk stage"
        />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p">
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </Typography>
        )}
      </CardContent>
    </Card>
  );

  MainGrid.propTypes = {
    loading: PropTypes.bool,
  };
};

const GridList = ({ loading }) => {
  return (
    // create the list of four MainGrid components
    <Grid container spacing={3}>
      {[0, 1, 2, 3].map((value) => (
        <Grid item xs={12} sm={6} md={4} key={value}>
          <MainGrid loading={loading} />
        </Grid>
      ))}
    </Grid>
  );

  GridList.propTypes = {
    loading: PropTypes.bool,
  };
};

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }} spacing={2} className="main-page">
      <SearchBarHome cityList={cityList} />
      <br />
      <br />
      <br />
      <GridList loading={false} />
    </Box>
  );
};

const cityList = [
  { label: "Nagpur", value: "Nagpur" },
  { label: "Pune", value: "Pune" },
  { label: "Mumbai", value: "Mumbai" },
  { label: "Kolkata", value: "Kolkata" },
  { label: "Chennai", value: "Chennai" },
  { label: "Bangalore", value: "Bangalore" },
  { label: "Hyderabad", value: "Hyderabad" },
  { label: "Kanpur", value: "Kanpur" },
  { label: "Lucknow", value: "Lucknow" },
  { label: "Jaipur", value: "Jaipur" },
  { label: "Indore", value: "Indore" },
  { label: "Vadodara", value: "Vadodara" },
];

export default Home;
