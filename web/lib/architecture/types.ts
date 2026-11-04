export type ArchActor = {
  name: string;
  desc: string;
  icon: string;
};

export type ArchTile = {
  name: string;
  sub?: string;
  icon: string;
};

export type ArchLayer = {
  name: string;
  tiles: ArchTile[];
};

export type ArchServiceItem = {
  name: string;
  sub?: string;
};

export type ArchGroup = {
  group: string;
  items: ArchServiceItem[];
};

export type ArchStackGroup = {
  group: string;
  items: string[];
};

/** Resolved architecture spec. `stack` is already grouped; it is never the string "auto". */
export type ArchSpec = {
  actors_title?: string;
  actors: ArchActor[];
  layers: ArchLayer[];
  services_title?: string;
  services: ArchGroup[];
  stack: ArchStackGroup[];
};

export type ArchLogo = {
  h: string;
  p: string;
};

export type ArchTech = {
  /** Simple Icons slug, when a logo path exists. */
  s?: string;
  /** Lucide icon name used when there is no logo. */
  i?: string;
};

export type ArchAssets = {
  specs: Record<string, ArchSpec>;
  icons: Record<string, string>;
  logos: Record<string, ArchLogo>;
  tech: Record<string, ArchTech>;
};
