/* ============================================================
   1. SELECT THE ELEMENTS WE NEED FROM THE HTML
   ============================================================
   querySelector finds ONE element matching a CSS-style selector.
   Compare these selectors to the ids/classes in index.html --
   they're the exact same names, just with # or . in front. */

const form      = document.querySelector("#task-form");
const input     = document.querySelector("#task-input");
const list      = document.querySelector("#task-list");
const countText = document.querySelector("#task-count");
const filterButtons = document.querySelectorAll(".filter-btn");


/* ============================================================
   2. OUR DATA
   ============================================================
   This array is the "source of truth" -- the actual list of
   tasks. Everything on screen is just a visual copy of this
   array. Whenever it changes, we re-draw the screen. */

let tasks = [];          // e.g. [{ text: "Buy milk", done: false }]
let currentFilter = "all";


/* ============================================================
   3. THE RENDER FUNCTION
   ============================================================
   This takes the "tasks" array and rebuilds the visible <ul>
   to match it. We call this any time "tasks" changes. */

function render() {
    // First, work out which tasks to show based on the filter
    const visibleTasks = tasks.filter((task) => {
        if (currentFilter === "active") return !task.done;
        if (currentFilter === "done") return task.done;
        return true; // "all"
    });

    // Clear the list, then rebuild it from scratch
    list.innerHTML = "";

    visibleTasks.forEach((task) => {
        // Find this task's real position in the full "tasks" array
        // (not just the filtered list) so we can update the right one
        const realIndex = tasks.indexOf(task);

        const li = document.createElement("li");
        if (task.done) {
            li.classList.add("done");
        }

        // template literal: lets us mix in variables with ${ }
        li.innerHTML = `
            <input type="checkbox" ${task.done ? "checked" : ""} data-index="${realIndex}">
            <span>${task.text}</span>
            <button data-index="${realIndex}">Delete</button>
        `;

        list.appendChild(li);
    });

    // Update the little "3 tasks" counter at the bottom
    const remaining = tasks.filter((t) => !t.done).length;
    countText.textContent = `${remaining} task${remaining === 1 ? "" : "s"} remaining`;
}


/* ============================================================
   4. ADDING A TASK
   ============================================================
   "submit" fires when the form's button is clicked (or Enter
   is pressed). We stop the page from reloading (the browser's
   default form behavior), then add the new task to our array. */

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim(); // trim() removes extra spaces

    if (text === "") {
        return; // ignore empty submissions
    }

    tasks.push({ text: text, done: false });

    input.value = "";  // clear the input box
    render();           // redraw the list
});


/* ============================================================
   5. CHECKING OFF / DELETING A TASK
   ============================================================
   Instead of adding a listener to every single checkbox/button
   (there could be many, and they keep changing), we add ONE
   listener to the whole list and check what was actually
   clicked. This pattern is called "event delegation". */

list.addEventListener("click", (event) => {
    const index = Number(event.target.dataset.index);

    if (event.target.matches("input[type='checkbox']")) {
        tasks[index].done = event.target.checked;
        render();
    }

    if (event.target.matches("button")) {
        tasks.splice(index, 1); // remove 1 item at that position
        render();
    }
});


/* ============================================================
   6. SWITCHING FILTERS (All / Active / Done)
   ============================================================ */

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // dataset.filter reads the "data-filter" attribute in the HTML
        currentFilter = button.dataset.filter;

        // Update which button LOOKS active
        filterButtons.forEach((b) => b.classList.remove("active"));
        button.classList.add("active");

        render();
    });
});


/* ============================================================
   7. INITIAL RENDER
   ============================================================
   Draw the (currently empty) list once when the page first loads. */

render();