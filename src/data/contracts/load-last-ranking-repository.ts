import { RankingScoreModel } from "./models/ranking-score";

export interface LoadLastRankingRepository {
    loadLastRanking: () => RankingScoreModel[]
}