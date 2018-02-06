class Github {
  constructor() {
    this.client_id = '431ab567b4e52ee7c2e8';
    this.client_secret = '3f19cf501fe9a50828d6528548dd392023e32deb';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}