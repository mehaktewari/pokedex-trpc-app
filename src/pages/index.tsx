import { useState } from "react";
import { api } from "../utils/api";
import {
  Container,
  TextField,
  CircularProgress,
  Alert,
  Typography,
  Divider,
} from "@mui/material";
import { PokedexTable } from "../components/PokedexTable";
import { FilterablePokedexTable } from "../components/FilterablePokedexTable";

export default function Home() {
  // Single search
  const [search, setSearch] = useState("");

  const {
    data: singlePokemon,
    isLoading,
    error,
  } = api.pokemon.getPokemonByName.useQuery(search, {
    enabled: !!search,
  });

  // Multiple search
  const [multipleInput, setMultipleInput] = useState("");

  const { data: multiplePokemon } =
    api.pokemon.getMultiplePokemon.useQuery(
      multipleInput
        .split(",")
        .map((name) => name.trim())
        .filter(Boolean),
      { enabled: !!multipleInput }
    );

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Pokedex Explorer
      </Typography>

      {/* ---------- Single Search ---------- */}
      <TextField
        label="Search Single Pokemon"
        fullWidth
        onChange={(e) => setSearch(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      {isLoading && <CircularProgress />}
      {error && <Alert severity="error">Something went wrong</Alert>}

      {singlePokemon && (
        <div style={{ marginTop: 20 }}>
          <Typography>ID: {singlePokemon.id}</Typography>
          <Typography sx={{ textTransform: "capitalize" }}>
            Name: {singlePokemon.name}
          </Typography>
          <Typography sx={{ textTransform: "capitalize" }}>
            Types: {singlePokemon.types}
          </Typography>
          <img
            src={singlePokemon.sprite}
            width={120}
            alt={singlePokemon.name}
          />
        </div>
      )}

      <Divider sx={{ marginY: 4 }} />

      {/* ---------- Multiple Search ---------- */}
      <TextField
        label="Enter multiple names (comma separated)"
        fullWidth
        onChange={(e) => setMultipleInput(e.target.value)}
      />

      {multiplePokemon && (
        <PokedexTable pokemonList={multiplePokemon} />
      )}

      <Divider sx={{ marginY: 4 }} />

      {/* ---------- Filter Section ---------- */}
      <FilterablePokedexTable />
    </Container>
  );
}