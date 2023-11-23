import "./App.css";
import { useEffect, useState } from "react";
import { useNuban } from "./hooks";
import { Bank } from "./data";

function App() {
  const [account, setAccount] = useState("");
  const [suggestions, setSuggestions] = useState<Bank[]>([]);

  useEffect(() => {
    if (account.length > 9) {
      const suggestions = nuban(account);
      setSuggestions(suggestions);
    }
  }, [account]);

  const nuban = useNuban();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <input
        type="text"
        value={account}
        onChange={handleInput}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "1.2rem",
          margin: "10px 0",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <div>
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.code}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "1.2rem",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
              }}
            >
              {suggestion.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
