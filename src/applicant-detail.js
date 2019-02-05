const name = document.getElementById('name');
const position = document.getElementById('position');
const weapons = document.getElementById('weapons');

const json = window.localStorage.getItem('applicant');
const mobApplicant = JSON.parse(json);

name.textContent = mobApplicant.name;
position.textContent = mobApplicant.position;
weapons.textContent = mobApplicant.chosenWeapons.join(' ');

