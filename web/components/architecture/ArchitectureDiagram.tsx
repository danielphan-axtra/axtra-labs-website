import type { CSSProperties } from "react";
import { getArchitectureAssets } from "@/lib/architecture/load";
import type { ArchSpec } from "@/lib/architecture/types";

const ACTOR_COLORS = ["#2F7FD8", "#22A06B", "#F08A24", "#1D93C9", "#E0567A", "#7B61FF", "#0E9F9A"];

type IconMap = Record<string, string>;

function LucideIcon({
  icons,
  name,
  className,
}: {
  icons: IconMap;
  name: string;
  className?: string;
}) {
  const html = icons[name] || icons.circle || "";
  return (
    <svg
      className={className ? `carch-lu ${className}` : "carch-lu"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function TechMark({
  icons,
  name,
}: {
  icons: IconMap;
  name: string;
}) {
  const assets = getArchitectureAssets();
  const tech = assets.tech[name];
  const logo = tech?.s ? assets.logos[tech.s] : undefined;
  if (logo?.p) {
    return (
      <svg className="carch-lg" viewBox="0 0 24 24" aria-hidden="true">
        <path fill={`#${logo.h}`} d={logo.p} />
      </svg>
    );
  }
  return (
    <span className="carch-lg carch-lg-fallback">
      <LucideIcon icons={icons} name={tech?.i || "box"} />
    </span>
  );
}

function FlowArrow({ direction }: { direction: "h" | "v" }) {
  if (direction === "h") {
    return (
      <svg viewBox="0 0 40 24" aria-hidden="true">
        <path
          d="M5 12h30M11 6l-6 6 6 6M29 6l6 6-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 28" aria-hidden="true">
      <path
        d="M12 3v22M7 8l5-5 5 5M7 20l5 5 5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ArchitectureDiagram({ spec }: { spec: ArchSpec }) {
  const { icons } = getArchitectureAssets();
  const tileCount = spec.layers.reduce((sum, layer) => sum + layer.tiles.length, 0);
  const thin = tileCount <= 8;

  return (
    <section className="carch-section" id="architecture-design" aria-labelledby="architecture-design-heading">
      <div className="wrap">
        <h2 id="architecture-design-heading">Architecture design</h2>
        <div className={thin ? "carch is-thin" : "carch"}>
          <div className="carch-board">
            <div className="carch-col carch-actors">
              <div className="carch-h">
                <LucideIcon icons={icons} name="users" className="carch-hi" />
                <span>{spec.actors_title || "User interaction"}</span>
              </div>
              <div className="carch-actors-list">
                {spec.actors.map((actor, index) => (
                  <div className="carch-actor" key={`${actor.name}-${index}`}>
                    <span
                      className="carch-actor-icon"
                      style={{ "--c": ACTOR_COLORS[index % ACTOR_COLORS.length] } as CSSProperties}
                    >
                      <LucideIcon icons={icons} name={actor.icon} />
                    </span>
                    <div className="carch-actor-copy">
                      <div className="carch-an">{actor.name}</div>
                      <div className="carch-ad">{actor.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carch-harr carch-harr-l">
              <FlowArrow direction="h" />
            </div>

            <div className="carch-layers">
              {spec.layers.map((layer, index) => (
                <div className="carch-layer-block" key={`${layer.name}-${index}`}>
                  {index > 0 ? (
                    <div className="carch-varr">
                      <FlowArrow direction="v" />
                    </div>
                  ) : null}
                  <div
                    className={`carch-layer carch-layer-${index % 4}`}
                    style={{ "--n": layer.tiles.length } as CSSProperties}
                  >
                    <div className="carch-lh">{layer.name}</div>
                    <div className="carch-tiles">
                      {layer.tiles.map((tile, tileIndex) => (
                        <div className="carch-tile" key={`${tile.name}-${tileIndex}`}>
                          <span className="carch-tic">
                            <LucideIcon icons={icons} name={tile.icon} />
                          </span>
                          <div className="carch-tn">{tile.name}</div>
                          {tile.sub ? <div className="carch-ts">{tile.sub}</div> : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="carch-harr carch-harr-r">
              <FlowArrow direction="h" />
            </div>

            <div className="carch-col carch-services">
              <div className="carch-h">
                <LucideIcon icons={icons} name="cloud" className="carch-hi" />
                <span>{spec.services_title || "Cloud & AI services"}</span>
              </div>
              <div className="carch-service-groups">
                {spec.services.map((group) => (
                  <div className="carch-sg" key={group.group}>
                    <div className="carch-sgh">{group.group}</div>
                    {group.items.map((item, index) => (
                      <div className="carch-si" key={`${item.name}-${index}`}>
                        <TechMark icons={icons} name={item.name} />
                        <div className="carch-si-copy">
                          <div className="carch-sn">{item.name}</div>
                          {item.sub ? <div className="carch-ss">{item.sub}</div> : null}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="carch-stack">
              <div className="carch-stack-label">Technology stack</div>
              <div className="carch-groups">
                {spec.stack.map((group) => (
                  <div className="carch-group" key={group.group}>
                    <div className="carch-gh">{group.group}</div>
                    <div className="carch-chips">
                      {group.items.map((item, index) => (
                        <span className="carch-chip" key={`${item}-${index}`}>
                          <TechMark icons={icons} name={item} />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
