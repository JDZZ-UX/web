const items = document.querySelectorAll('.draggable');
const bins = document.querySelectorAll('.bin');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart-btn');

let correctItems = 0;

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

bins.forEach(bin => {
    bin.addEventListener('dragover', dragOver);
    bin.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('type', event.target.dataset.type);
    event.dataTransfer.setData('id', event.target.alt);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const itemType = event.dataTransfer.getData('type');
    const binType = event.target.dataset.type;
    const itemId = event.dataTransfer.getData('id');
    const droppedItem = document.querySelector(`img[alt='${itemId}']`);

    if (itemType === binType) {
        correctItems++;
        droppedItem.classList.add('hidden');
        event.target.style.border = '3px solid #00e676';
    } else {
        event.target.style.border = '3px solid red';
    }
  
    if (correctItems === items.length) {
        message.textContent = '¡Felicidades! Todos los objetos fueron reciclados correctamente.';
        restartBtn.style.display = 'block';
    }
}

function restartGame() {
    items.forEach(item => item.classList.remove('hidden'));
    correctItems = 0;
    message.textContent = '';
    restartBtn.style.display = 'none';
    bins.forEach(bin => bin.style.border = '2px solid #333');
}