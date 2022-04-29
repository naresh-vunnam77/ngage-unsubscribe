
const header = document.getElementById("header");
const message = document.getElementById("message");
const button = document.getElementById("unsubscribe");
const emoji = document.getElementById("emoji");
const senderIdTag = document.getElementById("senderId");
const mobileNbrTag = document.getElementById("mobileNbr");

let senderId = senderIdTag.textContent
let mobileNbr = mobileNbrTag.textContent

button.addEventListener('click', () => { 
  header.innerHTML = "<h3>Unsubscribed !!</h3>";
  message.innerHTML = "<p>  We are sad to see you go ! You have been unsubscribed and will no longer hear from us.</p>";
  button.style.display = "none"
  emoji.style.display = "flex"
  submitToNgage()
  
})

const postData = {
  senderId : senderId,
  mobile:mobileNbr
}


const submitToNgage = async () => { 
  console.log(postData)
  
const res = await fetch('http://Localhost:3000/marvel/addToDnd', {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify(postData),
});

res.json().then(data => {
  console.log(data);
}).catch(err=>console.log(err));

}



