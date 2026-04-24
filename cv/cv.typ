#set document(title: "Vasco Smith CV", author: "Vasco Smith")
#set page(paper: "a4", margin: (x: 1.6cm, y: 1.4cm))
#set text(font: "New Computer Modern", size: 10pt, lang: "en")
#set par(leading: 0.55em, justify: false)
#show link: set text(fill: rgb("#1f4fd8"))

#let rule = line(length: 100%, stroke: 0.4pt + luma(180))

#let section(title) = {
  v(0.6em)
  text(size: 10.5pt, weight: "semibold", upper(title))
  v(-0.3em)
  rule
  v(0.15em)
}

#let entry(lhs, rhs, sub: none, body) = {
  grid(
    columns: (1fr, auto),
    align: (left, right),
    text(weight: "semibold", lhs),
    text(fill: luma(80), rhs),
  )
  if sub != none {
    text(style: "italic", fill: luma(90), sub)
    linebreak()
  }
  body
  v(0.35em)
}

#let bullet(body) = {
  grid(
    columns: (0.7em, 1fr),
    align: (top, left),
    "•",
    body,
  )
}

// ===== Header =====
#align(center)[
  #text(size: 20pt, weight: "bold", tracking: 0.3pt)[Vasco Smith]
  #v(-0.4em)
  #text(size: 9.5pt, fill: luma(80))[
    Zutphen, NL
    #sym.dot.c
    #link("mailto:vasie1337@gmail.com")[vasie1337\@gmail.com]
    #sym.dot.c
    #link("https://vasie.dev")[vasie.dev]
    #sym.dot.c
    #link("https://github.com/vasie1337")[github.com/vasie1337]
    #sym.dot.c
    #link("https://www.linkedin.com/in/vascosmith")[linkedin.com/in/vascosmith]
  ]
]

// ===== Projects =====
#section("Projects")

#entry(
  [quic-remote-memory],
  link("https://github.com/vasie1337/quic-remote-memory")[github.com/vasie1337/quic-remote-memory],
  sub: "Rust · QUIC · networking",
)[
  #bullet[Proof-of-concept that streams remote process memory reads over QUIC using `quinn`.]
]

#entry(
  [llvm-obfuscator],
  link("https://github.com/vasie1337/llvm-obfuscator")[github.com/vasie1337/llvm-obfuscator],
  sub: "C++ · LLVM pass pipeline",
)[
  #bullet[Out-of-tree LLVM passes that apply control-flow flattening, opaque predicates, and instruction substitution at the IR level. Plugs into a stock clang toolchain.]
]

#entry(
  [kernel-anticheat],
  link("https://github.com/vasie1337/kernel-anticheat")[github.com/vasie1337/kernel-anticheat],
  sub: "C++ · Windows kernel driver",
)[
  #bullet[Ring-0 Windows driver that scans for cheat signals via process handle stripping, module enumeration, and signature checks. Intended as a reference target to test defensive drivers against.]
]

#entry(
  [rust-interp],
  link("https://github.com/vasie1337/rust-interp")[github.com/vasie1337/rust-interp],
  sub: "Rust · language implementation",
)[
  #bullet[Tree-walking interpreter in Rust: lexer, Pratt parser, and evaluator for a small expression-oriented language.]
]

// ===== Experience =====
#section("Experience")

#entry(
  [Software Engineer, ByteZero],
  [Sep 2025 – Jan 2026],
  sub: "Deventer, NL · proxy infrastructure · Rust, Go, Redis",
)[
  #bullet[Worked on a geo-targeted proxy service that resells upstream pools (Oxylabs and similar); clients query proxies by country for scraping and localization workloads.]
  #bullet[Triaged and patched the original Go collector, then rewrote it in Rust after the Go version leaked memory under long-lived load. The service refreshes the pool from upstream providers, probes liveness, and indexes geo metadata so the API can serve per-country selections.]
  #bullet[A typical snapshot tracked ~140k proxies across ~133k unique outbound IPs, with duplicate detection and health checks driven from Redis.]
]

// ===== Education =====
#section("Education")

#entry(
  [Aventus, Software Developer (MBO level 4)],
  [Aug 2024 – Jul 2027],
)[]

// ===== Languages & tools =====
#section("Languages & Tools")

#grid(
  columns: (auto, 1fr),
  column-gutter: 1em,
  row-gutter: 0.35em,
  text(weight: "semibold")[Languages],
  [Dutch (native), English (B1)],
  text(weight: "semibold")[Systems],
  [Rust, Go, C++, x86-64 assembly, LLVM],
  text(weight: "semibold")[Web & infra],
  [TypeScript, Node.js, Astro, Redis, Linux, Git, Cloudflare Workers],
)
