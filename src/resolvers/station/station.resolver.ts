import { Station } from "../../entities/Station";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { StationInput } from "./types/station.input";


@Resolver(of => Station)
export default class StationResolver {
    constructor(@InjectRepository(Station) private readonly stationRepository: Repository<Station>) { }

    @Query(returns => [Station])
    async getStationList() {
      const stations = await this.stationRepository.find({ relations: ['city'] })

      return stations
    }

    @Query(returns => Station)
    async getStation(@Arg("stationId") stationId: number) {
      return this.stationRepository.findOne(stationId, { relations: ['city'] })
    }

    @Mutation(returns => Station)
    async createStation(
      @Arg("station") stationInput: StationInput
    ) {
      const station = this.stationRepository.create(stationInput)

      return this.stationRepository.save(station)
    }

    @Mutation(returns => Boolean)
    async removeStation(
      @Arg("stationId") stationId: number
    ) {
      const station = await this.stationRepository.findOneOrFail(stationId)
      await this.stationRepository.remove(station)

      return true
    }

    @Mutation(returns => Station)
    async updateStation(
      @Arg("stationId") stationId: number,
      @Arg("station") stationInput: StationInput
    ) {
      await this.stationRepository.findOneOrFail(stationId)
      await this.stationRepository.update(stationId, stationInput)

      return this.stationRepository.findOneOrFail(stationId)
    }
}