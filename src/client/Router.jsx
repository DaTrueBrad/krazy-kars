import { RouterProvider, createBrowserRouter, Navigate, defer } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import axios from "axios";
import KarsScreen from "./screens/KarsScreen";
import CreateKar from "./components/CreateKar";
import AllKars from "./components/AllKars";
import { useEffect, useState } from "react";

const Router = () => {
  const [userInfo, setUserInfo] = useState({})

  const checkUser = () => {
    axios.get('/api/checkUser')
    .then((res) => {
      if(res.data.id) {
        console.log(res.data)
        setUserInfo(res.data)
      }
    })
    .catch((err) => {
      console.error(err)
    })
  }

  useEffect(() => {
    checkUser()
  },[])

  const karLoader = async () => {
    let karFetch = axios.get('/api/kars').then((res) => res.data)

    return defer({kars: karFetch})
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: !userInfo.id ? <LoginScreen setUserInfo={setUserInfo} /> : <Navigate to="/kars/allKars"/>,

    },
    {
      path: '/kars',
      element: userInfo.id ? <KarsScreen  /> : <Navigate to="/"/>,
      id: 'karRoot',
      loader: async () => {
        let karFetch = axios.get('/api/kars').then((res) => res.data)

        return defer({kars: karFetch})
      },
      children: [
        {
          path: 'create',
          element: <CreateKar userInfo={userInfo} />,

        },
        {
          path: 'allKars',
          element: <AllKars  />
        }
      ]

    }
  ])

  return <RouterProvider router={router} />

}




export default Router