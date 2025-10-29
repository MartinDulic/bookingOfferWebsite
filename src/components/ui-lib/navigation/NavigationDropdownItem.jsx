"use client";
import React from 'react';
import NavigationLink from './NavigationLink';
import DropdownMenu from '../common/DropdownMenu';

const DropdownNavigationItem = ({navigationObject}) => {

  if(!navigationObject.children && navigationObject.to) {
    return (
      <NavigationLink href={navigationObject.url} text={navigationObject.to}/>
    );
  }

  const links = navigationObject.children.map(link => (
    <NavigationLink 
      key={link.to} 
      href={link.url} 
      text={link.to}
      className="pl-8" // Add indentation for subitems
    />
  ));
  
  // Dropdown case
  return (
    <DropdownMenu text={navigationObject.to}>
      {links}
    </DropdownMenu>
  );
};
export default DropdownNavigationItem;