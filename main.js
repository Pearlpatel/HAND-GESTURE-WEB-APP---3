prediction="";

Webcam.set(
    {
        width:350,
        height:350,
        image_format:"png",
        png_quality:90
    }
);
camera_div=document.getElementById("camera");
Webcam.attach("#camera");

function take_selfie() {
    Webcam.snap(function (data_uri) {
       document.getElementById("review").innerHTML="<img id='pic' src='" +data_uri+ "'/>";
    });
}
console.log("ml5version",ml5.version);

hand_model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3Apj38xxZ/model.json",modelloaded);

function modelloaded() {
    console.log("model has been loaded");
}

function check() {
    img=document.getElementById("pic");
    hand_model.classify(img,gotresults);
}

function gotresults(error,results) {
    if(error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("pred").innerHTML=results[0].label;
        prediction=results[0].label;
        if (results[0].label=='Peace Sign') {
            document.getElementById("pred").innerHTML="&#9996;";
            document.getElementById("explain").innerHTML="The meaning is to have peace";

        }
        if (results[0].label=='Ok Sign') {
            document.getElementById("pred").innerHTML="&#128076;";
            document.getElementById("explain").innerHTML="I means ok";
        }
        if (results[0].label=='Good Job Sign') {
            document.getElementById("pred").innerHTML="&#128077;";
            document.getElementById("explain").innerHTML="I means good/ good job";
        }
        if (results[0].label=='Good Luck Sign') {
            document.getElementById("pred").innerHTML="&#129310;";
            document.getElementById("explain").innerHTML="I means good luck or for good luck";
        }
        if (results[0].label=='Rock Sign') {
            document.getElementById("pred").innerHTML="&#129304;";
            document.getElementById("explain").innerHTML="I means rock";
        }   
    }
}