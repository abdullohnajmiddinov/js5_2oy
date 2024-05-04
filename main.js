let div = document.querySelector('.div');
let ism = prompt('Ismingizni kiriting');
let yosh = prompt('Yoshingizni kiriting');
let p = document.createElement('p');
p.innerHTML = `${ism} ${yosh} yoshda`;
p.style.color = 'yellow';
div.appendChild(p);
