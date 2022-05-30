const fs = require("fs");
const { resolve } = require("path");

const superagent = require("superagent");

const readPro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("Could not read the file");
      resolve(data);
    });
  });
};

const writePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("Couldnt write File");
      resolve("File read");
    });
  });
};

readPro(`${__dirname}/dog-text.txt`)
  .then((data) => {
    console.log(`Breed Name : ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writePro(`${__dirname}/dog-img.txt`, res.body.message);
  })
  .then(() => {
    console.log("File Saved");
  })
  .catch((err) => {
    console.log(err.message);
  });
