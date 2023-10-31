const contact = document.querySelector('.Contacts');
// console.log(contact);
const modal = document.querySelector('.modal');
const cross = document.querySelector('.cross');
console.log(cross);

contact.addEventListener('click', function() {
    modal.classList.add('active')
})

cross.addEventListener('click', function() {
    modal.classList.remove('active')
})