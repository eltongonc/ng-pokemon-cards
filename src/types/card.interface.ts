export interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level?: string;
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  abilities?: Ability[];
  attacks?: Attack[];
  weaknesses?: Weakness[];
  resistances?: Resistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: Set;
  number: string;
  artist?: string;
  rarity?: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: Legalities;
  images: CardImages;
  tcgplayer?: Tcgplayer;
  cardmarket?: CardMarket;
  createdAt: string;
  updatedAt: string;
}

export interface Ability {
  name: string;
  text: string;
  type?: string;
}

export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface Resistance {
  type: string;
  value: string;
}

export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode?: string;
  releaseDate: string;
  updatedAt: string;
  images: CardImages;
}

export interface Legalities {
  unlimited: string;
  standard?: string;
  expanded?: string;
}

export interface CardImages {
  small: string;
  large: string;
}

export interface Tcgplayer {
  url: string;
  prices: {
    holofoil?: {
      low?: number;
      mid?: number;
      high?: number;
      market?: number;
      directLow?: number;
    };
    reverseHolofoil?: {
      low?: number;
      mid?: number;
      high?: number;
      market?: number;
      directLow?: number;
    };
    [key: string]:
      | {
          low?: number;
          mid?: number;
          high?: number;
          market?: number;
          directLow?: number;
        }
      | undefined;
  };
}

export interface CardMarket {
  url: string;
  prices: {
    averageSellPrice?: number;
    lowPrice?: number;
    trendPrice?: number;
    germanProLow?: number;
    suggestedPrice?: number;
    reverseHoloSell?: number;
    lowPriceExPlus?: number;
    avg1?: number;
    foilSell?: number;
    lowPriceEx?: number;
    avg7?: number;
    reverseHoloLow?: number;
    reverseHoloTrend?: number;
    reverseHoloBuy?: number;
    germanProLowEx?: number;
    reverseHoloFoilSell?: number;
    avg30?: number;
    highPrice?: number;
    reverseHoloFoilLow?: number;
    reverseHoloFoilTrend?: number;
    reverseHoloFoilBuy?: number;
    [key: string]: number | undefined;
  };
}

export interface CardsResponse {
  data: Card[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
  next?: string;
  previous?: string;
}
