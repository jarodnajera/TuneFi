## TuneFi: by small artists, for small artists. Follow, unfollow, like people and posts, and search

A full stack MERN application that allows small artists to share music, listen to music, post their upcoming events, and view community feedback.
Deployment: http://155.248.197.4:5173/
Created by: Jarod Najera, Anthony Mena, Jose Mena, Sachin Chopra

## Features

* User authentication: Allows users to create an account, log in, and log out. 2FA is supported
* Song upload: Users can upload their songs to the database
* Song player: Built in music player allows users to listen other artists’ music
* Profiling: Users can update their screen name, bio, and add events/posts. They can also view other user’s profiles.
* Rating and Commenting: Users can comment on the artist’s music and events in the community tab. An artist's popularity is measured by the number of followers and likes their profiles and posts have.
* Search: Users can use the search bar to look up their favorite artists

## Getting Started

1. Clone the repository:

   ```bash
   https://github.com/jarodnajera/TuneFi.git
Install the front end dependencies
```bash
cd tunefi
```bash
npm install

Install the back end dependencies
```bash
cd server
```bash
npm install

Configure the .env file with your own mongoDB database

Start the front end (Vite)
```bash
npm run dev

Start the back end 
```bash
nodemon server 

Access the application:

Open your web browser and visit http://localhost:5173
## API Endpoints
```bash
POST /signup
POST /login
GET /logout
POST /upload
POST /id/:artistID
GET /id/:artistID/community
POST /id/:artistID/community
GET /id/:artistID/events
POST /id/:artistID/events
POST /id/:artistID/follow
DELETE /id/:artistID/follow
POST /likes
GET /:query
```bash

##Directory Structure


Server/
	Models/
		artist.js
		communityPost.js
		event.js
	Routes/
		artist.js
		auth.js
		search.js
		song.js
	Server.js

Tunefi/
	Src/
		Actions/
			artistActions.js
			authActions.js
		Assets/
		Components/
			ArtistProfile/
				ArtistProfile.js
				ArtistProfile.css
			Audio/
				AudioPlayer.jsx
				DisplayTrack.jsx
				ProgressBar.jsx
				Controls.jsx
				UploadSong.jsx

			Footer/
				Footer.jsx
				Footer.css
			Home/
				NewsGrid.jsx
				Treding.jsx
				TrendingCarousal.jsx
			Navigation/
				Navigation.jsx
				Navigation.css
		Data/
			Tracks/
		Screens/
		Main.jsx
		App.jsx
