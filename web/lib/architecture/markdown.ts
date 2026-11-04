import { getArchitectureSpec } from "@/lib/architecture/load";

/** Plain-text outline of the diagram for /llms-full.txt. Uses spec copy only. */
export function architectureMarkdown(slug: string): string {
  const spec = getArchitectureSpec(slug);
  if (!spec) return "";

  const lines: string[] = ["### Architecture design", ""];

  lines.push(`#### ${spec.actors_title || "User interaction"}`);
  for (const actor of spec.actors) lines.push(`- ${actor.name}: ${actor.desc}`);
  lines.push("");

  for (const layer of spec.layers) {
    lines.push(`#### ${layer.name}`);
    for (const tile of layer.tiles) {
      lines.push(`- ${tile.name}${tile.sub ? `: ${tile.sub}` : ""}`);
    }
    lines.push("");
  }

  lines.push(`#### ${spec.services_title || "Cloud & AI services"}`);
  for (const group of spec.services) {
    lines.push(`##### ${group.group}`);
    for (const item of group.items) {
      lines.push(`- ${item.name}${item.sub ? `: ${item.sub}` : ""}`);
    }
    lines.push("");
  }

  lines.push("#### Technology stack");
  for (const group of spec.stack) {
    lines.push(`##### ${group.group}`);
    for (const item of group.items) lines.push(`- ${item}`);
    lines.push("");
  }

  return lines.join("\n").trim();
}
