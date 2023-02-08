import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'


export function DefaultLayout() {
  return (
    <div>
        <Header name={window.location.pathname} />
        <div className='center'>
            <Outlet />
        </div>
    </div>
  )
}