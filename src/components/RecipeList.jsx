import React from 'react'
import { Card, Box, Typography } from '@mui/material'
import { FoodItem } from './FoodItem'

export const RecipeList = ({ recipeData, setRecipeId }) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          alignItems: 'center',
          overflowY: 'scroll',
          scrollbarWidth: 'none',
        }}
      >
        {recipeData.map(data => (
          <Box key={data.id}>
            <FoodItem
              title={data.title}
              setRecipeId={setRecipeId}
              id={data.id}
              image={data.image}
            />
          </Box>
        ))}
      </Box>
    </>
  )
}
