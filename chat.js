// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCfUqaSpTfJw5g7FQ1JW03x7DHR7fp-hd8",
    authDomain: "wequitterapp.firebaseapp.com",
    databaseURL: "https://wequitterapp-default-rtdb.firebaseio.com",
    projectId: "wequitterapp",
    storageBucket: "wequitterapp.appspot.com",
    messagingSenderId: "533756156233",
    appId: "1:533756156233:web:4969d8de203bca77362298"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}



