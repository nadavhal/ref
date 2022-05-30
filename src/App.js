import { useState, useEffect, useRef } from 'react';
import './App.css';

const par1 = `Batman is a superhero appearing in American comic books published by DC Comics.
    The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.
    In the DC Universe continuity, Batman is the alias of Bruce Wayne, a wealthy American playboy, philanthropist, and industrialist who resides in Gotham City.
    Batman's origin story features him swearing vengeance against criminals after witnessing the murder of his parents Thomas and Martha, a vendetta tempered with the ideal of justice.
    He trains himself physically and intellectually, crafts a bat-inspired persona, and monitors the Gotham streets at night.
    Kane, Finger, and other creators accompanied Batman with supporting characters, including his sidekicks Robin and Batgirl;
    allies Alfred Pennyworth, James Gordon, and Catwoman; and foes such as the Penguin, the Riddler, Two-Face, and his archenemy the Joker.`

    const par2 = `Batman's secret identity is Bruce Wayne, a wealthy American industrialist.
    As a child, Bruce witnessed the murder of his parents, Dr. Thomas Wayne and Martha Wayne, which ultimately led him to craft the Batman persona and seek justice against criminals.
    He resides on the outskirts of Gotham City in his personal residence, Wayne Manor.
    Wayne averts suspicion by acting the part of a superficial playboy idly living off his family's fortune and the profits of Wayne Enterprises, his inherited conglomerate.
    He supports philanthropic causes through his nonprofit Wayne Foundation, which in part addresses social issues encouraging crime as well as assisting victims of it, but is more widely known as a celebrity socialite.
    In public, he frequently appears in the company of high-status women, which encourages tabloid gossip while feigning near-drunkenness with consuming large quantities of disguised ginger ale since Wayne is actually a strict teetotaler to maintain his physical and mental prowess.
    Although Bruce Wayne leads an active romantic life, his vigilante activities as Batman account for most of his time.`

    const par3 = `Batman faces a variety of foes ranging from common criminals to outlandish supervillains.
    Many of them mirror aspects of the Batman's character and development, often having tragic origin stories that lead them to a life of crime.
    These foes are commonly referred to as Batman's rogues gallery. Batman's "most implacable foe" is the Joker, a homicidal maniac with a clown-like appearance.
    The Joker is considered by critics to be his perfect adversary, since he is the antithesis of Batman in personality and appearance; the Joker has a maniacal demeanor with a colorful appearance, while Batman has a serious and resolute demeanor with a dark appearance.
    As a "personification of the irrational", the Joker represents "everything Batman [opposes]".
    Other long-time recurring foes that are part of Batman's rogues gallery include Catwoman (a cat burglar anti-heroine who is an occasional ally and romantic interest),
    The Penguin, Ra's al Ghul, Two-Face, the Riddler, the Scarecrow, Mr. Freeze, Poison Ivy, Harley Quinn, Bane, Clayface, and Killer Croc, among others. Many of Batman's adversaries are often psychiatric patients at Arkham Asylum.`

    const par4 = `Batman has no inherent superhuman powers; he relies on "his own scientific knowledge, detective skills, and athletic prowess".
    Batman's inexhaustible wealth gives him access to advanced technologies, and as a proficient scientist, he is able to use and modify these technologies to his advantage.
    In the stories, Batman is regarded as one of the world's greatest detectives, if not the world's greatest crime solver.
    Batman has been repeatedly described as having a genius-level intellect, being one of the greatest martial artists in the DC Universe, and having peak human physical conditioning.
    As a polymath, his knowledge and expertise in countless disciplines is nearly unparalleled by any other character in the DC Universe.
    He has traveled the world acquiring the skills needed to aid him in his endeavors as Batman.
    In the Superman: Doomed story arc, Superman considers Batman to be one of the most brilliant minds on the planet.`


function App() {

  const a=useRef(), b=useRef(), c=useRef(), d=useRef();

  return (
    <div className='Main'>
      <button onClick={()=>a.current.scrollIntoView()}>Who is Batman</button>
      <button onClick={()=>b.current.scrollIntoView()}>Bruce Wayne</button>
      <button onClick={()=>c.current.scrollIntoView()}>Enemies</button>
      <button onClick={()=>d.current.scrollIntoView()}>Skills and training</button>
      <h2 ref={a}>Who is Batman</h2>
      <p>{par1}</p>
      <h2 ref={b}>Bruce Wayne</h2>
      <p>{par2}</p>
      <h2 ref={c}>Enemies</h2>
      <p>{par3}</p>
      <h2 ref={d}>Skills and training</h2>
      <p>{par4}</p>
    </div>
  );
}

export default App;
