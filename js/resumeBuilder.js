var bio = {
	"name": "Trevor Beal",
	"role": "Web Developer",
	"contacts": {
		"home": "907-694-3246",
		"mobile": "907-440-4509", 
		"email": "trevor@mtaonline.net",
		"github": "codetangle",
		"twitter": "@trevorbeal",
		"blog": "TrevorBeal.com",
		"location": "Anchorage"
	},
  "skills": ["css", "html", "javascript", "python", "php"]
};

var welcomeMsg = "Thanks for checking out my resume";
var picture = "images/fry.jpg";

var work = {
	"jobs": [
    {
      "position": "Real Estate Licensee",
      "employer": "ReMax Dynamic Properties",
      "years": "2005 - Current",
      "location": "Anchorage",
      "description": "Assisted clients with buying and selling property."
    },
    {
      "position": "Internet Marketing Consultant",
      "employer": "Core Web Marketing",
      "years": "2014-2015",
      "location": "Anchorage",
      "description": "Helped clients to establish an effective web presence, meeting thier business goals"
    }
  ],
  display: function() {
    var formattedEmployer, formattedJobTitle, formattedWorkDates, formattedJobLocation, formattedJobDescription;
    $("#workExperience").append(HTMLworkStart);
    for(job in work.jobs) {
      formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      $(".work-entry").append(formattedEmployer);

      formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
      $(".work-entry").append(formattedJobTitle);

      formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
      $(".work-entry").append(formattedWorkDates);

      formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry").append(formattedJobLocation);

      formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry").append(formattedJobDescription);
    }
  }
}; 

work.display();

var education = {
  "schools": [
    {
      "name": "Eastern Oregon University",
      "degree": "None",
      "dates": "1997 - 2004",
      "location": "La Grande, Oregon",
      "major": "Mathematics and Physics"
    },
    {
      "name": "Udacity",
      "degree": "Nanodegree",
      "dates": 2015,
      "location": "Online",
      "major": "Front End Developer"
    }
  ]
};

var projects = {
  "projects": [
    {
      "name": "resume",
      "dates": 2015,
      "skills": ["html", "javascript", "css"],
      "description": "A webpage that uses js to dynamically display my resume information",
      "image": "images/resume_thumb.png",
      "link": "site/url.html"
    },
    {
      "name": "portfolio",
      "dates": 2015,
      "skills": ["html", "css", "responsive design"],
      "description": "Website that displays my past work",
      "image": "images/portfolio_thumb.png",
      "link": "portfolio/index.html"
    },
    {
      "name": "Jim Alaska Website",
      "dates": 2014,
      "skills": ["wordpress", "php"],
      "description": "Real Estate website to show agent listings",
      "image": "images/jimalaska_thumb.png",
      "links": "http://jimalaska.com"
    }
    // {
    //   "name": "Core Web Marketing website",
    //   "dates": 2014,
    //   "skills": ["django", "python", "nginx"],
    //   "description": "CWM website for getting clients and teching about IM.",
    //   "image": "images/cwm.jpg",
    //   "links": "http://corewebmarketing.com"
    // },
    // {
    //   "name": "Terry Beal website",
    //   "dates": 2012,
    //   "skills": ["api access", "django module development", "xml", "cron jobs"],
    //   "description": "Real estate wesite for gatering and providing information",
    //   "image": "images/tb.jpg",
    //   "links": "http://terrybeal.com"
    // }
  ],
  addEntry: function(htmlString, dataString) {
    formattedString = htmlString.replace("%data%", dataString);
    $(".project-entry:last").append(formattedString);
  },
  display: function() {
    var formattedName, formattedDates, formattedSkills, formattedDescription, formattedLinks;
    var projects = this.projects;
    for(project in projects) {
      $("#projects").append(HTMLprojectStart);

      this.addEntry(HTMLprojectTitle, projects[project].name);
      this.addEntry(HTMLprojectDates, projects[project].dates);
      this.addEntry(HTMLprojectDescription, projects[project].description);
      this.addEntry(HTMLprojectImage, projects[project].image);
    }
  }
};

projects.display();

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formateedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio["contacts"]["home"]);
formattedContactGeneric = formattedContactGeneric.replace("%contact%", "home");
var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
var formattedGitHub = HTMLgithub.replace("%data%", bio["contacts"]["github"]);
var formattedBlog = HTMLblog.replace("%data%", bio["contacts"]["blog"]);
var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);

var formattedPicture = HTMLbioPic.replace("%data%", picture);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", welcomeMsg);



var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[0].major);


$("#header").prepend(formateedRole).prepend(formattedName);

$("#topContacts").append(formattedContactGeneric).append(formattedMobile).append(formattedEmail);
$("#topContacts").append(formattedTwitter).append(formattedGitHub).append(formattedBlog);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedPicture).append(formattedMessage);

$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName);
$(".education-entry").append(formattedSchoolDegree);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLocation);
$(".education-entry").append(formattedSchoolMajor);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var i = 0;
  var l = bio.skills.length;
  for(i; i < l; i++) {
    formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
  }
}

var button = "<button id='inName' onclick='inName'>Internationalize</button>";
$("#main").append(button);

var inName = function() {
  var name = $("#name").text();
  var nameArray = name.trim().split(" ");
  nameArray[1] = nameArray[1].toUpperCase();
  var inName = nameArray.join(" ");
  $("#name").text(inName);
};

$("#map").append(initializeMap());

