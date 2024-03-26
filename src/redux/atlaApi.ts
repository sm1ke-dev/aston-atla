import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ICard {
  _id: string;
  name: string;
  photoUrl: string;
  gender?: string;
  hair?: string;
  profession?: string;
  position?: string;
}

export const atlaApi = createApi({
  reducerPath: "atlaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://last-airbender-api.fly.dev/api/v1/characters",
  }),
  endpoints: (build) => ({
    getAllCharacters: build.query<ICard[], void>({
      query: () => "/",
      transformResponse: (response: ICard[]) =>
        response.map((card) => {
          return {
            _id: card._id,
            name: card.name,
            photoUrl: card.photoUrl,
          };
        }),
    }),
    getCharacterById: build.query<ICard, string>({
      query: (id) => `/${id}`,
    }),
    searchCharacters: build.query<ICard[], string>({
      query: (name) => `?name=${name}`,
      transformResponse: (response: ICard[]) =>
        response.map((card) => {
          return {
            _id: card._id,
            name: card.name,
            photoUrl: card.photoUrl,
          };
        }),
    }),
  }),
});

export const {
  useGetAllCharactersQuery,
  useGetCharacterByIdQuery,
  useSearchCharactersQuery,
} = atlaApi;
