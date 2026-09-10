

const close = document.getElementById("modal-cls-btn")
const title = document.getElementById("modal-title") 
const body = document.getElementById("modal-body")
const backdrop = document.getElementById("modal-backdrop")
const nodeButtons = document.querySelectorAll('button[data-info]')



const nodeContent= {
    roots:{
        title:"How long we are in this field",
        body : "7 years",
        link : "gallery.html"
    },
    trunk:{
        title:"programmes we offer",
        body : "vocab"
    },
    branch:{
        title:"what we specialize in",
        body : "speech therapy"
    },
    leaves:{
        title:"end product",
        body : "we ensure we bring them confidence and happiness"
    }


}


function openModal(nodeKey){

    const data = nodeContent[nodeKey];

    if(data){
        title.textContent = data.title;
        body.textContent = data.body;

        backdrop.classList.remove('opacity-0', 'pointer-events-none');
        backdrop.classList.add('opacity-100', 'pointer-events-auto');

    }

    
}

function closeModal(){
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
  
    
}

nodeButtons.forEach(button => {
  button.addEventListener('click', (event) => {

    const key = event.currentTarget.dataset.info ;
    openModal(key);

  });
});

// Listener for the explicit close button
close.addEventListener('click', closeModal);

// Listener for clicking outside the card on the backdrop
backdrop.addEventListener('click', (event) => {

    if(event.target === backdrop){
        closeModal();
    }
  // Check if click was directly on the backdrop element itself
});

// Listener for Escape key press
window.addEventListener('keydown', (event) => {
    if(event.key === "Escape"){
        closeModal();
    }
  // Check if key is 'Escape' and close modal
});

