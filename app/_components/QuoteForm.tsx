"use client";

import { FormEvent, useState } from "react";

const field = (form: HTMLFormElement, name: string) =>
  (new FormData(form).get(name)?.toString().trim() ?? "Not provided");

export function QuoteForm() {
  const [ready, setReady] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = field(form, "name");
    const company = field(form, "company");
    const subject = `Shipment quotation request — ${company}`;
    const body = [
      "Dear Louis,",
      "",
      "Please review the following shipment and provide a quotation:",
      "",
      `Contact name: ${name}`,
      `Company: ${company}`,
      `Email: ${field(form, "email")}`,
      `Phone / WhatsApp: ${field(form, "phone")}`,
      "",
      `Origin / pickup address: ${field(form, "origin")}`,
      `Destination: ${field(form, "destination")}`,
      `Cargo-ready date: ${field(form, "readyDate")}`,
      `Incoterm: ${field(form, "incoterm")}`,
      "",
      `Commodity / cargo details: ${field(form, "cargo")}`,
      `Packages / cartons: ${field(form, "packages")}`,
      `Gross weight: ${field(form, "weight")}`,
      `Volume: ${field(form, "volume")}`,
      "",
      `Special requirements: ${field(form, "notes")}`,
      "",
      "Kind regards,",
      name,
    ].join("\n");

    setReady(true);
    window.location.href = `mailto:louis.zhong@robinlogisticsglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-heading">
        <p className="eyebrow">Shipment enquiry</p>
        <h2>Request a quotation.</h2>
        <p>Complete the fields below. Your email application will open with the shipment details ready to send.</p>
      </div>

      <fieldset>
        <legend>Contact details</legend>
        <label>Full name<input name="name" autoComplete="name" required /></label>
        <label>Company<input name="company" autoComplete="organization" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Phone / WhatsApp<input name="phone" type="tel" autoComplete="tel" /></label>
      </fieldset>

      <fieldset>
        <legend>Route and timing</legend>
        <label>Origin / pickup address<input name="origin" required /></label>
        <label>Destination<input name="destination" required /></label>
        <label>Cargo-ready date<input name="readyDate" type="date" /></label>
        <label>Incoterm
          <select name="incoterm" defaultValue="">
            <option value="" disabled>Select if known</option>
            <option>EXW</option><option>FCA</option><option>FOB</option><option>CFR</option>
            <option>CIF</option><option>DAP</option><option>DDP</option><option>Other / Not sure</option>
          </select>
        </label>
      </fieldset>

      <fieldset>
        <legend>Cargo details</legend>
        <label className="wide">Commodity / cargo description<textarea name="cargo" rows={3} required /></label>
        <label>Packages / cartons<input name="packages" /></label>
        <label>Gross weight<input name="weight" placeholder="e.g. 2,500 kg" /></label>
        <label>Volume<input name="volume" placeholder="e.g. 12 CBM" /></label>
        <label className="wide">Special handling or other requirements<textarea name="notes" rows={3} /></label>
      </fieldset>

      <label className="consent"><input type="checkbox" required /> I agree to provide these details for the purpose of receiving a logistics quotation.</label>
      <button className="button primary form-submit" type="submit">Prepare quotation email →</button>
      {ready && <p className="form-status">Your email application should now be open. Please review the message and select Send.</p>}
    </form>
  );
}
