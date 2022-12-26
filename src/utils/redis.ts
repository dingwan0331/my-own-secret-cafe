import { createClient } from "redis";

export default class Redis {
  readonly client;

  constructor(url: string) {
    this.client = createClient({
      url: url,
      legacyMode: true,
    });
  }

  connect = async () => {
    await this.client.connect();
  };

  set = async (key: string, value: JSON, expire = 3600) => {
    await this.client.v4.set(key, value, "EX", expire);
  };

  get = async (key: string): Promise<string> => {
    return await this.client.v4.get(key);
  };
}
