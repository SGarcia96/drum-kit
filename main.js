window.addEventListener("keydown", (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)

  key.classList.add("playing")
  audio.currentTime = 0 // rewind audio to 0
  audio.play()
})

const keys = document.querySelectorAll(".key")

function removeTransition(event) {
  if (event.propertyName !== "transform") return // skip it if it's not a transform
  this.classList.remove("playing") // this aim to key
}
keys.forEach((key) => key.addEventListener("transitionend", removeTransition))
