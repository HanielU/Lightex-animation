export type LampCategoryName = "regular" | "standing" | "shower" | "reading" | "hanging";

export type LampCategory = {
  name: LampCategoryName;
  selected: boolean;
};

export type Lamp = {
  name: string;
  price: string;
  selected: boolean;
  imgUrl: string;
};
