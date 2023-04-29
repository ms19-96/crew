import { Box, Hidden, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchButton = () => {
  return (
      <>
          <Hidden mdDown>
              <Box
                  display={"flex"}
                  alignItems={"center"}
                  mt={-1}
                  ml={4}
                //   onClick={handleClick}
                  sx={{ cursor: 'pointer' }}
              >
                  <TextField
                    //   disabled
                      variant="standard"
                      margin="normal"
                      required
                    //   id="phoneNumber"
                    //   name="phoneNumber"
                    //   autoComplete="phoneNumber"
                    //   autoFocus
                      placeholder="Search for products"
                      sx={{
                          background: "primary.main",
                          py: 1,
                          px: 2,
                          borderRadius: "22px",
                          width: "300px",
                          boxShadow: "0px 4px 31px rgba(0, 0, 0, 0.08)",
                          border: '1px solid #7C8DEE',
                          "& label": {
                              color: '#fff',
                          },
                          cursor: 'pointer',
                          color: '#fff',
                          input: { color: '#fff' }
                      }}
                      InputProps={{
                          sx: {
                              input: {
                                  '&::placeholder': {
                                      color: '#51598B',
                                  },
                              },
                          },
                          disableUnderline: true, // <== added this
                          startAdornment: <InputAdornment position="start"><SearchOutlinedIcon sx={{ color: '#7C8DEE' }} /></InputAdornment>
                      }}
                  />
              </Box>
          </Hidden>
          {/* <Hidden mdUp>
              <IconButton>
                  <SearchOutlinedIcon sx={{ color: "#FFF" }} />
              </IconButton>
          </Hidden> */}
      </>
  )
}

export default SearchButton