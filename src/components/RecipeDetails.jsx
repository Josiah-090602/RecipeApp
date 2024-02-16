import React, { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  Divider,
  Card,
  CardContent,
} from '@mui/material'
import { PrimaryInfo } from './PrimaryInfo'
import Ingredients from './Ingredients'

export const RecipeDetails = ({ recipeId }) => {
  const [recipeData, setRecipeData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const URL = `https://api.spoonacular.com/recipes/${recipeId}/information`
  const API_KEY = 'fedd41acee33446b9b322fcc12ccd2ec'

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`)
      const dataRecipe = await response.json()
      console.log(dataRecipe)
      setRecipeData(dataRecipe)
      setIsLoading(false)
    }
    getRecipe()
  }, [recipeId])

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
        gap: '10px',
      }}
    >
      <Card
        sx={{
          width: '40%',
          padding: '2rem',
          bgcolor: 'primary.main',
          color: 'white',
          borderRadius: '10px',
          flexGrow: '1',
        }}
      >
        <CardContent sx={{}}>
          <PrimaryInfo recipe={recipeData} isLoading={isLoading} />
        </CardContent>
      </Card>
      <Card sx={{ width: '60%', padding: '2.5rem' }}>
        <Typography variant="h4">
          <strong>Ingredients</strong>
        </Typography>
        <Divider sx={{ marginY: '1.5rem' }}></Divider>
        <Ingredients recipe={recipeData} isLoading={isLoading} />
      </Card>
    </Box>
  )
}
