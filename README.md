# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# TECH TRONICS'25

![TECH TRONICS'25](https://i.imgur.com/example-image.jpg)

## Description

TECH TRONICS'25 is a responsive single-page React website for the Department of Information Technology symposium. The website features a futuristic neon theme with a black background and glowing text and neon-colored accents such as electric blue, purple, and lime green.

## Features

- **Futuristic Neon Theme**: Dark background with glowing text and neon-colored accents
- **Responsive Design**: Mobile-first approach ensuring compatibility across all devices
- **Smooth Animations**: Uses Framer Motion for smooth transitions and animations
- **Interactive Elements**: Hover effects, animated borders, and interactive event cards
- **Comprehensive Sections**: Hero, About, Guidelines, Events, Coordinators, and Footer

## Technologies Used

- React with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Scroll for smooth scrolling

## Event Sections

The website features the following events:

1. Front-End Design
2. Paper Presentation
3. Cyfer Shift
4. Debugging
5. Connection & Memorize the Image
6. IPL Auction
7. Free Fire
8. Chess

Each event is presented in an interactive card with detailed rules and contact information.

## Coordinators

- **Staff Coordinator**: Jothilakshmi - 6383789500
- **Student Coordinators**:
  - Ishwarya Lakshmi M - 86672 13578
  - Hemnath M - 86809 64114

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/techtronics25.git
   ```

2. Navigate to the project directory
   ```bash
   cd techtronics25
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

4. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Folder Structure

```
techtronics25/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   │   └── NotificationBar.tsx
│   │   └── sections/
│   │       ├── About.tsx
│   │       ├── Coordinators.tsx
│   │       ├── Events.tsx
│   │       ├── Footer.tsx
│   │       ├── Guidelines.tsx
│   │       └── Hero.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Theme Colors

The primary theme colors can be modified in the `tailwind.config.js` file:

```javascript
theme: {
  extend: {
    colors: {
      neonBlue: '#00f2ff',
      neonPurple: '#b300ff',
      neonGreen: '#39ff14',
      darkBg: '#070707',
    },
    // ...
  },
},
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Department of Information Technology
- All event coordinators and participants
