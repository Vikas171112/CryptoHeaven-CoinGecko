export default function StatCard({ title, value }) {
  return (
    <div className="rounded bg-gray-800 text-white p-4 m-2 shadow">
      <div className="text-xs uppercase tracking-widest">{title}</div>
      <div className="font-bold text-2xl mt-2">{value}</div>
    </div>
  );
}
