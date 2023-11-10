const contact = document.querySelector('.Contacts');
// console.log(contact);
const modal = document.querySelector('.container_modal');
const cross = document.querySelector('.container_cross');
console.log(cross);

contact.addEventListener('click', function() {
    modal.classList.add('active')
})

cross.addEventListener('click', function() {
    modal.classList.remove('active')
})