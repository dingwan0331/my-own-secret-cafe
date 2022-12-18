import { createClient } from "redis";

export default class Redis {
  constructor(url) {
    return (this.client = createClient({
      url: url,
      legacyMode: true,
    }));
  }

  connect = async () => {
    await this.client.connect();
  };

  set = async (key, value, expire = 3600) => {
    await this.client.set(key, value, "EX", expire);
  };

  get = async (key) => {
    return await this.client.get(key);
  };
}
