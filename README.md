## Chore Check

A chore tracker for any household.

# About

Chore Check allows users to easily track completed chores in a calendar. Users can create chore tasks and add the members of their household. When a chore is completed they can log which member completed it.

# The "Why"

Busy households can be hard to manage. By digitizing the household chore chart users can keep track of who completed what much easier. This app can help the family household with 3 kids or the co-op with 10 people sharing a kitchen.

Conflict can arise when households can't recall who has (or hasn't) done what. Having a handy tracker can make all the difference!

# Tech Stack

The frontend was built with Vite, React, and CSS. The API was configured with Azure function app.

# Notes On Limited Functionality

The app is currently at the MVP stage meaning the following functionality is not engineered:

- The API generates a selection of icons in the sign up modal, however the icons are not filtered and cannot be selected.
- Currently the app mimics sign up, sign in and sign out functionality with basic state changes.
- The functionality for adding to the calendar and adding or editing chores and family members is not available.
- The functionality for editing the user profile is not available.

# Future Improvements

In the future users can:

- share chore calendars with other users
- integrate the chore calendar with google calendar
- contribute to a public message board with tips on chore tracking

# Link to Live Site:

http://chorecheck.ignorelist.com

# Link to Azure Backend:

https://chorecheckapi.azurewebsites.net/api/iconfinder

# Link to Backend Repo:

(currently unused)

https://github.com/michaelabudde/chore-check-backend.git

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
