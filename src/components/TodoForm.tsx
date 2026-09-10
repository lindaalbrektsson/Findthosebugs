import { useState, type FormEvent } from "react";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (text.trim() === "") {
      setError("En uppgift måste innehålla minst ett tecken.");
      return;
    }

    onAdd(text);
    setText("");
    setError("");
  }

  //Bugg 4: tidigare fanns ingen kontroll för att en ny uppgift inte kunde vara tom eller bara innehålla mellanslag, men nu får man felmeddelande och ingen ny uppgift skapas.

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Ny uppgift</label>
      <input
        id="new-todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Vad behöver göras?"
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Lägg till</button>
    </form>
  );
}
