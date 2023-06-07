# DropMail - Temporary Email Generator
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/AugustoBosa/DropMail/blob/main/README.pt-br.md)

> This is a challenge by Coodesh.

This front-end React application is developed as part of the Coodesh challenge. DropMail provides users with a simple solution to generate temporary email accounts using the DropMail API.

Check it working: [DropMail - Temporary Email Generator Demo](future link here)

> **Note:** Please note that the deployed demo is provided for demonstration purposes and may not reflect real-time data or functionality.

## Challenge Case
In today's online world, many websites and services require a valid email address for registration, accessing protected content, or receiving important notifications. However, the problem arises when these websites misuse our email addresses to send unwanted spam, advertisements, or become targets for hackers and robot attacks.

To address this issue, a reliable solution is to use a temporary email address, especially when you're uncertain about the trustworthiness of a website. By doing so, you can keep your inbox free from spam and protect your privacy. In this challenge, the task is to develop an application that consumes a temporary email API, allowing users to utilize online services without exposing their real email addresses.

# Table of Contents

- 🌐 [Language Support](#language-support)
- ⚙️ [Installation](#installation)
- 📖 [Usage](#usage)
  - 📺 [Demonstration](#video)  
- 🚀 [Deployment](#deployment)
- ✨ [Features](#features)
- 📚 [Documentation](#documentation)
  - 📡[DropMail API](#api) 
- 🤝 [Contributing](#contributing)
- 📝 [License](#license)
- 🙏 [Acknowledgments](#acknowledgments)
- ⚠️ [Project Maintenance](#project-maintenance)
- 📞 [Contact](#contact)

## 🌐 Language Support <a name="language-support"></a>
The DropMail - Temporary Email Generator application currently supports the English language only.

**Note:** The application's interface and usage are designed to be intuitive and straightforward, utilizing simple and universally understood wording and symbols. Therefore, there is no need for translations at this time.

We appreciate your understanding and encourage you to explore the application's features and functionalities in English. Should you have any questions or need assistance, our support team is always here to help.

## ⚙️ Installation <a name="installation"></a>

1. Clone the frontend repository:

   ```bash
   git clone https://github.com/AugustoBosa/DropMail.git
   ```

2. Install dependencies:

   ```bash
   cd DropMail
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Access the application at `http://localhost:5173` or the port specified in the `vite.config.js` file.

## 📖 Usage <a name="usage"></a>

Using the DropMail - Temporary Email Generator application is simple and convenient:

- Open the application in your web browser.
- Upon opening, the application will automatically check for the last stored session ID in your browser's localStorage. If the session has expired or no session ID is found, a new session will be created and saved to localStorage.
- To copy the temporary email address, you have two options:
  - Manually select the email address by clicking and dragging your mouse cursor over it, then copy it.
  - Click the copy button located next to the email address, and it will be instantly copied to your clipboard.
- The application automatically refreshes the inbox every 15 seconds to fetch new emails. However, you can also manually refresh the inbox using the provided refresh button.
- To access the content of an email, simply click on the email in the inbox list. The message will be displayed, and if there are any attachments, you can download them by clicking the download button in the lower right part of the message.

Enjoy using DropMail to generate temporary email accounts and manage your email communications effortlessly!

### 📺 Demonstration <a name="video"></a>

Stay tuned for the upcoming video demonstration showcasing the features and functionality of DropMail.

## 🚀 Deployment <a name="deployment"></a>

The frontend is deployed on Netlify (link to be created).

Please note that these deployment links are provided as examples and may not be accessible or available in the future.

## ✨ Features <a name="features"></a>
The DropMail - Temporary Email Generator application offers the following key features:

Generate temporary email accounts
Copy email address to clipboard
Auto-refresh inbox for real-time updates
View email messages in a user-friendly interface
Download email messages and attachments for offline access
Receive notifications when new mail arrives

## 📚 Documentation <a name="documentation"></a>

<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg" width="35px"></img>

The application is built using React and Tailwind CSS and consumes the DropMail API. It is designed with a mobile-first mentality and follows a simple yet effective design provided by the challenge.

To run the application, make sure you have Node.js installed. Clone the repository and follow the instructions in the [Installation](#installation) section to set up the project.

The app utilizes the following dependencies and development dependencies:

- [axios](https://www.npmjs.com/package/axios): A promise-based HTTP client for making API requests.
- [react](https://reactjs.org/): A JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): A package for rendering React components in the DOM.
- [vite](https://vitejs.dev/): A fast development server and build tool for modern web applications.
- [react-icons](https://www.npmjs.com/package/react-icons): A collection of popular icons for React.
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): A plugin to parse CSS and add vendor prefixes automatically.
- [postcss](https://www.npmjs.com/package/postcss): A tool for transforming styles with JS plugins.
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): A utility-first CSS framework for rapidly building custom user interfaces.

For more information about each dependency, please refer to their respective documentation on npm.

### 📡 DropMail API <a name="api"></a>

The DropMail API provides a temporary email service and is currently in a "public beta" state. Backwards-incompatible changes are still possible.

- HTTP Endpoint: `https://dropmail.me/api/graphql/${AUTH_TOKEN}`
- API uses GraphQL format. GraphQL schema: `schema.graphql`.
- You can use any unique string of 8 characters or more as `${AUTH_TOKEN}` right now, but authentication mechanisms may be introduced later.
- Both GET and POST methods can be used. For GET, add URL-encoded parameters to the URL as a query string: `/api/graphql/MY_TOKEN?query=...&variables=...` ("variables" should be a JSON object). POST accepts `application/x-www-form-urlencoded` and `application/json` Content-Types. If no "Content-Type" header is provided, the body is expected to be in JSON.


>For more information, please refer to the [DropMail API documentation](https://dropmail.me/api/).

## 🤝 Contributing <a name="contributing"></a>

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to contribute to the DropMail - Temporary Email Generator project. Here are a few ways you can contribute:

- Report bugs or issues you encounter while using the application.
- Suggest new features or enhancements to improve the user experience.
- Submit pull requests with bug fixes, feature implementations, or documentation improvements.
- Help improve the project's documentation by fixing typos, clarifying explanations, or adding examples.

To contribute, please follow these steps:

1. Fork the repository and create your branch from the `main` branch.
2. Make your changes, ensuring that your code follows the project's coding guidelines.
3. Commit your changes with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository, describing the changes you made.

I appreciate your contributions and feedback to make DropMail - Temporary Email Generator even better!

## 📝 License <a name="license"></a>

This project is licensed under the [MIT License](https://github.com/AugustoBosa/DropMail/blob/main/LICENSE).

## 🙏 Acknowledgments <a name="acknowledgments"></a>

I would like to express my gratitude to the creators of the Coodesh challenge for providing me with a great learning opportunity. This project allowed me to explore new technologies such as Tailwind CSS and GraphQL. It was an exciting experience.

## ⚠️ Project Maintenance <a name="project-maintenance"></a>

The project is actively maintained and may undergo rework and updates to address any potential bugs or issues that may arise in the future. At the moment, no bugs have been reported.

Please note that the deployment links provided may become offline or inaccessible in the future due to various reasons. If you encounter any difficulties accessing the application or have any inquiries, feel free to reach out to me for assistance.

Your feedback and contributions are valuable in improving the project, so please don't hesitate to report any bugs or suggest enhancements if you come across them. Together, we can make DropMail - Temporary Email Generator even better!

## 📞 Contact <a id="contact"></a>

For any inquiries or questions, feel free to contact me:

📧 - dev.augustobosa@gmail.com

![image](https://github.com/AugustoBosa/Food-Explorer-Frontend/assets/115903598/347bc18a-8e27-48eb-835f-1411f3229916) - +55 48 9.9953-1842

![image](https://github.com/AugustoBosa/Food-Explorer-Frontend/assets/115903598/7451cd53-6201-42ed-bf24-4838179ab9c9) - [AugustoBosa](https://github.com/AugustoBosa)

![image](https://github.com/AugustoBosa/Food-Explorer-Frontend/assets/115903598/93ba70a7-fc22-4e79-96d0-5f4d3dec5912) - [AugustoBosa](https://www.linkedin.com/in/augusto-bosa/)

Please don't hesitate to reach out if you have any questions or need further assistance.
