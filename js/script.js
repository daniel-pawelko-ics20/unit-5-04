// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"


// Defining function that actives when user presses "Check" Button
function userInputClick() {
  // Get input from user and store it in variable
  const age = parseInt(document.getElementById("age-entered").value)
  const day = document.getElementById("day-entered").value

  // Checks if user should go to the movies
  if ((day == "tuesday" || day == "thursday") || (age > 12 && age < 21)) {
    document.getElementById("output").innerHTML = "You should go to the museum because you will get a discount"
  } else {
    document.getElementById("output").innerHTML = "You should not go to the museum today because you will not get a discount"
  }
}