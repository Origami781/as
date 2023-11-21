function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	jumpsound = loadSound("jump.wav")
	coinsound = loadSound("coin.wav")
	stompingsound = loadSound("kick.wav")
	marioisded = loadSound("mariodie.wav")
	ithasended = loadSound("gameover.wav")
}

function setup() {
	canvas = createCanvas(1240, 336);
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('theconsole')
	posenet = ml5.poseNet(video, modelLoaded)
	posenet.on('pose', poseXY)
}

function draw() {
	game()
}

function modelLoaded() {
	console.log("✓")
}

function poseXY(results) {
	if (results.length > 0) {
		console.log(results)
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
		console.log(noseX, " ", noseY)
	}

}






