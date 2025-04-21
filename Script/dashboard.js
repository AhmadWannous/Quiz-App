const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser || currentUser.email !== "admin@quiz.com") {
    alert("Access denied. Admins only.");
    window.location.href = "index.html";
}

const users = JSON.parse(localStorage.getItem("users")) || [];
const userTable = document.getElementById("userTable");

if (users.length === 0) {
    userTable.innerHTML = "<p>No registered users yet.</p>";
} else {
    let html = `
    <table border="1" cellspacing="0" cellpadding="10">
        <thead>
        <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Scores</th>
        </tr>
        </thead>
        <tbody>
    `;

    users.forEach(user => {
        const fullName = `${user.firstName} ${user.lastName}`;
        const scores = user.scores?.length
            ? user.scores.map(s => `${s.quiz}: ${s.score}`).join("<br>")
            : "No scores yet";

        html += `
        <tr>
        <td>${fullName}</td>
        <td>${user.email}</td>
        <td>${scores}</td>
        </tr>
    `;
    });

    html += `</tbody></table>`;
    userTable.innerHTML = html;
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}
