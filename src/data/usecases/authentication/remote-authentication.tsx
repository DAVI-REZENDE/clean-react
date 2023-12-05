import { HttpPostClient } from '@/data/protocols/http/http-post-client'

export class RemoteAuthentication {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(): Promise<void> {
    return Promise.resolve()
  }
}
