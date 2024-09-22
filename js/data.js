const aboutMe =
  "I am a 7th semester student pursing Bachelors in Computer Science from Information Technology University Lahore. I have deep interest in Web Development which made me to learn HTML, CSS and JavaScript. Currently, I am learning React.js. Besides technical skills, I also possess few soft skills like Problem-solving, Active learning, Teamwork.";

const aboutContent = document.querySelector(".about-content");
const para = aboutContent.querySelector(".lead");
para.textContent = aboutMe;

const profile = document.querySelector(".profile");
const lis = profile.querySelectorAll("li");

const profileContent = {
  fullName: "Ahmad Mazhar",
  birthDate: "14 November 2002",
  profession: "Student",
  email: "bscs21011@itu.edu.pk",
};
let counter = 0;
for (let content in profileContent) {
  const para = lis[counter].querySelector("p");
  para.textContent = profileContent[content];
  counter++;
}

const skillsContent = [
  "HTML",
  "CSS",
  "JavaScript",
  "SASS",
  "Bootstrap",
  "React.js",
  "Python",
  "Git",
];

const skills = document.querySelector(".skills");
const spans = skills.querySelectorAll("span");

for (let i = 0; i < skillsContent.length; i++) {
  spans[i].textContent = skillsContent[i];
}
