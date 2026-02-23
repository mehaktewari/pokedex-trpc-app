import { MenuItem, Select } from "@mui/material";

type Props = {
  selectedType: string;
  onSelectType: (type: string) => void;
};

export const PokemonTypeSelection = ({
  selectedType,
  onSelectType,
}: Props) => {
  return (
    <Select
      value={selectedType}
      onChange={(e) => onSelectType(e.target.value)}
      sx={{ marginTop: 2, minWidth: 200 }}
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="grass">Grass</MenuItem>
      <MenuItem value="fire">Fire</MenuItem>
      <MenuItem value="water">Water</MenuItem>
      <MenuItem value="poison">Poison</MenuItem>
    </Select>
  );
};