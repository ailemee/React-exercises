import Animals from "../components/List";

export default function Exercise6() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <main className="mainContainer" key={animals.id}>
      <Animals animals={animals} />
    </main>
  );
}
