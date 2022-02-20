export type RankingScore = {
    player: Player
    score: number
    heroes: Hero[],
    matchDate: Date
}

type Player = {
    name: string
    country: string
}

type Hero = {
    name: string
    level: number
}