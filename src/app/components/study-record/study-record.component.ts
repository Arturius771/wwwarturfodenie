import { Component } from '@angular/core';
import { Course } from 'src/app/models/course';

// Example module:
// tm111: Module = {
//   title: 'Introduction to Computing and Information Technology 1',
//   description: 'IT fundamentals, programming, and networking.',
//   url: 'https://www.open.ac.uk/courses/modules/tm111',
//   github: '',
//
//   code: 'TM111',
//   assessments: Assessment[],
//   result: 'Distinction',
//   resources: Book[],
//   software: Book[],
// };

@Component({
  selector: 'app-study-record',
  templateUrl: './study-record.component.html',
  styleUrls: ['./study-record.component.less'],
})
export class StudyRecordComponent {
  constructor() {}

  computing_it_course: Course = {
    title: 'Computing and IT BSc',
    institution: 'The Open University',
    link: {
      url: 'https://www.open.ac.uk/',
      title: 'The Open University',
    },
    result: '2:1 Honours',
    modules: [
      {
        title: 'Machine Learning and Artificial Intelligence',
        description:
          'Comprehensive AI and ML module with blocks on Artificial Neural Networks, Convolutional Neural Networks, Recurrent Neural Networks, Autoencoders, model analysis and application, as well as ethical issues. Mathematical topics such as differentiation, integration, and linear algebra were covered so that those techniques could be applied when training and optimising machine learning models.',
        link: {
          url: 'https://www.open.ac.uk/courses/qualifications/details/tm358',
          title: 'Website',
        },
        code: 'TM358',
        result: 'Grade 2 Pass',
        software: [{ title: 'TensorFlow' }],
        resources: [
          {
            title:
              'Data Mining: Practical Machine Learning Tools and Techniques',
            author:
              'Ian H. Witten, Eibe Frank, Mark A. Hall and Christopher J. Pal',
            edition: 4,
            year: 2016,
          },
        ],
      },
      {
        title: 'Software Engineering',
        description:
          'Software system development as an engineering activity, modelling software systems (UML), Agile and non-Agile approaches, requirements engineering (functional/non-functional types, relationship between requirements and testing), use case models, business domain modelling, structural modelling (conceptual models and object/class models, relationships/associations, constraints/invariants), dynamic modelling, software architectures, design patterns, quality requirements.',
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tm354',
          title: 'Website',
        },
        code: 'TM354',
        assessments: [
          {
            title: 'TMA01',
            description:
              'Use case models and user stories, activity diagrams, Agile methodologies, Volere templates.',
            score: 98,
          },
          {
            title: 'TMA02',
            description:
              'Problem domain modelling, analysis modelling, associations/multiplicities, pre and post conditions of system operations.',
            score: 92,
          },
          {
            title: 'TMA03',
            description:
              'Enterprise system architecture (Jakarta), design patterns, testing',
            score: 95,
          },
        ],
        result: 'Grade 2 Pass',
        software: [
          { title: 'diagrams.net' },
          { title: 'UMLet', url: 'https://www.umlet.com/' },
          {
            title: 'Jakarta Enterprise Edition',
            url: 'https://jakarta.ee/',
            author: 'Eclipse Foundation',
          },
          {
            title: 'NetBeans v12.2',
            url: 'https://netbeans.apache.org/',
            author: 'Apache',
          },
        ],
        resources: [
          {
            title:
              'Design Patterns: Elements of Reusable Object-Oriented Software',
            author: 'Gamma E., Helm R., Johnson R., Vlissides J.,',
            year: 1995,
          },
        ],
      },
      {
        title: 'Data management and analysis',
        description:
          'Focused on DBMS architectures and implementation, in both relational (PostgreSQL) and NoSQL contexts (MongoDB, a document database). The module begins with the data analysis pipeline, and relevant technologies such as pandas for tabular visualisations and seaborn for graphs. Then more in depth relational database work which involved data modelling, normalisation, subqueries/views, and concurrency. The NoSQL portion of the module focused on document databases with the appropriate data analysis techniques, as well as scaling the databases (replication/sharding/distributed transactions). The module concluded with data warehousing, data mining, and linked semantic web dataset interactions (eg. OWL and RDF languages).',
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tm351',
          title: 'Website',
        },
        code: 'TM351',
        result: 'Grade 2 Pass',
        software: [
          { title: 'PostgreSQL' },
          { title: 'MongoDB' },
          { title: 'Docker' },
          { title: 'Jupyter' },
          { title: 'pandas' },
          { title: 'PyMongo' },
        ],
        resources: [
          {
            title: 'MongoDB: The Definitive Guide',
            author: 'Bradshaw S., Brazil E., and Chodorow K.',
            edition: 3,
          },
          {
            title: 'Relational Database Design and Implementation',
            author: 'Jan L. Harrington',
            edition: 4,
          },
        ],
      },
      {
        title: 'The Computing and IT Project',
        description:
          'A flexible project module that can be based on any of the previous topics covered throughout the course. My project was applying machine learning techniques to detect accessibility errors in source code. This involved trialing different approaches and evaluating their perfomance, and iterating further on the most promising results.',
        link: {
          url: 'https://www.open.ac.uk/courses/qualifications/details/tm470?orig=q62',
          title: 'Website',
        },
        code: 'TM470',
        result: 'Grade 3',
        software: [
          { title: 'Azure DevOps' },
          { title: 'Git', url: 'https://git-scm.com/' },
          { title: 'TensorFlow' },
          { title: 'PyTorch', url: 'https://pytorch.org/' },
          { title: 'Microsoft Office' },
        ],
      },
      {
        code: 'TT284',
        title: 'Web Technologies',
        description:
          'Comprehensive web technology module from tech fundamentals (HTML, CSS) to topics such as accessibility, security, web standards, and architectures (Client-Server etc). Web APIs/HTTP/REST/AJAX and programming languages (JavaScript and PHP - SPAs, SSGs, SSRs) are covered in depth in different scenarios to show various use cases. ',
        assessments: [
          {
            title: 'TMA01',
            description: 'Museum landing page and report (HTML, CSS)',
          },
          {
            title: 'TMA02',
            description:
              'Guesthouse CRUD web application and report (PHP, JavaScript, SQL, Regex, HTML, CSS)',
          },
          {
            title: 'TMA03',
            description:
              'Guesthouse photo diary web application (JavaScript, HTML, CSS)',
          },
          {
            title: 'EMA',
            description:
              'Walking Club website project (design, implementation, testing) (PHP, JavaScript, HTML, CSS)',
          },
        ],
        result: 'Grade 2 Pass',
        resources: [
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
            title: 'HTML Standard',
            author: 'WHATWG',
            url: 'https://html.spec.whatwg.org/multipage/',
          },
          { title: 'PHP Documentation', url: 'https://www.php.net/docs.php' },
        ],
        software: [
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
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tt284',
          title: 'Website',
        },
      },
      {
        code: 'TM255',
        title: 'Communication and Information Technologies',
        description:
          'General networking and communications module. Information storage, radio transmission and mobile communication (IoT, 1-5G etc) and security/error control are covered in Block 1. Block 2 covered general interaction design and team collaboration, human-computer interactions with a focus on user interfaces and relevant heuristics. Block 3 covered cybersecurity, encryption, and ethical concerns related to biometric information processing and storage as well as the societal risks of artificial intelligence.',
        assessments: [
          {
            title: 'TMA01',
            description:
              '5G, asynchronous communication technologies, access point configuration (Packet Tracer)',
          },
          {
            title: 'TMA02',
            description:
              'Hotel Website Group Project (design, implementation, reflection) (WordPress)',
          },
          {
            title: 'TMA03',
            description:
              'Ethical and Legal Frameworks of IT, Biometric Authentication Systems report (written assessments)',
          },
          {
            title: 'EMA',
            description: 'Quantum Cryptography Information Website (WordPress)',
          },
        ],
        result: 'Distinction',
        software: [
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
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tm255',
          title: 'Website',
        },
      },
      {
        title: 'Algorithms, Data Structures and Computability',
        description:
          'Algorithms and complexity (Big-O notation), runtime analysis, data structures (lists, stacks, queues, dictionaries, sets, trees, graphs, search algorithms, recursion, greedy). Python and Jupyter Notebooks. Logic, theoretical computer science, and computability (eg. P != NP, halting problem etc). Content was covered through practical Python programming exercises and Notebooks projects.',
        link: {
          url: 'https://www.open.ac.uk/courses/modules/m269',
          title: 'Website',
        },
        code: 'M269',
        assessments: [
          {
            title: 'TMA01',
            description:
              'Part 1: Sequence data types, iterative algorithms, and algorithm complexity - Part 2: Stacks, queues, and priority Queues (Python)',
          },
          {
            title: 'TMA02',
            description:
              'Binary Trees, graphs, recursive functions and graphs, greedy algorithms (Python)',
          },
          {
            title: 'TMA03',
            description:
              'Sets, bags, maps, and logic (Propositional/Predicate) and well Formed Formulas, truth tables, Equivalence Problem essay (Python, SQL)',
          },
        ],
        result: 'Distinction',
        resources: [
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
        software: [
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
        link: {
          url: 'https://www.open.ac.uk/courses/modules/m250',
          title: 'Website',
        },
        code: 'M250',
        assessments: [
          {
            title: 'TMA01',
            description: 'Book Library Manager (Java)',
          },
          {
            title: 'TMA02',
            description:
              'Rock Paper Scissors game, Dictionary HashMaps and HashSets, SIR Infection Rate model (Java)',
          },
          {
            title: 'TMA03',
            description:
              'Roller Coaster Manager, Sailing Club and Boat Race Manager - Member/organisation project that could read/write CSV files (Java)',
          },
        ],
        result: 'Distinction',
        resources: [
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
        software: [
          {
            title: 'BlueJ',
            author: 'Kölling M.',
            url: 'https://www.bluej.org/',
          },
        ],
      },
      {
        title: 'Discovering Mathematics',
        code: 'MU123',
        result: 'Distinction',
        resources: [
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
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tm129',
          title: 'Website',
        },
        code: 'TM129',
        result: 'Grade 2 Pass',
        resources: [
          {
            title: 'Microsoft Networking Essentials',
            author: 'Gibson, D.',
            year: 2011,
          },
          { title: 'I, Robot', author: 'Asimov, I.', year: 1967 },
        ],
        software: [
          {
            title: 'VirtualBox',
            author: 'Oracle',
            url: 'https://www.virtualbox.org/',
          },
          {
            title: 'RobotLab',
            author: 'The Open University',
            url: 'https://github.com/ouseful-course-containers/ou-tm129-robotlab',
          },
          {
            title: 'NeuralNet',
            author: 'The Open University',
            url: 'https://github.com/ouseful-course-containers/ou-tm129-robotlab',
          },
        ],
      },
      {
        title: 'Introduction to Computing and Information Technology 2',
        description:
          'Block 1: Computer hardware and architecture, data management, cloud computing, mobile devices - Block 2: Python programming and algorithms - Block 3: Security, hacking, surveillance',
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tm112',
          title: 'Website',
        },
        code: 'TM112',
        result: 'Distinction',
        resources: [
          {
            title: 'Python Documentation',
            url: 'https://docs.python.org/3.8/',
          },
        ],
        software: [{ title: 'Python 3.8', url: 'https://www.python.org/' }],
      },
      {
        title: 'Introduction to Computing and Information Technology 1',
        description:
          'IT fundamentals, programming, and networking. Digital foundations and technologies were covered, including XML and binary as well as databases, including big data and cloud computing concepts. Most topics included a relevant socio-technical example to emphasise the connection between digital technology and society.',
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tm111',
          title: 'Website',
        },
        code: 'TM111',
        result: 'Distinction',
      },
    ],
  };
  ibat_course: Course = {
    title: 'Diploma in Computer Programming',
    institution: 'IBAT',
    link: { url: 'https://www.ibat.ie/', title: 'IBAT' },
    modules: [
      {
        title: 'Diploma in Computer Programming',
        description:
          'Eleven week course on OOP fundamentals in Java. Skills such as development environment management, CLI compilation, and NetBeans IDE were taught. Computational problem solving and algorithms were introduced.',
        link: {
          url: 'https://www.ibat.ie/courses/java-programming-diploma.html',
          title: 'Website',
        },
        assessments: [
          {
            title: 'Final Project',
            description:
              'Java BMI calculator, with GUI, exception handling, and data validation.',
          },
        ],
        result: 'Distinction',
        software: [
          {
            title: 'NetBeans',
            author: 'Apache',
            url: 'https://netbeans.apache.org/',
          },
        ],
      },
    ],
  };
  unity_course: Course = {
    title: 'Unity Learn',
    institution: 'Unity',
    link: { url: 'https://learn.unity.com/', title: 'Website' },
    modules: [
      {
        title: 'Junior Programmer Pathway',
        description:
          'A self paced course to introduce game development through a set of development and project management activities.',
        link: {
          url: 'https://learn.unity.com/pathway/junior-programmer',
          title: 'Website',
        },
        result: 'Ongoing',
      },
      {
        title: 'Create With VR',
        description:
          'An official course on creating virtual reality applications using Unity.',
        link: {
          url: 'https://learn.unity.com/course/create-with-vr',
          title: 'Website',
        },
      },
    ],
  };

  courses: Course[] = [
    this.computing_it_course,
    this.ibat_course,
    this.unity_course,
  ];
}
