# d3-music-eq
- Author: Joseph Francis, hookedup, inc.
- Web Code License: MIT

## About
- This is a Node.js application that uses D3 to visually represent music EQ and beat related values.  
- The page connects via WebSockets to the Hookedup LED Controller App to get a real time stream of EQ values (pre smoothed) and beat details (also processed for easier graphical display).
- This demo shows 30 or 7 eq bands using arcs.  There is a circle in the center that changes color as the Snare drum hits (to change color with the beat).  There is also a star that changes size with the volume, making it jump with the music over the colored dot.

## Setup
 1) Download the Hookedup LED Controller Application here
 https://drive.google.com/file/d/0B6t_Or-CMtj4cEtXLVpiZXlUck0/view?usp=sharing

 ### One Time Setup
 - Run the Hookedup LED Controller application 
   (if running on a mac, be sure to change the security setting to allow this to run)

 - Configure Web Server to start automatically
   - Go to the 'Options' tab then the 'Web Server' sub-tab
   - Change the port (Suggested: 7010)
   - Click option to run on startup
   - Press the Save Settings 

 - Load some music (mp3s only)
  - Click the 'Live Play' tab then the 'Music Playlists' sub-tab
  - Click 'Open Music Folder' button, that will open the folder where you can then drag / drop new mp3 files.
  - Close and reopen the application

## Usage
1) Run the Hookedup LED Controller Application and start live play
  - Click the 'Live Play' tab
  - Select a song
  - Click the 'Play' button
Note: At this point the eq should show the response to the same values being streamed to the web page.

2) Run this program
* npm install (one time
* npm start

Open the page at: 
http://localhost:7007
 - or to show the seven band - 
http://localhost:7007/?bands=7

Press the connect button while music playing, it will start moving.