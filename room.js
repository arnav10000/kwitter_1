var firebaseConfig = {
    apiKey: "AIzaSyC-m1vIv6rTgTgSE7w-es69NGghFQiq9-A",
    authDomain: "kwitter2-ee636.firebaseapp.com",
    databaseURL: "https://kwitter2-ee636-default-rtdb.firebaseio.com",
    projectId: "kwitter2-ee636",
    storageBucket: "kwitter2-ee636.appspot.com",
    messagingSenderId: "719846332197",
    appId: "1:719846332197:web:6c53a8f5524c0096c6accc",
    measurementId: "G-LHX4D87WSH"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;

        });
    });
}
getData();

function info(){
    window.alert("You can create room and chat");
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding Room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}
