// create a variable to hold your NFT's
const nftMarvel = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, description, value) {
  const nft = {
    "name": name,
    "description": description,
    "value": value
  };
  nftMarvel.push(nft);
  console.log("Nft "+name+" added");
  console.log("\n");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for (let i = 0; i < nftMarvel.length; i++) {
    console.log("Name: " + nftMarvel[i].name);
    console.log("Description: " + nftMarvel[i].description);
    console.log("value: " + nftMarvel[i].value);
    console.log("\n");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total NFTs: " + nftMarvel.length);
}

// call your functions below this line
mintNFT("Mjölnir", "This is hammer of thor given by his father odin.",2500 );
mintNFT("Shield", "This is protective shield made of vibranium of captain america.", 1533);
mintNFT("Reactor", "This is the heart of iron man which can be replaced.",1956 );
mintNFT("Edith","This is smart eye wearables of tony stark",3654)

listNFTs();

getTotalSupply();
