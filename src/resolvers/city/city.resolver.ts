import { City } from "../../entities/City";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions/decorators/InjectRepository";
import { CityInput } from "./types/city.input";


@Resolver(of => City)
export default class CityResolver {
  constructor(@InjectRepository(City) private readonly cityRepository: Repository<City>) { }

  @Query(returns => [City])
  async getCityList() {
    const cityes = await this.cityRepository.find({ relations: ['stations'] })

    return cityes
  }

  @Query(returns => City)
  async getCity(@Arg("cityId") cityId: number) {
    return this.cityRepository.findOne(cityId)
  }

  @Mutation(returns => City)
  async createCity(
    @Arg("city") cityInput: CityInput
  ) {
    const city = this.cityRepository.create(cityInput)

    return this.cityRepository.save(city)
  }

  @Mutation(returns => Boolean)
  async removeCity(
    @Arg("cityId") cityId: number
  ) {
    const city = await this.cityRepository.findOneOrFail(cityId)
    await this.cityRepository.remove(city)

    return true
  }

  @Mutation(returns => City)
  async updateCity(
    @Arg("cityId") cityId: number,
    @Arg("city") cityInput: CityInput
  ) {
    await this.cityRepository.findOneOrFail(cityId)
    await this.cityRepository.update(cityId, cityInput)

    return this.cityRepository.findOneOrFail(cityId)
  }
}