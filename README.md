# Interactive Quiz Application

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

The **Interactive Quiz App** is a web application built with ReactJS that allows users to take quizzes, receive instant feedback, and track their progress. This project provides an engaging and user-friendly experience for quiz enthusiasts, educators, and anyone looking to test their knowledge on various topics.

## Features

- **Quiz Creation & Management**:

  - Display a list of questions in a quiz format, sourced from an uploaded file.
  - Allow users to attempt quizzes multiple times to improve their scores.
  - Show attempt history, including past scores and correct/incorrect answers, for users to track their progress.

- **User Interaction**:

  - Users can select answers and receive instant feedback on their choices (e.g., green for correct, red for incorrect).
  - Implement timer-based quizzes, giving users a limited time (e.g., 30 seconds) per question to simulate a real-time quiz experience.

- **Progress Tracking**:

  - Display a scoreboard at the end of each quiz, showing the user's score, total correct/incorrect answers, and overall performance.

- **Quiz Attempt History**:
  - Save quiz history using IndexedDB for persistent storage across sessions, allowing users to revisit their past attempts.

## Technologies Used

- **Frontend**: ReactJS, React Router, TailwindCSS
- **State Management**: React Hooks
- **Data Storage**: IndexedDB
- **Deployment**: Vercel

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Ankush-nitjsr/interactive-quiz
   cd interactive-quiz
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to http://localhost:5173 to view the application.

## Deployment

The application is deployed on [Vercel](https://interactive-quiz-nine.vercel.app/). You can access the live version of the quiz platform using the link below:

- [Live Demo](https://interactive-quiz-nine.vercel.app/)

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
