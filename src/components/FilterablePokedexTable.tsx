import { useState } from "react";
import { api } from "../utils/api";
import { PokemonTypeSelection } from "./PokemonTypeSelection";
import { PokedexTable } from "./PokedexTable";
import { CircularProgress } from "@mui/material";

export const FilterablePokedexTable = () => {
  const [selectedType, setSelectedType] = useState("");

  const { data, isLoading } =
    api.pokemon.getPokemonByType.useQuery(selectedType, {
      enabled: !!selectedType,
    });

  return (
    <div>
      <PokemonTypeSelection
        selectedType={selectedType}
        onSelectType={setSelectedType}
      />

      {isLoading && <CircularProgress />}

      {data && <PokedexTable pokemonList={data} />}
    </div>
  );
};