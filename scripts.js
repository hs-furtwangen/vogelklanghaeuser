const setup = [
  {
    stream: 'http://locus.creacast.com:9001/vogelklang_global_forest.ogg',
    volume: 1,
    image: 'images/image-1.jpg',
    descr: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  }, {
    stream: 'http://locus.creacast.com:9001/Locusonus-soundcamp21-space-and-limits.mp3',
    volume: 1,
    image: 'images/image-2.jpg',
    descr: `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  }, {
    stream: 'http://locus.creacast.com:9001/acra_wave_farm.mp3',
    volume: 0.05,
    image: 'images/image-3.jpg',
    descr: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  }, {
    stream: 'http://locus.creacast.com:9001/prague_entrance_gallery.mp3',
    volume: 1,
    image: 'images/image-4.jpg',
    descr: `Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  }, {
    stream: 'http://locus.creacast.com:9001/rethymno_soundwalking.ogg',
    volume: 1,
    image: 'images/image-5.jpg',
    descr: `Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  }, {
    stream: 'http://locus.creacast.com:9001/reading_earley_chorus.mp3',
    volume: 1,
    image: 'images/image-6.jpg',
    descr: `Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  }
];

const streams = [];

class Stream {
  constructor(container, setup) {
    this.container = container;
    this.streamURL = setup.stream;
    this.imageURL = setup.image;
    this.descr = setup.descr;
    this.active = false;

    // image element
    const image = document.createElement('img');
    image.src = setup.image;
    image.classList.add('loading');

    document.body.appendChild(image);

    // audio element
    const audio = new Audio(setup.stream);
    audio.preload = "auto";
    audio.volume = setup.volume;

    audio.addEventListener('loadeddata', () => {
      image.classList.remove('loading');

      image.addEventListener('click', () => {
        this.active = !this.active;

        if (this.active) {
          image.classList.add('active');
          audio.play();
        } else {
          image.classList.remove('active');
          audio.pause();
        }    
      });
    });
  }
}

for (let item of setup) {
  const stream = new Stream(document.body, item);
  streams.push(stream);
}
