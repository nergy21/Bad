function calculateAge() {
    var birthDate = document.getElementById("birthDate").value;

    if (birthDate) {
        var today = new Date();
        var birthDateObj = new Date(birthDate);

        var age = today.getFullYear() - birthDateObj.getFullYear();

        // Check if birthday has occurred this year
        if (today.getMonth() < birthDateObj.getMonth() || (today.getMonth() === birthDateObj.getMonth() && today.getDate() < birthDateObj.getDate())) {
            age--;
        }

        document.getElementById("result").innerHTML = "Your age is: " + age + " years.";
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid birthdate.";
    }
}