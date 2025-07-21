export default function LastUpdated({ timestamp }) {
  const time = new Date(timestamp * 1000).toLocaleString();
  return <div className="text-xs text-gray-400 my-2">Last updated: {time}</div>;
}
