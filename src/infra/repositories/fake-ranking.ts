import { LoadLastRankingRepository } from "../../data/contracts/load-last-ranking-repository";
import { RankingScoreModel } from "../../data/contracts/models/ranking-score";
import { ranking } from "../data-sources";

export class FakeRankingRepository implements LoadLastRankingRepository{
    async loadLastRanking() : Promise<RankingScoreModel[]> {
        return ranking.map( (item) => ({
            player: item.user,
            score: item.score,
            matchDate: new Date(item.date),
            heroes: item.heroes
        }))
    }
}