// Write your code here:

const convertToBaby = (arrayStr) => {
  const newArray = [];
  for (let i=0; i<arrayStr.length; i++){
    //return 'baby ' + arrayStr[i];
     newArray.push(`baby ${arrayStr[i]}`)
    }
    return newArray
}

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

