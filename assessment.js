/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nfts=[]; //empty array to store metadata

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (a,b,c) {
    //this is object named metadata
    const metadata={
        "name" : a,
        "age":b,
        "eye color": c,
    }
    nfts.push(metadata);
    //metadata object is added to the nfts array using the push method.
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {  
    //The listNFTs function uses a for loop to iterate over the nfts array, printing each metadata object to the console using console.log().
    for(i=0;i<nfts.length;i++)
    {
        console.log(nfts[i]);
    }
}

// print the total number of NFTs we have minted to the console
//
function getTotalSupply() {
    console.log(nfts.length);
}

//function call syntax
//function-name(<parameters>);



// call your functions below this line

//These lines call the functions to demonstrate how they work. 
//The mintNFT function is called with three values, and an NFT metadata object is created and added to the nfts array. 
mintNFT("ABC",18,"black");

//listNFTs is called to print the metadata of all NFTs in the array to the console,
listNFTs ();

//getTotalSupply is called to print the total number of NFTs in the array
getTotalSupply();
