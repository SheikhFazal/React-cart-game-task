import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import useHomePage from "./use-home";
import { buttonData } from "./data";

const HomePage = () => {
  const {
    inputVal,
    editIndex,
    cardData,
    handleChange,
    handleAdd,
    handleNext,
    handlePrevious,
    handleEdit,
    handleDelete,
    handleLogout,
  } = useHomePage();

  return (
    <div>
      <Box py={2}>
        <Typography align="center" variant="h4" color="#fff">
          Home Page
        </Typography>
        <Box display='flex' justifyContent="end">
          <Button align="center" variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Box>
      <Box>
        <form onSubmit={(e) => handleAdd(e)}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <TextField
              label="Enter Text"
              required
              size="small"
              variant="outlined"
              autoComplete="off"
              InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              value={inputVal}
              onChange={handleChange}
            />
            <Button variant="outlined" type="submit">
              {editIndex === null ? "Add" : "Edit"}
            </Button>
          </Box>
        </form>
      </Box>
      <Box display="flex" py={5} flexWrap="wrap" justifyContent="space-evenly">
        {cardData?.map((obj, i) => (
          <Box
            borderRadius={1}
            minHeight="380px"
            p={1.5}
            my={1}
            width="300px"
            border="1px solid #fff"
            key={obj?.id}
          >
            {obj?.card?.map((item, j) => (
              <Grid
                item
                xs={12}
                border="1px solid #fff"
                borderRadius={1}
                p={1}
                mb={2}
                key={j}
              >
                <Typography variant="h6" align="center" color="#fff" py={4}>
                  {item?.text}
                </Typography>
                <Grid container justifyContent="space-between">
                  {buttonData({
                    handlePrevious,
                    handleEdit,
                    handleDelete,
                    handleNext,
                  }).map((button, buttonIndex) => (
                    <Button
                      variant="outlined"
                      size="small"
                      key={buttonIndex}
                      onClick={() => button.onClick(i, j)}
                      disabled={button.disabled(i, cardData)}
                    >
                      {button.label}
                    </Button>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default HomePage;
