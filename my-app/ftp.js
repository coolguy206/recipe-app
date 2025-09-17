var Client = require('ftp');
var fs = require('fs');
const path = require('path');
const util = require('util');
const writeFileContent = util.promisify(fs.writeFile);
const mkDir = util.promisify(fs.mkdir);
require('dotenv').config()


//? NEEDS ENDING SLASH
var baseURL = `/public_html/`;
var category = `apps/recipe-finder/react/static/js/`;

//? EXCEPT THIS ONE
var url = `${baseURL}${category}`

//? NEEDS ENDING SLASH
//? get current directory
var readFilePath = process.cwd();
readFilePath = `${readFilePath}/build/static/js/`;

var fileName = `index.html`;

const fixedPath = path.normalize(`${readFilePath}${fileName}`);
// console.log(fixedPath);

//? READ FILES

// fs.readdir(`${readFilePath}`, (err, files) => {
//   console.log(files);

//? IF SUBFOLDERS

// files.map((folder, i) => {
// console.log(folder);

// if (folder !== undefined) {

//   fs.readdir(`${readFilePath}${folder}`, (err, file) => {

//     if (file !== undefined) {
//       // console.log(file);

//       file.map((content, j) => {

//         fs.readFile(`${readFilePath}${folder}/${content}`, `utf8`, function (err, data) {
//           // console.log(data);
//         });

//       });

//     }

//   });

// }

// });


// });



// console.log(url)
// console.log(process.env.FTP_HOST, process.env.FTP_USER, process.env.FTP_PASSWORD);

var c = new Client();
c.on('ready', function () {

  //?UPLOAD SINGLE FILE TO DIRECTORY
  /*
    c.put(`${fixedPath}`, `${url}${fileName}`, (err) => {
      if (err) throw err;
      console.log(`successfully uploaded file: ${fileName}`);
      c.end();
    });
  */

  //? UPLOAD FILES TO DIRECTORY

  fs.readdir(`${readFilePath}`, (err, files) => {
    if (err) throw err;
    // console.log("\nCurrent directory filenames:");
    files.forEach(file => {
      // console.log(`${readFilePath}${file}`);
      // console.log(`${url}${file}`)

      //? upload the file
      c.put(`${readFilePath}${file}`, `${url}${file}`, (err) => {
        if (err) throw err;
        console.log(`successfully uploaded file: ${file}`);
        c.end();
      });

    });
  })


  //?MAKE DIRECTORY THEN UPLOAD FILES AND MAKE HTML FILES
  /*
    c.mkdir(url, true, (err) => {
      if (err) throw err;
      console.log(`successfully made dir: ${url}`);
  
      //? read the files on local machine
      fs.readdir(`${readFilePath}`, (err, files) => {
        if (err) throw err;
        // console.log("\nCurrent directory filenames:");
        // console.log(files);

        files.map((file, i) => {
          // console.log(`${readFilePath}${file}`);
          // console.log(`${url}${file}`)
          // console.log(file);
  
          //? upload the file
          c.put(`${readFilePath}${file}`, `${url}${file}`, (err) => {
            if (err) throw err;
            console.log(`successfully uploaded file: ${file}`);
            c.end();
          });
  
        });

      })

      // c.end();

    });
  */

  //?GET LIST OF FILES THEN DELETE FILES IN DIRECTORY
  /*
  c.list(url, function(err, list) {
    if (err) throw err;

    list.map((val, i) => {
      if (val.type == '-') {
        // console.log(val);

        //? DELETE FILES
        c.delete(`${url}${val.name}`, function(err) {
          if (err) throw err;
          console.log(`successfully deleted file: ${url}${val.name}`);
          c.end();
        });
      }
    });

    // console.dir(list);
    // c.end();

  });
  */

  //?LIST DIRECTORIES
  /*
    c.list(url, function (err, list) {
      if (err) throw err;
  
      list.map((val, i) => {
        // if (val.type == 'd') {
        console.log(val);
        // }
      })
  
      // console.dir(list);
      c.end();
    });
  */

});

//?CONNECT FTP

c.connect({
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD
});