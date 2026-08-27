// it is a lightweight document object that can hold a portion of the DOM tree.
// while doing addition to this, it does not do any reflow or repaint, but when we add this to the DOM tree, it will do reflow and repaint.

let docfrag = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = `This is paragraph ${i + 1}.`;
    docfrag.appendChild(para);
}

document.body.appendChild(docfrag);

// no reflow and no repaint while adding to the document fragment, but when we add this to the DOM tree, it will do reflow and repaint.