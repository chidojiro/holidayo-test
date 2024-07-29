type Addon = {
  id: string;
  name: string;
  discountedPrice: string;
  price: string;
  type: string;
  ageFrom: number;
  ageTo: number;
  priority: string;
  count: number;
};

type Product = {
  catering: string;
  endDate: string;
  startDate: string;
  transport: {
    type: string;
    departureLocation: string;
  };
  roomType: string;
  priceFrom: string;
  discountedPriceFrom: string;
  id: string;
  externalProductId: string;
  children: number;
  adults: number;
  thumbnail: string;
  addons: Addon[];
  lastMinute: boolean;
  totalDiscount: number;
};

export type Booking = {
  partner: string;
  description: string;
  distinctRoomTypes: string[];
  distinctCatering: string[];
  differences: Record<string, string>;
  products: Product[];
};
