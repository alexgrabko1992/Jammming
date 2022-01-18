let accessToken;

const clientId = "71c025d30d5d4c2483822963729484d2";
const redirectURI = "http://localhost:3000/";

let Spotify = {
  getAccessToken() {
    accessToken = window.location.href.match(/access_token=([^&]*)/);
    const expiresIn = window.location.href.match(/expires_in=([^&]*)/);
    if (
      typeof userAccessToken !== "undefined" &&
      typeof expiresIn !== "undefined"
    ) {
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
    return accessToken;
  },
  userSearch(term) {
    const response = fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      {
        headers: { Authorization: `Bearer ${this.getAccessToken()}` },
      }
    );
    const jsonResponse = response.json();
    if (typeof jsonResponse !== "undefined") {
      return jsonResponse.map((e) => ({
        id: e.id,
        name: e.name,
        artist: e.artists[0].name,
        album: e.album.name,
        uri: e.uri,
      }));
    } else {
      return [];
    }
  },
};

export default Spotify;
