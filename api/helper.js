

const searchFunction = (word, array) => {
  for (let name in array) {
    let current = array[name]
    if(current.name.includes(word)) {
      return current
   }
  }
}
