const footer = document.getElementById("footer");

footer.innerHTML = `
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mt-5">
                <p class="text-center">&copy; 2023 Joaquin Pacia</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mb-5">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" href="photo.html">Photos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="video.html">Videos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="resume.html">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="shopping.html">Shopping</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
`;

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
    ].join("");
    alertPlaceholder.append(wrapper);
};

function showContactAlert() {
    const fullName = document.getElementById("fullName").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const message = document.getElementById("message").value;
    if (!fullName || !emailAddress || !message) {
        appendAlert("Please fill out all fields.", "danger");
    } else {
        appendAlert("Success! Your message has been sent.", "success");
    }
}
