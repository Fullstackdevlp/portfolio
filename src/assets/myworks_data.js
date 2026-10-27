import project1 from '../assets/project1.svg'
import project2 from '../assets/project2.svg'
import project3 from '../assets/project3.svg'
import project4 from '../assets/project4.svg'

const myworks_data = [
    {
        w_no: "01",
        w_name: "Food Delivery App",
        w_desc: "Full stack food ordering platform with a customer website, admin panel and backend server. Includes user authentication, shopping cart and Stripe payments.",
        w_tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        w_img: project1,
        w_link: "https://food-fontend.onrender.com",
        w_github: "https://github.com/Fullstackdevlp/food.git"
    },
    {
        w_no: "02",
        w_name: "Doctor Appointment",
        w_desc: "Appointment booking website for doctors and hospitals. Users filter doctors by specialty and book a date and time slot within a 7-day window.",
        w_tech: ["React", "Tailwind CSS"],
        w_img: project2,
        w_link: "https://steady-blini-7bbf90.netlify.app",
        w_github: "https://github.com/Fullstackdevlp/doctorAppointment.git"
    },
    {
        w_no: "03",
        w_name: "Ecommerce",
        w_desc: "Online store with a home page of latest products, a newsletter box and a full collection page with product filtering, sorting and search.",
        w_tech: ["React", "Tailwind CSS"],
        w_img: project3,
        w_github: "https://github.com/Fullstackdevlp/Ecommerece-app.git"
    },
    {
        w_no: "04",
        w_name: "YouTube Clone",
        w_desc: "YouTube clone built with React that uses the YouTube Data API to load video lists and real-time video statistics.",
        w_tech: ["React", "YouTube Data API"],
        w_img: project4,
        w_link: "https://youtbe-clone-phcp.onrender.com/",
        w_github: "https://github.com/Fullstackdevlp/youtube-clone.git"
    }
]
export default myworks_data;
