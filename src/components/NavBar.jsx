import React from 'react'
import { Box, Typography } from '@mui/material'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'

export const NavBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        height: '5rem',
        position: 'fixed',
        width: '100vw',
        boxShadow: '-3px 0px 1px  black',
        zIndex: '10',
        color: 'white',
        display: 'flex',
        padding: '0 2rem 0 2rem',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <RestaurantMenuIcon fontSize="large" />
      <Typography variant="h4" sx={{ fontWeight: '700' }}>
        <span style={{ color: '#FDBE34' }}>Food</span> Center
      </Typography>
    </Box>
  )
}
