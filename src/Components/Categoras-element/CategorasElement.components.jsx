import { Categories } from 'DATA/Categories'
import React from 'react'

export const CategorasElement = () => {
  return (
    <div className='CategorasElement-container'>

        {
            Categories.map(item => {
                return(
                    <div className="">
                        <img src="" alt="" />
                        <p></p>
                    </div>
                )
            })
        }
    </div>
  )
}
