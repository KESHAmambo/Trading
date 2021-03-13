export interface ITransaction {
  _id: string,
  buy: {
    name: string,
    volume: string
  },
  sell: {
    name: string,
    volume: string
  },
  price: string,
  fee: string,
  createdAt: string
}
