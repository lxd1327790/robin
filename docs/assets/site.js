(function () {
  const form = document.querySelector('.quote-form');
  if (!form) return;
  const value = (name) => new FormData(form).get(name)?.toString().trim() || 'Not provided';
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = value('name');
    const company = value('company');
    const subject = `Shipment quotation request 鈥?${company}`;
    const body = [
      'Dear Louis,', '', 'Please review the following shipment and provide a quotation:', '',
      `Contact name: ${name}`, `Company: ${company}`, `Email: ${value('email')}`,
      `Phone / WhatsApp: ${value('phone')}`, '', `Origin / pickup address: ${value('origin')}`,
      `Destination: ${value('destination')}`, `Cargo-ready date: ${value('readyDate')}`,
      `Incoterm: ${value('incoterm')}`, '', `Commodity / cargo details: ${value('cargo')}`,
      `Packages / cartons: ${value('packages')}`, `Gross weight: ${value('weight')}`,
      `Volume: ${value('volume')}`, '', `Special requirements: ${value('notes')}`,
      '', 'Kind regards,', name
    ].join('\n');
    window.location.href = `mailto:louis.zhong@robinlogisticsglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();