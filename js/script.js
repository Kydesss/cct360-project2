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

function showContactAlert() {
    const fullName = document.getElementById("fullName").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const message = document.getElementById("message").value;

    const alertElement = document.getElementById("submitAlert");

    if (!fullName || !emailAddress || !message) {
        alertElement.innerHTML = "Please fill out all fields.";
        alertElement.classList.remove("alert-success");
        alertElement.classList.add("alert-danger");
        alertElement.classList.remove("d-none");
    } else {
        alertElement.innerHTML = `Thank you, ${fullName}! Your message has been sent.`;
        alertElement.classList.remove("alert-danger");
        alertElement.classList.add("alert-success");
        alertElement.classList.remove("d-none");
    }
}

function hideContactAlert() {
    document.getElementById("submitAlert").classList.add("d-none");
}
