/**
 * Song Class
 * 
 * A class to manage songs with title, artist, play count, and rating.
 */

class Song {
  //write your code here
  #playCount
  #rating

  static playlist = []
  constructor(title, artist) {
    this.title = title
    this.artist = artist
    this.#playCount = 0
    this.#rating = 0
    Song.playlist.push(this)
  }
  get playCount() {
    return this.#playCount
  }
  get rating() {
    return this.#rating
  }
  play() {
    this.#playCount += 1
    console.log(`Now playing: ${this.title} by ${this.artist}`)
  }
  rate(stars){
    this.#rating = stars 
    console.log(`You rated ${this.title} ${stars} stars`)
  }
  isPopular() {
    if (this.#playCount >= 10) {
      return true
    } else {
      return false
    }
  }
  static getTotalSongs() {
    return Song.playlist.length
  }
  static findByTitle(title){
    return Song.playlist.find(song => song.title === title)
  }
}

// Export the Song class for testing
module.exports = { Song };
 
const song1 = new Song("Bohemian Rhapsody", "Queen");
const song2 = new Song("Stairway to Heaven", "Led Zeppelin");
const song3 = new Song("Hotel California", "Eagles");

// Access public properties
console.log(song1.title);  // "Bohemian Rhapsody"
console.log(song1.artist); // "Queen"

// Play a song (increases playCount)
song1.play();
// Output: "Now playing: Bohemian Rhapsody by Queen"

song1.play();
song1.play();
// Output: "Now playing: Bohemian Rhapsody by Queen" (each time)

// Rate a song
song1.rate(5);
// Output: "You rated Bohemian Rhapsody 5 stars"

song2.rate(4);
// Output: "You rated Stairway to Heaven 4 stars"

// Check if song is popular (10+ plays)
console.log(song1.isPopular()); // false (only played 3 times)

// Play more times to make it popular
for (let i = 0; i < 7; i++) {
  song1.play();
}
console.log(song1.isPopular()); // true (played 10+ times)

// Access the playlist (all created songs)
console.log(Song.playlist);
// [song1, song2, song3]

// Get total number of songs
console.log(Song.getTotalSongs()); // 3

// Find a song by title
const found = Song.findByTitle("Stairway to Heaven");
console.log(found);           // song2 object
console.log(found.artist);    // "Led Zeppelin"

// Search for non-existent song
const notFound = Song.findByTitle("Never Gonna Give You Up");
console.log(notFound); // undefined