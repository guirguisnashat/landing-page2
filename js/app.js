/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let globalvalue;
const sectionsize=500;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click






// Set sections as active



window.addEventListener('scroll',() =>{
    const scrolled=window.scrollY;
    let sectionnumber=scrolled/sectionsize;
    if(scrolled>=450){
        let section=document.getElementById("section1");
        section.className="your-active-class";
    }else if(scrolled<450){
        let section=document.getElementById("section1");
        section.className="";
    }else if(scrolled>=1000){
        let section=document.getElementById("section1");
        section.className="";
    }

    let sections=document.getElementsByTagName("section");
    var i=0;
    
    for(i=0;i<sections.length;i++){
        sections[i].className="";
    }
    //console.log(Math.floor(sectionnumber));
    sections[Math.floor(sectionnumber)-1].className="your-active-class";

});








function editdesc(){
    event.preventDefault();
    var area=document.getElementById(globalvalue);
    let form=document.getElementById("form");
    let para=document.createElement("p");
    para.setAttribute("id",globalvalue);
    para.textContent=area.value;
    form.insertAdjacentElement("beforebegin",para)
    form.remove();
    const select=document.getElementById("selectchoice");
    select.options[0].selected=true;

}


function makearea(){
    const select=document.getElementById("selectchoice");
    var value=select.options[select.selectedIndex].value;
    var desctobechanged=document.getElementById(value);
    const html=`<form action="" id="form"><textarea name="" id="${value}" cols="50" rows="15" style="font-size: 25px;"></textarea><br><input type="submit" value="Submit" onclick="editdesc()" style="padding: 20px;padding-left: 30px;padding-right: 30px;margin-top: 10px;font-size: 20px;background-color: transparent;color: white;"></form>`
    desctobechanged.insertAdjacentHTML('afterend',html);
    globalvalue=value;
    desctobechanged.remove();
    select.options[0].selected=true;
}





function edittitle(){
    var retVal = prompt("Enter the new title : ","\n\n");
    while(retVal == null||retVal.length==0){
        retVal = prompt("You have to enter something : ","");
    }
    const select=document.getElementById("selectchoice");
    var value=select.options[select.selectedIndex].value;
    var titleneentobechanged=document.getElementById(value);
    titleneentobechanged.innerText=retVal;
    select.options[0].selected=true;
}






function addsection(){
    let sections=document.getElementsByTagName('section');
    const lastsectionnumber=(sections.length+1).toString();
    let htmlTextToAdd = `<section id="section${lastsectionnumber}" data-nav="Section ${lastsectionnumber}"><div class="landing__container"><h2 id="title ${lastsectionnumber}">Section ${lastsectionnumber}</h2><p id="desc ${lastsectionnumber}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod. <br>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div></section>`;
    sections[sections.length-1].insertAdjacentHTML('afterend',htmlTextToAdd);
    let opts=document.getElementsByTagName('option');
    let x=opts[opts.length-2];
    let htmlTextToAdd2=`<option value="title ${lastsectionnumber}" onclick="edittitle()">Edit title in section ${lastsectionnumber}</option><option value="desc ${lastsectionnumber}" onclick="makearea()">Edit description in section ${lastsectionnumber}</option><option value="jumbtoone ${lastsectionnumber}" onclick="window.scrollTo(0,${lastsectionnumber}*550)">Jumb to section ${lastsectionnumber}</option>`;
    x.insertAdjacentHTML('afterend',htmlTextToAdd2);
    const select=document.getElementById("selectchoice");
    select.options[0].selected=true;
}







