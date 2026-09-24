# 🏋️ FitLog — Workout Library

FitLog is a modern, responsive workout library and workout planning web application built with **Next.js**. It helps users explore different exercises, view detailed workout information, save workouts for later, and create a daily workout plan.

The application is designed with a clean dark gym-focused interface and works smoothly across **mobile, tablet, and desktop** devices.

---

## 🌐 Live Website

**Live Demo:** `https://your-vercel-domain.vercel.app`

> Replace the URL above with your actual deployed Vercel/Netlify URL.

---

## 📌 Project Overview

FitLog provides a simple way to discover workouts and organize them into a daily training plan.

Users can:

* Browse the workout library
* View detailed information about each workout
* Add workouts to today's plan
* Save workouts for later
* Remove workouts from the plan
* Mark completed workouts as done
* Sort workouts by duration, calories, or rating
* Track total exercises, workout time, and calories
* Keep plan and saved workouts after page reload using localStorage

---

## ✨ Key Features

### 1. 🏋️ Workout Library

* Displays workouts fetched from the FitLog API
* Responsive workout card grid
* Workout image/illustration
* Category tags
* Equipment information
* Duration
* Calories
* Rating
* Clickable cards for workout details

### 2. 📖 Workout Details

Each workout has a dedicated details page containing:

* Large workout image
* Workout name
* Description
* Category tags
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories
* Rating
* Step-by-step instructions

Users can also add a workout to their plan or save it for later.

### 3. 📋 Today's Plan

Users can create a daily workout plan with a maximum of **5 exercises**.

The My Plan page includes:

* Total exercises
* Total workout minutes
* Total calories
* Workout list
* View Details button
* Mark as Done button
* Remove workout button
* Empty state
* Toast notifications

### 4. 💾 Save for Later

Users can save workouts for later.

The Saved section allows users to keep their favorite workouts and access them whenever they want.

### 5. 🔢 Live Navbar Counters

The navbar displays live counters for:

* **Plan** — number of workouts in Today's Plan
* **Saved** — number of saved workouts

The counters update automatically when workouts are added or removed.

### 6. 🔃 Sort Workouts

The workout library includes a **Sort By** dropdown.

Available sorting options:

* Duration
* Calories
* Rating

The workout list updates immediately when the sorting option changes.

### 7. 🔔 Toast Notifications

Relevant toast messages are displayed when users:

* Add a workout to today's plan
* Save a workout
* Remove a workout
* Mark a workout as done
* Reach the maximum plan limit

### 8. 📱 Fully Responsive

The application is designed to work on:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

The layout automatically adapts to different screen sizes.

### 9. 💽 Local Storage

Plan and saved workout data are stored in **localStorage**, allowing the user's data to remain available after refreshing the page.

### 10. 🚫 404 & Loading States

The application includes:

* Custom 404 page for invalid routes
* Loading animation while workout data is being fetched
* Loading state on the My Plan page
* Empty states when there are no workouts

---

## 🛠️ Technologies Used

| Technology       | Purpose                            |
| ---------------- | ---------------------------------- |
| **Next.js**      | Application framework              |
| **React.js**     | Building UI components             |
| **App Router**   | Page navigation and routing        |
| **Tailwind CSS** | Styling and responsive design      |
| **JavaScript**   | Application logic                  |
| **FitLog API**   | Workout data                       |
| **LocalStorage** | Persisting plan and saved workouts |
| **Vercel**       | Deployment                         |

---

## 🔗 API

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

The application fetches workout information from the API and dynamically displays the available exercises.

---

## 📂 Main Pages

### Home

```text
/
```

Contains:

* Navbar
* Hero section
* Workout Library
* Workout cards
* Sort functionality
* Footer

### Workout Details

```text
/workout/[id]
```

Contains:

* Workout image
* Workout information
* Key specifications
* Instructions
* Add to Plan
* Save for Later

### My Plan

```text
/my-plan
```

Contains:

* Plan statistics
* Today's Plan
* Saved workouts
* Mark as Done
* Remove workout
* View Details

### 404 Page

```text
/not-found
```

Handles invalid or unknown routes.

---

## 🎯 Plan Limit

Today's Plan supports a maximum of **5 workouts**.

When the plan already contains five workouts:

```text
Add to today's plan
```

is disabled to prevent adding more than the allowed limit.

---

## 📊 My Plan Metrics

The My Plan page dynamically calculates:

### Exercises

Total number of workouts currently added to today's plan.

### Minutes

Total duration of all planned workouts.

### Calories

Total calories of all planned workouts.

These values update automatically whenever a workout is added or removed.

---

## 🎨 UI Features

FitLog uses a dark, modern fitness-focused design with:

* Dark background
* High-contrast typography
* Accent color highlights
* Rounded cards
* Workout tags
* Status badges
* Responsive navigation
* Interactive buttons
* Toast notifications
* Loading animations
* Empty states

---

## 📁 Project Structure

```text
fitlog/
│
├── app/
│   ├── page.js
│   ├── my-plan/
│   │   └── page.js
│   ├── workout/
│   │   └── [id]/
│   │       └── page.js
│   ├── loading.js
│   ├── not-found.js
│   └── layout.js
│
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── WorkoutCard/
│   ├── WorkoutDetails/
│   ├── MyPlan/
│   ├── Footer/
│   └── Toast/
│
├── public/
│   └── images/
│
├── lib/
│   └── api.js
│
├── README.md
├── package.json
└── next.config.js
```

> Project structure can be adjusted according to the actual structure of the project.

---

## 🚀 Installation & Setup

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd fitlog
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## ☁️ Deployment

The project can be deployed using:

* Vercel
* Netlify
* Cloudflare Pages

For deployment, connect the GitHub repository to the hosting platform and deploy the Next.js application.

---

## 📱 Responsive Design

FitLog is optimized for different screen sizes.

### Mobile

* Stacked hero layout
* Mobile-friendly navigation
* Single-column workout cards
* Touch-friendly buttons

### Tablet

* Responsive grid
* Optimized spacing
* Flexible workout details layout

### Desktop

* Two-column hero
* 3-column workout library
* Two-column workout details
* Full navigation experience

---

## 🔮 Future Improvements

Possible future improvements include:

* User authentication
* Personal workout history
* Weekly workout analytics
* Progress charts
* Custom workout creation
* Workout streak tracking
* Backend database integration
* User profile
* Cloud synchronization

---

## 👨‍💻 Developer

**BAYEZID HOSEN**

Frontend Developer | Next.js & React Developer

---

## 📄 License

This project was created for educational and assignment purposes.

© 2026 FitLog — Workout Library. Train hard, log honest. 🏋️
