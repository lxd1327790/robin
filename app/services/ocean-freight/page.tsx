import { ServiceDetail } from "../../_components/ServiceDetail";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata("Ocean Freight Forwarder from China | FCL & LCL Shipping", "FCL and LCL ocean freight from China with carrier selection, booking, export documentation, consolidation and destination support.", "/services/ocean-freight");
export default function OceanFreightPage() {
  return <ServiceDetail eyebrow="Ocean freight" title="Reliable FCL and LCL shipping from China." intro="We match carrier, route, schedule and equipment to your cargo and commercial priorities." image="/hero-port.png"
    capabilities={[["FCL shipping","Carrier selection, equipment planning, booking and origin coordination."],["LCL consolidation","Flexible solutions for smaller volumes, supported by warehouse receiving and consolidation."],["Documentation","Shipping instructions, bill of lading coordination and export documentation."],["Destination support","Arrival, customs and delivery coordination through local partners."]]}
    outcomes={["A route matched to cost, timing and risk.","One origin contact across suppliers and carriers.","Clear updates from booking through arrival.","Fewer handoff gaps and documentation errors."]} />;
}
