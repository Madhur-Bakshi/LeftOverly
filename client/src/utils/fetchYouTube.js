export async function fetchYouTubeVideo(query) {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const searchQuery = encodeURIComponent(`${query} recipe`);
  const maxResults = 1;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${searchQuery}&type=video&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const videoId = data.items[0].id.videoId;
      return `https://www.youtube.com/watch?v=${videoId}`;
    }

    return null;
  } catch (error) {
    console.error("Error fetching YouTube video:", error);
    return null;
  }
}
