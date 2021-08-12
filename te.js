var update = function(path){
const data = require(path);

const fs = require("fs")
fs.writeFile(path, JSON.stringify(data, null, 4), (err) => {
  if (err) throw err;

  //done.
});}
module.exports = update