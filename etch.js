const body = document.querySelector('body')
const button = document.createElement('button')

button.textContent = "New Grid"

button.onclick = () => resetGrid()


function resetGrid(){
    
    const gridSize = prompt("How big do you want the grid to be? (?x? / Max:100)")

    

    if (gridSize > 100){
        gridSize = 100
    }

    
    
    document.querySelectorAll('.container').forEach(container => container.remove());
    


    for (let i = 0; i < gridSize; i++){
        const container = document.createElement('div')
        container.className = "container"
        container.style.display = "flex"
        
        for (let j = 0; j < gridSize; j++){
            const square = document.createElement('div')
            square.className = "square"
            square.style.border = "1px solid black"
            square.style.width = "20px"
            square.style.height = "20px"

            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'darkgrey'
            })
    
    
            container.appendChild(square)
        }
        body.appendChild(container)
    }
}

body.appendChild(button)
