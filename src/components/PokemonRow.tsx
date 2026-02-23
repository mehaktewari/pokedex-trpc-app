import { TableRow, TableCell, Avatar } from "@mui/material";

export const PokemonRow = ({ pokemon }) => {
  return (
    <TableRow>
      <TableCell>{pokemon.id}</TableCell>
      <TableCell>{pokemon.name}</TableCell>
      <TableCell>{pokemon.types.join(", ")}</TableCell>
      <TableCell>
        <Avatar src={pokemon.sprite} />
      </TableCell>
    </TableRow>
  );
};