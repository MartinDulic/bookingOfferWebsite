"use client";
import React from 'react';
import NavigationLink from './NavigationLink';
import DropdownMenu from '../common/DropdownMenu';

const DropdownNavigationItem = ({navigationObject}) => {

  if(!navigationObject.children && navigationObject.to) {
    return (
      <NavigationLink href={navigationObject.url} text={navigationObject.to} className={"min-h-12 pl-4 bg-neutral-900 text-neutral-200"}/>
    );
  }

  const links = navigationObject.children.map(link => {
    return (
      <div key={link.to} className='flex gap-2 items-center '>
        <div className='text-xl bg-neutral-700 rounded-xs p-2 ml-2 text-neutral-200'>
          {link.icon}
        </div>
        <NavigationLink 
          href={link.url} 
          text={link.to}
          className="min-h-12 text-neutral-200" // Add indentation for subitems
        />
      </div>
    )
  });
  
  // Dropdown case
  return (
    <DropdownMenu text={navigationObject.to}>
      {links}
    </DropdownMenu>
  );
};
export default DropdownNavigationItem;