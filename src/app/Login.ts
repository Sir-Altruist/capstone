export interface Login {
  username: string;
  password: string;
  access_token: string;
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
