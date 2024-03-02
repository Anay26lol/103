Webcam.set({
width:350,
height:350,
image_format:'png',
png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';

    });
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zKAIq4UXk/model.jsol',modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
    
}