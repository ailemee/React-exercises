export default function Exercise8() {
  const jsonArray = [
    {
      id: "1",
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: "2",
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  const jsonData = jsonArray.map((jsonArray) => {
    return (
      <div className="joke" key={jsonArray.id}>
        <h1>{jsonArray.setup}</h1>
        <p>{jsonArray.punchline}</p>
      </div>
    );
  });

  return <div className="jokes">{jsonData}</div>;
}
