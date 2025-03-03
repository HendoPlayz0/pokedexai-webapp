import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Grid, LinearProgress } from '@mui/material';

const typeColors = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
};

function PokemonCard({ pokemon }) {
  return (
    <Card 
      sx={{ 
        mt: 4, 
        mb: 4, 
        borderRadius: 4, 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 0 20px rgba(81, 217, 255, 0.6)',
        border: '2px solid #51D9FF',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 0 30px rgba(81, 217, 255, 0.8)',
        }
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={pokemon.image}
            alt={pokemon.name}
            sx={{ 
              height: 300, 
              objectFit: 'contain', 
              backgroundColor: 'rgba(81, 217, 255, 0.1)',
              padding: 2
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ 
                textTransform: 'capitalize', 
                mb: 2,
                color: '#FF5350',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              {pokemon.name}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'center' }}>
              {pokemon.types.map(({ type }) => (
                <Chip
                  key={type.name}
                  label={type.name}
                  sx={{
                    backgroundColor: typeColors[type.name],
                    color: 'white',
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    padding: '20px 10px'
                  }}
                />
              ))}
            </Box>

            <Typography 
              variant="body1" 
              sx={{ 
                backgroundColor: 'rgba(81, 217, 255, 0.1)',
                padding: 2,
                borderRadius: 2,
                fontStyle: 'italic',
                mb: 2
              }}
            >
              {pokemon.bio}
            </Typography>

            {pokemon.stats && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" sx={{ color: '#FF5350', mb: 1 }}>
                  Stats
                </Typography>
                {pokemon.stats.map((stat) => (
                  <Box key={stat.name} sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                      {stat.name}
                    </Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={(stat.base_stat / 255) * 100}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        backgroundColor: 'rgba(81, 217, 255, 0.2)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#FF5350'
                        }
                      }}
                    />
                  </Box>
                ))}
              </Box>
            )}

            {pokemon.abilities && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" sx={{ color: '#FF5350', mb: 1 }}>
                  Abilities
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {pokemon.abilities.map((ability) => (
                    <Chip
                      key={ability.name}
                      label={ability.name}
                      sx={{
                        backgroundColor: '#51D9FF',
                        color: 'white',
                        textTransform: 'capitalize'
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default PokemonCard;