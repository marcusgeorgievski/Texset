"use client";
import Cmu from "./cmu";

export default function LatexLogoText() {
  return (
    <>
      <Cmu>
        <span className="latex">
          L<sup>a</sup>T<sub>e</sub>X
        </span>
      </Cmu>
      <style jsx>{`
        /*
        Source - https://stackoverflow.com/a
        Posted by Sinan Ünür, modified by community. See post 'Timeline' for change history
        Retrieved 2026-01-18, License - CC BY-SA 4.0
        */

        .tex sub,
        .latex sub,
        .latex sup {
          text-transform: uppercase;
        }

        .tex sub,
        .latex sub {
          vertical-align: 0.02ex;
          margin-left: -0.1667em;
          margin-right: -0.125em;
        }

        .tex,
        .latex,
        .tex sub,
        .latex sub {
          font-size: 1em;
        }

        .latex sup {
          font-size: 0.75em;
          vertical-align: -0.25em;
          margin-left: -0.45em;
          margin-right: -0.15em;
        }
      `}</style>
    </>
  );
}
