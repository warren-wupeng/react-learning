import { useEffect, useReducer, useRef, useMemo, useCallback } from "react";
import { getPerson } from "./getPerson";
import { Reset } from "./Reset";

function someExpensiveComputation() {
  console.log("Expensive computation");
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}

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
  const expensiveValue = useMemo(() => someExpensiveComputation(), []);
  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <p>Expensive value: {expensiveValue}</p>
      <button
        ref={addButtonRef}
        onClick={() => dispatch({ type: "increment" })}
      >
        Add
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Subtract</button>
      <Reset onClick={handleReset} />
    </div>
  );
}
