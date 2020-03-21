window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);
            let jsonObj = json;

            // pro tip: you need to put a string into innerHtml, so my approach would be to create your own array, append to it, 
            // then turn it into a string when you apply!

            for (let i = jsonObj.length - 1; i >=0; i --) {
                const div = document.getElementById("container");
               
                let astroArr = [];
                astroArr.push(jsonObj[i]);
                console.log(astroArr);
                if (jsonObj[i].firstName) {
                    
                    document.body.append(astroArr);

                    //Problem solving: If I append the div I get one astronaut. If I append text, I get one astronaut, and then literally all the innerHTML for the other
                    // astronauts. if I append the astroArr then I get one in the appropriate format, and get [object Object] appended after.

                    

                    div.innerHTML = /*div.innerHTML +*/ `
            
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
            }
            

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