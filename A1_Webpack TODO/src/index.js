import { myNote } from "./Note";

import("./index.css")

// creating logo
import Logo from "../image/logo.jpg"

const myLogo = new Image()
myLogo.src = Logo

// creating title of page
const title = document.createElement("h2")
title.textContent = "My Notes"

// creating input for user
const inputBox = document.createElement("input")
inputBox.type = "text"
inputBox.placeholder = "Enter text here"
inputBox.id = ("writeNote")

// appending above dom elements to root
document.getElementById("root").append(myLogo, title, inputBox)

// adding event listener to input box
document.getElementById("writeNote").addEventListener("keypress", myNote)