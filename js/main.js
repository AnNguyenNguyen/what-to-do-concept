let toDoList = [
  {
    listItem:`Research for Ubisoft`,
    comState: false
  },

  {
    listItem:`Create 2 mockups for Durex`,
    comState: true
  },

  {
    listItem:`Prototype for Carl`,
    comState: false
  },

  {
    listItem:`Submit website for Rob's assignment`,
    comState: false
  },

  {
    listItem:`Buy food`,
    comState: true
  },
];

toDoList.forEach(itm => {
  let oneListItem = document.createElement(`li`);
  oneListItem.innerHTML = itm.listItem;
  oneListItem.classList.add(`listItem`);

//if a task is Done
  if (itm.comState == true)
  oneListItem.classList.add (`complete`);

  if (itm.comState == false)
  oneListItem.classList.add (`task-available`);
  document.getElementById('toDoList').appendChild (oneListItem);
});
