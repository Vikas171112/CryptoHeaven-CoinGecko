import StatCard from "./StatCard";

export default function ICOStatus({ upcoming, ongoing, ended }) {
  return (
    <div className="flex gap-4 my-4">
      <StatCard title="Upcoming ICOs" value={upcoming} />
      <StatCard title="Ongoing ICOs" value={ongoing} />
      <StatCard title="Ended ICOs" value={ended} />
    </div>
  );
}
