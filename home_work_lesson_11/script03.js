
function createPythagorasTable(size) {
    const container = document.querySelector('.wrapper');
    const table = document.createElement('table');
    table.className = 'pythagoras-table';

    for (let i = 0; i <= size; i++) {
        const row = document.createElement('tr');
        
        for (let j = 0; j <= size; j++) {
            const cell = i === 0 || j === 0 ? document.createElement('th') : document.createElement('td');
            
            if (i === 0 && j === 0) {
                cell.textContent = '';
            } else if (i === 0) {
                cell.textContent = j;
            } else if (j === 0) {
                cell.textContent = i;
                cell.className = 'header-col';
            } else {
                cell.textContent = i * j;
            }

            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    container.innerHTML = '';
    container.appendChild(table);
};

createPythagorasTable(10);