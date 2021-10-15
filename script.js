const select = (query) => document.querySelector(query)
const body = document.querySelector('body')
const header = document.querySelector('header')
const title = document.querySelector('.title')
const inputSection = document.querySelector('.input-section')
const navLabel = document.querySelector('.nav-label')
const footer = document.querySelector('footer')
const button = document.querySelector('.toggle-label')

//console.log(body, header, title, inputSection, navLabel, footer, button)


const listDiv = document.querySelector('.list-items')
const taskContainer = document.querySelector('.task-container')
const taskInput = document.querySelector('.task-input')
const taskButton = document.querySelector('.fa-plus')

//console.log(listDiv, taskContainer, labelInput, taskButton)




var chores = []




//1. Dark-mode implementation-

const callbackfunction = () => {
    body.classList.toggle('dark')
}


button.addEventListener('click', callbackfunction)



//3. Deleting task from list-

const deleteTask = (value) => {
    const index = chores.indexOf(value)
    chores.splice(index, 1)
    //console.log(chores)
}


//2. Adding & removing task in the list-

actualInput = taskInput.value


const addTask = (actualInput) => {

    if (chores.includes(taskInput.value)) {
        alert(actualInput + " already exists!!")
        (console.log("already exist!"))
    }
    else {
        chores.push(taskInput.value)

        const template = `

            <div class="task"> 
                <input type="checkbox" id="check-button"/>
                <label class="task-input" for="check-button">${actualInput}</label>
            </div>
            
        `


        //console.log(taskInput.value)
        const element = document.createElement('div')
        const cancel = document.createElement('button')
        element.innerHTML = template
        element.appendChild(cancel)
        listDiv.appendChild(element)
        
        cancel.addEventListener('click', (e) => {
           const alert1 = window.confirm("Are you sure that you want to delete this task?")
           if (confirm) deleteTask(element.remove())
        })


        element.setAttribute('class', 'task-style')
        cancel.setAttribute('class', 'fa fa-times')

    }

}



taskButton.addEventListener('click', (event) => {
    addTask(taskInput.value)
})




