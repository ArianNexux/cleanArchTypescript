import { RankingScore } from "../../domain/entities";
import { LastRankingLoader } from "../../domain/usecases";
import { LoadLastRankingRepository } from "../contracts/load-last-ranking-repository";

export class LastRankingLoaderService implements LastRankingLoader{
    constructor(
        private readonly loadLastRakingRepository: LoadLastRankingRepository
    ){

    }
    async load(): Promise<RankingScore[]> {
        return this.loadLastRakingRepository.loadLastRanking();
    }
}