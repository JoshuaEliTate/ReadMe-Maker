const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message:"What is the Title of your Project",
            name:'title',
        },
        {
            type: 'input',
            message:"Write a brief description of your project",
            name:'description',
        },
        {
            type: 'input',
            message:"Make a Table of Contents",
            name:'tableOfCont',
        },
        {
            type: 'input',
            message:"Explain how to install your project",
            name:'installation',
        },
        {
            type: 'input',
            message:"Explain the usage",
            name:'usage',
        },
        {
        type:'list',
        message: "Choose your License",
        name:'license',
        choices:["MIT License", "Apache License 2.0", "GNU General Public License v3.0", "None"]
        },
        {
            type: 'input',
            message:"Contributing",
            name:'contributing',
        },
        {
            type: 'input',
            message:"Tests",
            name:'tests',
        },
        {
            type: 'input',
            message:"What is your Github Username?",
            name:'username',
        },
        {
            type: 'input',
            message:"What is your Email?",
            name:'email',
        },
    ])
    .then((answers)=>{
        // JSON.stringify(answers);
        console.log(answers);
        writeAnswersToFile(answers);
    })

    const writeAnswersToFile= (userAnswers)=>{
        const initialData = `\n# Title \n${userAnswers.title} \n\n## Description \n${userAnswers.description} \n\n## Table of Contents \n${userAnswers.tableOfCont} \n\n## Installation \n${userAnswers.installation} \n\n## Usage \n${userAnswers.usage} \n\n## License \n${userAnswers.license} \n\n## Contributing \n${userAnswers.contributing} \n\n## Tests \n${userAnswers.tests} \n\n## Questions \nGitHub Account Page: https://github.com/${userAnswers.username} \nEmail: ${userAnswers.email}`
        fs.appendFile(
            'userAnswers.md',
             initialData,
             (error)=> error ? console.error(error) : console.log('Data-Saved')
             )




    // const writeAnswersToFile= (userAnswers)=>{
    //     const initialData = `## First Name \n${userAnswers.name} \n\n# Last Name \n${userAnswers.lastName} \n\n# Favorite Language \n${userAnswers.FavoriteLang} \n`
    //     fs.appendFile(
    //         'userAnswers.md',
    //          initialData,
    //          (error)=> error ? console.error(error) : console.log('Data-Saved')
    //          )
    //    for(let answers in userAnswers){
    //     console.log(userAnswers[answers])
    //     fs.appendFile('userAnswers.txt',
    //      `\nvalue = ${userAnswers[answers]}`),
    //     (error)=>{ error ? console.error(error) : console.log('Data-Saved')
    //    }
    //    }
    }