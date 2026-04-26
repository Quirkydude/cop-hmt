// src/lib/youtube.js
const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

export async function checkLiveStream() {
  try {
    // First, check if there's an active live stream
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      return {
        isLive: true,
        videoId: data.items[0].id.videoId,
        title: data.items[0].snippet.title,
        thumbnail: data.items[0].snippet.thumbnails.high.url,
        publishedAt: data.items[0].snippet.publishedAt,
      };
    }
    
    // If no live stream, check for upcoming premieres
    const upcomingResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=upcoming&type=video&key=${YOUTUBE_API_KEY}`
    );
    const upcomingData = await upcomingResponse.json();
    
    return {
      isLive: false,
      upcomingStream: upcomingData.items?.[0] || null,
    };
  } catch (error) {
    console.error('YouTube API error:', error);
    return {
      isLive: false,
      error: 'Failed to check stream status',
    };
  }
}