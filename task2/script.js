let visibility=document.getElementById("visibleSection");
let Sections=document.querySelectorAll(".section");
let boxes=document.querySelectorAll(".box");
let allShow_hidebtn =document.getElementById("allSectionBtn");
let allshow_hide=document.getElementsByClassName("allBtn");
let BioBtn =document.getElementById("btnBio");
let SkillBtn =document.getElementById("btnSkills");
let HobbyBtn =document.getElementById("btnHobbies");
let button =document.querySelectorAll(".button");
let bio=document.getElementById("bio");
let skill=document.getElementById("skill");
let hobbies=document.getElementById("hobbies");
let counter1=0;
let counter2=0;
let counter3=0;

function updatecount(){
  let counter=counter1+counter2+counter3;
  if(counter1===1 &&counter2===1 &&counter3===1){
    counter=3;
    visibleSection.textContent= "Visible Section : "+counter;
  }
  if(counter1===1 &&counter2===1 ||counter3===1){
    visibleSection.textContent= "Visible Section : 2";
  }
  if(counter1===1 ||counter2===1 &&counter3===1){
    visibleSection.textContent= "Visible Section : 2";
  }
  if(counter1===1 ||counter3===1 &&counter2===1){
    visibleSection.textContent= "Visible Section : 2";
  }
   visibleSection.textContent= "Visible Section : " + counter;
}

let mode="hide";

BioBtn.onclick= function(){
   bio.style.display ="block";
   if(mode==="hide"){
    if(bio.style.display ==="block"){
      BioBtn.innerText="Hide Bio";
      mode="show";
    //   counter1=1;
      counter1+=counter1;
      counter1++;
      updatecount();
     }
   }
   else{
    bio.style.display ="none";
    mode="hide";
    BioBtn.innerText="Show Bio";
    counter1--;
    updatecount();
   }
};

SkillBtn.onclick= function(){
   skill.style.display ="block";
   if(mode==="hide"){
    if(skill.style.display ==="block"){
      SkillBtn.innerText="Hide Skill";
      mode="show";
      counter2+=counter2;
      counter2++;
    updatecount();
     }
     
   }
   else{
    skill.style.display ="none";
    mode="hide";
    SkillBtn.innerText="Show Skill";
    counter2--;
    updatecount();
   }
  
};

HobbyBtn.onclick= function(){
   hobbies.style.display ="block";
   if(mode==="hide"){
    if(hobbies.style.display ==="block"){
      HobbyBtn.innerText="Hide Skill";
      mode="show";
      counter3+=counter3;
      counter3++;
      updatecount();
     }
     
   }
   else{
    hobbies.style.display ="none";
    mode="hide";
    HobbyBtn.innerText="Show Skill";
    counter3--;
    updatecount();
   }
  
};

allShow_hidebtn.onclick= function(){
   bio.style.display ="block";
   skill.style.display ="block";
   hobbies.style.display ="block";
   if(mode==="hide"){
    if(bio.style.display ==="block" && skill.style.display ==="block"&&hobbies.style.display ==="block"){
        allShow_hidebtn.innerText="Hide all";
        BioBtn.innerText="Hide Bio";
        SkillBtn.innerText="Hide Skill";
        HobbyBtn.innerText="Hide Hobby";
        mode="show";
        updatecount();
     }
   }
   else{
    bio.style.display ="none";
    skill.style.display ="none";
    hobbies.style.display ="none";
    mode="hide";
    BioBtn.innerText="Show Bio";
    SkillBtn.innerText="Show Skill";
    HobbyBtn.innerText="Show Hobby";
    allShow_hidebtn.innerText="Show all";
    updatecount();
   }
};