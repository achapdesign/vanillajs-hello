let pronoun = ["the", "our", "his", "her", "your", "their"];
let adj = ["great", "big", "small"];
let noun = ["cat", "dog", "donkey", "horse"];
let extension = [
  ".com",
  ".net",
  ".us",
  ".pt",
  ".es",
  "de",
  ".io",
  ".fr",
  ".cz",
];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + extension[l]);
      }
    }
  }
}
