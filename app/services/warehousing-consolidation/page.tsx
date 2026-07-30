import { ServiceDetail } from "../../_components/ServiceDetail";
export default function WarehousingPage() {
  return <ServiceDetail eyebrow="Warehousing & consolidation" title="Bring multiple suppliers together before departure." intro="Our origin warehouse services help you receive, check, prepare and consolidate cargo into a coordinated shipment." image="/warehouse.png"
    capabilities={[["Inbound receiving","Pickup scheduling, receiving records and cargo quantity checks."],["Cargo preparation","Labeling, palletizing, repacking and shipment identification."],["Supplier consolidation","Combine purchase orders and suppliers around one loading plan."],["Container loading","Loading coordination, cargo photos and departure preparation."]]}
    outcomes={["Better control over supplier readiness.","Fewer partial or unplanned shipments.","More efficient use of container space.","A clear record of cargo received and loaded."]} />;
}
