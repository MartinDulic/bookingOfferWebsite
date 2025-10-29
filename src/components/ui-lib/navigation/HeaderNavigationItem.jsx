import React from 'react'
import NavigationLink from './NavigationLink'

const HeaderNavigationItem = ({navigationObject}) => {

  if(!navigationObject.children && navigationObject.to) {
    return (
      <NavigationLink href={navigationObject.url} text={navigationObject.to}/>
    );
  }
  /*TODO: add logic for subcategorie showing */

}

export default HeaderNavigationItem