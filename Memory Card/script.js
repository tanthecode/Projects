let cnt = 0;
let no=0;
let mv=0;
let firstCard = null;
let secondCard = null;

document.querySelectorAll('.card .inner').forEach(inner => {
  inner.addEventListener('click', (event) => {
    if (cnt < 2) {
      if (!inner.classList.contains('is_flipped')) {
        inner.classList.add('is_flipped');
        cnt += 1;
        if (cnt === 1) {
          firstCard = event.currentTarget;
        } else {
          secondCard = event.currentTarget;
        }
      }
    }

    if (cnt === 2) {
      mv+=1;
      if (firstCard.isEqualNode(secondCard)) {
        setTimeout(() => {
          firstCard.parentElement.style.visibility = "hidden";
          secondCard.parentElement.style.visibility = "hidden";
          cnt = 0;
          firstCard = null;
          secondCard = null;
          no+=1;
        }, 1000);
      } else {
        setTimeout(() => {
          document.querySelectorAll('.card .inner').forEach(inner => {
            if (inner.classList.contains('is_flipped')) {
              inner.classList.remove('is_flipped');
            }
          });
          cnt = 0;
          firstCard = null;
          secondCard = null;
        }, 1000);
      }
    }
  });
});

const cards=document.querySelectorAll('.card');
cards.forEach(card => {
  if (card.style.visibility === 'hidden') { 
    
  }
});

