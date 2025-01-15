
// side-navbar

function menu() {
    var z = document.getElementById('side_navbar');
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
  }
  
  // slider
  
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // visitor counter
  // footer_time
  var time = document.getElementById('current-time');
  
  setInterval(() => {
    var d = new Date();
    time.innerHTML = d.toLocaleTimeString();
  },1000)
  
  // footer_Date
  var date = document.getElementById('current-date');
  
  setInterval(() => {
    var b = new Date();
    date.innerHTML = b.toLocaleDateString();
  },1000)
  
  
  // faqs
  
  const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
  
  accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
  
  
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      }
      else {
        accordionItemBody.style.maxHeight = 0;
      }
      
    });
  });
                       // counter
  var count = localStorage.getItem('count') || 0 ;
  var count2 = document.getElementById("count");
  
  function update() {
      console.log(count);
      count2.textContent = count;
      localStorage.setItem('count', count);
  }
  
  function Increase() {
      count++;
      update();
      document.getElementById('modal').style.display = 'none';
  
  }
  // function Decrease() {
  //   if (count > 0) {
  //       --count;
  //       update();
  //   }
  // }
  // Display the modal
  document.getElementById('modal').style.display = 'block';
  
  // Initial update
  update();
  
                                // search-system
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  // Sample content for demonstration
  const dummyContent = [
    {
      title: 'Scale and Clean',
      link: 'scale&clean.html'
    },
    {
      title: 'Cosmetic dentistry',
      link: 'cosmetic.html'
    },
    {
      title: 'Emergency Dental',
      link: 'emergency.html'
    },
    {
      title: 'Dental Implant',
      link: 'dental-imlant.html'
    },
    {
      title: 'Dental Crowns',
      link: 'dental-crown.html'
    },
    {
      title: 'Dentures',
      link: 'denture.html'
  
    },
    {
      title: 'Invisalign',
      link: 'invisalign.html'
  
    },
    {
      title: 'Braces',
      link: 'braces.html'
  
    },
    {
      title: 'kids dental',
      link: 'kid-dental.html'
  
    },
    {
      title: 'Porcelain Veneers',
      link: 'porcelain.html'
  
    },
    {
      title: 'Wisdom Teeth Removal',
      link: 'wisdom-teeth-removal.html7'
  
    },
    {
      title: 'Sleep Dentistry',
      link: 'sleep.html'
  
    },
    {
      title: 'Finding Related Course',
      link: 'finding-related-course.html'
  
    },
    {
      title: 'Help document',
      link: 'help-document.html'
  
    },
    {
      title: 'Faculty Resources',
      link: 'faculty.resource.html'
  
    },
    {
      title: 'Student Resources',
      link: 'student-resource.html'
  
    },
    {
      title: 'Case studies',
      link: 'case-study.html'
  
    },
    {
      title: 'Patient Education',
      link: 'Patient-education.html'
  
    },
    {
      title: 'Products',
      link: 'product.html'
  
    },
    {
      title: 'Research & Publication',
      link: 'latest-research.html'
  
    },
    {
      title: 'Videos',
      link: 'video.html'
  
    },
    {
      title: 'Documents',
      link: 'document.html'
  
    },
    {
      title: 'Appointment Request',
      link: 'request-appointment.html'
  
    },
    {
      title: 'Gallery',
      link: 'gallery.html'
  
    },
    {
      title: 'Contact',
      link: 'contact.html'
  
    },
    {
      title: 'About Us',
      link: 'about.html'
  
    },
    {
      title: 'Site Map',
      link: 'site-map.html'
  
    },
    {
      title: 'FaQs',
      link: 'faqs.html'
  
    },
    {
      title: 'Feedback',
      link: 'feedback.html'
  
    },
    {
      title: 'Professional Education',
      link: 'professional-mob.html'
  
    }
  ];
  
  // Add more sample content for other
  
  
  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.trim().toLowerCase();
  
    if (searchTerm !== '') {
      const suggestions = dummyContent
        .filter(item =>
          item.title.toLowerCase().startsWith(searchTerm))
        .map(item => `
              <div class="search-suggestion" data-link="${item.link}">
                  <div class="suggestion-content">
                      <div class="suggestion-text">
                          <h6 id=search-name>${item.title}</h6>
                      </div>
                      </div>
                  <div class="suggestion-cont">
                      <div class="suggestion-txt">
                        
                      </div>
                
                  </div>
  
              </div>
          `)
        .join('');
  
  
      if (suggestions) {
        searchResults.innerHTML = suggestions;
      } else {
        searchResults.innerHTML =
          '<p class="not-found">No suggestions found.</p>'
      }
    }
    else {
      searchResults.innerHTML = '';
    }
  });
  
  searchResults.addEventListener('click', function (event) {
    const suggestion = event.target.closest('.search-suggestion');
    if (suggestion) {
      const link = suggestion.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    }
  });
  