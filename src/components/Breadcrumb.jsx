import { Link } from 'react-router-dom';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
      <ol className="inline-flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.label} className="inline-flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {item.to ? (
              <Link to={item.to} className="text-indigo-600 hover:text-indigo-800">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-gray-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
