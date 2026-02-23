import type { RouterOutputs } from "../utils/api";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { PokemonRow } from "./PokemonRow";

// Infer Pokemon type directly from tRPC router
type Pokemon =
  RouterOutputs["pokemon"]["getMultiplePokemon"][number];

type Props = {
  pokemonList: Pokemon[];
};

export const PokedexTable = ({ pokemonList }: Props) => {
  return (
    <Paper sx={{ marginTop: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Types</TableCell>
            <TableCell>Sprite</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {pokemonList.map((pokemon) => (
            <PokemonRow key={pokemon.id} pokemon={pokemon} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};