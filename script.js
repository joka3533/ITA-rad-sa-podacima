fetch('quiz.json').then(function(response){
    if(!response.ok){
        throw Error = ("Error while reading file!")
    }
    return response.json();
}).then(function(data){

    let keys = Object.keys(data.quiz);
    let values = Object.values(data.quiz);

    for(let key in values){
        const div_container = document.querySelector("#container");
        div_container.innerHTML += '<h2>' + "Question: " + values[key].question + '</h2>';

        for(let option in values[key].options){
        let tekst = values[key].options[option];
        div_container.innerHTML += '<p>' + 
        `<input type="radio" value="${tekst}" name="${key}" onclick="saveDatas()">` +
                                tekst + '</p>' + '<br>';                             
        }        
    }


    function backDatas(){
        let inputs = document.getElementsByTagName("input");
        for(let input of inputs){
            let check = window.localStorage.getItem(input.getAttribute("name")) === input.getAttribute("value");
            if(check)
            input.setAttribute("checked", check)
        }
    }
    backDatas();
}).catch(function(err){
    console.log("Fetch problem " + err.message);
})


function saveDatas(){
    let inputs = document.getElementsByTagName("input");
    for(let i = 0; i< inputs.length; i++){
        if(inputs[i].checked)
        window.localStorage.setItem(inputs[i].name, inputs[i].value)
    }

}