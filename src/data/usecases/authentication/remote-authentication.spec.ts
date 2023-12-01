interface HttpPostClient {
  post(url: string): Promise<void>
}

class RemoteAuthentication {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(): Promise<void> {
    return Promise.resolve()
  }
}

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const httpClient = new HttpPostClient()
    const sut = new RemoteAuthentication(url, httpClient)
    await sut.auth()
    expect(httpClient.url).toBe(url)
  })
})
