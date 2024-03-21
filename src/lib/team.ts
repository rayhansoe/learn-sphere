import { Team } from "@/types/types"

export const getOurTeam = async (id=10): Promise<Team> => {
  const res = await fetch(`https://randomuser.me/api/?results=${id}`)
  const data = await res.json()

  return data
}