document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const symptomSelect = document.getElementById('symptoms');
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = key.charAt(0).toUpperCase() + key.slice(1);
                    symptomSelect.appendChild(option);
                }
            }
        });
});

document.getElementById('apply-button').addEventListener('click', function() {
    const symptom = document.getElementById('symptoms').value;
    if (symptom) {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                const condition = data[symptom];
                if (condition) {
                    const conditionList = document.getElementById('condition-list');
                    conditionList.innerHTML = `
                        <li><strong>Cause:</strong> ${condition.cause}</li>
                        <li><strong>Info:</strong> ${condition.info}</li>
                        <li><strong>Cases:</strong> ${condition.cases}</li>
                        <li><strong>Treatment:</strong> ${condition.treatment}</li>
                        <li><strong>Hospitals:</strong> ${condition.hospitals}</li>
                    `;
                    document.getElementById('results').style.display = 'block';
                }
            });
    }
});









document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const diseaseSelect = document.getElementById('diseases');
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = key.charAt(0).toUpperCase() + key.slice(1);
                    diseaseSelect.appendChild(option);
                }
            }
        });
});

document.getElementById('apply-button').addEventListener('click', function() {
    const symptom = document.getElementById('diseases').value;
    if (symptom) {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                const condition = data[symptom];
                if (condition) {
                    const conditionList = document.getElementById('condition-list');
                    conditionList.innerHTML = `
                        <li><strong>Info:</strong> ${condition.info}</li>
                        <li><strong>Cause:</strong> ${condition.cause.replace(/\n/g, '<br>')}</li>
                        <li><strong>Cases:</strong> ${condition.cases.replace(/\n/g, '<br>')}</li>
                        <li><strong>Treatment:</strong> ${condition.treatment.replace(/\n/g, '<br>')}</li>
                        <li><strong>Hospitals:</strong> ${condition.hospitals.replace(/\n/g, '<br>')}</li>
                    `;
                    document.getElementById('results').style.display = 'block';
                }
            });
    }
});
