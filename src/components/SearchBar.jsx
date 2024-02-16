import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'

const URL = 'https://api.spoonacular.com/recipes/complexSearch'
const API_KEY = 'fedd41acee33446b9b322fcc12ccd2ec'

export const SearchBar = ({ recipeData, setRecipeData }) => {
  const [query, setQuery] = useState('pizza')

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
      const data = await response.json()
      console.log(data.results)
      setRecipeData(data.results)
    }
    fetchRecipe()
  }, [query])
  return (
    <>
      <TextField
        variant="outlined"
        sx={{ width: '100%' }}
        value={query}
        label="Search Recipe"
        onChange={e => setQuery(e.target.value)}
      />
    </>
  )
}
