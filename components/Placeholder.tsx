export default function Placeholder({ title }: { title: string }) {
  return (
    <section className="section wrap" style={{ borderBottom: "none", paddingBottom: 0 }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{title} - under construction</h1>
        <img src="/images/grug-in-a-minute.gif" alt="IN A MINUTE" className="wait-gif" />
        <p style={{ maxWidth: "max-content" }}>hold on bruh im tryna figure out what im doing</p>
    </section>
  );
}