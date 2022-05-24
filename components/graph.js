import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function Graph() {

	const data = [
    {
      name: 'Monday',
      payment: 10000,
      txnFee: 51000,
      quantity: 250,
    },
    {
      name: 'Tuesday',
      payment: 10000,
      txnFee: 53860,
      quantity: 315,
    },
    {
      name: 'Wednesday',
      payment: 10000,
      txnFee: 54780,
      quantity: 400,
    },
    {
      name: 'Thursday',
      payment: 10000,
      txnFee: 49360,
      quantity: 12,
    },
    {
      name: 'Friday',
      payment: 10000,
      txnFee: 54000,
      quantity: 76,
    },
    {
      name: 'Saturday',
      payment: 10000,
      txnFee: 51300,
      quantity: 387,
    },
    {
      name: 'Sunday',
      payment: 10000,
      txnFee: 48300,
      quantity: 220,
    },
  ]

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis yAxisId='left' />
        <YAxis yAxisId='right' orientation='right' />
        <Tooltip />
        <Legend />
        <Line type='monotone' yAxisId='left' dataKey='quantity'></Line>
        <Line type='monotone' yAxisId='right' dataKey='txnFee' stroke='#82ca9d' />
      </LineChart>
    </ResponsiveContainer>
  )
}
