
var removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 774.266 774.266" style="enable-background:new 0 0 774.266 774.266;" xml:space="preserve" class=""><g><g> <g> <path d="M640.35,91.169H536.971V23.991C536.971,10.469,526.064,0,512.543,0c-1.312,0-2.187,0.438-2.614,0.875 C509.491,0.438,508.616,0,508.179,0H265.212h-1.74h-1.75c-13.521,0-23.99,10.469-23.99,23.991v67.179H133.916 c-29.667,0-52.783,23.116-52.783,52.783v38.387v47.981h45.803v491.6c0,29.668,22.679,52.346,52.346,52.346h415.703 c29.667,0,52.782-22.678,52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133,114.286,670.008,91.169,640.35,91.169z M285.713,47.981h202.84v43.188h-202.84V47.981z M599.349,721.922c0,3.061-1.312,4.363-4.364,4.363H179.282 c-3.052,0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715,182.339H129.551v-38.387c0-3.053,1.312-4.802,4.364-4.802 H640.35c3.053,0,4.365,1.749,4.365,4.802V182.339z" data-original="#000000" class="fill" fill="#000000"/> <rect x="475.031" y="286.593" width="48.418" height="396.942" data-original="#000000" class="fill" fill="#000000"/> <rect x="363.361" y="286.593" width="48.418" height="396.942" data-original="#000000" class="fill" fill="#000000"/> <rect x="251.69" y="286.593" width="48.418" height="396.942" data-original="#000000" class="fill" fill="#000000"/> </g> </g></g> </svg>'

var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26"> <path class="fill" d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/></svg>'


// User clicked on the add button
// if there is any tet inside item field add to list
document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;
    if (value) addItemTodo(value);
    document.getElementById('item').value = '';

});

function removeItem(){
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);

}

// Add a new item to the ToDo list
function addItemTodo(text){

  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;

  // Add a click event for remove item
  remove.addEventListener('click', removeItem)

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
}
