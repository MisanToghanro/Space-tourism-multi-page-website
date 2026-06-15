
const planet = document.querySelector("#destination-name");
const image = document.querySelector("#destination-image");
const description = document.querySelector("#destination-description");
const distance = document.querySelector("#destination-distance");
const travel = document.querySelector("#destination-travel");
const tabs = document.querySelectorAll(".destination-tabs button")


const loadDestinations = async (params) => {
    const response = await fetch("./data.json");
    const data = await response.json();


    renderDestination(data.destinations[0]);

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {
              tabs.forEach(tab => tab.classList.remove("active"))
              tab.classList.add("active")

            const planetName = tab.dataset.planet;
            const destination = data.destinations.find(
                item => item.name === planetName
            );
            renderDestination(destination)
        })
    })
    
}

loadDestinations();

const renderDestination = (destination) => {

    image.src = destination.images.png;
    image.alt = destination.name;

    planet.textContent = destination.name;
    description.textContent = destination.description;
    distance.textContent = destination.distance;
    travel.textContent = destination.travel

}