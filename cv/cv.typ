#let data = json("/src/data/site.json")

#set document(title: data.name + " CV", author: data.name)
#set page(paper: "a4", margin: (x: 1.6cm, y: 1.4cm))
#set text(font: "New Computer Modern", size: 9pt, lang: "en")
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
    text(weight: "semibold", lhs), text(fill: luma(80), rhs),
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
    "•", body,
  )
}

// ===== Header =====
#align(center)[
  #text(size: 20pt, weight: "bold", tracking: 0.3pt, data.name)
  #v(-0.4em)
  #text(size: 9.5pt, fill: luma(80))[
    #data.cvLocation
    #sym.dot.c
    #link("mailto:" + data.email)[#data.email]
    #sym.dot.c
    #link(data.cvLinks.site)[#data.cvLinks.siteLabel]
    #sym.dot.c
    #link(data.cvLinks.github)[#data.cvLinks.githubLabel]
    #sym.dot.c
    #link(data.cvLinks.linkedin)[#data.cvLinks.linkedinLabel]
  ]
]

// ===== Projects =====
#section("Projects")

#for p in data.projects {
  entry(
    p.title,
    link(p.url)[#p.cvUrlLabel],
    sub: p.cvStack,
    bullet(eval("[" + p.cvDescription + "]", mode: "markup")),
  )
}

// ===== Experience =====
#section("Experience")

#for w in data.work {
  entry(
    w.role + ", " + w.company,
    w.period,
    sub: w.location + " · " + w.stack,
    {
      for b in w.bullets {
        bullet(b)
      }
    },
  )
}

// ===== Education =====
#section("Education")

#for e in data.education {
  entry(e.school, e.period)[]
}

// ===== Languages & tools =====
#section("Languages & Tools")

#grid(
  columns: (auto, 1fr),
  column-gutter: 1em,
  row-gutter: 0.35em,
  ..data.cvSkills.map(s => (text(weight: "semibold", s.label), [#s.value])).flatten()
)
