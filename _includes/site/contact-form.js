var form = document.getElementById("contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    var statusFailure = document.getElementById("contact-form-failure");
    var data = new FormData(event.target);

    function failureHTML(errorHTML) {
        var innerHTML = statusFailure.innerHTML;
        return innerHTML.replace("~~~ERROR~~~", errorHTML);
    }

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.classList.add("submitted-success");
            form.reset()
        } else {
            form.classList.add("submitted-failure");
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    statusFailure.innerHTML = failureHTML(data["errors"].map(error => error["message"]).join("</li><li>"))
                } else {
                    statusFailure.innerHTML = failureHTML("submission occurred, responded with unknown error")
                }
            })
        }
    }).catch(error => {
        form.classList.add("submitted-failure");
        statusFailure.innerHTML = failureHTML("fetch() call failed")
    });
}
form.addEventListener("submit", handleSubmit)
