# NetflixGPT

NetflixGPT is a feature-rich movie browsing and recommendation application that combines movie data from the TMDB API with AI-powered search capabilities using OpenAI's GPT API. The app provides an immersive and user-friendly movie discovery experience.

## Features

- **Authentication:**
  - Login / Sign Up with Firebase Authentication
  - Profile Management and Update
  - Redirect to Browse Page after Login
  - Secure Authentication Redirect Logic

- **Movie Discovery:**
  - Browse Now Playing Movies from TMDB
  - Movie Trailers with Autoplay and Mute Options
  - Tailored Movie Suggestions based on AI-powered search
  - Movie Lists categorized and displayed in an intuitive UI

- **AI Integration:**
  - GPT-Powered Search Feature for Movie Suggestions
  - Multi-language Support using GPT API

- **Responsive Design:**
  - Mobile-friendly UI with Tailwind CSS
  - Adaptive Layout for Desktop and Mobile Devices

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Redux Toolkit for State Management
  - React Router for Routing

- **Backend & APIs:**
  - Firebase Authentication
  - TMDB API for Movie Data
  - OpenAI GPT API for AI-powered Search

## Installation and Setup

### Prerequisites
- Node.js
- Firebase Account
- TMDB API Key
- OpenAI API Key

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/KNAVEEN1705/netflix-gpt.git
   ```

2. Navigate to the project directory:
   ```bash
   cd NetflixGPT
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Build for production:
   ```bash
   npm run build
   ```

## Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project and configure Firebase Authentication
3. Copy the Firebase configuration and paste it into your project

## TMDB API Setup
1. Register at [TMDB](https://www.themoviedb.org/)
2. Generate an API key and add it to your `.env` file

## OpenAI GPT Setup
1. Sign up at [OpenAI](https://openai.com/)
2. Generate an API key and add it to your `.env` file

## Key Features Implemented

- **Authentication:** Firebase Authentication for secure login and sign-up.
- **Routing:** Protected routes with redirect logic.
- **State Management:** Redux store with `userSlice`, `movieSlice`, and `gptSlice`.
- **Movie Data:** Custom hooks for fetching now-playing movies and popular movies.
- **Trailer Integration:** Embedded YouTube trailers with autoplay and mute.
- **AI Integration:** GPT-powered movie search suggestions.
- **Responsive Design:** Tailwind CSS for a stunning and responsive UI.
- **Environment Configuration:** `.env` file for secure key management.

## Directory Structure
```
NetflixGPT/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── redux/
│   ├── App.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Deployment
The application is deployed to [Firebase Hosting](https://firebase.google.com/products/hosting).

To deploy:
```bash
npm run build
firebase deploy
```

## Contributions
Feel free to submit issues or pull requests to improve this project.

## License
This project is licensed under the [MIT License](LICENSE).

