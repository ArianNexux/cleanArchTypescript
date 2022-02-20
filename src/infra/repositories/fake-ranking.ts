import { LoadLastRankingRepository } from "../../data/contracts/load-last-ranking-repository";
import { RankingScoreModel } from "../../data/contracts/models/ranking-score";

export class FakeRankingRepository implements LoadLastRankingRepository{
    async loadLastRanking() : Promise<RankingScoreModel[]>{
        return
    }
}