import { company } from '../../content/company'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Government Contracting',
  description:
    'Capabilities statement, company identifiers, contract vehicles and compliance information for government contracting.',
}

export default function ContractingPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
        Government Contracting
      </h1>
      <div className="max-w-3xl mx-auto space-y-6 text-muted">
        <p>
          We provide advanced radar, AI and aerospace engineering services with rapid
          prototyping, certified quality processes and a proven track record
          delivering to DoD and NASA programmes. Our multidisciplinary team
          understands military requirements, operates within secure facilities and
          meets strict compliance standards.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-3">Company Identifiers</h2>
          <table className="w-full text-sm text-left border-collapse border border-white/10">
            <tbody>
              <tr className="border-b border-white/10">
                <th className="p-2 font-medium text-foreground">CAGE Code</th>
                <td className="p-2 text-muted">{company.identifiers.cage}</td>
              </tr>
              <tr className="border-b border-white/10">
                <th className="p-2 font-medium text-foreground">DUNS Number</th>
                <td className="p-2 text-muted">{company.identifiers.duns}</td>
              </tr>
              <tr className="border-b border-white/10">
                <th className="p-2 font-medium text-foreground">NAICS Codes</th>
                <td className="p-2 text-muted">{company.identifiers.naics}</td>
              </tr>
              <tr>
                <th className="p-2 font-medium text-foreground">Socio‑economic Status</th>
                <td className="p-2 text-muted">{company.identifiers.socioStatus}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-3">Contract Vehicles</h2>
          <ul className="list-disc list-inside space-y-2 text-muted">
            {company.contractVehicles.map((vehicle, idx) => (
              <li key={idx}>{vehicle}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-3">Compliance & Certifications</h2>
        <ul className="list-disc list-inside space-y-2 text-muted">
          <li>ITAR/EAR aware — we adhere to U.S. export regulations and handle controlled technical data responsibly.</li>
          <li>NIST SP 800‑171 and CMMC Level {company.compliance.nistCmmc} alignment.</li>
          <li>Facility clearance status: {company.compliance.facilityClearance}.</li>
        </ul>
      </div>
      <div className="text-xs text-muted max-w-4xl mx-auto mt-8">
        This information is for general reference and does not constitute a legal statement. Do not transmit classified or
        ITAR/EAR‑restricted information through this website.
      </div>
    </section>
  )
}