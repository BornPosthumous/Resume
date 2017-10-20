var data = {
    contactInfo: {
        name: 'Jeffrey M. Rivera',
        title: 'Full Stack Web Developer',
        phone: '718-916-6033',
        email: 'jeffrey.m.rivera@gmail.com',
        location: 'Minneapolis, MN'
    },
    blurb : "I am a self taught Javascript developer with 3 years of experience creating web experiences. An MVC fanatic with REST and MEAN stack expertise, I feel as comfortable creating and styling user experiences as I do optimizing back end processes. I have production experience with cutting edge FRP frameworks and tooling including Angular 2, RXJS, and the Redux/Flux pattern. I am self motivated, excited, and able to learn new technologies.",
    education:[
        {
            school: "The University of Chicago",
            degree:"M.A. Humanities",
            graduationDate: "May 2013",
            honors: ["Full Scholarship"],
            courseWork: ["Philosophy of Language",
                         "Theories of Semantics"]
        },
        {
            school: "Macalester College",
            degree:"B.A. Philosophy",
            graduationDate: "May 2011",
            honors: ["Catherine Lealtad Scholarship"],
            courseWork: ["Fundamentals of Comp. Sci. (Python)",
                         "Object Oriented Programming (Java)",
                         "Software Design (Java)" ]
        }],
    skills: [
        {
            type: "Professional",
            skills: ["Javascript (ES5/6)",
                     "TypeScript",
                     "Node",
                     "Express",
                     "Angular 1x / 2x",
                     "NoSql (Mongo)",
                     "Gulp",
                     "Webpack",
                     "Ionic",
                     "HTML",
                     "CSS",
                     "SASS",
                     "Handlebars",
                     "Wordpress",
                     "Bash",
                     "GIT",
                     "JQuery",
                     "Jira / Agile",
                     "E Book Publication"
                    ]
        },
        {
            type: "Personal",
            skills: [ "React",
                      "Arduino",
                      "Python (Flask, RxPy)",
                      "Elm",
                      "Java",
                      "Lisp",
                      "SQL" ]
        }
    ],
    work: [
        {
            company: "PM Toolbelt",
            title: "Full Stack Developer",
            dates: { start : "February 2016", end: "Present"},
            description: "",
            skills: ["Worked on all aspects of a data intensive MEAN application within the context of a small startup",
                     "Helped solidify process and work flow as our team of 2 developers grew into an 8 person shop.",
                     "Refactored UI controllers into web components to improve event flow",
                     "Maintained our older Cordova/Angular 1 application, migrated this application to Angular2/Ionic",
                     "Improved synchronization between our application and our Quickbooks and Rent Manager integrations",
                     "Styled and restyled major portions of the application using SASS and Material Design.",
                     "Built Angular 2/ GraphQL / RxJs / Redux Prototypes for the next version of our application",
                     "As one of only two developers who did not recently graduate from a coding bootcamp, I regularly took initiative to improve our teams skills by hosting ‘lunch and learn’ talks on topics such as asynchronicity, web components, and the power of composition"
                    ],
            technologies: ["Typescript", "ES6", "Angular 1/2", "Ionic", "Git", "Express",
                           "MongoDB /Mongoose", "Bluebird", "Lodash", "Jira"," Moment.js",
                           "REST", "HTML", "CSS/SASS", "Handlebars","Webpack"," Gulp"]
        },
        {
            company: "The Froebe Group",
            title: "Digital Production Assistant and Web Developer",
            dates: { start: "September 2014", end: "June 2015"},
            description: "",
            skills: ["Designed and debugged pages for Aspen's websites",
                     "Proofread and edited top quality legal textbooks, corrected layout using inDesign",
                     "Attended meetings each week to discuss trends in digital publishing, as well as attended the 2015 International Digital Publishers Forum conference",
                     "Introduced the company to the idea of using Moodle technology in order to facilitate the distribution of book updates and course materials. Set up Moodle Server",
                     "Developed TFG's workflow for creating E-Books for Aspen's Textbooks"
                    ],
            technologies: ["Wordpress", "PHP", "Jquery", "Bootstrap", "Moodle", "EPUB 2.0", "Calibre",
                           "Sigil", "Adobe InDesign"]
        },
    ],
    other: {
        other:  "",
        interests: []
    }
};
exports.data = data;
