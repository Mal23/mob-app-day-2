const jsonString = window.localStorage.getItem('applicants');


let applicants = [];

if(jsonString) {
    applicants = JSON.parse(jsonString); 
}

const tbody = document.getElementById('mob-applicants');

for(let index = 0; index < applicants.length; index++) {
    const mobApplicant = applicants[index];

    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tdName = document.createElement('td');
    tr.appendChild(tdName);
    const link = document.createElement('a');
    tdName.appendChild(link);
    link.textContent = mobApplicant.name;
    link.href = 'app-detail.html?name=' + encodeURIComponent(mobApplicant.name);

    const tdPosition = document.createElement('td');
    tdPosition.textContent = mobApplicant.position;
    tr.appendChild(tdPosition);

    const tdWeapons = document.createElement('td');
    tdWeapons.textContent = mobApplicant.chosenWeapons.join(' ');
    tr.appendChild(tdWeapons);
    
}