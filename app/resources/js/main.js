
// User clicked on the add button
// if there is any tet inside item field add to list
document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;
    if (value) addItemTodo(value);

});

function addItemTodo(text){
  var item = document.createElement('li');
  item.innerText = text;
}
