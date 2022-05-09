export default function Exercise3() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  const listAnimals = animals.map((animals) => (
    <li key={animals.id}>{animals}</li>
  ));

  return (
    <main className="mainContainer" key={animals.id}>
      <ul>{listAnimals}</ul>
    </main>
  );
}
