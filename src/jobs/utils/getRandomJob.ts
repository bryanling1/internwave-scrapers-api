import { ICharts, ChartType } from "src/jobs/types/Charts";
import { IDescription } from "src/jobs/types/Descriptions";
import { ILocation } from "src/jobs/types/Location";
import { IScrapedJobSalaries, IScrapedSalary } from "src/jobs/types/Salary";
import { IScrapedJob } from "src/jobs/types/ScrapedJob";

export const getRandomJob = (index: number): IScrapedJob => {
    const id = index.toString();
    return {
      id,
      url: Math.random() > 0.5 ? "uwwave.ca" : undefined,
      company: getRandomCompany(),
      jobTitle: getRandomJobTitle(),
      openings: Math.floor(Math.random() * 100),
      applications: Math.floor(Math.random() * 10000),
      location: getRandomLocation(),
      dates: {
        postedAt: getRandomDatetime(),
        deadlineAt: getRandomDatetime(),
        startAt: getRandomDatetime(),
        endAt: getRandomDatetime(),
        duration: getRandomDuration(),
      },
      categorizations: {
        technologies: getRandomTechnologies(),
        skills: [],
        industries: [],
        applicationDocuments: getRandomApplicationDocuments(),
        specialRequirements: getRandomSpecialRequirements(),
        compensationAndBenefits: [],
      },
      descriptions: getRandomDescriptions(),
      charts: getRandomCharts(),
      jobType: getRandomJobType(),
      salaries: getRandomSalaries(),
    };
  };
  
  const getRandomCompany = () => {
    const names = [
      "Facebook",
      "Shopify",
      "Faire",
      "Google",
      "Workday",
      "Bloomberg",
      "Blackberry",
      "IBM",
      "Amazon",
      "Microsoft",
      "Tesla",
      "Apple",
      "Netflix",
      "Twitter",
      "Uber",
      "Lyft",
      "Airbnb",
      "Pinterest",
      "Reddit",
      "Slack",
      "Zoom",
      "Salesforce",
      "Dropbox",
    ];
    const name = names[Math.floor(Math.random() * names.length)];
    return {
      name,
    };
  };
  
  const getRandomJobTitle = () => {
    const jobTitles = [
      "Software Engineer",
      "Product Manager",
      "Data Scientist",
      "UX Designer",
      "UI Designer",
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "DevOps Engineer",
      "QA Engineer",
      "Technical Writer",
      "Technical Support",
      "Technical Recruiter",
      "Technical Program Manager",
      "Technical Account Manager",
      "Technical Sales",
      "Technical Marketing",
      "Technical Trainer",
      "Technical Consultant",
      "Technical Architect",
      "Technical Analyst",
      "Technical Specialist",
      "Technical Director",
      "Technical Lead",
      "Technical Advisor",
    ];
    return jobTitles[Math.floor(Math.random() * jobTitles.length)];
  };
  
  const getRandomLocation = (): ILocation => {
    const locationTypes = ["Onsite", "remote", "hybrid", undefined];
    const countries = [
      "Canada",
      "United States",
      "United Kingdom",
      "Germany",
      "France",
      "Italy",
      "Spain",
      "Australia",
      "Japan",
      "China",
      "India",
      "Mexico",
      "Russia",
      "South Korea",
      "Egypt",
      undefined,
    ];
    const cities = [
      "Toronto",
      "Vancouver",
      "Montreal",
      "Calgary",
      "Ottawa",
      "Edmonton",
      "Winnipeg",
      "Quebec City",
      "Halifax",
      "Victoria",
      "Regina",
      "Saskatoon",
      "Charlottetown",
      "St. John's",
      "Whitehorse",
      "Yellowknife",
      "Iqaluit",
      undefined,
    ];
  
    const regions = [
      "Ontario",
      "British Columbia",
      "Quebec",
      "Alberta",
      "Manitoba",
      "Saskatchewan",
      "Nova Scotia",
      "New Brunswick",
      "Prince Edward Island",
      "Newfoundland and Labrador",
      "Northwest Territories",
      "Yukon",
      "Nunavut",
      undefined,
    ];
  
    const states = [
      "California",
      "Texas",
      "Florida",
      "New York",
      "Pennsylvania",
      "Illinois",
      "Ohio",
      "Georgia",
      "North Carolina",
      "Michigan",
      "New Jersey",
      "Virginia",
      "Washington",
      "Arizona",
      "Massachusetts",
      "Tennessee",
      "Indiana",
      "Missouri",
      "Maryland",
      "Wisconsin",
      "Colorado",
      "Minnesota",
      "South Carolina",
      "Alabama",
      "Louisiana",
      "Kentucky",
      "Oregon",
      "Oklahoma",
      "Connecticut",
      "Iowa",
      "Mississippi",
      "Arkansas",
      "Utah",
      "Nevada",
      "Kansas",
      "New Mexico",
      "Nebraska",
      "West Virginia",
      "Idaho",
      "Hawaii",
      "Maine",
      "New Hampshire",
      "Montana",
      "Rhode Island",
      "Delaware",
      "South Dakota",
      "North Dakota",
      "Alaska",
      undefined,
    ];
  
    const addresses = [
      "123 Main St",
      "456 Elm St",
      "789 Oak St",
      "101 Pine St",
      "202 Maple St",
      "303 Cedar St",
      "404 Birch St",
      "505 Walnut St",
      "606 Spruce St",
      "707 Pine St",
      "808 Elm St",
      "909 Oak St",
      "1000 Main St",
      "1111 Maple St",
      "1222 Cedar St",
      "1333 Birch St",
      "1444 Walnut St",
      "1555 Spruce St",
      "1666 Pine St",
      "1777 Elm St",
      "1888 Oak St",
      "1999 Main St",
      undefined,
    ];
    const type = locationTypes[Math.floor(Math.random() * locationTypes.length)];
    const country = countries[Math.floor(Math.random() * countries.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const region = regions[Math.floor(Math.random() * regions.length)];
    const state = states[Math.floor(Math.random() * states.length)];
    const address = addresses[Math.floor(Math.random() * addresses.length)];
  
    return {
      type,
      country,
      city,
      region,
      state,
      address,
    };
  };
  
  const getRandomDatetime = () => {
    const now = new Date().getTime();
    const randomTime = Math.floor(Math.random() * now);
    return Math.random() > 0.5 ? undefined : new Date(randomTime).getTime();
  };
  
  const getRandomDuration = () => {
    const out: string[] = [];
    if (Math.random() > 0.5) {
      out.push("8 months");
    }
    if (Math.random() > 0.5) {
      out.push("4 months");
    }
    if (Math.random() > 0.5) {
      out.push("12 months");
    }
    return out;
  };
  
  const getRandomTechnologies = (): string[] => {
    const out: string[] = [];
    const techs = [
      "React",
      "Vue",
      "Angular",
      "Svelte",
      "Ember",
      "Backbone",
      "jQuery",
      "Vanilla JS",
      "Node",
      "Express",
      "Koa",
      "Nest",
      "Fastify",
      "Hapi",
      "Sails",
      "Meteor",
      "Next",
      "Nuxt",
      "Gatsby",
      "Gridsome",
      "Sapper",
      "Blitz",
      "Redwood",
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Java",
      "C#",
      "C++",
      "Python",
      "Ruby",
      "PHP",
      "Go",
      "Rust",
      "Scala",
      "Haskell",
      "Erlang",
      "Clojure",
      "F#",
      "OCaml",
      "Elm",
      "Reason",
      "PureScript",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "SASS",
      "LESS",
      "Stylus",
      "PostCSS",
      "Tailwind",
      "Bootstrap",
      "Material UI",
      "Ant Design",
      "Chakra UI",
      "Styled Components",
      "Emotion",
      "Framer Motion",
      "GSAP",
      "D3",
      "Three",
      "P5",
      "Canvas",
      "WebGL",
      "WebRTC",
      "WebSockets",
      "GraphQL",
      "REST",
      "gRPC",
      "SOAP",
      "JSON",
      "XML",
      "YAML",
      "TOML",
      "CSV",
      "Markdown",
      "LaTeX",
      "SQL",
      "NoSQL",
      "MongoDB",
      "Cassandra",
      "CouchDB",
      "Firebase",
      "DynamoDB",
      "Postgres",
      "MySQL",
      "MariaDB",
      "SQLite",
      "Redis",
      "Memcached",
      "Elasticsearch",
      "Solr",
      "Lucene",
      "Algolia",
      "Azure Search",
      "AWS Lambda",
      "Google Cloud Functions",
      "Azure Functions",
      "AWS EC2",
      "Google Compute Engine",
      "Azure Virtual Machines",
      "AWS S3",
    ];
    for (let i = 0; i < techs.length; i++) {
      if (Math.random() > 0.7) {
        out.push(techs[i]);
      }
    }
    return out;
  };
  
  function getRandomApplicationDocuments(): string[] | undefined {
    const out: string[] = [];
    const docs = [
      "Resume",
      "Cover Letter",
      "Portfolio",
      "Transcript",
      "Criminal record",
      "Drivers License",
    ];
    for (let i = 0; i < docs.length; i++) {
      if (Math.random() > 0.6) {
        out.push(docs[i]);
      }
    }
    return Math.random() > 0.7 ? out : undefined;
  }
  function getRandomSpecialRequirements(): string[] | undefined {
    const out: string[] = [];
    const docs = ["Canadian Citizen", "LGTBQAIPIESF+ or minority group"];
    for (let i = 0; i < docs.length; i++) {
      if (Math.random() > 0.6) {
        out.push(docs[i]);
      }
    }
    return Math.random() > 0.7 ? out : undefined;
  }
  
  const getRandomDescriptions = (): IDescription[] => {
    const out: IDescription[] = [];
    const titles = [
      "Description",
      "Requirements",
      "Responsibilities",
      "Qualifications",
      "Expectations",
      "Perks",
      "Benefits",
      "Compensation",
      "Culture",
      "Team",
    ];
  
    // paragrams of lorem ipsum
    const descriptions = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in magna id nulla molestie suscipit. Nullam nec semper turpis. Sed nec felis nec justo ultricies ultricies. Donec nec ex nec libero lacinia euismod. Nullam in ex auctor, sagittis nisl sit amet, tincidunt eros. Nulla facilisi. Nam nec nunc nec tortor aliquet venenatis. Nullam auctor, libero nec fermentum tincidunt, nunc eros tincidunt nunc, nec fermentum nisl nunc et eros. Quisque nec orci nec turpis tincidunt fermentum. Nullam nec ex nec libero lacinia euismod. Nullam in ex auctor, sagittis nisl sit amet, tincidunt eros. Nulla facilisi. Nam nec nunc nec tortor aliquet venenatis. Nullam auctor, libero nec fermentum tincidunt, nunc eros tincidunt nunc, nec fermentum nisl nunc et eros. Quisque nec orci nec turpis tincidunt fermentum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in magna id nulla molestie suscipit. Nullam nec semper turpis. Sed nec felis nec justo ultricies ultricies. Donec nec ex nec libero lacinia euismod. Nullam in ex auctor, sagittis nisl sit amet, tincidunt eros. Nulla facilisi. Nam nec nunc nec tortor aliquet venenatis. Nullam auctor, libero nec fermentum tincidunt, nunc eros tincidunt nunc, nec fermentum nisl nunc et eros. Quisque nec orci nec turpis tincidunt fermentum. Nullam nec ex nec libero lacinia euismod. Nullam in ex auctor, sagittis nisl sit amet, tincidunt eros. Nulla facilisi. Nam nec nunc nec tortor aliquet venenatis. Nullam auctor, libero nec fermentum tincidunt, nunc eros tincidunt nunc, nec fermentum nisl nunc et eros. Quisque nec orci nec turpis tincidunt fermentum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in magna id nulla molestie suscipit. Nullam nec sem",
    ];
    for (let i = 0; i < Math.max(titles.length, descriptions.length); i++) {
      if (Math.random() > 0.5) {
        out.push({
          title: titles[i % titles.length],
          content: descriptions[i % descriptions.length],
        });
      }
    }
    return out;
  };
  
  const getRandomCharts = (): ICharts => {
    const out: ICharts = {};
    const chartTitles = ["Co-op term", "Faculty", "Program"];
    const keys = ["A", "B", "C", "D", "E"];
    for (let i = 0; i < chartTitles.length; i++) {
      if (Math.random() > 0.7) {
        continue;
      }
      const data: { [key: string]: number } = {};
      for (let j = 0; j < keys.length; j++) {
        if (Math.random() > 0.8) {
          continue;
        }
        data[keys[j]] = Math.floor(Math.random() * 200);
      }
      const chartTitle = chartTitles[i];
      out[chartTitle] = {
        title: chartTitle,
        data,
        type: ChartType.PIE,
      };
    }
    return out;
  };
  
  const getRandomJobType = (): string | undefined => {
    const types = [
      "Full-time",
      "Part-time",
      "Contract",
      "Internship",
      "Freelance",
      "Volunteer",
      "Apprenticeship",
      undefined,
    ];
    return types[Math.floor(Math.random() * types.length)];
  };
  
  const getRandomSalaries = (): IScrapedJobSalaries | undefined => {
    if (Math.random() > 0.7) {
      return undefined;
    }
    return {
      salary: getRandomSalary(),
      salaryMin: getRandomSalary(),
      salaryMax: getRandomSalary(),
      coop1Salary: getRandomSalary(),
      coop2Salary: getRandomSalary(),
      coop3Salary: getRandomSalary(),
      coop4Salary: getRandomSalary(),
      coop5Salary: getRandomSalary(),
      coop6Salary: getRandomSalary(),
      coop7PlusSalary: getRandomSalary(),
    };
  };
  
  const getRandomSalary = (): IScrapedSalary | undefined => {
    if (Math.random() > 0.7) {
      return undefined;
    }
    const currencies = [
      "CAD",
      "USD",
      "EUR",
      "GBP",
      "JPY",
      "CNY",
      "INR",
      "MXN",
      "RUB",
      "KRW",
      "EGP",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ];
    const periods = [
      "hourly",
      "weekly",
      "bi-weekly",
      "monthly",
      "quarterly",
      "uhoh",
      "yearly",
      undefined,
      undefined,
      undefined,
      undefined,
    ];
  
    const currency = currencies[Math.floor(Math.random() * currencies.length)];
    const period = periods[Math.floor(Math.random() * periods.length)];
    let amount = "";
    switch (period) {
      case "Hourly":
        amount = Math.floor(Math.random() * 100).toString();
        break;
      case "Weekly":
        amount = Math.floor(Math.random() * 2000).toString();
        break;
      case "Biweekly":
        amount = Math.floor(Math.random() * 4000).toString();
        break;
      case "Monthly":
        amount = Math.floor(Math.random() * 8000).toString();
        break;
      case "Quarterly":
        amount = Math.floor(Math.random() * 24000).toString();
        break;
      case "Yearly":
        amount = Math.floor(Math.random() * 96000).toString();
        break;
      default:
        amount = Math.floor(Math.random() * 50).toString();
        break;
    }
    return {
      amount,
      currency,
      period,
    };
  };
  