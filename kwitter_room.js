
  var firebaseConfig = {
  apiKey: "AIzaSyCWq4LktcLnjChta3l76DQYGYTzDTmAlbU",
  authDomain: "kwitter-webapp-2e578.firebaseapp.com",
  databaseURL: "https://kwitter-webapp-2e578-default-rtdb.firebaseio.com",
  projectId: "kwitter-webapp-2e578",
  storageBucket: "kwitter-webapp-2e578.appspot.com",
  messagingSenderId: "312036625024",
  appId: "1:312036625024:web:54cfe17a6811273b74f465",
  measurementId: "G-QMW9YX0T05"
};

firebase.initializeApp(firebaseConfig);

function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "Adding Room Name "
  }); 

  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
       Room_names = childKey;
      
       console.log("Room Name -"+Room_Names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;

      //End code
      });
    }
getData();
