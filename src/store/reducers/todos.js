const INITIAL_STATE = [
  { id: 1, text: "Make some coffe" },
  { id: 2, text: "Learn react" },
  { id: 3, text: "Learn redux" },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }]
    default:
      return state;
  }
}
