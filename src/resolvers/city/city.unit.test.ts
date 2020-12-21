import { Connection, Repository } from 'typeorm'
import { getConnection } from '../../utils/connectionDb'
import CityResolver from './city.resolver'
import { City } from '../../entities/City'



let connection: Connection
beforeAll(async () => {
    connection = await getConnection('test')
})

afterAll(async () => {
    await connection.close()
})

describe('CityResolver', () => {
    let cityResolver: CityResolver;
    let cityRepository: Repository<City>;

    beforeAll(() => {
        cityRepository = connection.getRepository(City);
        cityResolver = new CityResolver(cityRepository);
    })

    describe('createCity', () => {
        it('check returned object city', async () => {
            const city = { name: 'city', phone: '89999999999' }
            cityRepository.create = jest.fn().mockReturnValue(city)
            cityRepository.save = jest.fn().mockReturnValue({ id: 1, ...city })

            const data = await cityResolver.createCity(city)

            expect(data.id).toBe(1)
            expect(data.name).toBe(city.name)
            expect(data.phone).toBe(city.phone)
        })
    })

})