import { Link } from "@remix-run/react";

const memos = [
  { id: 1, title: "First Memo" },
  { id: 2, title: "Second Memo" },
  { id: 3, title: "Third Memo" },
];

export default function MemoList() {
  return (
    <div>
      <h1>Memo List</h1>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <Link to={`/memo/${memo.id}`}>{memo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
