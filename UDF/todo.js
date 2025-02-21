let todo = document.getElementById('form');
let arr =JSON.parse(localStorage.getItem('tasklist')) || [];

todo.addEventListener('submit',(event)=>{

    event.preventDefault();

    let taskname = document.getElementById('task').value;
    let priority = document.getElementById('priority').value;

    let data = {
        taskname,
        priority
    }

    let row = document.createElement('tr');

    let col1 = document.createElement('td');
    col1.innerText = data.taskname;

    let col2 = document.createElement('td');
    col2.innerText = data.priority;

    let col3 = document.createElement('td');
    col3.innerText = 'Delete';

    row.append(col1,col2,col3);

    console.log(row);

    let tbody = document.querySelector('tbody');

    tbody.appendChild(row);
    console.log(tbody);

    col3.addEventListener('click',()=>{
        row.remove();
    })

    document.getElementById('task').value = '';
    document.getElementById('priority').value = '';

    // arr.push(data)
    // let jsondata = JSON.stringify(data);
    // localStorage.setItem('tasklist', jsondata);

    // arr.map((el)=>{
    //     console.log(el);
    // })

})