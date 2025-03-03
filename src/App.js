// Remove these unused imports
import logo from './logo.svg';
import './App.css';

// Keep the rest of the file as is
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Container, CssBaseline, Paper, Typography, Fade, IconButton, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5350',
    },
    secondary: {
      main: '#51D9FF',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handlePokemonSearch = (pokemonData) => {
    setPokemon(pokemonData);
    setHasSearched(true);
  };

  const handleHomeClick = () => {
    setPokemon(null);
    setHasSearched(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #FF5350 0%, #51D9FF 100%)',
          padding: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Header />
            <IconButton 
              onClick={handleHomeClick}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                '&:hover': {
                  backgroundColor: '#FF5350',
                  color: 'white',
                },
              }}
            >
              <HomeIcon />
            </IconButton>
          </Box>

          <SearchBar setPokemon={handlePokemonSearch} />
          
          {!hasSearched && (
            <Fade in={!hasSearched}>
              <Paper
                elevation={3}
                sx={{
                  mt: 4,
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 4,
                  border: '2px solid #51D9FF',
                  boxShadow: '0 0 15px rgba(81, 217, 255, 0.5)',
                }}
              >
                <Box
                  component="img"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png"
                  alt="Rotom"
                  sx={{
                    width: '200px',
                    height: '200px',
                    mb: 2,
                    filter: 'drop-shadow(0 0 10px rgba(81, 217, 255, 0.5))',
                  }}
                />
                <Typography variant="h5" color="primary" gutterBottom>
                  Welcome to the Rotom Pokédex!
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Bzzt! I'm your friendly Rotom Pokédex assistant! Enter a Pokémon name or number above to begin your search.
                </Typography>
              </Paper>
            </Fade>
          )}
          
          {pokemon && (
            <Fade in={true}>
              <div>
                <PokemonCard pokemon={pokemon} />
              </div>
            </Fade>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
