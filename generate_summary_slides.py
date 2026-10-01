import os

os.makedirs("public/projects/gallery", exist_ok=True)

# 1. Rainwater Summary Slide
rainwater_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="50%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#bg)"/>
  <rect x="2" y="2" width="1196" height="671" rx="16" fill="none" stroke="#1e293b" stroke-width="2"/>

  <!-- Top Badge Bar -->
  <rect x="40" y="38" width="70" height="4" rx="2" fill="url(#accent)"/>
  <text x="40" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="#38bdf8">PROJECT LIFECYCLE SUMMARY &amp; IMPACT METRICS</text>
  <text x="40" y=\"106\" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" fill="#ffffff">Smart Rainwater Harvesting &amp; Filtration System</text>
  <text x="40" y="132" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#94a3b8">BangMan Solutions (6 Engineers) • UniKL MFI (2025–2026) • Project Lead &amp; Pressure Vessel Engineer: Muhammad Aiman</text>

  <!-- Status Pill -->
  <g transform="translate(930, 45)">
    <rect width="230" height="34" rx="17" fill="#083344" stroke="#06b6d4" stroke-opacity="0.5"/>
    <circle cx="20" cy="17" r="5" fill="#10b981"/>
    <text x="34" y="21" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#38bdf8">COMMISSIONED &amp; VALIDATED</text>
  </g>

  <!-- 4 KPI Metrics -->
  <g transform="translate(40, 155)">
    <rect width="265" height="120" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="16" width="32" height="3" rx="1.5" fill="#06b6d4"/>
    <text x="20" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#06b6d4">63%</text>
    <text x="20" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">BOM Cost Savings</text>
    <text x="20" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">Sourced modular dual-tank parts</text>
  </g>

  <g transform="translate(325, 155)">
    <rect width="265" height="120" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="16" width="32" height="3" rx="1.5" fill="#38bdf8"/>
    <text x="20" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#38bdf8">3,000 N</text>
    <text x="20" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">Load Capacity (FoS 2.45)</text>
    <text x="20" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">Max deflection 0.0058 mm (FEA)</text>
  </g>

  <g transform="translate(610, 155)">
    <rect width="265" height="120" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="16" width="32" height="3" rx="1.5" fill="#3b82f6"/>
    <text x="20" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#3b82f6">250 L</text>
    <text x="20" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">Dual Tank Capacity</text>
    <text x="20" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">Primary settling + multi-layer filter</text>
  </g>

  <g transform="translate(895, 155)">
    <rect width="265" height="120" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="16" width="32" height="3" rx="1.5" fill="#10b981"/>
    <text x="20" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#10b981">&lt;500 ms</text>
    <text x="20" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">Dry-Run Protection Cutoff</text>
    <text x="20" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">ESP32 + Blynk cloud telemetry</text>
  </g>

  <!-- Flowchart Container -->
  <g transform="translate(40, 295)">
    <rect width="1120" height="200" rx="16" fill="#0b1329" stroke="#1e293b" stroke-width="1.5"/>
    <text x="25" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#38bdf8" letter-spacing="1">ENGINEERING LIFECYCLE: FROM SOLIDWORKS TO PROTOTYPE</text>

    <!-- Step 1 -->
    <g transform="translate(25, 52)">
      <rect width="245" height="125" rx="12" fill="#1e293b" fill-opacity="0.7" stroke="#334155"/>
      <circle cx="24" cy="24" r="11" fill="#083344" stroke="#06b6d4"/>
      <text x="24" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#38bdf8" text-anchor="middle">1</text>
      <text x=\"44\" y=\"28\" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">3D CAD Modeling</text>
      <text x="16" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• SolidWorks full chassis assembly</text>
      <text x="16" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Dual-tank &amp; gutter placement</text>
      <text x="16" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Orthographic shop drawings</text>
    </g>

    <text x="284" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#38bdf8">→</text>

    <!-- Step 2 -->
    <g transform="translate(305, 52)">
      <rect width="245" height="125" rx="12" fill="#1e293b" fill-opacity="0.7" stroke="#334155"/>
      <circle cx="24" cy="24" r="11" fill="#083344" stroke="#06b6d4"/>
      <text x="24" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#38bdf8" text-anchor="middle">2</text>
      <text x="44" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">FEA &amp; CFD Analysis</text>
      <text x="16" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• 3000N static load simulation</text>
      <text x="16" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• AISI 304 safety factor 2.45</text>
      <text x="16" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Brass solenoid flow pressure</text>
    </g>

    <text x="564" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#38bdf8">→</text>

    <!-- Step 3 -->
    <g transform="translate(585, 52)">
      <rect width="245" height="125" rx="12" fill="#1e293b" fill-opacity="0.7" stroke="#334155"/>
      <circle cx="24" cy="24" r="11" fill="#083344" stroke="#06b6d4"/>
      <text x="24" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#38bdf8" text-anchor="middle">3</text>
      <text x="44" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Workshop Machining</text>
      <text x="16" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• PVC pipe cutting &amp; porting</text>
      <text x="16" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Steel base frame assembly</text>
      <text x="16" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• 4-relay &amp; 12V pump wiring</text>
    </g>

    <text x="844" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#38bdf8">→</text>

    <!-- Step 4 -->
    <g transform="translate(865, 52)">
      <rect width="230" height="125" rx="12" fill="#1e293b" fill-opacity="0.7" stroke="#334155"/>
      <circle cx="24" cy="24" r="11" fill="#083344" stroke="#06b6d4"/>
      <text x="24" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#38bdf8" text-anchor="middle">4</text>
      <text x="44" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">IoT Cloud Delivery</text>
      <text x="16" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• ESP32 C++ automation code</text>
      <text x="16" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Ultrasonic depth &amp; TDS telemetry</text>
      <text x="16" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Live Blynk smartphone dashboard</text>
    </g>
  </g>

  <!-- Key Achievements Bar -->
  <g transform="translate(40, 515)">
    <rect width="1120" height="120" rx="14" fill="#1e293b" fill-opacity="0.5" stroke="#334155" stroke-width="1"/>
    <text x="25" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#f1f5f9">SUMMARY TAKEAWAYS &amp; COLLABORATION IMPACT</text>
    <text x="25" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94a3b8">✔ Direct team lead for 6 engineers across mechanical fabrication, structural safety validation, and electrical sensor wiring.</text>
    <text x="25" y="72" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94a3b8">✔ Supervised by Dr. Ts. Azri at UniKL MFI; verified safety compliance under rigorous hydrostatic pressure testing.</text>
    <text x="25" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94a3b8">✔ Operational result: Ready for industrial facility adoption, supplying clean filtered non-potable water for cooling and sanitation.</text>
  </g>
</svg>"""

with open("public/projects/gallery/rainwater_step5_summary.svg", "w", encoding="utf-8") as f:
    f.write(rainwater_svg)
print("Saved rainwater_step5_summary.svg")

# 2. DCC++ Summary Slide
dcc_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#60a5fa"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#bg)"/>
  <rect x="2" y="2" width="1196" height="671" rx="16" fill="none" stroke="#1e293b" stroke-width="2"/>

  <!-- Top Badge Bar -->
  <rect x="40" y="38" width="70" height="4" rx="2" fill="url(#accent)"/>
  <text x="40" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="#38bdf8">ACADEMIC RESEARCH SUMMARY &amp; BENCHMARK RESULTS</text>
  <text x="40" y="106" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" fill="#ffffff">DCC++ Base Station Simulation &amp; NMRA S-9.1 Protocol Validation</text>
  <text x="40" y="132" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#94a3b8">Solo Systems &amp; Software Research • Published Academic Paper (June 2026) • Author: Muhammad Aiman</text>

  <!-- Status Pill -->
  <g transform="translate(940, 45)">
    <rect width="220" height="34" rx="17" fill="#083344" stroke="#06b6d4" stroke-opacity="0.5"/>
    <circle cx="20" cy="17" r="5" fill="#10b981"/>
    <text x="34" y="21" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#38bdf8">PUBLISHED RESEARCH</text>
  </g>

  <!-- 4 KPI Metrics -->
  <g transform="translate(40, 155)">
    <rect width="265" height="120" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="16" width="32" height="3" rx="1.5" fill="#38bdf8"/>
    <text x="20" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#38bdf8">100%</text>
    <text x="20" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">NMRA Compliance</text>
    <text x="20" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">Passed all 12 S-9.1 / S-9.2 criteria</text>
  </g>

  <g transform="translate(325, 155)">
    <rect width="265" height="120" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="16" width="32" height="3" rx="1.5" fill="#60a5fa"/>
    <text x="20" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#60a5fa">0.48 µs</text>
    <text x="20" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">Microsecond Jitter (σ)</text>
    <text x="20" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">Logic '1' 58 µs, Logic '0' 100 µs</text>
  </g>

  <g transform="translate(610, 155)">
    <rect width="265" height="120" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="16" width="32" height="3" rx="1.5" fill="#818cf8"/>
    <text x="20" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#818cf8">r = 1.0</text>
    <text x="20" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">Speed Linearity (r = 0.999999)</text>
    <text x="20" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">28-step throttle monotonicity</text>
  </g>

  <g transform="translate(895, 155)">
    <rect width="265" height="120" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="16" width="32" height="3" rx="1.5" fill="#10b981"/>
    <text x="20" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#10b981">0% Loss</text>
    <text x="20" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">8 Trains Concurrent</text>
    <text x="20" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">Queue latency &lt;8.82 ms (200ms cycle)</text>
  </g>

  <!-- Flowchart Container -->
  <g transform="translate(40, 295)">
    <rect width="1120" height="200" rx="16" fill="#0b1329" stroke="#1e293b" stroke-width="1.5"/>
    <text x="25" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#38bdf8" letter-spacing="1">SIMULATION ARCHITECTURE: 5-MODULE PYTHON BENCHMARK</text>

    <!-- Step 1 -->
    <g transform="translate(25, 52)">
      <rect width="245" height="125" rx="12" fill="#1e293b" fill-opacity="0.7" stroke="#334155"/>
      <circle cx="24" cy="24" r="11" fill="#083344" stroke="#06b6d4"/>
      <text x="24" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#38bdf8" text-anchor="middle">1</text>
      <text x="44" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Bit Pulse Synthesis</text>
      <text x="16" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• 5,000 Logic '1' and '0' bits</text>
      <text x="16" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• ATmega Timer1 prescaler model</text>
      <text x="16" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Gaussian jitter noise injection</text>
    </g>

    <text x="284" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#38bdf8">→</text>

    <!-- Step 2 -->
    <g transform="translate(305, 52)">
      <rect width="245" height="125" rx="12" fill="#1e293b" fill-opacity="0.7" stroke="#334155"/>
      <circle cx="24" cy="24" r="11" fill="#083344" stroke="#06b6d4"/>
      <text x="24" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#38bdf8" text-anchor="middle">2</text>
      <text x="44" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Packet Encoding</text>
      <text x="16" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• 14-bit preamble formatting</text>
      <text x="16" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• 7-bit &amp; 14-bit decoder addressing</text>
      <text x="16" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• XOR error detection byte</text>
    </g>

    <text x="564" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#38bdf8">→</text>

    <!-- Step 3 -->
    <g transform="translate(585, 52)">
      <rect width="245" height="125" rx="12" fill="#1e293b" fill-opacity="0.7" stroke="#334155"/>
      <circle cx="24" cy="24" r="11" fill="#083344" stroke="#06b6d4"/>
      <text x="24" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#38bdf8" text-anchor="middle">3</text>
      <text x="44" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Multi-Train Queues</text>
      <text x="16" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• FIFO queue scheduler (1-8 trains)</text>
      <text x="16" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• 60,000 ms simulated runs</text>
      <text x="16" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• 10 randomized traffic seeds</text>
    </g>

    <text x="844" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#38bdf8">→</text>

    <!-- Step 4 -->
    <g transform="translate(865, 52)">
      <rect width="230" height="125" rx="12" fill="#1e293b" fill-opacity="0.7" stroke="#334155"/>
      <circle cx="24" cy="24" r="11" fill="#083344" stroke="#06b6d4"/>
      <text x="24" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#38bdf8" text-anchor="middle">4</text>
      <text x="44" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">JMRI TCP Benchmark</text>
      <text x="16" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Live TCP socket port 2560</text>
      <text x="16" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• DecoderPro throttle control</text>
      <text x="16" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• E-Stop response verified: 8.17 ms</text>
    </g>
  </g>

  <!-- Key Achievements Bar -->
  <g transform="translate(40, 515)">
    <rect width="1120" height="120" rx="14" fill="#1e293b" fill-opacity="0.5" stroke="#334155" stroke-width="1"/>
    <text x="25" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#f1f5f9">RESEARCH IMPACT &amp; VALIDATION RIGOR</text>
    <text x="25" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94a3b8">✔ Sole author of published research verifying timing stability and queue limits of open-source DCC++ embedded architecture.</text>
    <text x="25" y="72" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94a3b8">✔ Replaced guesswork with statistical verification: confirmed microsecond accuracy with NumPy and SciPy distribution fits.</text>
    <text x="25" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94a3b8">✔ Production-ready: code freely benchmarks hardware command stations prior to physical track installation.</text>
  </g>
</svg>"""

with open("public/projects/gallery/dcc_step5_summary.svg", "w", encoding="utf-8") as f:
    f.write(dcc_svg)
print("Saved dcc_step5_summary.svg")

# 3. Disinfection Summary Slide
disinfection_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="50%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#bg)"/>
  <rect x="2" y="2" width="1196" height="671" rx="16" fill="none" stroke="#1e293b" stroke-width="2"/>

  <!-- Top Badge Bar -->
  <rect x="40" y="38" width="70" height="4" rx="2" fill="url(#accent)"/>
  <text x="40" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="#10b981">FINAL YEAR PROJECT SUMMARY &amp; FABRICATION METRICS</text>
  <text x="40" y="106" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" fill="#ffffff">Automated Walk-Through Disinfection Tunnel System</text>
  <text x="40" y="132" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#94a3b8">Mechanical Engineering Diploma (FYP) • Group 65 • Politeknik Port Dickson • Mechanical Fabrication Lead: Muhammad Aiman</text>

  <!-- Status Pill -->
  <g transform="translate(930, 45)">
    <rect width="230" height="34" rx="17" fill="#064e3b" stroke="#10b981" stroke-opacity="0.5"/>
    <circle cx="20" cy="17" r="5" fill="#10b981"/>
    <text x="34" y="21" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#6ee7b7">FABRICATED &amp; DEPLOYED</text>
  </g>

  <!-- 4 KPI Metrics -->
  <g transform="translate(40, 155)">
    <rect width="265" height="120" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="16" width="32" height="3" rx="1.5" fill="#10b981"/>
    <text x="20" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#10b981">100%</text>
    <text x="20" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">User Survey Approval</text>
    <text x="20" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">32/32 workshop respondents</text>
  </g>

  <g transform="translate(325, 155)">
    <rect width="265" height="120" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="16" width="32" height="3" rx="1.5" fill="#06b6d4"/>
    <text x="20" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#06b6d4">1,500 W</text>
    <text x="20" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">Thermal Fogging Unit</text>
    <text x="20" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">Rapid aerosol fog production</text>
  </g>

  <g transform="translate(610, 155)">
    <rect width="265" height="120" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="16" width="32" height="3" rx="1.5" fill="#3b82f6"/>
    <text x="20" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#3b82f6">10 Nozzles</text>
    <text x="20" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">360° Radial Coverage</text>
    <text x="20" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">0.2mm precision misting aperture</text>
  </g>

  <g transform="translate(895, 155)">
    <rect width="265" height="120" rx="14" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>
    <rect x="20" y="16" width="32" height="3" rx="1.5" fill="#f59e0b"/>
    <text x="20" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#f59e0b">0%</text>
    <text x="20" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">Surface Wetting</text>
    <text x="20" y="100" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">Dry-contact fog eliminates slips</text>
  </g>

  <!-- Flowchart Container -->
  <g transform="translate(40, 295)">
    <rect width="1120" height="200" rx="16" fill="#0b1329" stroke="#1e293b" stroke-width="1.5"/>
    <text x="25" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#10b981" letter-spacing="1">DESIGN &amp; FABRICATION PHASES</text>

    <!-- Step 1 -->
    <g transform="translate(25, 52)">
      <rect width="245" height="125" rx="12" fill="#1e293b" fill-opacity="0.7" stroke="#334155"/>
      <circle cx="24" cy="24" r="11" fill="#064e3b" stroke="#10b981"/>
      <text x="24" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#6ee7b7" text-anchor="middle">1</text>
      <text x="44" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Chamber Sizing</text>
      <text x="16" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• 25mm mild steel tube frame</text>
      <text x="16" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Walk-through ergonomic clearance</text>
      <text x="16" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Roof equipment shelter housing</text>
    </g>

    <text x="284" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#10b981">→</text>

    <!-- Step 2 -->
    <g transform="translate(305, 52)">
      <rect width="245" height="125" rx="12" fill="#1e293b" fill-opacity="0.7" stroke="#334155"/>
      <circle cx="24" cy="24" r="11" fill="#064e3b" stroke="#10b981"/>
      <text x="24" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#6ee7b7" text-anchor="middle">2</text>
      <text x="44" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Pneumatic Layout</text>
      <text x="16" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• 10x 0.2mm brass misting heads</text>
      <text x="16" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• 6mm PU tubing &amp; quick-couplings</text>
      <text x="16" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Balanced radial pressure distribution</text>
    </g>

    <text x="564" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#10b981">→</text>

    <!-- Step 3 -->
    <g transform="translate(585, 52)">
      <rect width="245" height="125" rx="12" fill="#1e293b" fill-opacity="0.7" stroke="#334155"/>
      <circle cx="24" cy="24" r="11" fill="#064e3b" stroke="#10b981"/>
      <text x="24" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#6ee7b7" text-anchor="middle">3</text>
      <text x="44" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Welding &amp; Assembly</text>
      <text x="16" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Metal cutting, welding &amp; grinding</text>
      <text x="16" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Anti-rust black enamel coating</text>
      <text x="16" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Clear acrylic containment shields</text>
    </g>

    <text x="844" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#10b981">→</text>

    <!-- Step 4 -->
    <g transform="translate(865, 52)">
      <rect width="230" height="125" rx="12" fill="#1e293b" fill-opacity="0.7" stroke="#334155"/>
      <circle cx="24" cy="24" r="11" fill="#064e3b" stroke="#10b981"/>
      <text x="24" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#6ee7b7" text-anchor="middle">4</text>
      <text x="44" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Workshop Trials</text>
      <text x="16" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• 32 human subject survey</text>
      <text x="16" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• Item surface wetness inspection</text>
      <text x="16" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#94a3b8">• 100% positive perception</text>
    </g>
  </g>

  <!-- Key Achievements Bar -->
  <g transform="translate(40, 515)">
    <rect width="1120" height="120" rx="14" fill="#1e293b" fill-opacity="0.5" stroke="#334155" stroke-width="1"/>
    <text x="25" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#f1f5f9">SUMMARY TAKEAWAYS &amp; WORKSHOP SAFETY IMPACT</text>
    <text x="25" y="52" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94a3b8">✔ Engineered a cost-effective, reusable walk-through sanitization portal replacing manual disinfectant sprays.</text>
    <text x="25" y="72" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94a3b8">✔ Dry fog vapor ensures equipment, electronics, and clothing passing through remain 100% dry and undamaged.</text>
    <text x="25" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94a3b8">✔ Complete project documentation, CAD files, and SOP maintenance manual delivered to Politeknik mechanical department.</text>
  </g>
</svg>"""

with open("public/projects/gallery/disinfection_step5_summary.svg", "w", encoding="utf-8") as f:
    f.write(disinfection_svg)
print("Saved disinfection_step5_summary.svg")
