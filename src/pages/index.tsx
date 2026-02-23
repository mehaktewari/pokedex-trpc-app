import { useState } from "react";
import { api } from "../utils/api";
import {
  Container,
  TextField,
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";

export default function Home() {
  const [search, setSearch] = useState("");

  const {
    data,
    isLoading,
    error,
  } = api.pokemon.getPokemonByName.useQuery(search, {
    enabled: !!search,
  });

  return (
    <Container sx={{ marginTop: 4 }}>
      <h1>Pokedex Explorer</h1>

      <TextField
        label="Search Pokemon"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading && <CircularProgress />}
      {error && <Alert severity="error">Something went wrong</Alert>}

      {data && (
        <div style={{ marginTop: 20 }}>
          <Typography>ID: {data.id}</Typography>
          <Typography>Name: {data.name}</Typography>
          <Typography>Types: {data.types}</Typography>
          <img src={data.sprite} width={120} />
        </div>
      )}
    </Container>
  );
}