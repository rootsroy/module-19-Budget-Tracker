# Installation 

To start using this repository, clone the repo and `run npm i` in the command line to install dependencies. Run `npm start` to start the Express.js server on localhost:3001.

# Usage

To use the budget tracker, simply provide a transaction name and transaction amount, then click "add funds" or "subtract funds". To download the application to your desktop, click on the "Install Budget Tracker" icon found in the right-hand side of the address bar of your Google Chrome browser.


# Budget Tracker 

A simple budget tracker PWA featuring offline support.
It can be downloaded to your desktop and mobile devices.

View the deployed page at [Budget Tracker](_______).

# User Story

AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling

# Acceptance Criteria

GIVEN a budget tracker without an internet connection

[X]WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
[X]WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
