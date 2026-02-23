import type { RouterOutputs } from "../utils/api";
import { TableRow, TableCell, Avatar } from "@mui/material";

type Pokemon =
  RouterOutputs["pokemon"]["getMultiplePokemon"][number];

type PokemonRowProps = {
  pokemon: Pokemon;
};

export const PokemonRow = ({ pokemon }: PokemonRowProps) => {
  return (
    <TableRow>
      <TableCell>{pokemon.id}</TableCell>

      <TableCell sx={{ textTransform: "capitalize" }}>
        {pokemon.name}
      </TableCell>

      <TableCell sx={{ textTransform: "capitalize" }}>
        {pokemon.types}
      </TableCell>

      <TableCell>
        <Avatar
          src={pokemon.sprite}
          alt={pokemon.name}
          variant="rounded"
        />
      </TableCell>
    </TableRow>
  );
};