
const crewImg = document.querySelector("#crew-image")
const crewRole = document.querySelector("#crew-role")
const crewName = document.querySelector("#crew-name")
const crewBio = document.querySelector("#crew-bio")
const tabs = document.querySelectorAll(".crew-navigation button")




const loadCrew = async (params) => {
    const response = await fetch("./data.json");
    const data = await response.json();

    console.log(data.crew)
    renderCrew(data.crew[0]);

    tabs.forEach(tab => {

        tab.addEventListener("click" , () => {
            tabs.forEach(tab => tab.classList.remove("active"))
            tab.classList.add("active")
        const memberName= tab.dataset.crew;
        const crewMembers = data.crew.find(
            member => member.name === memberName
        );
        renderCrew(crewMembers);
        })


    })
  
}
loadCrew()

const renderCrew = (member) => {

     crewImg.src = member.images.png;
     crewImg.alt = member.name;

     crewRole.textContent = member.role;
     crewName.textContent = member.name;
     crewBio.textContent = member.bio

}