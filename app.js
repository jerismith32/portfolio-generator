const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});


// const profileDataArgs = process.argv.slice(2, process.argv.length);

// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];

// const [firstName, github] = profileDataArgs;
// console.log(firstName, github);
// console.log(generatePage(firstName, github));

// // const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// // console.log(generatePage('Jane', 'janehub'));

// const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
// };

// console.log(generatePage(userName, github));


//LESSON 1 COMPLETED CODE
// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//       console.log(profileItem)
//     });
//   };

// printProfileData(profileDataArgs);