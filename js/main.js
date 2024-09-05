
const newTaskBtnDOM = document.querySelector('.main-header .btn1');
const lightBoxDOM = document.querySelector('.lightbox');
const lightBoxCloseXDOM = lightBoxDOM.querySelector('.close');
const lightBoxBackgroundDOM = lightBoxDOM.querySelector('.background');
const allTaskDOMs = document.querySelectorAll('.task'); // visos uzduotys
let taskMenuBackgroundDOM = document.querySelector('.task-menu-background');
let lastOpenMenuTaskIndex = -1;


function openLightBox () {
    lightBoxDOM.dataset.visible = 'true';
}
function closeLightBox () {
    lightBoxDOM.dataset.visible = 'false';
}
function closeTaskMenu () {
    if (lastOpenMenuTaskIndex >= 0) {
        allTaskDOMs[lastOpenMenuTaskIndex].querySelector('.more-actions').dataset.visible = 'false';
    }
    taskMenuBackgroundDOM.classList.remove('active');
}


// task menu with triple dots
for (let i = 0; i < allTaskDOMs.length; i++) {
    
    // kai eini per kiekviena uzduoti randamas .more elementas
       const taskDOM = allTaskDOMs[i];
       const moreDOM = taskDOM.querySelector('.more');
       const moreActionsDOM = taskDOM.querySelector('.more-actions');
       
           moreDOM.addEventListener('click', () => {
               if (lastOpenMenuTaskIndex === i) {
                   moreActionsDOM.dataset.visible = 'false';
                   taskMenuBackgroundDOM.classList.remove('active');
                   lastOpenMenuTaskIndex = -1;
               } else {
                   closeTaskMenu();
                   
                   moreActionsDOM.dataset.visible = 'true';
                   taskMenuBackgroundDOM.classList.add('active');
                   lastOpenMenuTaskIndex = i;
               }
           });
}


// lightbox with gray background
newTaskBtnDOM.addEventListener('click', () => {
    openLightBox();
    closeTaskMenu();
});
lightBoxCloseXDOM.addEventListener('click', () => {
    closeLightBox();
});
lightBoxBackgroundDOM.addEventListener('click', () => {
    closeLightBox();
});
taskMenuBackgroundDOM.addEventListener('click', () => {
    closeTaskMenu();
});

window.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
        closeLightBox();
        closeTaskMenu();
    }
});


