const searchFunction = (word, array) => {
  let songArray = []
  for (let name in array) {
    let current = array[name]
    if(current.name.includes(word)) {
      songArray.push(current)
   }
  }
  return songArray
}

module.exports = searchFunction;
