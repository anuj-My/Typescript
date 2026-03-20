import "./style.css";
import "./scripts/typeAnnotations.ts";
import "./scripts/unionType.ts";
import "./scripts/arrayAndObjects.ts";
import "./scripts/typeInFunctions.ts";
import "./scripts/aliasAndIntersectionType.ts";
import "./scripts/interface.ts";
import "./scripts/tuplesAndEnums.ts";
import "./scripts/AssertionUnknownNever.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<h1>TypeScript</h1>
`;
