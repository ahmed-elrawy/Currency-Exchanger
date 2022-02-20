//---------------------------- latest endPoint Api ----------------------------//
export interface LatestData {
  success: boolean
  timestamp: number
  base: string
  date: string
  rates: Rates
}

export interface Rates {
 
  [key: string]: number
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

//---------------------------- Symbols endPoint Api ----------------------------//
export interface Symbols {
  [key: string]: string
}

//---------------------------- timeseries endPoint Api ----------------------------//
export interface Timeseries {
  success: boolean
  timeseries: boolean
  start_date: string
  end_date: string
  base?: string
  rates: Rate
}

export interface Rate {
  [key: string]: Date
}

export interface Date {
  [key: string]: number
}

