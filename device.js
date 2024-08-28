document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const deviceId = urlParams.get('id');
    const device = devices.find(d => d.id === deviceId);

    if (device) {
        updatePageContent(device);
    } else {
        document.getElementById('device-title').textContent = 'Device Not Found';
        document.getElementById('device-content').innerHTML = '<p>The requested device could not be found.</p>';
    }
});

function updatePageContent(device) {
    document.getElementById('device-title').textContent = device.name;
    const content = document.getElementById('device-content');
    content.innerHTML = `
        <div class="device-control">
            <img src="${device.icon}" alt="${device.name}" class="device-icon">
            <h2>${device.name} Controls</h2>
            ${device.controls.map(control => createControl(control)).join('')}
        </div>
        <div class="device-info">
            <h3>Description</h3>
            <p>${device.description}</p>
            <h3>Features</h3>
            <ul>
                ${device.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;
    addControlListeners(device);
}

function createControl(control) {
    switch (control.type) {
        case 'slider':
            return `
                <div class="control-group">
                    <label for="${control.label}">${control.label}:</label>
                    <input type="range" id="${control.label}" min="${control.min}" max="${control.max}" value="${control.value}">
                    <span id="${control.label}-value">${control.value}${control.unit}</span>
                </div>
            `;
        case 'buttons':
            return `
                <div class="control-group">
                    <label>${control.label}:</label>
                    <div class="button-group">
                        ${control.options.map(option => `<button class="mode-btn">${option}</button>`).join('')}
                    </div>
                </div>
            `;
        case 'color':
            return `
                <div class="control-group">
                    <label for="${control.label}">${control.label}:</label>
                    <input type="color" id="${control.label}" value="#ffffff">
                </div>
            `;
        case 'toggle':
            return `
                <div class="control-group">
                    <button id="${control.label}-btn" class="toggle-btn">${control.label} On/Off</button>
                </div>
            `;
        default:
            return '';
    }
}

function addControlListeners(device) {
    device.controls.forEach(control => {
        switch (control.type) {
            case 'slider':
                const slider = document.getElementById(control.label);
                const value = document.getElementById(`${control.label}-value`);
                slider.addEventListener('input', function() {
                    value.textContent = this.value + control.unit;
                });
                break;
            case 'buttons':
                const buttons = document.querySelectorAll('.mode-btn');
                buttons.forEach(btn => {
                    btn.addEventListener('click', function() {
                        buttons.forEach(b => b.classList.remove('active'));
                        this.classList.add('active');
                    });
                });
                break;
            case 'toggle':
                const toggleBtn = document.getElementById(`${control.label}-btn`);
                toggleBtn.addEventListener('click', function() {
                    this.classList.toggle('active');
                });
                break;
        }
    });
}