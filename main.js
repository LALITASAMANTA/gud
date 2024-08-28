document.addEventListener('DOMContentLoaded', function() {
    const deviceContainer = document.getElementById('deviceContainer');
    
    devices.forEach(device => {
        const deviceCard = createDeviceCard(device);
        deviceContainer.appendChild(deviceCard);
    });
});

function createDeviceCard(device) {
    const card = document.createElement('div');
    card.className = 'deviceCard';
    card.setAttribute('data-device', device.id);
    
    const link = document.createElement('a');
    link.href = `device.html?id=${device.id}`;
    link.className = 'device-link';
    
    const icon = document.createElement('div');
    icon.className = 'card-icon';
    const img = document.createElement('img');
    img.src = device.icon;
    img.alt = device.name;
    icon.appendChild(img);
    
    const name = document.createElement('span');
    name.className = 'card-name';
    name.textContent = device.name;
    
    link.appendChild(icon);
    link.appendChild(name);
    card.appendChild(link);
    
    return card;
}
