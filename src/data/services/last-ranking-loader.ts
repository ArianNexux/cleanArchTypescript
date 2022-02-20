import { RankingScore } from "../../domain/entities";
import { RankingUnavailable } from "../../domain/errors/ranking-unavailable";
import { LastRankingLoader } from "../../domain/usecases";
import { LoadLastRankingRepository } from "../contracts/load-last-ranking-repository";

export class LastRankingLoaderService implements LastRankingLoader{
    constructor(
        private readonly loadLastRakingRepository: LoadLastRankingRepository
    ){

    }
    async load(): Promise<RankingScore[]> {
        if(new Date().getHours() > 21){
            throw new RankingUnavailable();
        }

        return this.loadLastRakingRepository.loadLastRanking();
    }
}