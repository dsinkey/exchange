import ContentGrid from "../../src/components/ContentGrid";

const gridContents = [
  {
    content: `Trust Score Rank:`,
    size: 6,
  },
  {
    content: `Trust Score:`,
    size: 6,
  },
  {
    content: `Trading Volume 24 Hour:`,
    size: 6,
  },
  {
    content: `Trading Volume 24 Hour Normalized:`,
    size: 6,
  },
  {
    content: `Country: `,
    size: 6,
  },
  {
    content: `Centralized: `,
    size: 6,
  },
];

describe("<ContentGrid />", () => {
  it("mounts", () => {
    cy.mount(<ContentGrid gridContents={gridContents} />);
  });
});
