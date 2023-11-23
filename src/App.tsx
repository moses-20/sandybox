import "./App.css";
import { useEffect, useState } from "react";
import { useNuban } from "./hooks";
import { Bank } from "./data";

function App() {
  const [account, setAccount] = useState("2391306352");
  const [suggestions, setSuggestions] = useState<Bank[]>([]);

  const nuban = useNuban();

  useEffect(() => {
    if (account.length > 9) {
      const suggestions = nuban(account);
      setSuggestions(suggestions);
    } else {
      setSuggestions([]);
    }
  }, [account]);

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
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        NUBAN
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
        }}
      >
        Enter your account number to get bank suggestions
      </p>

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
        {suggestions.length > 0 ? (
          suggestions.map((suggestion) => (
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
          ))
        ) : (
          <div
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
              No Suggestions
            </p>
          </div>
        )}

        <p
          style={{
            fontSize: "0.8rem",
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          Suggestions are based on
          <a
            href="https://www.cbn.gov.ng/supervision/Inst-DM.asp"
            target="_blank"
            style={{
              color: "blue",
              margin: "0 3px",
            }}
          >
            the 24 licensed commercial banks
          </a>
          in Nigeria.
        </p>
      </div>
    </div>
  );
}

export default App;
