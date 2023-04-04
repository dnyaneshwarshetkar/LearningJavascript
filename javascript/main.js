function saveStudent(event){
    event.preventDefault();
    let formData = new FormData(document.forms["studentForm"]);
    let formOnlyData = {};
    console.log(formData);
    for (const [key, value] of formData) {
        formOnlyData[key] = value;
    }
    console.log(formOnlyData);
    // Using getElement By Id Method
    /*let firstNameOutput = document.getElementById("firstNameOutput");
    firstNameOutput.innerText = formOnlyData.first_name;
    let lastNameOutput = document.getElementById("lastNameOutput");
    firstNameOutput.innerText = formOnlyData.first_name;
    let ageOutput = document.getElementById("ageOutput");
    ageOutput.innerText = formOnlyData.age;
    let emailOutput = document.getElementById("emailOutput");
    emailOutput.innerText = formOnlyData.email;*/
    let outputElements = document.getElementsByName("firstName");
    console.log(outputElements);
    outputElements.item(0).innerText = formOnlyData.first_name;
    //outputElements.item(1).innerHTML = formOnlyData.last_name;
    //outputElements.item(2).innerHTML = formOnlyData.age;
    //outputElements.item(3).innerHTML = formOnlyData.email;


    return false;
}