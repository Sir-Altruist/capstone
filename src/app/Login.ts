export interface Login {
  username: string;
  password: string;
}

export interface Table {
  map: {
    SearchCriteria: {
      Parameter: string;
      Condition: string;
      Values: string[];
    }[];
    Size: number;
    Page: number;
  };
}
