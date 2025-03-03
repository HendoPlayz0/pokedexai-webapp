import React, { useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

function SearchBar({ setPokemon }) {
  const [search, setSearch] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );
      const speciesResponse = await axios.get(response.data.species.url);
      
      const pokemonData = {
        name: response.data.name,
        image: response.data.sprites.other['official-artwork'].front_default,
        types: response.data.types,
        bio: speciesResponse.data.flavor_text_entries.find(
          (entry) => entry.language.name === 'en'
        ).flavor_text,
        stats: response.data.stats.map(stat => ({
          name: stat.stat.name,
          base_stat: stat.base_stat
        })),
        abilities: response.data.abilities.map(ability => ({
          name: ability.ability.name,
          is_hidden: ability.is_hidden
        })),
        height: response.data.height / 10, // Convert to meters
        weight: response.data.weight / 10, // Convert to kilograms
      };
      
      setPokemon(pokemonData);
    } catch (error) {
      alert('Bzzt! Pokémon not found in database! Please check the spelling and try again!');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearch}
      sx={{
        display: 'flex',
        gap: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 2,
        padding: 2,
        boxShadow: '0 0 15px rgba(81, 217, 255, 0.5)',
        border: '2px solid #51D9FF',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 0 20px rgba(81, 217, 255, 0.8)',
        }
      }}
    >
      <TextField
        fullWidth
        variant="standard"
        placeholder="Bzzt! Enter a Pokémon name or number..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{ 
          disableUnderline: true,
          style: { 
            fontSize: '1.2rem',
            color: '#FF5350'
          }
        }}
      />
      <IconButton 
        type="submit" 
        sx={{
          color: '#FF5350',
          '&:hover': {
            color: '#51D9FF',
          }
        }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default SearchBar;