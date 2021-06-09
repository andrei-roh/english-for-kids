//footer
const footer = document.createElement('footer');
footer.id = 'footer';

const linkBox = document.createElement('div');
linkBox.classList.add('link_box');

const gitLink = document.createElement('a');
gitLink.classList.add('github_link');
gitLink.href = 'https://github.com/andrei-roh';
gitLink.innerHTML =
  '<img style="width: 37.135px" src="./assets/img/author.jpg">';

const logoLink = document.createElement('a');
logoLink.href = 'https://rs.school/js/';
logoLink.classList.add('logo_link');
logoLink.innerHTML = '<img src="./assets/img/rs_school_js.svg">';

const yearSpan = document.createElement('span');
yearSpan.classList.add('year');
yearSpan.innerHTML = '2020';

document.body.appendChild(footer);
footer.appendChild(linkBox);
linkBox.appendChild(gitLink);
linkBox.appendChild(logoLink);
footer.appendChild(yearSpan);
