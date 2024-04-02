# React Logs & Metrics Dashboard

This React project lets you visualize and analyze system logs and metrics with a user-friendly interface.

## Features
- **Timestamp Filter:** Narrow down logs and metrics to a specific time range for focused analysis. ⏱️
- **Interactive Charts (Chart.js):** Visualize trends and patterns in your data using four customizable charts (line and area).
- **Real-time Log Stream :** View system logs as they occur, filtered by your chosen timestamp range and seamlessly integrated with previously loaded entries. (Real-time functionality depends on your API's capabilities)
- **Storybook Integration:** Develop and showcase isolated components for efficient development and maintenance. ️

## Finding Functionality
| Location                    | Functionality                                                   |
|-----------------------------|-----------------------------------------------------------------|
| src/components/Logs.jsx     | Timestamp filtering, real-time log display, previous log loading |
| src/components/Metrics.jsx  | Interactive charts (Chart.js)                                    |
| src/hooks/getTimeStampList.js | Utility hook for generating timestamp options                  |
| .storybook directory        | Individual component showcasing and testing                      |

## Code Snippets
### a) Timestamp Filter (`src/components/Logs.jsx`):

```javascript
import React, { useState, useEffect } from 'react';

function Logs() {
  const [selectedTimestamp, setSelectedTimestamp] = useState('lastHour'); // Default selection

  const handleTimestampChange = (event) => {
    setSelectedTimestamp(event.target.value);
  };

  // ... (Rest of your Logs component logic)
}

export default Logs;
````
### b) Chart with Sample Data (`src/components/Metrics.jsx`):

```javascript
import React from 'react';
import { Chart } from 'react-chartjs-2';

const sampleData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Metric A',
      data: [10, 20, 30, 50, 25, 40],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

function Metrics() {
  return (
    <div>
      <Chart type="line" data={sampleData} options={{ /* Your chart options */ }} />
    </div>
  );
}

export default Metrics;
````
## Available Scripts

In the project directory, you can run:

### `npm start`

Storybook Run command , In the project directory, you can run:

### `npm run storybook`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
