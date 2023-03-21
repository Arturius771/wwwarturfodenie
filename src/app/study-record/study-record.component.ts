import { Component } from '@angular/core';
import { Course } from '../lib/model/course';

// Example module:
// tm111: Module = {
//   title: 'Introduction to Computing and Information Technology 1',
//   description: 'IT fundamentals, programming, and networking.',
//   url: 'https://www.open.ac.uk/courses/modules/tm111',
//   github: '',
//
//   module_code: 'TM111',
//   assessments: [Assessment],
//   module_result: 'Distinction',
//   module_resources: [Book],
//   module_software: [Book],
// };

@Component({
  selector: 'app-study-record',
  templateUrl: './study-record.component.html',
  styleUrls: ['./study-record.component.less'],
})
export class StudyRecordComponent {
  computing_it_course: Course = {
    title: 'Computing and IT BSc',
    institution: 'The Open University',
    link: {
      url: 'https://www.open.ac.uk/',
      name: 'The Open University',
    },
    modules: [
      {
        title: 'The Computing and IT Project',
        description:
          'A flexible project module that can be based on any of the previous topics covered throughout the course. My project was applying machine learning techniques to detect accessibility errors in source code. This involved trialing different approaches and evaluating their perfomance, and iterating further on the most promising results.',
        link: {
          url: 'https://www.open.ac.uk/courses/qualifications/details/tm470?orig=q62',
        },
        module_code: 'TM470',
        module_result: 'Ongoing',
        module_software: [
          { title: 'Azure DevOps' },
          { title: 'Git', url: 'https://git-scm.com/' },
          { title: 'TensorFlow' },
          { title: 'PyTorch', url: 'https://pytorch.org/' },
          { title: 'Microsoft Office' },
        ],
      },
      {
        title: 'Machine Learning and Artificial Intelligence',
        description:
          'Comprehensive AI and ML module with blocks on Artificial Neural Networks, Convolutional Neural Networks, Recurrent Neural Networks, Autoencoders, model analysis and application, as well as ethical issues. Mathematical topics such as differentiation, integration, and linear algebra were covered so that those techniques could be applied when training and optimising machine learning models.',
        link: {
          url: 'https://www.open.ac.uk/courses/qualifications/details/tm358',
        },
        module_code: 'TM358',
        module_result: 'Ongoing',
        module_software: [{ title: 'TensorFlow' }],
      },
      {
        title: 'Software Engineering',
        description:
          'Software system development as an engineering activity, modelling software systems (UML), Agile and non-Agile approaches, requirements engineering (functional/non-functional types, relationship between requirements and testing), use case models, business domain modelling, structural modelling (conceptual models and object/class models, relationships/associations, constraints/invariants), dynamic modelling, software architectures, design patterns, quality requirements.',
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tm354',
        },
        module_code: 'TM354',
        assessments: [
          {
            assessment_title: 'TMA01',
            description:
              'Use case models and user stories, activity diagrams, agile methodologies, Volere templates.',
          },
        ],
        module_result: 'Awaiting Result',
        module_software: [
          { title: 'diagrams.net' },
          { title: 'UMLet', url: 'https://www.umlet.com/' },
        ],
      },
      {
        title: 'Data management and analysis',
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tm351',
        },
        module_code: 'TM351',
        module_result: 'Awaiting Result',
        module_software: [
          { title: 'PostgreSQL' },
          { title: 'MongoDB' },
          { title: 'Docker' },
          { title: 'Jupyter' },
          { title: 'pandas' },
          { title: 'PyMongo' },
        ],
        module_resources: [
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
            title: 'HTML Standard',
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
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tt284',
        },
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
          'General networking and communications module. Information storage, radio transmission and mobile communication (IoT, 1-5G etc) and security/error control are covered in Block 1. Block 2 covered general interaction design and team collaboration, human-computer interactions with a focus on user interfaces. Block 3 covered cybersecurity, encryption, and ethical concerns related to biometric information processing and storage as well as the societal risks of artificial intelligence.',
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tm255',
        },
      },
      {
        title: 'Algorithms, Data Structures and Computability',
        description:
          'Algorithms and complexity (Big-O notation), runtime analysis, data structures (lists, stacks, queues, dictionaries, sets, trees, graphs, search algorithms, recursion, greedy. Python and Jupyter Notebooks. Logic, computability (eg. P != NP, halting problem etc). Content was covered through practical Python programming exercises and Notebooks projects.',
        link: {
          url: 'https://www.open.ac.uk/courses/modules/m269',
        },
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
        link: {
          url: 'https://www.open.ac.uk/courses/modules/m250',
        },
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
          {
            title: 'BlueJ',
            author: 'Kölling M.',
            url: 'https://www.bluej.org/',
          },
        ],
      },
      {
        title: 'Discovering Mathematics',
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
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tm129',
        },
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
        module_software: [
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
        },
        module_code: 'TM112',
        module_result: 'Distinction',
        module_resources: [
          {
            title: 'Python Documentation',
            url: 'https://docs.python.org/3.8/',
          },
        ],
        module_software: [
          { title: 'Python 3.8', url: 'https://www.python.org/' },
        ],
      },
      {
        title: 'Introduction to Computing and Information Technology 1',
        description: 'IT fundamentals, programming, and networking.',
        link: {
          url: 'https://www.open.ac.uk/courses/modules/tm111',
        },
        module_code: 'TM111',
        module_result: 'Distinction',
      },
    ],
  };
  ibat_course: Course = {
    title: 'Diploma in Computer Programming',
    institution: 'IBAT',
    link: { url: 'https://www.ibat.ie/', name: 'WebSite' },
    modules: [
      {
        title: 'Diploma in Computer Programming',
        description:
          'Eleven week course on OOP fundamentals in Java. Skills such as development environment management, CLI compilation, and NetBeans IDE were taught. Computational problem solving and algorithms were introduced.',
        link: {
          url: 'https://www.ibat.ie/courses/java-programming-diploma.html',
        },
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
    ],
  };
  unity_course: Course = {
    title: 'Unity Learn',
    institution: 'Unity',
    link: { url: 'https://learn.unity.com/', name: 'Website' },
    modules: [
      {
        title: 'Junior Programmer Pathway',
        description:
          'A self paced course to introduce game development through a set of development and project management activities.',
        link: {
          url: 'https://learn.unity.com/pathway/junior-programmer',
        },
        module_result: 'Ongoing',
      },
      {
        title: 'Create With VR',
        description:
          'An official course on creating virtual reality applications using Unity.',
        link: {
          url: 'https://learn.unity.com/course/create-with-vr',
        },
      },
    ],
  };

  public getCourse() {
    return this.computing_it_course;
  }
}
