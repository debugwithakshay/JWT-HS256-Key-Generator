const md5 = require("md5");

//Note: don't forget to change key variables
//generate secret passphrase using https://www.useapassphrase.com/
//generate salt using https://www.random.org/passwords/?num=3&len=32&format=html&rnd=new

//key variables
const secret_1 =
  "purge dagger rants unwanted recreate cheek slimness livestock throwback haiku staple polo";
const secret_2 =
  "attention unsocial unwritten pessimism abnormal prepay equator mop crowbar vanquish frigidity padding";
const secret_3 =
  "pointed irritable doorstop musky finer valley down filler magnitude cheek pungent viselike";
const secret_4 =
  "slacking strep angled unmasking eastcoast overpass cassette stifle tradition undying sixteen obscure";

const seperator = ".+.";
const seprator_salt1 = "yTPC73XAjcJDypU7RGvhUap4aUBGYXpW";
const seprator_salt2 = "tavvaL6Kd3dy87FPFaVzmyDkN4sJWwhH";
const seprator_salt3 = "V9qjmyys2zkGaKJ9L3SP5kH7KM39R4VA";

const md5_secret_1 = md5(secret_1);
const md5_secret_2 = md5(secret_2);
const md5_secret_3 = md5(secret_3);
const md5_secret_4 = md5(secret_4);
const md5_seprator_with_salt1 = md5(`${seperator}${seprator_salt1}`);
const md5_seprator_with_salt2 = md5(`${seperator}${seprator_salt2}`);
const md5_seprator_with_salt3 = md5(`${seperator}${seprator_salt3}`);

const original_key = `${md5_secret_1}${md5_seprator_with_salt1}${md5_secret_2}${md5_seprator_with_salt2}${md5_secret_3}${md5_seprator_with_salt3}${md5_secret_4}`;

//shuffling original key
function shuffleString(key_to_shuffle) {
  // Convert string to array
  let arr = key_to_shuffle.split("");

  // Fisher-Yates shuffle algorithm
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Convert array back to string
  return arr.join("");
}

// Example usage
const originalString = original_key;
const shuffledString = shuffleString(originalString);
console.log(shuffledString);
