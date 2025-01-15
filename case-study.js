var product = [
    {
        title:"External PDF",
        link:"https://www.septodontcorp.com/files/pdf/Case-Studies-Collection-8.pdf",
        para:""
    },
    {
        title:"Dental Bridges Case Study",
        link:"https://www.youtube.com/watch?v=Bi2BsU-TIoM",
        para:""
    },
    {
        title:"End of Day Clinal Study",
        link:"https://www.youtube.com/results?search_query=dental+case+study",
        para:""
    },
    {
        title:"Dental Crowne Case Study",
        link:"https://www.youtube.com/watch?v=vhS0ajF7PDs",
        para:""
    },

    {
        title:"New Dentist Blogs",
        link:"https://newdentistblog.ada.org/",
        para:""
    },
    {
        title:"Oral Health Blogs",
        link:"https://www.dentalhealth.org/Blogs/blogs-and-vlogs",
        para:""
    },
    {
        title:"General Dentistry Blogs",
        link:"https://theteethblog.com/",
        para:""
    },
    {
        title:"Dental Webinars and Events",
        link:" https://www.eventbrite.com/d/online/dental/",
        para:""
    },
    {
        title:"Dental Webinars and Events",
        link:" https://www.eventbrite.com/d/online/dental/",
        para:"Establish a community forum for users to discuss courses share resources, and seek advice Moderate discussions to ensure a positive and informative environment."
    },

]

for(var i=0;i<product.length;i++){
    document.getElementsByClassName('row')[0].innerHTML+=`
         <div class="card-link col-lg-5 m-4">
             <h5>${product[i].title}</h5>
             <p>${product[i].para}</p>
             <a href="${product[i].link}"><button>Click Here</button></a>
         </div>

    `
}

