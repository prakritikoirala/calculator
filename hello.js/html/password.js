// username र password छ।
// यदि username="admin" र password="1234" → "Login Successful"
// username="admin" तर password गलत → "Wrong Password"
// username गलत → "User not found"

let username = "admin";
let password= "1234";
if(username=="admin"&& password=="1234"){
console.log("login scuessfull!");
}
else{
    console.log("wrong password");}