// import { YoutubeTranscript } from 'youtube-transcript';

// // Try a different video ID that you know has captions
// const videoId = 'dQw4w9WgXcQ';  // This is just an example, replace with a video you know has captions

// YoutubeTranscript.fetchTranscript(videoId)
//   .then(transcript => {
//     console.log('Transcript:', transcript);
//   })
//   .catch(error => {
//     if (error.message.includes('Transcript is disabled')) {
//       console.error('Error: Transcript is not available for this video. Please try another video.');
//     } else {
//       console.error('An unexpected error occurred:', error.message);
//     }
//   });
// const youtubedl = require('youtube-dl-exec');
// const path = require('path');

// const ytDlpPath = path.join(__dirname, 'node_modules', 'youtube-dl-exec', 'bin', 'yt-dlp.exe');

// youtubedl('https://www.youtube.com/watch?v=YSH4KZP9pPM', {
//     extractAudio: true,
//     audioFormat: 'mp3',
//     output: 'audio.mp3',
//     youtubeDlPath: ytDlpPath // Use the correct option to specify the executable path
// }).then(output => {
//     console.log('Download done!', output);
// }).catch(err => {
//     console.error('Error:', err);
// });
// const youtubedl = require('youtube-dl-exec')

// youtubedl('https://www.youtube.com/watch?v=6xKWiCMKKJg', {
//   dumpSingleJson: true,
//   noCheckCertificates: true,
//   noWarnings: true,
//   preferFreeFormats: true,
//   addHeader: ['referer:youtube.com', 'user-agent:googlebot']
// }).then(output => console.log(output))

// const ytdl = require('ytdl-core');

// ytdl.getInfo('https://www.youtube.com/watch?v=6xKWiCMKKJg')
//   .then(info => {
//     console.log(info);
//   })
//   .catch(err => {
//     console.error('Error:', err);
//   });
// const ytdl = require('ytdl-core');
// const fs = require('fs');

// const videoURL = 'https://www.youtube.com/watch?v=6xKWiCMKKJg';
// const outputFileName = 'video.mp4';

// // Create a readable stream and pipe it to a writable stream
// ytdl(videoURL)
//   .pipe(fs.createWriteStream(outputFileName))
//   .on('finish', () => {
//     console.log('Download completed.');
//   })
//   .on('error', (err) => {
//     console.error('Error:', err);
//   });
const youtubedl = require('youtube-dl-exec');
const path = require('path');

const videoUrl = 'https://www.youtube.com/watch?v=6xKWiCMKKJg';

async function downloadAudio(youtubeUrl) {
  const outputFile = path.resolve(__dirname, 'audio.mp4'); // Save audio in the same directory

  try {
    await youtubedl(youtubeUrl, {
      output: outputFile,
      format: 'mp4',
    });
    console.log('Download complete:', outputFile);
    return outputFile; // Return the path to the downloaded audio file
  } catch (error) {
    console.error('Error downloading audio:', error);
    throw error;
  }
}

downloadAudio(videoUrl);
