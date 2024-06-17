var firebaseConfig = {
      apiKey: "AIzaSyCBzvAnYVzg85XQUtPJ203DTIjwwBUvFC8",
      authDomain: "kwitter-database-fc665.firebaseapp.com",
      databaseURL: "https://kwitter-database-fc665-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-fc665",
      storageBucket: "kwitter-database-fc665.appspot.com",
      messagingSenderId: "1095294870923",
      appId: "1:1095294870923:web:3c27cf6371b400da32bb8e"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username = localStorage.getItem("name_of_user_lcs")
document.getElementById("username"). innerHTML = "Welcome " + username


function add_room(){

   room_name = document.getElementById("room_name").value 
   if (room_name.trim() == ""){
      alert("Enter a valid room name")

   }
   else{
   firebase.database().ref("/").child(room_name).update({
   purpose:"Adding room name"
   })
   localStorage.setItem("Room_name" , room_name)
   window.location = "kwitter_page.html"}

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row = "<div class = 'room_name' id = " + Room_names +" onclick = 'redirectToRoomName(this.id)'> # " +Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name)
localStorage.setItem("Room_name" , name)
 window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("name_of_user_lcs")
      localStorage.removeItem("Room_name")
      window.location.replace("index.html")
}

// 62248510