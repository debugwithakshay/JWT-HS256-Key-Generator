const crypto = require('crypto');

// Note: Don't forget to change key variables
// Generate secret passphrase using https://www.useapassphrase.com/
// Generate salt using https://www.random.org/passwords/?num=3&len=32&format=html&rnd=new

// -------------- Key variables -------------
const secret_1 = "purge dagger rants unwanted recreate cheek slimness livestock throwback haiku staple polo";
const secret_2 = "attention unsocial unwritten pessimism abnormal prepay equator mop crowbar vanquish frigidity padding";
const secret_3 = "pointed irritable doorstop musky finer valley down filler magnitude cheek pungent viselike";
const secret_4 = "slacking strep angled unmasking eastcoast overpass cassette stifle tradition undying sixteen obscure";

const separator = ".+.";
const separator_salt1 = "yTPC73XAjcJDypU7RGvhUap4aUBGYXpW";
const separator_salt2 = "tavvaL6Kd3dy87FPFaVzmyDkN4sJWwhH";
const separator_salt3 = "V9qjmyys2zkGaKJ9L3SP5kH7KM39R4VA";
const final_pepper = "your_custom_pepper";
// --------------------------------------------

const hash = (data) => crypto.createHash('sha256').update(data).digest('hex');

const hashed_secret_1 = hash(secret_1);
const hashed_secret_2 = hash(secret_2);
const hashed_secret_3 = hash(secret_3);
const hashed_secret_4 = hash(secret_4);
const hashed_separator_with_salt1 = hash(`${separator}${separator_salt1}`);
const hashed_separator_with_salt2 = hash(`${separator}${separator_salt2}`);
const hashed_separator_with_salt3 = hash(`${separator}${separator_salt3}`);
const final_pepper_hash = hash(final_pepper);

const original_key = `${hashed_secret_1}${hashed_separator_with_salt1}${hashed_secret_2}${hashed_separator_with_salt2}${hashed_secret_3}${hashed_separator_with_salt3}${hashed_secret_4}${final_pepper_hash}`;

// Shuffling original key
function shuffleString(key_to_shuffle) {
  // Convert string to array
  let arr = key_to_shuffle.split('');

  // Fisher-Yates shuffle algorithm
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Convert array back to string
  return arr.join('');
}

// Example usage
const originalString = original_key;
const shuffledString = shuffleString(originalString);
console.log(shuffledString);
