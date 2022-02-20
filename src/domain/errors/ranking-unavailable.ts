export class RankingUnavailable extends Error{
    constructor(){
        super("Ranking unavailable")
        this.name = "Ranking unavailable"
    }
}