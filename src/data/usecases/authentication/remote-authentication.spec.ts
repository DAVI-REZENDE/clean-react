import { HttpPostClientSpy } from '../../test/mock-htp-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const httpClient = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpClient)
    await sut.auth()
    expect(httpClient.url).toBe(url)
  })
})
