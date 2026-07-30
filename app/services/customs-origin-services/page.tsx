import { ServiceDetail } from "../../_components/ServiceDetail";
export default function CustomsPage() {
  return <ServiceDetail eyebrow="Customs & origin services" title="Keep cargo and documents ready for departure." intro="We coordinate the practical requirements between factories, truckers, warehouses, customs brokers and carriers." image="/control-room.png"
    capabilities={[["Factory coordination","Cargo-ready dates, pickup windows and shipping requirements."],["Export customs","Declaration coordination and document checks before cut-off."],["Shipping documents","Commercial documents, shipping instructions and bill of lading review."],["Exception management","Fast follow-up when cargo, schedules or documentation change."]]}
    outcomes={["Fewer missed cut-offs.","Better document accuracy.","Clear ownership across origin activities.","Earlier action when exceptions arise."]} />;
}
