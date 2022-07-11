var firebaseConfig = {
apiKey: "AIzaSyAh1ymA6e6iVGTBl-ku2698GGUt5hBocdk",
authDomain: "movieproject-bcfcd.firebaseapp.com",
projectId: "movieproject-bcfcd",
storageBucket: "movieproject-bcfcd.appspot.com",
messagingSenderId: "903538464366",
appId: "1:903538464366:web:be6acf333d4077ed75b87f",
measurementId: "G-L20J87XD1B"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open.href = "index.html";
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    window.location.href = "index.html";
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}
