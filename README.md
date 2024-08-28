# CCT360 Project 2

This project is a personal website for Joaquin Pacia, showcasing various sections including a blog, resume, photos, and more.

## Prerequisites

To view the website on your own computer, you need the following:

-   A web browser (e.g., Google Chrome, Mozilla Firefox, Safari)
-   A local web server (optional but recommended for better experience)

## Viewing the Website

### Option 1: Directly Opening HTML Files

1. **Download the Project**: Clone or download the project repository to your local machine.

    ```sh
    git clone https://github.com/your-username/cct360-project2.git
    ```

2. **Navigate to the Project Directory**: Open the project directory.

    ```sh
    cd cct360-project2
    ```

3. **Open HTML Files**: Open the `index.html` file in your web browser. You can do this by double-clicking the file or right-clicking and selecting "Open with" followed by your preferred web browser.

    ```sh
    open html/index.html
    ```

### Option 2: Using a Local Web Server

Using a local web server is recommended for a better experience, especially if the website uses relative paths for assets like CSS, JavaScript, and images.

1. **Download the Project**: Clone or download the project repository to your local machine.

    ```sh
    git clone https://github.com/your-username/cct360-project2.git
    ```

2. **Navigate to the Project Directory**: Open the project directory.

    ```sh
    cd cct360-project2
    ```

3. **Start a Local Web Server**: You can use various tools to start a local web server. Here are a few options:

    - **Python (version 3.x)**:

        ```sh
        python -m http.server
        ```

    - **Node.js (using http-server)**:

        First, install [`http-server`](command:_github.copilot.openSymbolFromReferences?%5B%22http-server%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A334%2C%22character%22%3A34%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A466%2C%22character%22%3A38%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A757%2C%22character%22%3A29%7D%7D%5D%5D "Go to definition") if you haven't already:

        ```sh
        npm install -g http-server
        ```

        Then, start the server:

        ```sh
        http-server
        ```

    - **Live Server (VS Code Extension)**:

        If you are using Visual Studio Code, you can install the "Live Server" extension. After installation, open the project in VS Code, right-click on [`index.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Findex.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/joaquinpacia/Downloads/GitHub/cct360-project2/index.html"), and select "Open with Live Server".

4. **Open the Website**: Once the local web server is running, open your web browser and navigate to [`http://localhost:8000`](command:_github.copilot.openSymbolFromReferences?%5B%22http%3A%2F%2Flocalhost%3A8000%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A334%2C%22character%22%3A34%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A466%2C%22character%22%3A38%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2Fblogpost.html%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A757%2C%22character%22%3A29%7D%7D%5D%5D "Go to definition") (or the port number provided by your web server).

## Project Structure

-   [`.github/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2F.github%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/joaquinpacia/Downloads/GitHub/cct360-project2/.github/"): GitHub workflows for CI/CD.
-   [`.vscode/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2F.vscode%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/joaquinpacia/Downloads/GitHub/cct360-project2/.vscode/"): VS Code settings.
-   [`css/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fcss%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/joaquinpacia/Downloads/GitHub/cct360-project2/css/"): Stylesheets including Bootstrap and custom styles.
-   [`html/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fhtml%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/joaquinpacia/Downloads/GitHub/cct360-project2/html/"): HTML files for different sections of the website.
-   [`img/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fimg%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/joaquinpacia/Downloads/GitHub/cct360-project2/img/"): Images used in the website.
-   [`js/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2Fjs%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/joaquinpacia/Downloads/GitHub/cct360-project2/js/"): JavaScript files including Bootstrap and custom scripts.
-   [`README.md`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fjoaquinpacia%2FDownloads%2FGitHub%2Fcct360-project2%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/joaquinpacia/Downloads/GitHub/cct360-project2/README.md"): This file.

## License

This project is licensed under the MIT License.
