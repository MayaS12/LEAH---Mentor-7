//artist validation form
const arvalidateForm = document.querySelector('#artist-form');

arvalidateForm.addEventListener('submit', (e) => {
  e.preventDefault();

var name = validateForm['name'].value;
var link1 = validateForm['link1'].value;
var phone = validateForm['phone'].value;
var email = validateForm['email'].value;
var artistType = document.getElementById('artist-type').value
var genre = document.getElementById('genre').value
var instrument = document.getElementById('instrument').value
var state = document.getElementById('state').value
var fee = document.getElementById('fee').value

if(name == "" || link1 == "" || phone == "" || email == ""){
    alert('Please enter required input');
}else{
   return db.collection('artists').doc(cred.user.uid).set({
    name: name,
    phone: phone,
    email: email,
    links: link1,
    artistType: artistType,
    genre: genre,
    instrument: instrument,
    state: state,
    fee: fee 
   }).then(()=>{
    console.log("artist info added")
    const formLinks = document.querySelectorAll('.artist-form');
    formLinks.forEach(item => item.style.display = "none")
   })
}
})

//create profile display with firestore data
function renderProfileDisplay(doc){
   document.getElementById('profile-name').innerHTML = `Username: ${doc.data().name}`

}

 //get documents from firestore
 db.collection('artists').get().then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
      console.log(doc.data())
    })
  })