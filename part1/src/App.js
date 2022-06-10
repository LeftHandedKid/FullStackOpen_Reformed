import { useState } from 'react'

const Button = ({ buttonText, handleClick }) => {
  return (
    <>
      <button onClick={handleClick} type='button'>
        {buttonText}
      </button>
    </>
  )
}

const Vote = ({ num }) => {
  return (
    <>
      <br />
      has {num} votes
    </>
  )
}

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Content = ({ title }) => {
  return (
    <h2>{title}</h2>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]

  const [selected, setSelected] = useState(0);

  const points = Array(anecdotes.length).fill(0);
  let [votes, setVotes] = useState(points);

  const addVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  }

  const findHighestVotedQuote = (arr) => {
    // set initial values to first element in array - doesnt matter which element really
    let maxVotes = votes[0];
    let index = 0;

    // prob O(N) + 3 steps for algorithm - look at hash table to make it faster
    for (let i = 0; i < votes.length; i++) {
      // find highest voted quote and find that index for that quote
      if (votes[i] > maxVotes) {
        maxVotes = votes[i];
        index = i;
      };
    };

    // return that quote and display it
    return `
      ${arr[index]} HAS ${maxVotes} VOTES!
    `;
  }

  return (
    <>
      <Header title={"Anedote of the Day"} />
      {anecdotes[selected]}
      <Vote num={votes[selected]} />
      <br />
      <Button
        buttonText={"vote"}
        handleClick={addVote} />

      <Button
        buttonText={"next anecdote"}
        handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} />

      <Content title={"Anecdote with Most Votes"} />
      {findHighestVotedQuote(anecdotes)}
    </>
  )
}

export default App