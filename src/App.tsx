//React
import React from 'react'

//Styles
import './App.scss'

//Components
import Table from './Components/table'

//Helpers
import axios from 'axios-https-proxy-fix'
import _ from 'lodash'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Types
import { Data, FetchedData } from './Types/data.types'

//Modules
import { triggerToast } from './Modules/toast.module'

const App: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState<Data[] | null>()

  React.useEffect(() => {
    const proxyUrl: string = 'https://cors-anywhere.herokuapp.com/'
    const url: string = 'https://fetch-hiring.s3.amazonaws.com/hiring.json'

    const fetch = async () => {
      try {
        const fetchedData: FetchedData = await axios.get(proxyUrl + url)
        const receivedData: Data[] = fetchedData.data
        setData(
          _.orderBy(
            receivedData.filter((input: Data) => input.name),
            ['listId', (input: Data) => parseInt(input.name!.split(' ')[1])]
          )
        )
      } catch (error) {
        setData(null)
        triggerToast({
          description: 'Failed to load data',
        })
      }
    }
    fetch()
  }, [])

  return (
    <>
      <ToastContainer />
      {data && (
        <div className="content-wrapper">
          <span className="data_record-count">{_.size(data)} Matching Records</span>
          <Table data={data} />
        </div>
      )}
    </>
  )
}

export default App
