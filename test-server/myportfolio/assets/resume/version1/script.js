// Resume data
const resumeData = {
  personal_information: {
    name: "Alwin Santhosh S",
    role: "Senior QA Engineer",
    email: "alwsan24@gmail.com",
    phone: "+91 - 90 4336 5282",
    portfolio: "https://automationblog.github.io/myprofile",
    linkedin: "https://linkedin.com/in/alwin-santhosh-3190ba12b",
  },
  profile:
    "Over 10+ years of progressive working experience as a Software Quality Assurance Engineer and Software Test Engineer. Automated Software Quality Assurance Testing of client- server, web-based applications, DB and API testing. Complete understanding of QA methodologies.",
  automation_skills: {
    programming_languages: ["Node.js", "JavaScript", "TypeScript", "Core Java"],
    automation_testing_tools: [
      "NightwatchJS",
      "Playwright",
      "Axios",
      "Selenium",
      "Postman",
      "REST-Assured",
    ],
    frameworks: ["TestNG", "POM", "Cucumber(BDD)"],
  },
  fsd_skills: {
    HTML_CSS: "Proficient",
    NodeJS_JavaScript: "Advanced",
    ReactJS_ExpressJS: "Proficient",
    MongoDB: "Proficient",
  },
  work_experience: [
    {
      position: "Quality Assurance",
      company: "Tata Consultancy Services",
      duration: "Feb 2022 - Present",
      responsibilities: [
        "Create Test plan, Test Case for both Manual and Automation testing.",
        "API automation testing using Axios and Postman.",
        "Automated E2E UI testing using Nightwatch JS and Cucumber JS.",
        "DevOps jobs scheduled for Smoke and Regression Test.",
        "Working in Agile - Scrum sprint environment.",
      ],
    },
    {
      position: "Sr. Quality Engineer",
      company: "Cognizant Technology Solutions",
      duration: "Apr 2019 - Jan 2022",
      responsibilities: [
        "API automation testing using REST-Assured and Postman.",
        "Working on Scaled Agile(SAFe) scrum based model.",
        "Automated E2E UI testing using Puppeteer and Chrome DevTools.",
        "Jenkins jobs created for Health check and Regression Test.",
        "Handled four member team.",
      ],
    },
    {
      position: "Test Engineer",
      company: "Infosys Limited",
      duration: "Nov 2016 - Mar 2019",
      responsibilities: [
        "Involved in Automation Infrastructure Development using Selenium with Java.",
        "Mobile device Testing using Selenium and Perfecto Cloud.",
        "Web services Testing both SOAP/REST using Postman and Apache HttpClient.",
        "Worked on agile scrum based methods for BDD.",
        "Working in Keyword Driven and Data Driven Framework with Maven.",
      ],
    },
    {
      position: "Quality Executive",
      company: "Emantras Interactive Technologies Pvt Ltd.",
      duration: "Jun 2014 - Aug 2016",
      responsibilities: [
        "Write Test cases using Element locators, WebDriver methods, Java programming features and TestNG Annotations.",
        "Worked in Data driven Testing, Cross browser testing and Parallel Test execution using Selenium WebDriver, TestNG.",
        "Test Execution and Debugging and reporting Defects(JIRA).",
      ],
    },
    {
      position: "Technical Consultant",
      company: "Onward eServices Ltd.",
      duration: "Oct 2013 - Apr 2014",
      responsibilities: [
        "Worked in Linux environment",
        "Technical Support to the Client",
      ],
    },
  ],
  projects: [
    {
      project_name: "Marketing",
      client: "Nation Star Mortgage NSM (Mr. Cooper)",
      role: "QA - Team Lead",
      description: [
        "Showcasing various loan types with clear descriptions.",
        "Implementing a dynamic lead form to capture user needs and requirements for personalized loan matching.",
        "Integrating interactive banners to prominently display limited-time discount offers.",
        "Creating dedicated landing pages (event pages) for special occupational groups to access exclusive loan programs and information.",
      ],
    },
    {
      project_name: "Origination",
      client: "Nation Star Mortgage NSM (Mr. Cooper)",
      role: "QA - Team Lead",
      description: [
        "Loan origination happens through Purchase or Refinance applications.",
        "After application submission, customers must complete the Blend 1003 (third-party application).",
        "Submitting the Blend 1003 generates a loan in Encompass, which contains multiple milestones handled by Mortgage Professionals (MPs).",
        "Once all milestones are completed and the loan is funded, it becomes a servicing loan.",
      ],
    },
  ],
  certificates: [
    {
      name: "ISTQB Foundation Level",
      date: "Jan 2017",
    },
  ],
  courses: [
    {
      name: "GUVI - MERN Full stack Development",
      date: "Aug 2024",
    },
  ],
};

// Populate personal information
document.getElementById("name").textContent =
  resumeData.personal_information.name;
document.getElementById("role").textContent =
  resumeData.personal_information.role;
document.getElementById("email").innerHTML =
  `<a href="mailto:${resumeData.personal_information.email}" style="color: #ecf0f1; text-decoration: none;">${resumeData.personal_information.email}</a>`;
document.getElementById("email").textContent =
  resumeData.personal_information.email;
document.getElementById("phone").textContent =
  resumeData.personal_information.phone;
document.getElementById("portfolio").innerHTML =
  `<a href="${resumeData.personal_information.portfolio}" target="_blank" style="text-decoration: none; color: white;">${resumeData.personal_information.portfolio}</a>`;
document.getElementById("linkedin").innerHTML =
  `<a href="${resumeData.personal_information.linkedin}" target="_blank" style="text-decoration: none; color: white;">${resumeData.personal_information.linkedin}</a>`;

// Populate profile
document.getElementById("profile").textContent = resumeData.profile;

// Populate automation skills
const automationSkillsDiv = document.getElementById("automation-skills");
for (const [category, skills] of Object.entries(resumeData.automation_skills)) {
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "skill-item";

  const categoryTitle = document.createElement("Strong");
  categoryTitle.textContent = category
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  categoryDiv.appendChild(categoryTitle);

  const skillsContainer = document.createElement("div");
  const skillTag = document.createElement("p");
  skillTag.textContent = skills.join(", ");
  skillsContainer.appendChild(skillTag);
  // skills.forEach((skill) => {
  //   const skillTag = document.createElement("p");
  //   skillTag.textContent = skill;
  //   skillsContainer.appendChild(skillTag);
  // });

  categoryDiv.appendChild(skillsContainer);
  automationSkillsDiv.appendChild(categoryDiv);
}

// Populate FSD skills with progress bars
const fsdSkillsDiv = document.getElementById("fsd-skills");
const skillLevels = {
  Advanced: 90,
  Proficient: 75,
  Intermediate: 60,
  Beginner: 40,
};

for (const [skill, level] of Object.entries(resumeData.fsd_skills)) {
  const skillDiv = document.createElement("div");
  skillDiv.className = "skill-item";

  const skillName = document.createElement("div");
  skillName.style.fontWeight = "bold";
  skillName.textContent = skill
    .replace(/_/g, " & ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  skillDiv.appendChild(skillName);

  const skillBar = document.createElement("div");
  skillBar.className = "skill-bar";
  const skillLevelBar = document.createElement("div");
  skillLevelBar.className = "skill-level";
  skillLevelBar.style.width = skillLevels[level] + "%";
  skillBar.appendChild(skillLevelBar);
  skillDiv.appendChild(skillBar);

  // Add text level for print
  const skillLevelText = document.createElement("span");
  skillLevelText.textContent = ": " + level;
  skillDiv.appendChild(skillLevelText);

  fsdSkillsDiv.appendChild(skillDiv);
}

// Populate work experience
const workExpDiv = document.getElementById("work-experience");
resumeData.work_experience.forEach((job) => {
  const expItem = document.createElement("div");
  expItem.className = "job-entry";

  const jobHeader = document.createElement("div");

  const jobTitle = document.createElement("div");
  jobTitle.className = "job-title";
  jobTitle.textContent = job.position;
  jobHeader.appendChild(jobTitle);

  const jobBody = document.createElement("div");

  const companyName = document.createElement("span");
  companyName.className = "company";
  companyName.textContent = job.company;
  jobBody.appendChild(companyName);

  const pipDiv = document.createElement("span");
  pipDiv.textContent = " | ";
  jobBody.appendChild(pipDiv);

  const duration = document.createElement("span");
  duration.className = "date-range";
  duration.textContent = job.duration;
  jobBody.appendChild(duration);

  expItem.appendChild(jobHeader);
  expItem.appendChild(jobBody);

  const responsibilitiesDiv = document.createElement("div");
  responsibilitiesDiv.className = "job-description";
  const responsibilities = document.createElement("ul");
  responsibilities.className = "responsibilities";
  job.responsibilities.forEach((resp) => {
    const li = document.createElement("li");
    li.textContent = resp;
    responsibilities.appendChild(li);
  });

  responsibilitiesDiv.appendChild(responsibilities);
  expItem.appendChild(responsibilitiesDiv);
  workExpDiv.appendChild(expItem);
});

// Populate projects
const projectsDiv = document.getElementById("projects");
resumeData.projects.forEach((project) => {
  const projectItem = document.createElement("div");
  projectItem.className = "project-entry";

  const projectTitle = document.createElement("div");
  projectTitle.className = "project-title";
  projectTitle.textContent = project.project_name;
  projectItem.appendChild(projectTitle);

  const projectMeta = document.createElement("div");
  projectMeta.className = "project-meta";
  projectMeta.textContent = `${project.client} | ${project.role}`;
  projectItem.appendChild(projectMeta);

  const projectDesc = document.createElement("div");
  projectDesc.className = "project-description";
  const projectDescList = document.createElement("ul");
  project.description.forEach((desc) => {
    const li = document.createElement("li");
    li.textContent = desc;
    projectDescList.appendChild(li);
  });
  projectDesc.appendChild(projectDescList);

  projectItem.appendChild(projectDesc);
  projectsDiv.appendChild(projectItem);
});
// Populate certificates
const certificatesDiv = document.getElementById("certificates");
resumeData.certificates.forEach((cert) => {
  const certItem = document.createElement("div");

  const certName = document.createElement("div");
  certName.style.fontSize = "12px";
  certName.textContent = cert.name;
  certItem.appendChild(certName);

  const certDate = document.createElement("div");
  certDate.style.fontSize = "11px";
  certDate.style.color = "#bdc3c7";
  certDate.textContent = cert.date;
  certItem.appendChild(certDate);
  certificatesDiv.appendChild(certItem);
  console.log("certificates");
});

// Populate courses
const coursesDiv = document.getElementById("courses");
resumeData.courses.forEach((course) => {
  const courseItem = document.createElement("div");

  const courseName = document.createElement("div");
  courseName.style.fontSize = "12px";
  courseName.textContent = course.name;
  courseItem.appendChild(courseName);

  const courseDate = document.createElement("div");
  courseDate.style.fontSize = "11px";
  courseDate.style.color = "#bdc3c7";
  courseDate.textContent = course.date;
  courseItem.appendChild(courseDate);

  coursesDiv.appendChild(courseItem);
});
