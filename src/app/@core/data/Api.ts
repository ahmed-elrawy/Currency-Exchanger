
//---------------------------- latest endPoint Api ----------------------------//


export interface latestData {
  success: boolean
  timestamp: number
  base: string
  date: string
  rates: Rates
}
export interface Rates {
 
  rates:{[key: string]: number}
}

//---------------------------- convert endPoint Api ----------------------------//
export interface ConvertData {
  success: boolean
  query: Query
  info: Info
  historical: string
  date: string
  result: number
}

export interface Query {
  from: string
  to: string
  amount: number
}

export interface Info {
  timestamp: number |string
  rate: number
}
