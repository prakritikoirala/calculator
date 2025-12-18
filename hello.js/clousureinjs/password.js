// Create a function createPassword(password)
// Return a function that checks कि input password सही छ कि छैन।
function  createpassword(passkey){
    let password = "1234";
    // let passkey ="" ;
    if(passkey===password){
        console.log("correct",password);}
        else{
console.log("incorrect:");
        }
function checkpassword(){
    console.log(createpassword);
}

        return checkpassword;
    }
    let check = createpassword("35");
    check(1);
