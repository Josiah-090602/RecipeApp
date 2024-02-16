import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { Box } from '@mui/material'
import { RecipeList } from './components/RecipeList'
import { NavBar } from './components/NavBar'
import { RecipeDetails } from './components/RecipeDetails'

function App() {
  const [recipeData, setRecipeData] = useState([])
  // Recipe Id
  const [recipeId, setRecipeId] = useState(656329)
  return (
    <>
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <NavBar style={{ position: 'fixed' }} />
        {/* SideBarLeft */}
        <Box
          sx={{
            width: '28rem',
            maxHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'secondary.dark',
            gap: '20px',
            padding: '6.5rem 1.5rem 1.5rem 1.5rem',
          }}
        >
          <SearchBar recipeData={recipeData} setRecipeData={setRecipeData} />
          <RecipeList recipeData={recipeData} setRecipeId={setRecipeId} />
        </Box>
        {/* RecipeDetails */}
        <Box
          sx={{
            maxHeight: '100vh',
            bgcolor: 'secondary.main',
            flexGrow: '1',
            padding: '6.5rem 1.5rem 1.5rem 1.5rem',
          }}
        >
          <RecipeDetails recipeId={recipeId} />
        </Box>
      </Box>
    </>
  )
}

export default App
