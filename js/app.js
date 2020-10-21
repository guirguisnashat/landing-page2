



// Set sections as active

function tosection1(){
    event.preventDefault();
    window.scrollTo(0,450);
    let section1title=document.getElementById("section1title");
    section1title.style.backgroundColor="black";
    let section1=document.getElementById("section1");
    section1.className="your-active-class";
    let section2title=document.getElementById("section2title");
    section2title.style.backgroundColor="transparent";
    let section2=document.getElementById("section2");
    section2.className="";
    let section3title=document.getElementById("section3title");
    section3title.style.backgroundColor="transparent";
    let section3=document.getElementById("section3");
    section3.className="";
    let section4title=document.getElementById("section4title");
    section4title.style.backgroundColor="transparent";
    let section4=document.getElementById("section4");
    section4.className="";
}

function tosection2(){
    event.preventDefault();
    window.scrollTo(0,1000);
    let section1title=document.getElementById("section1title");
    section1title.style.backgroundColor="transparent";
    let section1=document.getElementById("section1");
    section1.className="";
    let section2title=document.getElementById("section2title");
    section2title.style.backgroundColor="black";
    let section2=document.getElementById("section2");
    section2.className="your-active-class";
    let section3title=document.getElementById("section3title");
    section3title.style.backgroundColor="transparent";
    let section3=document.getElementById("section3");
    section3.className="";
    let section4title=document.getElementById("section4title");
    section4title.style.backgroundColor="transparent";
    let section4=document.getElementById("section4");
    section4.className="";
}

function tosection3(){
    event.preventDefault();
    window.scrollTo(0,1600);
    let section1title=document.getElementById("section1title");
    section1title.style.backgroundColor="transparent";
    let section1=document.getElementById("section1");
    section1.className="";
    let section2title=document.getElementById("section2title");
    section2title.style.backgroundColor="transparent";
    let section2=document.getElementById("section2");
    section2.className="";
    let section3title=document.getElementById("section3title");
    section3title.style.backgroundColor="black";
    let section3=document.getElementById("section3");
    section3.className="your-active-class";
    let section4title=document.getElementById("section4title");
    section4title.style.backgroundColor="transparent";
    let section4=document.getElementById("section4");
    section4.className="";
}

function tosection4(){
    event.preventDefault();
    window.scrollTo(0,2150);
    let section1title=document.getElementById("section1title");
    section1title.style.backgroundColor="transparent";
    let section1=document.getElementById("section1");
    section1.className="";
    let section2title=document.getElementById("section2title");
    section2title.style.backgroundColor="transparent";
    let section2=document.getElementById("section2");
    section2.className="";
    let section3title=document.getElementById("section3title");
    section3title.style.backgroundColor="transparent";
    let section3=document.getElementById("section3");
    section3.className="";
    let section4title=document.getElementById("section4title");
    section4title.style.backgroundColor="black";
    let section4=document.getElementById("section4");
    section4.className="your-active-class";
}



// Building the nav bar

let navlist=document.getElementById('navbar__list');
const html='<a onclick="tosection1()" href="#section1"><li id="section1title">Section 1</li></a><a onclick="tosection2()" href="#section2"><li id="section2title">Section 2</li></a><a onclick="tosection3()" href="#section3"><li id="section3title">Section 3</li></a><a onclick="tosection4()" href="#section4"><li id="section4title">Section 4</li></a>';
navlist.insertAdjacentHTML("afterbegin",html);



