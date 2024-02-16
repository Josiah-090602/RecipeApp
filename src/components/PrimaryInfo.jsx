import React from 'react'
import {
  Card,
  CardContent,
  Box,
  Typography,
  Stack,
  Divider,
} from '@mui/material'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
export const PrimaryInfo = ({ recipe, isLoading }) => {
  return (
    <>
      <img
        src={recipe.image}
        alt=""
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <Typography variant="h4" sx={{ fontWeight: '600', margin: '10px' }}>
        {recipe.title}
      </Typography>

      <Divider sx={{ margin: '1rem 0', color: 'white' }}>
        <Typography variant="h6">Food Stats</Typography>
      </Divider>

      <Stack direction="row" spacing={2}>
        <Card
          sx={{
            padding: '10px',
            bgcolor: 'warning.dark',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <AccessAlarmsIcon />
          <Typography sx={{ fontWeight: '500' }}>
            {recipe.readyInMinutes} minute
          </Typography>
        </Card>
        <Card sx={{ padding: '10px', bgcolor: 'warning.dark' }}>
          <Typography sx={{ fontWeight: '500' }}>
            {recipe.servings} serving
          </Typography>
        </Card>
        <Card sx={{ padding: '10px', bgcolor: 'warning.dark' }}>
          <Typography sx={{ fontWeight: '500' }}>
            {recipe.vegetarian ? 'Vegeterian' : 'Non-Vegetarian'}
          </Typography>
        </Card>
      </Stack>
      <Divider sx={{ margin: '1rem 0', color: 'white' }}>
        <Typography variant="h6">Instructions</Typography>
      </Divider>
      <Box
        sx={{
          height: '200px',
          overflow: 'scroll',
          scrollbarWidth: 'none',
        }}
      >
        {' '}
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Card
            sx={{
              textAlign: 'justify',
              paddingY: '10px',
              bgcolor: 'transparent',
            }}
          >
            {recipe.analyzedInstructions[0].steps.map(step => (
              <CardContent
                key={step.number}
                sx={{
                  bgcolor: 'white',
                  marginTop: '10px',
                  borderRadius: '20px',
                }}
              >
                <Typography color={'primary.dark'}> {step.step}</Typography>
              </CardContent>
            ))}
          </Card>
        )}
      </Box>
    </>
  )
}
