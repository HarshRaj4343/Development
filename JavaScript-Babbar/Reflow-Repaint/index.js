// Code 1
const t1 = performance.now(); // Start measuring time

for (let i = 0; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = `This is paragraph ${i + 1}.`;
    document.body.appendChild(para);
}

const t2 = performance.now(); // End measuring time

console.log(t2-t1);
// 100 reflows + repaints


// Code 2
const t3 = performance.now(); // Start measuring time
let mydiv = document.createElement('div');

for (let i = 0; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = `This is paragraph ${i + 1}.`;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4 = performance.now(); // End measuring time

console.log(t4-t3);
// 1 reflow + repaint


// Reflow : process of calculating position / dimension of an element -> computationally expensive process
// Repaint : process of displaying content/element pixel by pixel -> less expensive than reflow


