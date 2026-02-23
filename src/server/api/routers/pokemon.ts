import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const pokemonRouter = createTRPCRouter({

  getPokemonByName: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return ctx.db.pokemon.findFirst({
        where: {
          name: {
            equals: input,
            mode: "insensitive",
          },
        },
      });
    }),

  getMultiplePokemon: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ ctx, input }) => {
      return ctx.db.pokemon.findMany({
        where: {
          name: {
            in: input,
          },
        },
      });
    }),

  getPokemonByType: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return ctx.db.pokemon.findMany({
        where: {
          types: {
            contains: input,
          },
        },
      });
    }),
});