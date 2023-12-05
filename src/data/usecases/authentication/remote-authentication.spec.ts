import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClient } from '@/data/protocols/http/http-post-client'

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'any_url'
    const httpClient = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpClient)
    await sut.auth()
    expect(httpClient.url).toBe(url)
  })
})
