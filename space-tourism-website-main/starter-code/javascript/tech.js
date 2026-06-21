


    const techName = document.querySelector("#tech-title");
    const img = document.querySelector("#tech-img");
    const desc = document.querySelector("#content");
    const tabs = document.querySelectorAll(".button-navigation button");


    const loadTech = async (params) => {
        const response = await fetch("./data.json");
        const data = await response.json();

        console.log(data.technology)
        renderTech(data.technology[0])

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
  
                tabs.forEach(tab => tab.classList.remove("active"))
                tab.classList.add("active")
                const techTitle = tab.dataset.tech;

                const tech = data.technology.find(
                    item => item.name === techTitle
                )

                renderTech(tech)
            })
        })
    }

    loadTech();

    const renderTech = (technology) => {

        const imgSource = window.innerWidth >= 1024 ? technology.images.portrait : technology.images.landscape;

            techName.textContent = technology.name;
            desc.textContent = technology.description;
            img.src = imgSource;
            img.alt = technology.name
    }