//YOUR FIREBASE LINKS
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

room_name  = localStorage.getItem("Room_name")
user_name = localStorage.getItem("name_of_user_lcs")
console.log(room_name + user_name)

function send(){
      console.log("send button is clicked")
      msg = document.getElementById("message").value
      if(msg.trim() == ""){
            alert("Enter a valid message")
      }
      else{

      
      firebase.database().ref(room_name).push({
            Name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("message").value = ""
}
     }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
     Name = message_data["Name"]
     message = message_data['message']
     like = message_data['like']
     name_with_tag = "<h4>" + Name + "<img class = 'user_tick' src = 'tick.png'> </h4>"
     console.log("code done")
     message_with_tag = "<h4 class = 'message_h4'>" + message +"</h4>"
     like_button = "<button class = 'btn btn-warning' id =" +firebase_message_id + "value = " +like+ " onclick = 'updateLike(this.id)'>"
     span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up>Like:'" + like + "</span></button><hr>"
     row = name_with_tag + message_with_tag + like_button + span_with_tag
     console.log("message sent")
     document.getElementById("output").innerHTML += row
     //End code
      } });  }); }
getData();
function updateLike(message_id){
      button_id = message_id
      likes = document.getElementById(button_id).value
      Updated_likes = Number(likes)+1
      firebase.database().ref(room_name).child(message_id).update({
            like:Updated_likes
      })
}
function logout(){
      localStorage.removeItem("name_of_user_lcs");
      localStorage.removeItem("Room_name")
      window.location.replace("index.html")
}
// 9916967085
