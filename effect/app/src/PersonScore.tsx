import { useEffect, useReducer, useRef } from "react";
import { getPerson } from "./getPerson";

type State = {
  loading: boolean;
  name: string | undefined;
  score: number;
};

type Action =
  | {
      type: "initialize";
      name: string;
    }
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    }
  | {
      type: "reset";
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "initialize":
      return { name: action.name, score: 0, loading: false };
    case "increment":
      return { ...state, score: state.score + 1 };
    case "decrement":
      return { ...state, score: state.score - 1 };
    case "reset":
      return { ...state, score: 0 };
    default:
      return state;
  }
}
export function PersonScore() {
  const [{ loading, name, score }, dispatch] = useReducer(reducer, {
    loading: true,
    name: undefined,
    score: 0,
  });
  const addButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    getPerson().then((person) => {
      dispatch({ type: "initialize", name: person.name });
    });
  }, []);
  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <button
        ref={addButtonRef}
        onClick={() => dispatch({ type: "increment" })}
      >
        Add
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Subtract</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
