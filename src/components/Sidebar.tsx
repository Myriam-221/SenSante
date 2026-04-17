export default function Sidebar() {
  const liens = [
    { label: "Tableau de bord", href: "/" },
    { label: "Patients", href: "/patients" },
    { label: "Consultations", href: "/consultations" },
    { label: "Alertes IA", href: "/alertes" },
  ];
  return (
    <aside className="bg-white w-56 min-h-screen shadow-md p-4">
      <nav>
        <ul>
          {liens.map((lien) => (
            <li key={lien.href} className="mb-2">
              <a
                href={lien.href}
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
              >
                {lien.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
