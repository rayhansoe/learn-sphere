import { Team } from "@/types"

export const getOurTeam = async (): Promise<Team> => {
  const res = await fetch('https://randomuser.me/api/?results=10')
  const data = await res.json()

  return data
}