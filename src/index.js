// import of less required to compile into main.js

import "./less/style.less";
import mainbg from "./assets/mainbg.jpg";
import nav from './nav.js';

let homePage = () => {
    // attach everything here
    let contentDiv = document.getElementById("content");

    let header = document.createElement('header');
    let name = document.createElement('h1');
    name.innerText = "Pizza Restaurant qqq";
    console.log("hp");
    header.append(name);


    contentDiv.append(header);
}
homePage();

console.log('test');