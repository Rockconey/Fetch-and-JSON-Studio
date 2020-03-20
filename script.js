window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);
            let jsonObj = json;
            let newDiv;

            for (let i = 0; i < jsonObj.length; i++) {
                
               
                
                const div = document.getElementById("container");
                
                div.innerHTML = div.innerHTML + `
            
                <div class="astronaut">
                    <div class="bio">
                    <h3>${jsonObj[i].firstName} ${jsonObj[i].lastName}</h3>
                    <ul>
                        <li>Hours in Space: ${jsonObj[i].hoursInSpace}</li>
                        <li>Active: ${jsonObj[i].active}</li>
                        <li>Skills: ${jsonObj[i].skills}</li>
                    </ul>
                   </div>
                   <img class="avatar" src=${jsonObj[i].picture}>
                </div>        
               `
               
            }

            

                     
            
        })
    })
})        