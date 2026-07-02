# Explore Lab — Editorial Design System

## Direction

Explore Lab is a single-frame editorial index. It should feel like a printed research folio: quiet, spacious, typographic, and slightly archival. The visual idea comes from the contrast between a classical engraved portrait and oversized contemporary indexing.

Do not introduce dashboards, cards, search bars, application navigation, panels, gradients, or dense utility UI. New work must preserve the composition before adding functionality.

## Composition

- The page occupies one viewport and does not scroll in the default state.
- “Explore Lab” sits in the upper-left with generous surrounding whitespace.
- The engraved portrait is anchored to the lower-left and may bleed beyond the viewport edge.
- LLM, Systems, and Safety form a vertical index on the right.
- Each index row uses a large label, right-aligned number, and a thin black rule.
- Desktop composition is intentionally asymmetric: visual mass on the lower-left, typographic structure on the right.
- On narrow screens, preserve the overlap between portrait and index rather than converting the design into stacked cards.
- Section pages inherit the same title position: the section name replaces “Explore Lab” in the upper-left.
- Section titles use the exact same Vollkorn scale, line-height, tracking, paper, and ink values as the home title.
- Research is displayed as a numbered bibliography with rules and metadata, never as a card grid.
- Paper titles remain static index entries until a complete article page is ready.

## Typography

- Display type: Vollkorn Regular, with Georgia as the fallback.
- Metadata type: Geist Mono, with Courier New as the fallback.
- Display headings use weight 400, tight tracking, and compact line-height.
- Never replace the serif display type with a geometric sans-serif.
- Avoid more than these two type families.

## Color

- Paper: `#f8f6f1`
- Ink: `#10100f`
- The portrait retains its muted engraved color.
- A very subtle monochrome grain may be used to prevent the background from feeling digitally flat.
- Avoid decorative accent colors. Color should come primarily from the portrait.

## Spacing and Scale

- Outer edge spacing: `clamp(26px, 5.4vw, 82px)`.
- Title scale: `clamp(64px, 8vw, 128px)`.
- Index label scale: `clamp(54px, 6vw, 92px)`.
- Index gaps should remain generous and responsive to viewport height.
- Rules are 2px on desktop and 1px on mobile.

## Image Treatment

- Use the existing transparent engraved portrait asset.
- Reserve the portrait for the homepage; section and paper pages use an uninterrupted paper background.
- Anchor it left and bottom; never center it in a card or frame.
- Preserve the full-height figure where space allows.
- Use a short paper-colored wash on the right edge to integrate it with the page.
- Do not add shadows, borders, rounded corners, or photographic effects.

## Motion

- Motion is restrained and supports entry or direct interaction.
- Reveal the title, portrait, and index with soft opacity and short upward movement.
- Stagger index rows by approximately 45ms.
- Hover and focus transitions should complete within 200–350ms.
- No looping animation, parallax, cursor effects, or decorative scroll effects.
- Honor `prefers-reduced-motion`.

## Interaction

- Research labels may be navigation links when a finished section page exists; unfinished sections remain accessible toggle buttons.
- Hovering or focusing a row previews its short descriptor in the masthead metadata position.
- Clicking a row holds that selection; clicking it again clears the selection.
- Hover, focus, and selected states use the same restrained treatment: italic label, opposing label/number movement, and a shortened rule.
- Keyboard focus must remain visible with a thin ink outline.
- Section and paper routes must preserve the paper, ink, Vollkorn, Geist Mono, rules, and generous whitespace of the home frame.
- Home-to-section navigation uses a short native view transition and preserves browser back/forward behavior.
- Interaction must not introduce panels, cards, search controls, or application-style navigation.

## Content Voice

- Use short, direct research labels.
- Avoid marketing language and explanatory paragraphs on the home frame.
- Metadata should be concise, uppercase, and widely tracked.
