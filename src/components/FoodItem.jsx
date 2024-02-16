import React from 'react'
import { Box, Typography, Button, Card } from '@mui/material'

export const FoodItem = ({ title, image, id, setRecipeId }) => {
  return (
    <>
      <Card
        sx={{
          width: '23rem',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <img
          style={{ borderRadius: '10px', width: '100%' }}
          src={image}
          alt=""
        />
        <Typography sx={{ fontWeight: '700' }} variant="h5">
          {title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, vitae
          minima. Minima eos aut facilis accusantium cupiditate deserunt est
          reiciendis corporis.
        </Typography>
        <Button
          onClick={() => setRecipeId(id)}
          disableElevation
          sx={{ width: '100%' }}
          color="warning"
          variant="contained"
        >
          View Recipe Details
        </Button>
      </Card>
    </>
  )
}
