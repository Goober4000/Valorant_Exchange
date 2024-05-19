document.addEventListener('DOMContentLoaded', function() {
    fetch('postings') 
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('customersTable').getElementsByTagName('tbody')[0];
            data.forEach(customer => {
                const row = tableBody.insertRow();
                const idCell = row.insertCell(0);
                const nameCell = row.insertCell(1);
                const contextCell = row.insertCell(2);

                idCell.textContent = customer.id;
                nameCell.textContent = customer.name;
                contextCell.textContent = customer.context;
            });
        })
        .catch(error => console.error('Error:', error));
});