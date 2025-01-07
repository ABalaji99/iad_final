import Industries from '@/app/api/(industries)/Industries';
import Link from 'next/link';
// Importing industries data

export default function IndustriesPage() {
  return (
    <div>
      <h1>Industries</h1>
      <ul>
        {Industries.map((industry) => (
          <li key={industry.slug}>
            <Link href={`/industries/${industry.slug}`}>{industry.industry}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
