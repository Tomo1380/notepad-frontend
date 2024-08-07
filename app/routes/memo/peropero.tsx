import { useParams } from "@remix-run/react";

const memos = [
  { id: 1, title: "First Memo", content: "Content of the first memo." },
  { id: 2, title: "Second Memo", content: "Content of the second memo." },
  { id: 3, title: "Third Memo", content: "Content of the third memo." },
];

export default function MemoDetail() {
  const { memoId } = useParams<{ memoId: string }>();
  const memo = memos.find((m) => m.id === Number(memoId));

  if (!memo) {
    return <div>Memo not found</div>;
  }

  return (
    <div>
      <h1>{memo.title}</h1>
      <p>{memo.content}</p>
    </div>
  );
}
