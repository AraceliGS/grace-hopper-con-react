import React from 'react';
import './Main.css';
import List from './List.js';
import Phrase from './Phrase.js';

class Main extends React.Component {
  render() {
    return(
      <main className='biography'>
        <p><strong>Grace Brewster Murray Hopper</strong> (née <strong>Murray</strong>; December 9, 1906 – January 1, 1992) was an American <a href='https://en.wikipedia.org/wiki/Computer_scientist' target='_blank'>computer scientist</a> and United States Navy rear admiral. <mark>One of the first programmers of the Harvard Mark I computer</mark>, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which led to the development of COBOL, an early high-level programming language still in use today.</p>
        <p>Hopper had attempted to enlist in the Navy during <a href='https://en.wikipedia.org/wiki/World_War_II' target='_blank'>World War II</a>, but she was rejected by the military because she was 34 years of age and too old to enlist. She instead joined the Navy Reserves. Hopper began her computing career when she worked on the Harvard Mark I team that was led by Howard H. Aiken. In 1949, she joined the Eckert–Mauchly Computer Corporation and was part of the development team that designed the UNIVAC I computer in 1944. It was at Eckert–Mauchly that she began developing the compiler. She believed that computer code could be written in English by using a programming language that was based on English words. The compiler would convert that code into <a href='https://en.wikipedia.org/wiki/Machine_code' target='_blank'>machine code</a> that would be understood by computers. By 1952, Hopper finished her compiler, which was written for the <a href='https://en.wikipedia.org/wiki/A-0_System' target='_blank'>A-0 System</a> programming language.</p>
        <p>In 1954, Eckert–Mauchly chose Hopper to lead their department for automatic programming, and she led the release of some of the first compiled languages like FLOW-MATIC. In 1959, she participated in the CODASYL consortium, which consulted Hopper to guide them in creating a machine-independent programming language. This led to the COBOL language, which was inspired by her idea of a language being based on English words. In 1966, she retired from the Naval Reserve, but in 1967, the Navy recalled her to active duty. She retired from the Navy in 1986 and found work as a consultant for the Digital Equipment Corporation, sharing her computing experiences.</p>
        <p>Owing to her accomplishments and her naval rank, she was sometimes referred to as "Amazing Grace". The U.S. Navy Arleigh Burke-class guided-missile destroyer USS Hopper was named for her, as was the Cray XE6 "Hopper" supercomputer at NERSC.[8] During her lifetime, Hopper was awarded 40 honorary degrees from universities across the world. In 1991, she received the National Medal of Technology. On November 22, 2016, she was posthumously awarded the Presidential Medal of Freedom by President <a href='https://en.wikipedia.org/wiki/Barack_Obama' target='_blank'>Barack Obama</a>.</p>
        <h3>Career</h3>
        <List/>
        <Phrase/>
        <a href='#' target='_blank'>See more</a>
      </main>
    )
  }
}

export default Main;

