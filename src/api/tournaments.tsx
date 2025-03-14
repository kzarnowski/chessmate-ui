import { useQuery } from "@tanstack/react-query";

const BASE_URL = 'http://localhost:3000/'

export function useGetTournaments() {
  return useQuery({
    queryKey: ['tournaments'],
    queryFn: () => fetch(BASE_URL + 'tournaments')
  })
}