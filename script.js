fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Call a function to display the data
        displayCV(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function displayCV(data) {
    const cvContainer = document.getElementById('cv-container');
    // Code to dynamically insert data into the HTML will go here
}
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        displayCV(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function displayCV(data) {
    // --- Personal Information ---
    if (data.personalInformation) {
        document.getElementById('name').textContent = data.personalInformation.name || '';
        document.getElementById('title').textContent = data.personalInformation.title || '';
        document.getElementById('email').textContent = data.personalInformation.email || '';
        document.getElementById('phone').textContent = data.personalInformation.phone || '';
        document.getElementById('linkedin').textContent = data.personalInformation.linkedin || '';
        document.getElementById('github').textContent = data.personalInformation.github || '';
        document.getElementById('location').textContent = data.personalInformation.location || '';
    }

    // --- Work Experience ---
    const workEntriesDiv = document.getElementById('work-entries');
    workEntriesDiv.innerHTML = ''; // Clear existing content
    if (data.workExperience && data.workExperience.length > 0) {
        data.workExperience.forEach(item => {
            const entry = document.createElement('div');
            entry.classList.add('work-entry');
            entry.innerHTML = `
        <h3>${item.title || ''}</h3>
        <p class="company">${item.company || ''} - ${item.years || ''}</p>
        <p>${item.description || ''}</p>
      `;
            workEntriesDiv.appendChild(entry);
        });
    }

    // --- Education ---
    const educationEntriesDiv = document.getElementById('education-entries');
    educationEntriesDiv.innerHTML = ''; // Clear existing content
    if (data.education && data.education.length > 0) {
        data.education.forEach(item => {
            const entry = document.createElement('div');
            entry.classList.add('education-entry');
            entry.innerHTML = `
        <h3>${item.degree || ''}</h3>
        <p class="institution">${item.institution || ''} - ${item.years || ''}</p>
      `;
            educationEntriesDiv.appendChild(entry);
        });
    }

    // --- Technical Skills ---
    const techSkillsList = document.getElementById('tech-skills-list');
    techSkillsList.innerHTML = ''; // Clear existing content
    if (data.techSkills && data.techSkills.length > 0) {
        data.techSkills.forEach(skill => {
            const listItem = document.createElement('li');
            listItem.textContent = skill;
            techSkillsList.appendChild(listItem);
        });
    }

    // --- Soft Skills ---
    const softSkillsList = document.getElementById('soft-skills-list');
    softSkillsList.innerHTML = ''; // Clear existing content
    if (data.softSkills && data.softSkills.length > 0) {
        data.softSkills.forEach(skill => {
            const listItem = document.createElement('li');
            listItem.textContent = skill;
            softSkillsList.appendChild(listItem);
        });
    }

    // --- Projects ---
    const projectEntriesDiv = document.getElementById('project-entries');
    projectEntriesDiv.innerHTML = ''; // Clear existing content
    if (data.projects && data.projects.length > 0) {
        data.projects.forEach(item => {
            const entry = document.createElement('div');
            entry.classList.add('project-entry');
            entry.innerHTML = `
        <h3>${item.name || ''}</h3>
        <p class="description">${item.description || ''}</p>
        ${item.link ? `<p><a href="${item.link}" target="_blank">View Project</a></p>` : ''}
      `;
            projectEntriesDiv.appendChild(entry);
        });
    }
}