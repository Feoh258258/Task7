document.addEventListener("DOMContentLoaded", function() {

  let todos = [
    {
      text : 'Read new book',
      isDone : false,
      id : 0
    },
    {
      text : 'Add new bookmark to bookmarklist',
      isDone : false,
      id : 1
    },
    {
      text : 'Buy a pet',
      isDone : false,
      id : 2
    },
    {
      text : 'Wash my hand',
      isDone : true,
      id : 3
    }
    ];

  function render(data){
    const list = document.querySelector('.todos-list');
    
    list.innerHTML = data.map(todo => {
      const className = todo.isDone ? `class="done"` : '';
    return `<li ${className} data-id=${todo.id}>${todo.text}</li>`;
  }).join('');

  }
 

  function onTodoClick(ev) {
    console.log('Click to do', ev.target);
    let inText = ev.target.innerText;
    todos.forEach(todo => todo.text === inText ? todo.isDone = !todo.isDone : null);
    
    render(todos);

  }

document.querySelector('.todos-list').addEventListener('click', onTodoClick);



  const todoBtn = document.getElementById('todoBtn');

  todoBtn.onclick = function() {
    let todoInput = document.getElementById('todoInput').value;
    let newTask = {};
	
    newTask.text = todoInput;
    newTask.isDone = false;
    newTask.id = todos[todos.length-1].id+1;
	todos.unshift(newTask);
    render(todos);

  }//end onclick




  let allIsDoneBtn = document.getElementById('allIsDoneBtn');

  allIsDoneBtn.onclick = function() {
    for (let i =0; i<todos.length; i++){
      if(todos[i].isDone==false){
          todos[i].isDone = true;
      }
    }
    render(todos);
  }

  let IHToDoDoneBtn = document.getElementById('IHToDoDoneBtn');

  IHToDoDoneBtn.onclick = function() {
    for (let i =0; i<todos.length; i++){
      if(todos[i].isDone==true){
          todos[i].isDone = false;
      }
    }
    render(todos);
  }




  render(todos);
  









// function decodeMorse(morseCode) {
//   var ref = { 
//     '.-':     'a',
//     '-...':   'b',
//     '-.-.':   'c',
//     '-..':    'd',
//     '.':      'e',
//     '..-.':   'f',
//     '--.':    'g',
//     '....':   'h',
//     '..':     'i',
//     '.---':   'j',
//     '-.-':    'k',
//     '.-..':   'l',
//     '--':     'm',
//     '-.':     'n',
//     '---':    'o',
//     '.--.':   'p',
//     '--.-':   'q',
//     '.-.':    'r',
//     '...':    's',
//     '-':      't',
//     '..-':    'u',
//     '...-':   'v',
//     '.--':    'w',
//     '-..-':   'x',
//     '-.--':   'y',
//     '--..':   'z',
//     '.----':  '1',
//     '..---':  '2',
//     '...--':  '3',
//     '....-':  '4',
//     '.....':  '5',
//     '-....':  '6',
//     '--...':  '7',
//     '---..':  '8',
//     '----.':  '9',
//     '-----':  '0',
//   };

//   return morseCode
//     .split('   ')
//     .map(
//       a => a
//         .split(' ')
//         .map(
//           b => ref[b]
//         ).join('')
//     ).join(' ');
// }
//   let inputMorseCode = document.getElementById('inputMorseCode');
//   inputMorseCode.addEventListener('input', updateValue);

// function updateValue(e) {
//   morseCode.textContent = e.target.value;
// }

// let decoded = decodeMorse(inputMorseCode);
// console.log(decoded);





});//EndDOMLoaded
