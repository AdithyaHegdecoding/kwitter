function log_in(){
    
    name_of_user = document.getElementById("name").value
    small_username = name_of_user.toLowerCase()
    if(name_of_user.trim() == ""){
   alert("Enter a valid username blank usernames are not allowed")
    }
    
    else{
        localStorage.setItem("name_of_user_lcs" , name_of_user)
        window.location = "kwitter_room.html"  
    }
    

}
function logout(){
    localStorage.removeItem("name_of_user_lcs")
    localStorage.removeItem("Room_name")
    window.location.replace("index.html")
}
