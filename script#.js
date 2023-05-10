const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=> {
    wrapper.classlist.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classlist.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    wrapper.classlist.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classlist.remove('active-popup');
});