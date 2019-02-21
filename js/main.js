let toDoList = [
  {
    listItem:`task01`,
    comState: true
  },

  {
    listItem:`task02`,
    comState: true
  },

  {
    listItem:`task03`,
    comState: true
  },

  {
    listItem:`task04`,
    comState: false
  },

  {
    listItem:`task05`,
    comState: true
  },
];

toDoList.forEach(itm => {
  let oneListItem = document.createElement(`li`);
  oneListItem.innerHTML = itm.listItem;
  oneListItem.classList.add(`listItem`);

  if (itm.comState == true)
  oneListItem.classList.add (`complete`);

  document.getElementById('toDoList').appendChild (oneListItem);
});
