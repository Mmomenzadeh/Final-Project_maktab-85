import { Logo } from 'Components'
import React from 'react'
import { BiMenu } from 'react-icons/bi'
import {RiQuestionAnswerLine} from "react-icons/ri"

export const Header = () => {
  return (
    <header className='header'>
        <div className="snackbar"><img src="" alt="" /></div>
        <div className="">
            <BiMenu/>
            <Logo/>
            <RiQuestionAnswerLine/>
            <div className="header__searchBox"></div>
        </div>
    </header>
  )
}
