document.addEventListener('DOMContentLoaded', function() {
    const topSection = document.getElementById('topSection');
    const nextSection = document.getElementById('midSection');
    const lastSection = document.getElementById('lastSection');
    const contactBut = document.getElementById('contactbut')
    const form = document.getElementById('contact');



    //Scroll to the next part when click anywhere in the div box top section
    topSection.addEventListener('click', function() {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    });
    nextSection.addEventListener('click', function() {
        lastSection.scrollIntoView({behavior: 'smooth'});
    });
    lastSection.addEventListener('click', function() {
        form.scrollIntoView({behavior: 'smooth'});
    });

    contactBut.addEventListener('click', function() {
        form.scrollIntoView({behavior: 'smooth'});
    });
    form.addEventListener('click', function () {
        topSection.scrollIntoView({behavior: 'smooth'});
    });

  });
  