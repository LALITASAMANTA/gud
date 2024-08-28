const devices = [
    {
        id: 'ac',
        name: 'Air Conditioner',
        icon: 'C:\\Users\\ADMIN\\Downloads\\fan.jfif',
        controls: [
            { type: 'slider', label: 'Temperature', min: 16, max: 30, value: 22, unit: '°C' },
            { type: 'buttons', label: 'Mode', options: ['Cool', 'Fan', 'Dry'] },
            { type: 'toggle', label: 'Power' }
        ],
        description: "Smart air conditioner with temperature and humidity control.",
        features: ["Temperature control", "Humidity sensing", "Energy efficient", "Remote control via app"]
    },
    {
        id: 'smart-lights',
        name: 'Smart Lights',
        icon: 'https://example.com/icons/smart-lights.svg',
        controls: [
            { type: 'slider', label: 'Brightness', min: 0, max: 100, value: 50, unit: '%' },
            { type: 'color', label: 'Color' },
            { type: 'toggle', label: 'Power' }
        ],
        description: "Color-changing smart lights with scheduling capabilities.",
        features: ["Multiple colors", "Brightness control", "Scheduling", "Voice control compatible"]
    },
    // Add more devices here...
];
