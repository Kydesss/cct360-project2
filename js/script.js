const footer = document.getElementById("footer");

footer.innerHTML = `
    <div class="container-fluid py-5">
        <div class="row">
            <div class="col-12">
                <p class="text-center">&copy; 2023 Joaquin Pacia</p>
            </div>
        </div>
        <div class="row">
            <!-- -->
            <div class="col-12 text-center" style="">
                <a
                    href="https://www.linkedin.com/in/joaquin-pacia-2551b3259/"
                    style="text-decoration: none"
                    class="me-1"
                >
                    <img
                        src="../img/logos/linkedinlogo.png"
                        alt="LinkedIn Logo"
                        style="width: 40px"
                    />
                </a>
                <a
                    href="https://www.youtube.com/channel/UCDZE2Z0eQ9hVDg6JlZgyUsg"
                    style="text-decoration: none"
                >
                    <img
                        src="../img/logos/Youtube_logo.png"
                        alt="YouTube Logo"
                        style="width: 50px"
                    />
                </a>
            </div>
        </div>
    </div>
`;
// https://getbootstrap.com/docs/5.3/components/alerts/
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible mt-3" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
    ].join("");
    alertPlaceholder.innerHTML = "";
    alertPlaceholder.append(wrapper);
};

function showContactAlert() {
    const fullName = document.getElementById("fullName").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const message = document.getElementById("message").value;
    if (!fullName || !emailAddress || !message) {
        appendAlert("Please fill out all the required fields.", "danger");
    } else {
        appendAlert(
            `Success! Your message has been sent, ${fullName}.`,
            "success"
        );
    }
}

function toastTrigger() {
    const successToast = document.getElementById("successToast");
    const errorToast = document.getElementById("errorToast");
    const inputEmail = document.getElementById("inputEmail").value;

    if (!inputEmail) {
        const toastBootstrap = new bootstrap.Toast(errorToast);
        toastBootstrap.show();
    } else {
        const toastBootstrap = new bootstrap.Toast(successToast);
        toastBootstrap.show();
    }
}
