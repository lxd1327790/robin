import { ServiceDetail } from "../../_components/ServiceDetail";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata("Air Freight Forwarder from China | Robin Logistics", "Time-sensitive air freight from major Chinese airports with airport-to-airport and door-to-door logistics options.", "/services/air-freight");
export default function AirFreightPage() {
  return <ServiceDetail eyebrow="Air freight" title="When speed and control matter." intro="Flexible air freight options from major Chinese airports for time-sensitive and high-value shipments." image="/multimodal.png"
    capabilities={[["Route selection","Direct and connecting options based on urgency, capacity and budget."],["Airport coordination","Pickup, terminal handling, security requirements and cut-off management."],["Special cargo review","Early checks for batteries, oversized cargo and other handling requirements."],["Door-to-door support","Origin pickup and destination delivery coordinated through one shipment plan."]]}
    outcomes={["A clear balance between speed and cost.","Early identification of cargo restrictions.","Accurate documents and milestone updates.","Responsive handling when schedules change."]} />;
}
