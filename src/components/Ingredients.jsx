import React from 'react'
import { Grid, Card, Typography, Box } from '@mui/material'

const Ingredients = ({ recipe, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box
          sx={{
            display: 'flex',
            height: '650px',
            overflowY: 'scroll',
            padding: '1rem',
            scrollbarWidth: 'none',
          }}
        >
          <Grid spacing={2} container>
            {' '}
            {recipe.extendedIngredients.map(
              (ing, index) =>
                ing.id === -1 || (
                  <Grid key={index} item md={6}>
                    <Card
                      sx={{
                        display: 'flex',
                        padding: '20px',
                        minHeight: '100px',
                        alignItems: 'center',
                        gap: '20px',
                      }}
                    >
                      <Box
                        sx={{
                          padding: '10px',
                          display: 'flex',
                          justifyContent: 'center',
                          width: '100px',
                          height: '100px',
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          src={`https://spoonacular.com/cdn/ingredients_100x100/${ing.image}`}
                          alt=""
                          height="100%"
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6">
                          <strong>{ing.name}</strong>
                        </Typography>
                        <Typography variant="caption">
                          {ing.amount} {ing.unit}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ),
            )}
          </Grid>
        </Box>
      )}
    </div>
  )
}

export default Ingredients
