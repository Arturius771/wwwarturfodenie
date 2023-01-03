import { Component } from '@angular/core';
import { Module } from '../lib/model/module';

// Example module:
// tm111: Module = {
//   title: 'Introduction to Computing and Information Technology 1',
//   description: 'IT fundamentals, programming, and networking.',
//   url: 'https://www.open.ac.uk/courses/modules/tm111',
//   github: '',
//   website_name: 'Website',
//   module_code: 'TM111',
//   assessments: [Assessment],
//   module_result: 'Distinction',
//   module_resources: [Book],
//   module_software: [Book],
// };

@Component({
  selector: 'app-af-study-record',
  templateUrl: './af-study-record.component.html',
  styleUrls: ['./af-study-record.component.less'],
})
export class AfStudyRecordComponent {
  msc_modules: Array<Module> = [];
  bsc_modules: Array<Module> = [
    {
      title: 'The Computing and IT Project',
      description: '',
      url: 'https://www.open.ac.uk/courses/qualifications/details/tm470?orig=q62',
      website_name: 'Website',
      github: '',
      module_code: 'TM470',
      assessments: [],
      module_result: 'Ongoing',
      module_resources: [],
      module_software: [],
    },
    {
      title: 'Machine Learning and Artificial Intelligence',
      description: '',
      url: 'https://www.open.ac.uk/courses/qualifications/details/tm358',
      website_name: 'Website',
      github: '',
      module_code: 'TM358',
      assessments: [],
      module_result: 'Ongoing',
      module_resources: [],
      module_software: [],
    },
    {
      title: 'Software Engineering',
      description: '',
      url: 'https://www.open.ac.uk/courses/modules/tm354',
      website_name: 'Website',
      github: '',
      module_code: 'TM354',
      assessments: [],
      module_result: 'Awaiting Result',
      module_resources: [],
      module_software: [],
    },
    {
      title: 'Data management and analysis',
      description: '',
      url: 'https://www.open.ac.uk/courses/modules/tm351',
      website_name: 'Website',
      github: '',
      module_code: 'TM351',
      assessments: [],
      module_result: 'Awaiting Result',
      module_resources: [],
      module_software: [
        { title: 'PostgreSQL' },
        { title: 'MongoDB' },
        { title: 'Docker' },
        { title: 'Jupyter' },
      ],
    },
    {
      module_code: 'TT284',
      assessments: [
        {
          assessment_title: 'TMA01',
          description: 'Museum landing page and report (HTML, CSS)',
        },
        {
          assessment_title: 'TMA02',
          description:
            'Guesthouse CRUD web application and report (PHP, JavaScript, SQL, Regex, HTML, CSS)',
        },
        {
          assessment_title: 'TMA03',
          description:
            'Guesthouse photo diary web application (JavaScript, HTML, CSS)',
        },
        {
          assessment_title: 'EMA',
          description:
            'Walking Club website project (design, implementation, testing) (PHP, JavaScript, HTML, CSS)',
        },
      ],
      module_result: 'Grade 2 Pass',
      module_resources: [
        {
          title: 'JavaScript The Definitive Guide',
          author: 'Flanagan, D.',
          url: 'https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/',
        },
        {
          title: 'W3Schools Online Web Tutorials',
          author: 'W3Schools',
          url: 'https://www.w3schools.com/',
        },
        { title: 'Nielsen Norman Group', url: 'https://www.nngroup.com/' },
        {
          title: 'HTMl Standard',
          author: 'WHATWG',
          url: 'https://html.spec.whatwg.org/multipage/',
        },
        { title: 'PHP Documentation', url: 'https://www.php.net/docs.php' },
      ],
      module_software: [
        {
          title: 'Visual Studio Code',
          author: 'Microsoft',
          url: 'https://code.visualstudio.com/',
        },
        { title: 'regex101', url: 'https://regex101.com/' },
        {
          title: 'Pencil',
          author: 'Pencil Project',
          url: 'https://pencil.evolus.vn/Downloads.html',
        },
        { title: 'TortoiseSVN', url: 'https://tortoisesvn.net/' },
        { title: 'Git', url: 'https://git-scm.com/' },
        {
          title: 'HTML Cleaner',
          url: 'https://html-cleaner.com/',
        },
        {
          title: 'Markup Validation Service',
          author: 'w3.org',
          url: 'https://validator.w3.org/',
        },
      ],
      title: 'Web Technologies',
      description:
        'Comprehensive web technology module from fundamentals (HTML, CSS, Standards) to topics such as accessibility, security, and architectures (Client-Server etc). Web APIs/HTTP/REST and programming languages (JavaScript and PHP - SPAs, SSGs, SSRs) are covered in depth in different scenarios to show their use cases (AJAX). ',
      url: 'https://www.open.ac.uk/courses/modules/tt284',
      website_name: 'Website',
    },
    {
      module_code: 'TM255',
      assessments: [
        {
          assessment_title: 'TMA01',
          description:
            '5G, asynchronous communication technologies, access point configuration (Packet Tracer)',
        },
        {
          assessment_title: 'TMA02',
          description:
            'Hotel Website Group Project (design, implementation, reflection) (WordPress)',
        },
        {
          assessment_title: 'TMA03',
          description:
            'Ethical and Legal Frameworks of IT, Biometric Authentication Systems report (written assessments)',
        },
        {
          assessment_title: 'EMA',
          description: 'Quantum Cryptography Information Website (WordPress)',
        },
      ],
      module_result: 'Distinction',
      module_software: [
        {
          title: 'Cisco Packet Tracer',
          author: 'Cisco',
          url: 'https://www.netacad.com/courses/packet-tracer',
        },
        {
          title: 'VirtualBox',
          author: 'Oracle',
          url: 'https://www.virtualbox.org/',
        },
      ],
      title: 'Communication and Information Technologies',
      description:
        'General networking and communications module. Security, cryptography, IoT, WiFi/Cell networks, interaction and collaboration, virtualisation.',
      url: 'https://www.open.ac.uk/courses/modules/tm255',
      website_name: 'Website',
    },
    {
      title: 'Algorithms, Data Structures and Computability',
      description:
        'Algorithms and complexity (Big-O notation), runtime analysis, data structures (lists, stacks, queues, dictionaries, sets, trees, graphs, search algorithms, recursion, greedy. Python and Jupyter Notebooks. Logic, computability (eg. P != NP, halting problem etc). Content was covered through practical Python programming exercises and Notebooks projects.',
      url: 'https://www.open.ac.uk/courses/modules/m269',
      website_name: 'Website',
      module_code: 'M269',
      assessments: [
        {
          assessment_title: 'TMA01',
          description:
            'Part 1: Sequence data types, iterative algorithms, and algorithm complexity - Part 2: Stacks, queues, and priority Queues (Python)',
        },
        {
          assessment_title: 'TMA02',
          description:
            'Binary Trees, recursive functions and graphs, greedy algorithms (Python)',
        },
        {
          assessment_title: 'TMA03',
          description:
            'Sets, bags, maps (Java) and logic (Propositional/Predicate) and well Formed Formulas, truth tables, Equivalence Problem essay (Python, SQL)',
        },
      ],
      module_result: 'Distinction',
      module_resources: [
        {
          title: 'Algorithms, data structures and computability',
          author: 'Wermelinger, M.',
          year: 2021,
          edition: 3,
        },
        {
          title: 'Logic and the Limits of Computing',
          author: 'The Open University',
          year: 2015,
          edition: 2,
        },
        {
          title: 'Jupyter Project Documentation',
          author: 'Project Jupyter',
          url: 'https://docs.jupyter.org/en/latest/#',
        },
      ],
      module_software: [
        {
          title: 'Anaconda',
          author: 'Continuum analytics',
          url: 'https://www.anaconda.com/',
        },
      ],
    },
    {
      title: 'Object-oriented Java Programming',
      description:
        'Fundamentals of object-oriented programming taught with the BlueJ IDE and Java.',
      url: 'https://www.open.ac.uk/courses/modules/m250',
      website_name: 'Website',
      module_code: 'M250',
      assessments: [
        {
          assessment_title: 'TMA01',
          description: 'Book Library Manager (Java)',
        },
        {
          assessment_title: 'TMA02',
          description:
            'Rock Paper Scissors game, Dictionary HashMaps and HashSets, SIR Infection Rate model (Java)',
        },
        {
          assessment_title: 'TMA03',
          description:
            'Roller Coaster Manager, Sailing Club and Boat Race Manager - Member/organisation project that could read/write CSV files (Java)',
        },
      ],
      module_result: 'Distinction',
      module_resources: [
        {
          title: 'Objects First with Java',
          author: 'Barnes, D. J., Kölling M.',
          url: 'https://www.bluej.org/objects-first/',
          year: 2017,
          edition: 6,
        },
        {
          title: 'The Java® Language Specification',
          author: 'Gosling, J., et al',
          url: 'https://docs.oracle.com/javase/specs/jls/se16/html/index.html',
          year: 2021,
          article_title: 'Java SE 16 Edition',
        },
      ],
      module_software: [
        { title: 'BlueJ', author: 'Kölling M.', url: 'https://www.bluej.org/' },
      ],
    },
    {
      title: 'Discovering Mathematics',
      description: '',
      website_name: 'Website',
      module_code: 'MU123',
      module_result: 'Distinction',
      module_resources: [
        {
          title: 'Discovering Mathematics Books: A, B, C, D',
          author: 'Various Authors',
        },
      ],
    },
    {
      title: 'Technologies in Practise',
      description:
        'Networking, operating systems (Linux, architectures and virtualisation), robotics and AI',
      url: 'https://www.open.ac.uk/courses/modules/tm129',
      website_name: 'Website',
      module_code: 'TM129',
      module_result: 'Grade 2 Pass',
      module_resources: [
        {
          title: 'Microsoft Networking Essentials',
          author: 'Gibson, D.',
          year: 2011,
        },
        { title: 'I, Robot', author: 'Asimov, I.', year: 1967 },
      ],
    },
    {
      title: 'Introduction to Computing and Information Technology 2',
      description:
        'Block 1: Computer hardware and architecture, data management, cloud computing, mobile devices - Block 2: Python programming and algorithms - Block 3: Security, hacking, surveillance',
      url: 'https://www.open.ac.uk/courses/modules/tm112',
      website_name: 'Website',
      module_code: 'TM112',
      module_result: 'Distinction',
      module_resources: [
        { title: 'Python Documentation', url: 'https://docs.python.org/3.8/' },
      ],
      module_software: [
        { title: 'Python 3.8', url: 'https://www.python.org/' },
      ],
    },
    {
      title: 'Introduction to Computing and Information Technology 1',
      description: 'IT fundamentals, programming, and networking.',
      url: 'https://www.open.ac.uk/courses/modules/tm111',
      website_name: 'Website',
      module_code: 'TM111',
      module_result: 'Distinction',
    },
  ];
  course_modules: Array<Module> = [
    {
      title: 'Diploma in Computer Programming',
      description:
        'Eleven week course on OOP fundamentals in Java. Skills such as development environment management, CLI compilation, and NetBeans IDE were taught. Computational problem solving and algorithms were introduced.',
      url: 'https://www.ibat.ie/courses/java-programming-diploma.html',
      website_name: 'Website',
      module_code: 'IBAT',
      assessments: [
        {
          assessment_title: 'Final Project',
          description:
            'Java BMI calculator, with GUI, exception handling, and data validation.',
        },
      ],
      module_result: 'Distinction',
      module_software: [
        {
          title: 'NetBeans',
          author: 'Apache',
          url: 'https://netbeans.apache.org/',
        },
      ],
    },
    {
      title: 'Junior Programmer Pathway',
      description: '',
      url: 'https://learn.unity.com/pathway/junior-programmer',
      website_name: 'Website',
      module_code: 'Unity Learn Game Development',
      assessments: [],
      module_result: 'Ongoing',
      module_software: [],
    },
  ];
}
