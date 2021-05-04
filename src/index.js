document.addEventListener("DOMContentLoaded", () => {



  function stop(event) {
    event.preventDefault();
  }
  function getValue() {
    return document.querySelector('#new-task-description').value
  }

  function createMenuItem() {
    let li = document.createElement('li');
    li.textContent = getValue();
    return li;
}

  function addMenuItem() {
    document.querySelector("#tasks").appendChild(createMenuItem())
  }

function all(event) {
  stop(event)
  addMenuItem()
  
  
}

  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', all)
});
