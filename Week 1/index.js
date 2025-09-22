const body = document.body;

const header = document.createElement("header");
header.className = 'bg-gray-900 text-white flex items-center justify-between px-6 py-4';
header.innerHTML = '<h1>Header</h1>';

body.prepend(header);