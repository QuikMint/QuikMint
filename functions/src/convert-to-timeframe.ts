import e from 'express'
import { DocumentData, Timestamp } from 'firebase-admin/firestore'
import { https } from 'firebase-functions'
import db from './config/firestore.config'
import cors from 'cors'
const corsHandler = cors({ origin: true })

type GraphData = {
  name: string
  total: number
  fees: number
}

async function getTransactions(id: string, timeframe: string): Promise<GraphData[]> {
  let docs: DocumentData[] = []

  await db
    .collection('transactions')
    .where('client_id', '==', id)
    .get()
    .then(querySnapshot => {
      if (querySnapshot && querySnapshot.docs.length > 0) {
        docs = querySnapshot.docs.map(doc => doc.data())
      }
    })

  if (docs.length === 0) {
    return [
      {
        name: 'No Data',
        total: 0,
        fees: 0,
      },
      {
        name: 'No Data',
        total: 0,
        fees: 0,
      },
    ]
  }

  //create time series data
  switch (timeframe) {
    //daily
    case 'd':
      const dayData = [1, 2, 3, 4, 5, 6].map(n => {
        let periodSum: number = 0
        let periodFeeSum: number = 0

        docs.forEach(doc => {
          const timestamp: Timestamp = doc.timestamp
          const txTotal: number = doc.price
          const txFee: number = doc.fee

          if (
            timestamp.toMillis() >= Date.now() - n * 1000 * 60 * 60 * 4 &&
            timestamp.toMillis() < Date.now() - (n - 1) * 1000 * 60 * 60 * 4
          ) {
            periodSum += txTotal
            periodFeeSum += txFee
          }
        })

        return {
          name:
            new Date(Date.now() - (n - 1) * 1000 * 60 * 60 * 4).getUTCHours().toString() +
            ':00 UTC',
          total: periodSum,
          fees: periodFeeSum,
        }
      })

      return dayData
    //weekly
    case 'w':
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const weekData = [1, 2, 3, 4, 5, 6, 7].map(n => {
        let periodSum: number = 0
        let periodFeeSum: number = 0

        docs.forEach(doc => {
          const timestamp: Timestamp = doc.timestamp
          const txTotal: number = doc.price
          const txFee: number = doc.fee

          if (
            timestamp.toMillis() >= Date.now() - n * 1000 * 60 * 60 * 24 &&
            timestamp.toMillis() < Date.now() - (n - 1) * 1000 * 60 * 60 * 24
          ) {
            periodSum += txTotal
            periodFeeSum += txFee
          }
        })

        return {
          name: days[new Date(Date.now() - (n - 1) * 1000 * 60 * 60 * 24).getDay()],
          total: periodSum,
          fees: periodFeeSum,
        }
      })

      return weekData
    //monthly
    case 'm':
      const monthData = [1, 2, 3, 4].map(n => {
        let periodSum: number = 0
        let periodFeeSum: number = 0

        docs.forEach(doc => {
          const timestamp: Timestamp = doc.timestamp
          const txTotal: number = doc.price
          const txFee: number = doc.fee

          if (
            timestamp.toMillis() >= Date.now() - n * 1000 * 60 * 60 * 24 * 7 &&
            timestamp.toMillis() < Date.now() - (n - 1) * 1000 * 60 * 60 * 24 * 7
          ) {
            periodSum += txTotal
            periodFeeSum += txFee
          }
        })

        return {
          name: new Date(Date.now() - (n - 1) * 1000 * 60 * 60 * 24 * 7).toLocaleDateString(
            undefined,
            {
              month: 'short',
              day: 'numeric',
            }
          ),
          total: periodSum,
          fees: periodFeeSum,
        }
      })

      return monthData
    //yearly
    case 'y':
      const yearData = [1, 2, 3, 4, 5, 6].map(n => {
        let periodSum: number = 0
        let periodFeeSum: number = 0

        docs.forEach(doc => {
          const timestamp: Timestamp = doc.timestamp
          const txTotal: number = doc.price
          const txFee: number = doc.fee

          if (
            timestamp.toMillis() >= Date.now() - n * 1000 * 60 * 60 * 24 * 60 &&
            timestamp.toMillis() < Date.now() - (n - 1) * 1000 * 60 * 60 * 24 * 60
          ) {
            periodSum += txTotal
            periodFeeSum += txFee
          }
        })

        return {
          name: new Date(Date.now() - (n - 1) * 1000 * 60 * 60 * 24 * 60).toLocaleDateString(
            undefined,
            {
              month: 'short',
              year: 'numeric',
            }
          ),
          total: periodSum,
          fees: periodFeeSum,
        }
      })

      return yearData
    default:
      return [
        {
          name: 'Nothing to see here',
          total: 0,
          fees: 0,
        },
      ]
      break
  }
}
async function call(req: https.Request, res: e.Response<any>) {
  corsHandler(req, res, async () => {
    const client_id: string = req.body.id as string

    //'d', 'w', 'm', 'y'
    const timeframe: string = req.body.timeframe as string

    console.log(client_id + ' ' + req)

    const data = await getTransactions(client_id, timeframe)

    res.status(200).send(data)
  })
}
export const convertToTimeFrame = https.onRequest(call)
