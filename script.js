document.addEventListener("DOMContentLoaded", function () {
  const expenseForm = document.getElementById("expenseForm");
  const expenseList = document.getElementById("expenseList");

  expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;

    const expenseItem = document.createElement("div");
    expenseItem.innerHTML = `
            <strong>Category:</strong> ${category}<br>
            <strong>Amount:</strong> $${amount}<br>
            <strong>Description:</strong> ${description}<br><br>
        `;

    expenseList.appendChild(expenseItem);

    // Clear form fields
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
  });
});
