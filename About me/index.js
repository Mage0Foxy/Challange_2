// Remove the transition class
const squareA = document.querySelector('.squareA');
squareA.classList.remove('squareA-transition');

// Create the observer, same as before:
const observerA = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      squareA.classList.add('squareA-transition');
      return;
    }

    squareA.classList.remove('squareA-transition');
  });
});

observerA.observe(document.querySelector('.squareA-wrapper'));

// Remove the transition class
const squareB = document.querySelector('.squareB');
squareB.classList.remove('squareB-transition');

// Create the observer, same as before:
const observerB = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      squareB.classList.add('squareB-transition');
      return;
    }

    squareB.classList.remove('squareB-transition');
  });
});

observerB.observe(document.querySelector('.squareB-wrapper'));

// Remove the transition class
const squareC = document.querySelector('.squareC');
squareC.classList.remove('squareC-transition');

// Create the observer, same as before:
const observerC = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      squareC.classList.add('squareC-transition');
      return;
    }

    squareC.classList.remove('squareC-transition');
  });
});

observerC.observe(document.querySelector('.squareC-wrapper'));


// Remove the transition class
const squareD = document.querySelector('.squareD');
squareD.classList.remove('squareD-transition');

// Create the observer, same as before:
const observerD = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      squareD.classList.add('squareD-transition');
      return;
    }

    squareD.classList.remove('squareD-transition');
  });
});

observerD.observe(document.querySelector('.squareD-wrapper'));


// Remove the transition class
const squareE = document.querySelector('.squareE');
squareE.classList.remove('squareE-transition');

// Create the observer, same as before:
const observerE = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      squareE.classList.add('squareE-transition');
      return;
    }

    squareE.classList.remove('squareE-transition');
  });
});

observerE.observe(document.querySelector('.squareE-wrapper'));

