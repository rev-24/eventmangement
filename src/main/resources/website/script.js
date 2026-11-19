
function selectEvent(eventName) {
    document.getElementById("event").value = eventName;

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let selectedEvent = document.getElementById("event").value;

    if (name && email && selectedEvent) {
        document.getElementById("message").innerText =
            "Thank you, " + name + "! You have successfully registered for " + selectedEvent + ".";

        document.getElementById("registrationForm").reset();
    }
});
