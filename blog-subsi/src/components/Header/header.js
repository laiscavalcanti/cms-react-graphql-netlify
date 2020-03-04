/**import { Link } from "gatsby"  <Link>{siteTitle}
</Link>*/
import React from "react"
import ImageHeader from "../ImageHeader"
import SideBar from "../SideBar"
//import * as S from './styled'

const Header = () => (
  <>
  <header>
    <div>
      <h1><ImageHeader /></h1>
    </div>
  </header>
  <SideBar />
  </>
)



export default Header
