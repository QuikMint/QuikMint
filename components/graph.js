/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useAuth } from '../auth/AuthProvider'

export default function Graph() {

  const [timeframe, setTimeframe] = useState('d')
  const [graphData, setGraphData] = useState()

  const { currentUser } = useAuth()

  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_GRAPH_FUNCTION_URL, {'timeframe': timeframe, 'id': currentUser.uid.toString() })
      .then(res => setGraphData(res.data.reverse()))
  }, [timeframe])

  useEffect(() => setTimeframe('d'), [])

  async function handleGraphSwitch(e) {
    setTimeframe(e.target.id)
  }

  return (
    <>
      <div
        id='graph-head'
        className='bg-[#fffbfc] border-1 flex flex-row justify-start items-center h-[60px] p-2 px-3 rounded-t-[10px]'
      >
        <button
          id='d'
          className={`${
            timeframe === 'd' ? 'bg-[#C3BBFF]' : 'bg-[#f3ebff]'
          } text-center border-1 border-[#cccccc] rounded-tl rounded-bl px-3 text-[12px] hover:shadow-md`}
          onClick={handleGraphSwitch}
        >
          24h
        </button>
        <button
          id='w'
          className={`${
            timeframe === 'w' ? 'bg-[#C3BBFF]' : 'bg-[#f3ebff]'
          } text-center border-1 border-[#cccccc] rounded-tl rounded-bl px-3 text-[12px] hover:shadow-md`}
          onClick={handleGraphSwitch}
        >
          1w
        </button>
        <button
          id='m'
          className={`${
            timeframe === 'm' ? 'bg-[#C3BBFF]' : 'bg-[#f3ebff]'
          } text-center border-1 border-[#cccccc] rounded-tl rounded-bl px-3 text-[12px] hover:shadow-md`}
          onClick={handleGraphSwitch}
        >
          4w
        </button>
        <button
          id='y'
          className={`${
            timeframe === 'y' ? 'bg-[#C3BBFF]' : 'bg-[#f3ebff]'
          } text-center border-1 border-[#cccccc] rounded-tl rounded-bl px-3 text-[12px] hover:shadow-md`}
          onClick={handleGraphSwitch}
        >
          1y
        </button>
      </div>
      <div
        id='graph-body'
        className='bg-[#f4f8fa] w-auto h-[90%] rounded-b-[10px] border-x-[1px] border-b-[1px]'
      >
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={graphData}
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
            <Line type='monotone' yAxisId='left' dataKey='total'></Line>
            <Line type='monotone' yAxisId='right' dataKey='fees' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
