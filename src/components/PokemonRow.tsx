import { TableRow, TableCell, Avatar } from "@mui/material";
import type { Pokemon } from "@prisma/client";

type PokemonRowProps = {
  pokemon: Pokemon;
};

export const PokemonRow = ({ pokemon }: PokemonRowProps) => {
  return (
    <TableRow>
      <TableCell>{pokemon.id}</TableCell>
      <TableCell>{pokemon.name}</TableCell>
      <TableCell>{pokemon.types}</TableCell>
      <TableCell>
        <Avatar src={pokemon.sprite} />
      </TableCell>
    </TableRow>
  );
};