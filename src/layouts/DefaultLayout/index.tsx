import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'


export function DefaultLayout() {
  return (
    <div>
        <Header />
        <div className='center'>
            <Outlet />
        </div>
    </div>
  )
}