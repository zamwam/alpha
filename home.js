// Auto-loaded MP3 sources from zamwam.github.io/home/music.html
fetch('sources.json')
  .then((response) => response.json())
  .then((data) => {
    if (Array.isArray(data.sources)) {
      window.mp3Sources = data.sources;
      console.log('Loaded', data.sources.length, 'MP3 sources');
    } else {
      console.error('sources.json does not contain a sources array');
    }
  })
  .catch((err) => console.error('Failed to load sources.json', err));