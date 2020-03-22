window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            

            

            for (let i = 0; i < json.length; i++) {
                const div = document.getElementById("container");
                let astroElement = document.createElement('div');
                astroElement.className = 'astronaut';

                 astroElement.innerHTML = `
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in Space: ${json[i].hoursInSpace}</li>
                             <li id="active">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                </div>
                <img class="avatar" src=${json[i].picture}>
          `;

                div.append(astroElement);
                

                if (json[i].active) {
                    document.getElementById("active").style.color = "green";
                    

                }
        }
                
               //With much thanks to Andy Yang for helping me connect the dots.
                
                    //Problem solving: If I append the div I get one astronaut. If I append text, I get one astronaut, and then literally all the innerHTML for the other
                    // astronauts. if I append the astroArr then I get one in the appropriate format, and get [object Object] appended after.

                    

            //         div.innerHTML = /*div.innerHTML +*/ `
            
            //     <div class="astronaut">
            //         <div class="bio">
            //         <h3>${jsonObj[i].firstName} ${jsonObj[i].lastName}</h3>
            //         <ul>
            //             <li>Hours in Space: ${jsonObj[i].hoursInSpace}</li>
            //             <li>Active: ${jsonObj[i].active}</li>
            //             <li>Skills: ${jsonObj[i].skills}</li>
            //         </ul>
            //        </div>
            //        <img class="avatar" src=${jsonObj[i].picture}>
            //     </div>        
            //    `
            //    document.body.append(div);
                
            // }
            

            // for (let i = 0; i < jsonObj.length; i++) {

                


                
               
                
            //     const div = document.getElementById("container");
                
            //     div.innerHTML = /*div.innerHTML +*/ `
            
            //     <div class="astronaut">
            //         <div class="bio">
            //         <h3>${jsonObj[i].firstName} ${jsonObj[i].lastName}</h3>
            //         <ul>
            //             <li>Hours in Space: ${jsonObj[i].hoursInSpace}</li>
            //             <li>Active: ${jsonObj[i].active}</li>
            //             <li>Skills: ${jsonObj[i].skills}</li>
            //         </ul>
            //        </div>
            //        <img class="avatar" src=${jsonObj[i].picture}>
            //     </div>        
            //    `
               
           // }

            

                     
            
        })
    })
})        