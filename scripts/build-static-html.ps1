param(
  [string]$SourceUrl = "https://robin-logistics-global.sanjiumbrella.chatgpt.site",
  [string]$CustomDomain = "robinlogisticsglobal.com"
)

$ErrorActionPreference = "Stop"
$project = Split-Path -Parent $PSScriptRoot
$output = Join-Path $project "docs"
$assets = Join-Path $output "assets"
$routes = @(
  @{ Path = "/"; File = "index.html" },
  @{ Path = "/about"; File = "about/index.html" },
  @{ Path = "/services"; File = "services/index.html" },
  @{ Path = "/china-origin-management"; File = "china-origin-management/index.html" },
  @{ Path = "/industries"; File = "industries/index.html" },
  @{ Path = "/trade-lanes"; File = "trade-lanes/index.html" },
  @{ Path = "/contact"; File = "contact/index.html" },
  @{ Path = "/services/ocean-freight"; File = "services/ocean-freight/index.html" },
  @{ Path = "/services/air-freight"; File = "services/air-freight/index.html" },
  @{ Path = "/services/warehousing-consolidation"; File = "services/warehousing-consolidation/index.html" },
  @{ Path = "/services/customs-origin-services"; File = "services/customs-origin-services/index.html" }
)

if (Test-Path -LiteralPath $output) { Remove-Item -LiteralPath $output -Recurse -Force }
New-Item -ItemType Directory -Path $assets -Force | Out-Null

$css = Get-Content -Raw (Join-Path $project "app/globals.css")
$css = $css -replace '(?m)^@import "tailwindcss";\s*', ''
[IO.File]::WriteAllText((Join-Path $assets "styles.css"), $css, [Text.UTF8Encoding]::new($false))

$javascript = @'
(function () {
  const form = document.querySelector('.quote-form');
  if (!form) return;
  const value = (name) => new FormData(form).get(name)?.toString().trim() || 'Not provided';
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = value('name');
    const company = value('company');
    const subject = `Shipment quotation request — ${company}`;
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
'@
[IO.File]::WriteAllText((Join-Path $assets "site.js"), $javascript, [Text.UTF8Encoding]::new($false))

foreach ($route in $routes) {
  $response = Invoke-WebRequest -Uri ($SourceUrl + $route.Path) -UseBasicParsing -TimeoutSec 30
  $html = $response.Content
  $html = [regex]::Replace($html, '<script(?![^>]*type="application/ld\+json")[^>]*>[\s\S]*?</script>', '', 'IgnoreCase')
  $html = [regex]::Replace($html, '<link[^>]+(?:as="script"|rel="modulepreload")[^>]*>', '', 'IgnoreCase')
  $html = [regex]::Replace($html, '<link[^>]+href="/_next/static/[^>]+>', '', 'IgnoreCase')
  $html = $html -replace '</head>', '<link rel="stylesheet" href="/assets/styles.css" /></head>'
  $html = $html -replace '</body>', '<script src="/assets/site.js" defer></script></body>'
  $html = $html -replace [regex]::Escape($SourceUrl), ("https://" + $CustomDomain)
  $target = Join-Path $output $route.File
  New-Item -ItemType Directory -Path (Split-Path -Parent $target) -Force | Out-Null
  [IO.File]::WriteAllText($target, $html, [Text.UTF8Encoding]::new($false))
}

Get-ChildItem (Join-Path $project "public") -File | ForEach-Object {
  Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $output $_.Name) -Force
}

$robots = "User-agent: *`nAllow: /`nSitemap: https://$CustomDomain/sitemap.xml`n"
[IO.File]::WriteAllText((Join-Path $output "robots.txt"), $robots, [Text.UTF8Encoding]::new($false))

$urls = $routes | ForEach-Object { "  <url><loc>https://$CustomDomain$($_.Path)</loc></url>" }
$sitemap = "<?xml version=`"1.0`" encoding=`"UTF-8`"?>`n<urlset xmlns=`"http://www.sitemaps.org/schemas/sitemap/0.9`">`n$($urls -join "`n")`n</urlset>`n"
[IO.File]::WriteAllText((Join-Path $output "sitemap.xml"), $sitemap, [Text.UTF8Encoding]::new($false))
[IO.File]::WriteAllText((Join-Path $output "CNAME"), "$CustomDomain`n", [Text.UTF8Encoding]::new($false))
[IO.File]::WriteAllText((Join-Path $output ".nojekyll"), "", [Text.UTF8Encoding]::new($false))

Write-Output "Static HTML site generated in $output"
