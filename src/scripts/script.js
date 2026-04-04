// Load everything after page loads
document.addEventListener("DOMContentLoaded", function () {
loadComponent("src/components/header.html", "#header", initProfilePopup);
loadComponent("src/components/footer.html", "#footer");
loadProjects();
});

// Load header/footer
function loadComponent(path, selector, callback) {
fetch(path)
.then(response => {
if (!response.ok) {
throw new Error("Failed to load " + path);
}
return response.text();
})
.then(data => {
const element = document.querySelector(selector);
if (element) {
element.innerHTML = data;


            // Run callback AFTER component loads
            if (callback) callback();
        }
    })
    .catch(error => console.error(error));


}

// Load projects
function loadProjects() {
fetch("src/data/projects.json")
.then(response => response.json())
.then(projects => {
const container = document.getElementById("projects");
if (!container) return;

        projects.forEach(project => {
            const card = document.createElement("div");
            card.className = "project-card";

            card.innerHTML = `
                <h3>${project.title}</h3>
                <p><strong>Duration:</strong> ${project.duration}</p>
                <p><strong>Role:</strong> ${project.role}</p>

                <p><strong>Skills:</strong></p>
                <ul>
                    ${project.skills.map(skill => `<li>${skill}</li>`).join("")}
                </ul>

                <p><strong>Key Contributions:</strong></p>
                <ul>
                    ${project.contributions.map(item => `<li>${item}</li>`).join("")}
                </ul>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error("Error loading projects:", error));


}

// ✅ Proper popup initialization (runs AFTER header loads)
function initProfilePopup() {
const profileImg = document.getElementById("profileImage");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

if (!profileImg || !modal || !modalImg || !closeBtn) return;

profileImg.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


}
