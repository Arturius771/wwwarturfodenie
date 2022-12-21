import { Component } from '@angular/core';
import { Assessment } from '../lib/model/assessment';
import { Book } from '../lib/model/book';

@Component({
  selector: 'app-af-study-record',
  templateUrl: './af-study-record.component.html',
  styleUrls: ['./af-study-record.component.less'],
})
export class AfStudyRecordComponent {
  tm112_resources = [
    { title: 'Python Documentation', url: 'https://docs.python.org/3.8/' },
  ];

  tm129_resources: Array<Book> = [
    {
      title: 'Microsoft Networking Essentials',
      author: 'Gibson, D.',
      year: 2011,
    },
    { title: 'I, Robot', author: 'Asimov, I.', year: 1967 },
  ];

  mu123_resources: Array<Book> = [
    {
      title: 'Discovering Mathematics Books: A, B, C, D',
      author: 'Various Authors',
    },
  ];

  m250_assessments: Array<Assessment> = [
    { assessment_title: 'TMA01', description: 'Book Library Manager (Java)' },
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
  ];

  m250_resources: Array<Book> = [
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
  ];

  m269_assessments: Array<Assessment> = [
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
  ];

  m269_resources: Array<Book> = [
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
  ];

  m269_resources_software: Array<Book> = [
    {
      title: 'Anaconda',
      author: 'Continuum analytics',
      url: 'https://www.anaconda.com/',
    },
  ];

  tm255_assessments: Array<Assessment> = [
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
  ];

  tm255_resources_software: Array<Book> = [
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
  ];

  tt284_assessments: Array<Assessment> = [
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
  ];
}
