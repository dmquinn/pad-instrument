const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARESONE = 6;
const SQUARESTWO = 6;
const SQUARESTHREE = 6;
const SQUARESFOUR = 6;
const SQUARESFIVE = 6;
const notesOne = ["D3", "F#3", "G#4", "G4", "A3", "A#3"];
const notesTwo = ["F#4", "A#4", "F#3", "G#3", "A3", "A#3"];
const notesThree = ["A5", "C#5", "D5", "G#3", "A3", "A#3"];

const squareSound = [];

for (let i = 0; i < SQUARESONE; i++) {
	const square = document.createElement("div");
	square.classList.add("square");
	container.appendChild(square);
	squareSound.push[square];
	square.addEventListener("mousedown", (e) => {
		setColor(square);
		for (let i = 0; i < notesOne.length; i++) {
			squareSound[i] = notesOne[i] + 1;
		}

		for (let i = 0; i < notesTwo.length; i++) {
			squareSound[i] = notesTwo[i];
		}
		synthOne.triggerAttackRelease(notesOne[i]);
		synthTwo.triggerAttackRelease(notesTwo[i]);
		synthThree.triggerAttackRelease(notesThree[i]);
		console.log(notesOne[i], notesTwo[i], notesThree[i]);
	});

	square.addEventListener("mouseup", (e) => removeColor(square));
}

function setColor(element) {
	const color = getRandomColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.background = "#1d1d1d";
	element.style.boxShadow = "0 0 2px #000";
	synthOne.triggerRelease();
	synthTwo.triggerRelease();
	synthThree.triggerRelease();
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
const verb = new Tone.Reverb().toDestination();
const synthOne = new Tone.Synth().connect(verb);
const synthTwo = new Tone.Synth().connect(verb);
const synthThree = new Tone.Synth().connect(verb);
