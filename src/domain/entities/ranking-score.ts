export type RankingScore = {
    player: Player
    score: number
    heroes: Hero[]
}

type Player = {
    name: string
    country: string
}

type Hero = {
    name: string
    level: number
}