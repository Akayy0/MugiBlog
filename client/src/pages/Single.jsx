import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'

import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className='user'>
          <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />

          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aperiam dicta harum perferendis nihil, in ipsa non laborum vitae animi sapiente, libero labore voluptas incidunt delectus.
          Recusandae ipsum cupiditate itaque natus sapiente quas aliquam quaerat. Non eveniet perferendis ipsa reiciendis. Ad porro voluptates totam distinctio nostrum mollitia esse laboriosam suscipit debitis ab dignissimos nulla,
          corrupti eaque animi rerum? Inventore nulla consequatur ad, ipsum, deleniti doloribus consequuntur laboriosam explicabo fugit, distinctio corrupti!
          Non ratione, numquam possimus rem velit neque hic, obcaecati, ullam eum harum temporibus delectus atque dolore molestias.</p>

      </div>

      <Menu />
      
      

    </div>
  )
}

export default Single