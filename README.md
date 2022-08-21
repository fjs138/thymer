


# Thymer.net
A minimalist, free, open-source, and non-monetized stopwatch and countdown timer web app.

## Deployment
[![Netlify Status](https://api.netlify.com/api/v1/badges/4c71b99b-236b-4b1d-914e-22527a0b3036/deploy-status)](https://app.netlify.com/sites/thymer/deploys)

https://thymer.net


## The Goal
I wanted to create a free minimalist stopwatch and countdown timer app that I could quickly access from any browser.

## Technology Stack

| Technology    	| Use           	  | Description     	|
| :------------------|:-------------------| :----------------	|
| HTML, CSS, JS 			| Languages     | 				  |
| React	| Front-end			  |	JavaScript library for building user interfaces            |
|react-router | Routing | Declarative routing for React apps at any scale|
|react-toastify|UI Notifications| React-Toastify allows you to add notifications to your app with ease.|

## Project Specifications
* Provide a countdown timer interface that handles minutes and seconds.
* Provide a stopwatch interface that handles minutes and seconds.
* Ability to start, stop, and reset each interface.
* Pop-up notifying the user that the countdown timer is complete.

## To Be Completed
* More graceful handling of maximum times on countdown timer
* Mitigate stopwatch count stoppage when tab becomes inactive
* Revamp interface to fit hours in addition to minutes and seconds

## Anatomy of Project


| File/Folder    	| Purpose           	  |
| :------------------|:-------------------|
| src/routes/stopwatch.jsx	 			| Stopwatch interface|
| src/routes/timer.jsx		 			| Countdown timer interface    |
| src/components/Footer.js	 			| Footer     |
| src/App.js| Entry component     |
| src/App.css| Main styling     |



## License
MIT License

Copyright (c) 2022 Frank Santaguida

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
