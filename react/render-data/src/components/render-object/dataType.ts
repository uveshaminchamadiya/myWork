interface Record {
  id: number;
  name: string;
  city: string;
}

export interface ObjectData {
  [key: string]: Record;
}
